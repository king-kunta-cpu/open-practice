import http from 'node:http';
import {readFile} from 'node:fs/promises';
import {resolve,extname} from 'node:path';
import {fileURLToPath} from 'node:url';
import {createAPI} from '../../packages/core/api.mjs';
const root=fileURLToPath(new URL('../../apps/web/public/',import.meta.url));
const counts=new Map();
const limit=async req=>{const ip=req.headers.get('x-internal-client-ip')||'unknown';const now=Date.now();if(counts.size>10000)for(const [key,v] of counts)if(now>=v.until)counts.delete(key);const v=counts.get(ip);if(!v||now>=v.until){counts.set(ip,{count:1,until:now+60000});return true}return ++v.count<=5};
const api=createAPI({loadCourses:async()=>JSON.parse(await readFile(resolve(root,'courses.json'),'utf8')),limit});
http.createServer(async(req,res)=>{try{
 // Configure PUBLIC_ORIGIN behind a reverse proxy; never trust forwarded IP headers by default.
 const origin=process.env.PUBLIC_ORIGIN||'http://'+req.headers.host;
 const url=new URL(req.url,origin);
 if(url.pathname.startsWith('/api/')){
  const headers=new Headers();for(const [k,v] of Object.entries(req.headers))if(v)headers.set(k,Array.isArray(v)?v.join(','):v);
  headers.set('x-internal-client-ip',req.socket.remoteAddress||'unknown');
  let bytes=0;const parts=[];for await(const part of req){bytes+=part.length;if(bytes>6000){res.writeHead(413);res.end('{"error":"Request too large"}');return}parts.push(part)}
  const r=await api(new Request(url,{method:req.method,headers,...(req.method==='POST'?{body:Buffer.concat(parts)}:{})}),process.env);
  res.writeHead(r.status,Object.fromEntries(r.headers));res.end(await r.text());return;
 }
 const path=resolve(root,'.'+decodeURIComponent(url.pathname==='/'?'/index.html':url.pathname));
 if(!path.startsWith(root)){res.writeHead(403);res.end();return}
 const data=await readFile(path);res.setHeader('Content-Type',({'.html':'text/html','.js':'text/javascript','.css':'text/css','.json':'application/json'})[extname(path)]||'text/plain');res.setHeader('X-Content-Type-Options','nosniff');res.end(data);
}catch{res.writeHead(404);res.end('Not found')}}).listen(Number(process.env.PORT)||3001,'0.0.0.0',()=>console.log('Open Practice ready; configured port '+(process.env.PORT||3001)));
