// Bring-your-own-key client. Requests go from this browser straight to the provider.
// Keys are never sent to Open Practice. Default storage is this tab only (sessionStorage).
const STORE='op-byok-v1';
export const PROVIDERS={
 groq:{label:'Groq',guide:'/api-keys/groq/',hint:/^gsk_/,chat:'https://api.groq.com/openai/v1/chat/completions',models:'https://api.groq.com/openai/v1/models',prefer:['llama-3.3-70b-versatile','openai/gpt-oss-20b','openai/gpt-oss-120b','llama-3.1-8b-instant'],skip:/whisper|guard|tts|orpheus|playai|compound|prompt-guard|distil/i},
 gemini:{label:'Google Gemini (AI Studio)',guide:'/api-keys/google-gemini/',hint:/^AI/,models:'https://generativelanguage.googleapis.com/v1beta/models?pageSize=200',prefer:['gemini-2.5-flash','gemini-flash-latest','gemini-2.5-flash-lite'],skip:/image|tts|live|embedding|aqa|vision|native-audio|robotics|computer|veo|imagen|pro/i},
 openrouter:{label:'OpenRouter (free models)',guide:'/api-keys/openrouter/',hint:/^sk-or-/,chat:'https://openrouter.ai/api/v1/chat/completions',models:'https://openrouter.ai/api/v1/models',prefer:['openrouter/free'],only:/:free$|^openrouter\/free$/},
 mistral:{label:'Mistral (free Experiment plan)',guide:'/api-keys/mistral/',hint:/./,chat:'https://api.mistral.ai/v1/chat/completions',models:'https://api.mistral.ai/v1/models',prefer:['mistral-small-latest','open-mistral-nemo','ministral-8b-latest'],skip:/embed|moderation|ocr|voxtral|codestral-embed/i},
 cerebras:{label:'Cerebras',guide:'/api-keys/cerebras/',hint:/^csk-/,chat:'https://api.cerebras.ai/v1/chat/completions',models:'https://api.cerebras.ai/v1/models',prefer:['gpt-oss-120b','llama-3.3-70b','llama3.1-8b'],skip:/^$/}
};
function parse(text){try{const v=JSON.parse(text||'{}');return v&&typeof v==='object'&&!Array.isArray(v)?v:{}}catch{return {}}}
function read(){let s={};try{s=parse(sessionStorage.getItem(STORE));if(!Object.keys(s).length)s=parse(localStorage.getItem(STORE))}catch{}return s}
export function loadSettings(){const s=read();const keys={},models={};for(const p of Object.keys(PROVIDERS)){if(typeof s.keys?.[p]==='string'&&s.keys[p])keys[p]=s.keys[p];if(typeof s.models?.[p]==='string'&&s.models[p])models[p]=s.models[p]}return {provider:PROVIDERS[s.provider]?s.provider:'',keys,models,remember:s.remember===true}}
export function saveSettings(s){const data=JSON.stringify({provider:s.provider,keys:s.keys,models:s.models,remember:!!s.remember});try{if(s.remember){localStorage.setItem(STORE,data);sessionStorage.removeItem(STORE)}else{sessionStorage.setItem(STORE,data);localStorage.removeItem(STORE)}}catch{throw new Error('This browser blocked storage. Your key cannot be kept; use the guided template instead.')}window.dispatchEvent(new Event('op-byok-change'))}
export function clearSettings(){try{localStorage.removeItem(STORE);sessionStorage.removeItem(STORE)}catch{}window.dispatchEvent(new Event('op-byok-change'))}
export function activeRoute(){const s=loadSettings();const p=s.provider&&s.keys[s.provider]?s.provider:Object.keys(s.keys)[0];return p?{provider:p,key:s.keys[p],model:s.models[p]||'',label:PROVIDERS[p].label}:null}
function friendly(status,provider){
 const name=PROVIDERS[provider]?.label||provider;
 if(status===401||status===403)return `${name} rejected the key (HTTP ${status}). Check you copied the whole key, that it is not revoked, and that the service is available in your country. Guide: ${PROVIDERS[provider]?.guide||'/api-keys/'}`;
 if(status===429)return `${name} says you hit a rate or daily limit (HTTP 429). Wait a minute, try a smaller request, or switch provider in Key settings. Your work is saved.`;
 if(status===404)return `${name} could not find that model (HTTP 404). Open Key settings and press “Test key” to pick an available model.`;
 if(status===402)return `${name} needs credit for this model (HTTP 402). Choose a free model in Key settings.`;
 return `${name} returned an error (HTTP ${status}). Try again, or use the guided template.`;
}
async function getJSON(url,headers,signal){const r=await fetch(url,{headers,signal,referrerPolicy:'no-referrer'});if(!r.ok)throw Object.assign(new Error('models'),{status:r.status});return r.json()}
function headersFor(provider,key){if(provider==='gemini')return {'x-goog-api-key':key};const h={Authorization:'Bearer '+key};if(provider==='openrouter'){h['HTTP-Referer']=location.origin;h['X-Title']='Open Practice'}return h}
export async function listModels(provider,key,signal){
 const p=PROVIDERS[provider];if(!p)throw new Error('Unknown provider');
 let data;try{data=await getJSON(p.models,headersFor(provider,key),signal)}catch(e){if(e.status)throw new Error(friendly(e.status,provider));throw new Error('Could not reach '+p.label+'. Check your connection; some networks block AI services.')}
 let ids=provider==='gemini'?(data.models||[]).filter(m=>(m.supportedGenerationMethods||[]).includes('generateContent')).map(m=>String(m.name).replace(/^models\//,'')):(data.data||[]).map(m=>String(m.id));
 if(p.only)ids=ids.filter(id=>p.only.test(id));if(p.skip)ids=ids.filter(id=>!p.skip.test(id));
 if(provider==='openrouter'&&!ids.includes('openrouter/free'))ids.unshift('openrouter/free');
 return [...new Set(ids)].sort((a,b)=>rank(p,a)-rank(p,b)||b.localeCompare(a,undefined,{numeric:true}));
}
function rank(p,id){const i=p.prefer.indexOf(id);return i>=0?i:/preview|exp|latest|lite/i.test(id)?120:99}
async function resolveModel(route,signal){if(route.model)return route.model;const ids=await listModels(route.provider,route.key,signal);if(!ids.length)throw new Error('No usable free text model was found for this key. Open Key settings.');const s=loadSettings();s.models[route.provider]=ids[0];try{saveSettings(s)}catch{}return ids[0]}
export async function chat(route,messages,{maxTokens=1100,temperature=0.7,signal}={}){
 if(!route?.key)throw new Error('No key saved. Add one in Key settings, or use the guided template.');
 const model=await resolveModel(route,signal),provider=route.provider;let r;
 try{
  if(provider==='gemini'){
   const system=messages.filter(m=>m.role==='system').map(m=>m.content).join('\n\n');
   const contents=messages.filter(m=>m.role!=='system').map(m=>({role:m.role==='assistant'?'model':'user',parts:[{text:m.content}]}));
   r=await fetch('https://generativelanguage.googleapis.com/v1beta/models/'+encodeURIComponent(model)+':generateContent',{method:'POST',signal,referrerPolicy:'no-referrer',headers:{...headersFor(provider,route.key),'Content-Type':'application/json'},body:JSON.stringify({systemInstruction:system?{parts:[{text:system}]}:undefined,contents,generationConfig:{maxOutputTokens:maxTokens,temperature}})});
  }else{
   r=await fetch(PROVIDERS[provider].chat,{method:'POST',signal,referrerPolicy:'no-referrer',headers:{...headersFor(provider,route.key),'Content-Type':'application/json'},body:JSON.stringify({model,messages,max_tokens:maxTokens,temperature,stream:false})});
  }
 }catch(e){if(e.name==='AbortError')throw new Error('Stopped.');throw new Error('Could not reach '+PROVIDERS[provider].label+'. Check your connection, or use the guided template.')}
 if(!r.ok)throw new Error(friendly(r.status,provider));
 const data=await r.json();
 const text=provider==='gemini'?(data.candidates?.[0]?.content?.parts||[]).map(x=>x.text||'').join(''):data.choices?.[0]?.message?.content;
 if(typeof text!=='string'||!text.trim())throw new Error('The model returned an empty answer. Try again or pick another model in Key settings.');
 return {text:text.replace(/<think>[\s\S]*?<\/think>/g,'').trim(),model,provider};
}
