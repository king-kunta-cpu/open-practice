import {database} from './database.mjs';
export {LearnerDatabase} from './database.mjs';
import {accountAPI} from '../../packages/accounts/api.mjs';
import {practiceAPI} from '../../packages/ai/practice.mjs';
import staticAssets from './static.mjs';
import {createAPI} from '../../packages/core/api.mjs';
export default {async scheduled(event,env){const db=database(env);if(db)await db.batch([db.prepare('DELETE FROM sessions WHERE expires_at < ?').bind(Date.now()),db.prepare('DELETE FROM learning_events WHERE created_at < ?').bind(Date.now()-90*86400000)])},async fetch(request,env){
 env={...env,ASSETS:env.ASSETS||staticAssets};
 env.DB=database(env);
 const path=new URL(request.url).pathname;
 try {
 if(path.startsWith('/api/account/')||path==='/api/workspaces'||path==='/api/events')return await accountAPI(request,env);
 if(path==='/api/practice')return await practiceAPI(request,env);
 }catch{return new Response(JSON.stringify({error:'Request could not be processed.'}),{status:400,headers:{'Content-Type':'application/json','Cache-Control':'no-store'}})}
 if(!new URL(request.url).pathname.startsWith('/api/'))return env.ASSETS.fetch(request);
 const api=createAPI({loadCourses:async req=>(await env.ASSETS.fetch(new Request(new URL('/courses.json',req.url)))).json(),limit:env.TUTOR_LIMITER?async req=>(await env.TUTOR_LIMITER.limit({key:req.headers.get('CF-Connecting-IP')||'unknown'})).success:null});
 return api(request,env);
}};
