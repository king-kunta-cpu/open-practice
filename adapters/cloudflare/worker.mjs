import staticAssets from './static.mjs';
import {createAPI} from '../../packages/core/api.mjs';
export default {async fetch(request,env){
 env={...env,ASSETS:env.ASSETS||staticAssets};
 if(!new URL(request.url).pathname.startsWith('/api/'))return env.ASSETS.fetch(request);
 const api=createAPI({loadCourses:async req=>(await env.ASSETS.fetch(new Request(new URL('/courses.json',req.url)))).json(),limit:env.TUTOR_LIMITER?async req=>(await env.TUTOR_LIMITER.limit({key:req.headers.get('CF-Connecting-IP')||'unknown'})).success:null});
 return api(request,env);
}};
