import {learnerFor,readJSON} from '../accounts/api.mjs';
import {generate} from './router.mjs';
const reply=(body,status=200)=>new Response(JSON.stringify(body),{status,headers:{'Content-Type':'application/json','Cache-Control':'no-store','X-Content-Type-Options':'nosniff'}});
export async function practiceAPI(request,env){
 if(request.method!=='POST')return reply({error:'POST required'},405);
 if(request.headers.get('origin')!==new URL(request.url).origin)return reply({error:'Same-origin requests only'},403);
 if(!env.DB||!await learnerFor(request,env.DB))return reply({error:'Sign in to use your provider connection.'},401);
 if(!env.TUTOR_LIMITER||!(await env.TUTOR_LIMITER.limit({key:'practice:'+(request.headers.get('CF-Connecting-IP')||'unknown')})).success)return reply({error:'Practice limit reached. Try later.'},429);
 const b=await readJSON(request,12000);
 if(typeof b.key!=='string'||b.key.length<10||b.key.length>300||typeof b.prompt!=='string'||!b.prompt.trim()||b.prompt.length>6000||typeof b.model!=='string'||b.model.includes('..')||!/^[a-zA-Z0-9@/_.:-]{1,140}$/.test(b.model))return reply({error:'Provide a key, exact model ID, and a prompt up to 6000 characters.'},400);
 const messages=[{role:'system',content:'You are a practical learning assistant. Do not request secrets. Do not claim accreditation or execute code. Be explicit about uncertainty.'},{role:'user',content:b.prompt}];
 try{
  if(b.provider==='gemini'){
   const model=b.model.replace(/^models\//,'');
   const r=await fetch('https://generativelanguage.googleapis.com/v1beta/models/'+encodeURIComponent(model)+':generateContent',{method:'POST',headers:{'x-goog-api-key':b.key,'Content-Type':'application/json'},body:JSON.stringify({contents:[{parts:[{text:b.prompt}]}],generationConfig:{maxOutputTokens:700}}),signal:AbortSignal.timeout(20000)});
   if(!r.ok)return reply({error:'Google rejected the request. Check model access, key, quota, and billing settings.'},502);
   const data=await r.json();const text=data.candidates?.[0]?.content?.parts?.map(p=>p.text||'').join('');if(!text)throw Error('empty');return reply({text:text.slice(0,16000),provider:'gemini',model:b.model});
  }
  const e={AI_PROVIDER_ORDER:b.provider,APPROVED_MODELS:b.provider+':'+b.model};
  if(b.provider==='groq'){e.GROQ_API_KEY=b.key;e.GROQ_MODEL=b.model}
  else if(b.provider==='cloudflare'){
   if(!/^[a-f0-9]{32}$/.test(b.account||'')||!b.model.startsWith('@cf/'))return reply({error:'Cloudflare requires your 32-character account ID and an @cf/ model ID.'},400);
   e.CLOUDFLARE_AI_TOKEN=b.key;e.CLOUDFLARE_ACCOUNT_ID=b.account;e.CLOUDFLARE_MODEL=b.model;
  }else return reply({error:'Supported learner providers: Google AI Studio, Groq, Cloudflare. GitHub Models is retired.'},400);
  return reply(await generate(e,messages,{timeoutMs:20000,totalMs:20000}));
 }catch{return reply({error:'Provider unavailable. Check your key, model access, and quota. No key was stored.'},502)}
}
