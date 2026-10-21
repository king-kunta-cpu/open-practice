import {database} from './database.mjs';
export {LearnerDatabase} from './database.mjs';
import {accountAPI} from '../../packages/accounts/api.mjs';
import {practiceAPI} from '../../packages/ai/practice.mjs';
import {createAPI} from '../../packages/core/api.mjs';
export default {async scheduled(event,env){const db=database(env);if(db)await db.batch([db.prepare('DELETE FROM sessions WHERE expires_at < ?').bind(Date.now()),db.prepare('DELETE FROM learning_events WHERE created_at < ?').bind(Date.now()-90*86400000)])},async fetch(request,env){
 // Settle the scheme before anything else: a link that answers on http:// is a link a
 // browser will one day call "not secure", and a session cookie or an API key must never
 // travel in clear. The path and query are preserved so a shared deep link still lands.
 {const url=new URL(request.url);
  if(url.protocol==='http:'){url.protocol='https:';return new Response(null,{status:301,headers:{Location:url.toString()}});}}
 env={...env}; // Keep request-scoped database adapters out of the shared binding object.
 env.DB=database(env);
 const path=new URL(request.url).pathname;
 try {
 if(path.startsWith('/api/account/')||path==='/api/workspaces'||path==='/api/events')return await accountAPI(request,env);
 if(path==='/api/practice')return await practiceAPI(request,env);
 }catch{return new Response(JSON.stringify({error:'Request could not be processed.'}),{status:400,headers:{'Content-Type':'application/json','Cache-Control':'no-store'}})}
 if(!new URL(request.url).pathname.startsWith('/api/')){
 if(!env.ASSETS)return new Response('Static assets are not configured.',{status:503,headers:{'Cache-Control':'no-store'}});
 const assetURL=new URL(request.url);if(path==='/')assetURL.pathname='/index.html';
 const response=await env.ASSETS.fetch(new Request(assetURL,request));const output=new Response(response.body,response);output.headers.set('Strict-Transport-Security','max-age=31536000; includeSubDomains');output.headers.set('Referrer-Policy','strict-origin-when-cross-origin');output.headers.set('X-Content-Type-Options','nosniff');output.headers.set('Permissions-Policy','camera=(), microphone=(), geolocation=()');output.headers.set('Cache-Control',/\.(png|webp|jpg|ico|zip|pdf|woff2?)$/i.test(path)?'public,max-age=86400':'no-cache');
 if(path==='/'||(/^\/[^/]+\.html$/.test(path)))output.headers.set('Content-Security-Policy',"default-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline'; img-src 'self' data:; connect-src 'self'; font-src 'self'; object-src 'none'; base-uri 'none'; form-action 'self'; frame-ancestors 'none'");
 return output;
 }
 const api=createAPI({loadCourses:async req=>(await env.ASSETS.fetch(new Request(new URL('/courses.json',req.url)))).json(),limit:env.TUTOR_LIMITER?async req=>(await env.TUTOR_LIMITER.limit({key:req.headers.get('CF-Connecting-IP')||'unknown'})).success:null});
 return api(request,env);
}};
