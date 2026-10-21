export function configuredProviders(env){
 const order=(env.AI_PROVIDER_ORDER||'groq,cloudflare,pollinations').split(',').map(s=>s.trim());
 const keys={groq:'GROQ_MODEL',cloudflare:'CLOUDFLARE_MODEL',pollinations:'POLLINATIONS_MODEL'};
 const approved=new Set((env.APPROVED_MODELS||'').split(',').map(s=>s.trim()));
 return [...new Set(order)].filter(p=>keys[p]&&env[keys[p]]&&approved.has(`${p}:${env[keys[p]]}`)&&(
  p==='groq'?!!env.GROQ_API_KEY:p==='cloudflare'?!!env.AI||!!(env.CLOUDFLARE_AI_TOKEN&&env.CLOUDFLARE_ACCOUNT_ID):!!env.POLLINATIONS_KEY
 )).map(p=>({provider:p,model:env[keys[p]]}));
}
async function httpJSON(url,key,payload,signal,fetcher){
 const r=await fetcher(url,{method:'POST',headers:{Authorization:`Bearer ${key}`,'Content-Type':'application/json'},body:JSON.stringify(payload),signal});
 if(!r.ok)throw new Error(`upstream_${r.status}`);
 return r.json();
}
export async function generate(env,messages,{fetcher=fetch,timeoutMs=8000,totalMs=24000}={}){
 const routes=configuredProviders(env),started=Date.now();
 for(const route of routes){
  const remaining=totalMs-(Date.now()-started);if(remaining<=0)break;
  const controller=new AbortController();let timer;
  try{
   const work=(async()=>{
    const {provider,model}=route;const payload={model,messages,max_tokens:450,stream:false};let text;
    if(provider==='cloudflare'){
     const data=env.AI?await env.AI.run(model,{messages,max_tokens:450,stream:false}):await httpJSON(`https://api.cloudflare.com/client/v4/accounts/${encodeURIComponent(env.CLOUDFLARE_ACCOUNT_ID)}/ai/run/${model}`,env.CLOUDFLARE_AI_TOKEN,{messages,max_tokens:450,stream:false},controller.signal,fetcher);
     text=data.response||data.result?.response;
    }else{
     const url=provider==='groq'?'https://api.groq.com/openai/v1/chat/completions':'https://gen.pollinations.ai/v1/chat/completions';
     const data=await httpJSON(url,provider==='groq'?env.GROQ_API_KEY:env.POLLINATIONS_KEY,payload,controller.signal,fetcher);
     text=data.choices?.[0]?.message?.content;
    }
    if(typeof text!=='string'||!text.trim())throw new Error('empty_response');
    return {text:text.slice(0,8000),...route};
   })();
   const deadline=new Promise((_,reject)=>{timer=setTimeout(()=>{controller.abort();reject(new Error('timeout'))},Math.min(timeoutMs,remaining))});
   return await Promise.race([work,deadline]);
  }catch{/* Bounded one attempt per configured provider. No prompts or credentials logged. */}
  finally{clearTimeout(timer)}
 }
 throw new Error('All configured tutors are unavailable. Lessons and saved progress remain available.');
}
