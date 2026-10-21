import http from 'node:http';
import {readFile} from 'node:fs/promises';
import {resolve,extname} from 'node:path';
import {fileURLToPath} from 'node:url';
import {accountAPI} from '../../packages/accounts/api.mjs';
import {practiceAPI} from '../../packages/ai/practice.mjs';
import {createAPI} from '../../packages/core/api.mjs';
const root=fileURLToPath(new URL('../../apps/web/public/',import.meta.url));
let DB=null;try{DB=(await import('./database.mjs')).openDatabase()}catch{console.warn('Account storage unavailable: use Node 22.13+ for native SQLite.')}
const counts=new Map();
const limit=async req=>{const ip=req.headers.get('x-internal-client-ip')||'unknown';const now=Date.now();if(counts.size>10000)for(const [key,v] of counts)if(now>=v.until)counts.delete(key);const v=counts.get(ip);if(!v||now>=v.until){counts.set(ip,{count:1,until:now+60000});return true}return ++v.count<=5};
const authCounts=new Map();
function limiter(bucket,max){return {async limit({key}){const now=Date.now();const old=bucket.get(key);if(!old||old.until<now){bucket.set(key,{count:1,until:now+60000});return {success:true}}return {success:++old.count<=max}}}}
const env={...process.env,DB,AUTH_LIMITER:limiter(authCounts,8),LEARNING_LIMITER:limiter(new Map(),90),TUTOR_LIMITER:limiter(new Map(),5)};
if(DB){const timer=setInterval(()=>DB.batch([DB.prepare('DELETE FROM sessions WHERE expires_at < ?').bind(Date.now()),DB.prepare('DELETE FROM learning_events WHERE created_at < ?').bind(Date.now()-90*86400000)]).catch(()=>{}),86400000);timer.unref()}
const api=createAPI({loadCourses:async()=>JSON.parse(await readFile(resolve(root,'courses.json'),'utf8')),limit});
http.createServer(async(req,res)=>{try{
 // Configure PUBLIC_ORIGIN behind a reverse proxy; never trust forwarded IP headers by default.
 const origin=process.env.PUBLIC_ORIGIN||'http://'+req.headers.host;
 const url=new URL(req.url,origin);
 if(url.pathname.startsWith('/api/')){
  const headers=new Headers();for(const [k,v] of Object.entries(req.headers))if(v)headers.set(k,Array.isArray(v)?v.join(','):v);
  headers.set('x-internal-client-ip',req.socket.remoteAddress||'unknown');headers.set('CF-Connecting-IP',req.socket.remoteAddress||'unknown');
  let bytes=0;const parts=[];for await(const part of req){bytes+=part.length;if(bytes>180000){res.writeHead(413);res.end('{"error":"Request too large"}');return}parts.push(part)}
  const request=new Request(url,{method:req.method,headers,...(['POST','PUT','DELETE'].includes(req.method)?{body:Buffer.concat(parts)}:{})});
  let r;try{r=url.pathname.startsWith('/api/account/')||['/api/workspaces','/api/events'].includes(url.pathname)?await accountAPI(request,env):url.pathname==='/api/practice'?await practiceAPI(request,env):await api(request,env)}catch{r=Response.json({error:'Request could not be processed.'},{status:400})}
  res.writeHead(r.status,Object.fromEntries(r.headers));res.end(await r.text());return;
 }
 const path=resolve(root,'.'+decodeURIComponent(url.pathname==='/'?'/index.html':url.pathname));
 if(!path.startsWith(root)){res.writeHead(403);res.end();return}
 const data=await readFile(path);res.setHeader('Content-Type',({'.html':'text/html','.js':'text/javascript','.css':'text/css','.json':'application/json','.svg':'image/svg+xml','.csv':'text/csv','.md':'text/plain','.webp':'image/webp','.png':'image/png','.woff2':'font/woff2','.ttf':'font/ttf','.zip':'application/zip','.mjs':'text/javascript'})[extname(path)]||'text/plain');res.setHeader('X-Content-Type-Options','nosniff');res.end(data);
}catch{res.writeHead(404);res.end('Not found')}}).listen(Number(process.env.PORT)||3001,'0.0.0.0',()=>console.log('Open Practice ready; configured port '+(process.env.PORT||3001)));
