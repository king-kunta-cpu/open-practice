#!/usr/bin/env python3
"""Deploy existing production Worker with native same-Worker static assets.
No credentials on disk or in arguments. Uses Python's standard library.
Set CLOUDFLARE_API_TOKEN and CLOUDFLARE_ACCOUNT_ID; run --check for offline preflight.
This is NOT a fresh-install/migration script. It refuses a changed database selector.
"""
from pathlib import Path
import base64,gzip,hashlib,json,mimetypes,os,re,secrets,sys,urllib.request,urllib.error
ROOT=Path(__file__).resolve().parent.parent
CONFIG=ROOT/'adapters/cloudflare/wrangler.jsonc'
MIME={'html':'text/html; charset=utf-8','css':'text/css; charset=utf-8','js':'text/javascript; charset=utf-8','json':'application/json','md':'text/plain; charset=utf-8','csv':'text/csv; charset=utf-8','svg':'image/svg+xml','webp':'image/webp','png':'image/png','pdf':'application/pdf','zip':'application/zip','woff2':'font/woff2'}

def collect_assets():
 manifest={};files={}
 for path in sorted((ROOT/'apps/web/public').rglob('*')):
  if not path.is_file():continue
  content=path.read_bytes();extension=path.suffix[1:];encoded=base64.b64encode(content)
  digest=hashlib.sha256(encoded+extension.encode()).hexdigest()[:32]
  manifest['/'+path.relative_to(ROOT/'apps/web/public').as_posix()]={'hash':digest,'size':len(content)}
  files[digest]=(encoded,MIME.get(extension,mimetypes.guess_type(path.name)[0] or 'application/octet-stream'))
 return manifest,files

def collect_modules():
 modules={}
 def visit(path):
  key=path.relative_to(ROOT).as_posix()
  if key in modules:return
  body=path.read_bytes();modules[key]=body
  for name in re.findall(r"(?:from\s*|import\s*)['\"]([^'\"]+)['\"]",body.decode()):
   if name.startswith('.'):visit((path.parent/name).resolve())
 visit(ROOT/'adapters/cloudflare/worker.mjs')
 if 'adapters/cloudflare/static.mjs' in modules:raise RuntimeError('Do not bundle the large test-only static fixture into production.')
 return modules

def multipart(parts):
 boundary='openpractice-'+secrets.token_hex(16);chunks=[]
 for name,filename,content_type,body in parts:
  chunks.append(('--'+boundary+'\r\nContent-Disposition: form-data; name="'+name+'"'+('; filename="'+filename+'"' if filename else '')+'\r\nContent-Type: '+content_type+'\r\n\r\n').encode()+body+b'\r\n')
 chunks.append(('--'+boundary+'--\r\n').encode())
 return b''.join(chunks),'multipart/form-data; boundary='+boundary

def request(url,token,method='GET',payload=None,parts=None):
 headers={'Authorization':'Bearer '+token}
 body=None
 if parts is not None:body,headers['Content-Type']=multipart(parts)
 elif payload is not None:body=json.dumps(payload).encode();headers['Content-Type']='application/json'
 req=urllib.request.Request(url,data=body,headers=headers,method=method)
 try:
  with urllib.request.urlopen(req,timeout=180) as response:data=json.load(response)
 except urllib.error.HTTPError as error:
  # Never print response bodies, authorization headers or upload/completion JWTs.
  raise RuntimeError('Cloudflare rejected '+method+' request (HTTP '+str(error.code)+').') from None
 if not data.get('success'):raise RuntimeError('Cloudflare reported an unsuccessful '+method+' request.')
 return data['result']

def main():
 config=json.loads(CONFIG.read_text());manifest,files=collect_assets();modules=collect_modules()
 summary={'assets':len(manifest),'assetBytes':sum(x['size'] for x in manifest.values()),'modules':len(modules),'moduleBytes':sum(len(v) for v in modules.values()),'moduleGzipBytes':len(gzip.compress(b'\n'.join(modules.values())))}
 if summary['moduleGzipBytes']>=3*1024*1024:raise RuntimeError('Worker exceeds the free-plan module size ceiling.')
 if any(x['size']>25*1024*1024 for x in manifest.values()):raise RuntimeError('A static asset exceeds 25 MiB.')
 print(json.dumps(summary))
 if '--check' in sys.argv:return
 token=os.environ.get('CLOUDFLARE_API_TOKEN');account=os.environ.get('CLOUDFLARE_ACCOUNT_ID')
 if not token or not account:raise RuntimeError('Set CLOUDFLARE_API_TOKEN and CLOUDFLARE_ACCOUNT_ID privately in the environment.')
 base='https://api.cloudflare.com/client/v4/accounts/'+account;endpoint=base+'/workers/scripts/'+config['name']
 before=request(endpoint+'/settings',token);bindings_before={b['name']:b for b in before['bindings']}
 if bindings_before.get('DB_OBJECT_ID',{}).get('text')!=config['vars']['DB_OBJECT_ID']:raise RuntimeError('Production database selector does not match; deployment stopped.')
 namespace=bindings_before['LEARNER_DB']['namespace_id'];secret_names={b['name'] for b in before['bindings'] if b['type']=='secret_text'}
 session=request(endpoint+'/assets-upload-session',token,'POST',{'manifest':manifest});upload_token=session['jwt'];completion=upload_token
 buckets=session.get('buckets',[])
 for i,bucket in enumerate(buckets):
  result=request(base+'/workers/assets/upload?base64=true',upload_token,'POST',parts=[(h,h,files[h][1],files[h][0]) for h in bucket])
  if result and result.get('jwt'):completion=result['jwt']
  print('Uploaded asset bucket '+str(i+1)+'/'+str(len(buckets)))
 bindings=[{'name':k,'type':'plain_text','text':v} for k,v in config['vars'].items()]+[{'name':'ASSETS','type':'assets'},{'name':'AI','type':'ai'},{'name':'LEARNER_DB','type':'durable_object_namespace','class_name':'LearnerDatabase'}]+[{**r,'type':'ratelimit'} for r in config['ratelimits']]
 version=json.loads((ROOT/'package.json').read_text())['version']
 metadata={'main_module':'adapters/cloudflare/worker.mjs','compatibility_date':config['compatibility_date'],'bindings':bindings,'keep_bindings':['secret_text'],'assets':{'jwt':completion,'config':{'html_handling':'none','not_found_handling':'none','run_worker_first':True}},'tags':['open-practice','release-'+version]}
 request(endpoint,token,'PUT',parts=[('metadata',None,'application/json',json.dumps(metadata).encode())]+[(name,name,'application/javascript+module',body) for name,body in modules.items()])
 after=request(endpoint+'/settings',token);binding_after={b['name']:b for b in after['bindings']}
 if binding_after['LEARNER_DB']['namespace_id']!=namespace:raise RuntimeError('Post-deploy database namespace check failed.')
 if binding_after['DB_OBJECT_ID']['text']!=config['vars']['DB_OBJECT_ID']:raise RuntimeError('Post-deploy database selector check failed.')
 if not secret_names<={b['name'] for b in after['bindings'] if b['type']=='secret_text'}:raise RuntimeError('Post-deploy secret name check failed.')
 if binding_after.get('ASSETS',{}).get('type')!='assets':raise RuntimeError('Static assets binding missing after deploy.')
 print('Published '+version+' with same-Worker static assets; database namespace, selector and existing secrets preserved.')

if __name__=='__main__':
 try:main()
 except Exception as error:print(str(error),file=sys.stderr);sys.exit(1)
