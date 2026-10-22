// Educational server/hosted-runtime example. No key is embedded and no request runs on import.
// Check current account/country eligibility first. Do not accept an endpoint from untrusted input.
const approved=new Set(['api.groq.com','api.cloudflare.com']);
export async function requestDraft({endpoint,headers={},body,fetcher=fetch,timeoutMs=8000}){
 const url=new URL(endpoint);
 if(url.protocol!=='https:'||!approved.has(url.hostname)||url.username||url.password||url.search)throw Error('Use an approved configured HTTPS endpoint without URL credentials.');
 if(!Number.isInteger(timeoutMs)||timeoutMs<1||timeoutMs>15000)throw Error('Bounded timeout required.');
 if(typeof body!=='object'||body===null)throw Error('JSON request body required.');
 const payload=JSON.stringify(body);if(payload.length>12000)throw Error('Request too large.');
 let response;try{response=await fetcher(url,{method:'POST',headers:{'Content-Type':'application/json',...headers},body:payload,signal:AbortSignal.timeout(timeoutMs),redirect:'error'})}catch{return {state:'unavailable'}}
 if(response.status===429)return {state:'quota_wait'};
 if(response.status===401||response.status===403)return {state:'stop_auth'};
 if(!response.ok)return {state:'unavailable'};
 const reader=response.body?.getReader();if(!reader)return {state:'schema_error'};
 const chunks=[];let size=0;
 for(;;){const {done,value}=await reader.read();if(done)break;size+=value.length;if(size>64000){await reader.cancel();return {state:'too_large'}}chunks.push(value)}
 const bytes=new Uint8Array(size);let offset=0;for(const part of chunks){bytes.set(part,offset);offset+=part.length}
 let parsed;try{parsed=JSON.parse(new TextDecoder().decode(bytes))}catch{return {state:'schema_error'}}
 const text=parsed?.choices?.[0]?.message?.content??parsed?.result?.response;
 return typeof text==='string'&&text.length>0?{state:'draft',text}:{state:'schema_error'};
}
