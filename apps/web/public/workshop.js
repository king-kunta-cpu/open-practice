// Learn-by-doing workshop engine: Brief → Make → Check → Improve → Ship.
// "Make" has two routes: the learner's own AI key (browser → provider) or a guided template (no AI at all).
import {activeRoute,chat} from './byok.js';
import {runChecks,FILLER} from './checks.js';
import {makeZip} from './zip.js';
const $=s=>document.querySelector(s);
const cfgNode=$('#ws-config');
if(cfgNode)init(JSON.parse(cfgNode.textContent)).catch(e=>console.error(e));

async function init(cfg){
 const kind=cfg.kind||'write',storeKey='op-ws-'+cfg.slug,form=$('#ws-brief'),draft=$('#ws-draft'),status=$('#ws-status');
 const builders=kind==='build'?(await import('./builders.js')).builders:null;
 let files={},currentFile='',lastResults=[];
 const say=(msg,tone='')=>{status.textContent=msg;status.dataset.tone=tone};
 const values=()=>{const v={};for(const f of cfg.fields)v[f.id]=String(form.elements[f.id]?.value||'').trim();return v};
 const save=()=>{try{localStorage.setItem(storeKey,JSON.stringify({values:values(),draft:draft?draft.value:'',files,at:Date.now()}))}catch{}};
 const fill=(tpl,v,blank)=>tpl.replace(/\{(\w+)\}/g,(m,k)=>{const f=cfg.fields.find(x=>x.id===k);if(!f)return m;return v[k]||(blank?(f.required?`[[${f.blank||('add '+f.label.toLowerCase())}]]`:''):'(not provided)')});
 const missing=()=>cfg.fields.filter(f=>f.required&&!values()[f.id]);
 // Restore previous work on this device.
 try{const s=JSON.parse(localStorage.getItem(storeKey)||'null');if(s){for(const [k,val] of Object.entries(s.values||{}))if(form.elements[k])form.elements[k].value=val;if(draft&&s.draft)draft.value=s.draft;if(s.files&&typeof s.files==='object')files=s.files}}catch{}
 form.addEventListener('input',save);form.addEventListener('submit',e=>{e.preventDefault();$('#ws-make').scrollIntoView({behavior:'smooth'})});
 draft?.addEventListener('input',save);

 // Key bar reflects whether a learner key exists. No key → template route is the default.
 const keybar=$('#ws-keybar');
 const paintKey=()=>{if(cfg.noAI)return;const r=activeRoute();keybar.innerHTML='';const p=document.createElement('p');
  if(r){p.innerHTML='<b>AI route ready:</b> your own '+r.label+' key (kept in this browser). ';const a=document.createElement('a');a.href='/settings/';a.textContent='Change key';p.append(a)}
  else{p.innerHTML='<b>No AI key yet.</b> Use the guided template below — it teaches the same skill. Want AI drafts too? ';const a=document.createElement('a');a.href='/api-keys/';a.textContent='Get a free key in 5 minutes →';p.append(a)}
  keybar.append(p);const ai=$('#ws-run-ai');if(ai){ai.disabled=!r;ai.title=r?'':'Add a free key in Key settings first'}};
 paintKey();window.addEventListener('op-byok-change',paintKey);window.addEventListener('storage',paintKey);

 const promptBox=$('#ws-prompt');const paintPrompt=()=>{if(promptBox&&cfg.prompt)promptBox.textContent=fill(cfg.prompt,values(),false)};
 form.addEventListener('input',paintPrompt);paintPrompt();
 $('#ws-copy-prompt')?.addEventListener('click',async()=>{try{await navigator.clipboard.writeText(promptBox.textContent);say('Prompt copied. Paste it into any AI chat you already use, then paste the answer into your draft.','ok')}catch{say('Copy blocked by the browser. Select the prompt text and copy it manually.','warn')}});

 const system=(cfg.system||'You are a practical writing coach helping a learner produce a usable first draft.')+' Output only the requested text with no preamble or explanation. Never invent facts, statistics, prices, testimonials, names or links: when information is missing, write a [[placeholder]] in double square brackets describing what the learner must add. Use plain, specific language.';
 let controller=null;
 async function ai(messages,max){controller?.abort();controller=new AbortController();const r=await chat(activeRoute(),messages,{maxTokens:max||cfg.maxTokens||1100,signal:controller.signal});return r}

 if(kind==='build'){
  const viewer=$('#ws-file-view'),tabs=$('#ws-files');
  const paintFiles=()=>{tabs.innerHTML='';for(const name of Object.keys(files)){const b=document.createElement('button');b.type='button';b.textContent=name;b.className=name===currentFile?'selected':'';b.addEventListener('click',()=>{currentFile=name;paintFiles()});tabs.append(b)}viewer.value=files[currentFile]??'';viewer.disabled=!currentFile;$('#ws-download').disabled=!Object.keys(files).length};
  viewer.addEventListener('input',()=>{if(currentFile){files[currentFile]=viewer.value;save()}});
  const generate=()=>{const m=missing();if(m.length){say('Fill in: '+m.map(f=>f.label).join(', ')+'.','warn');form.elements[m[0].id]?.focus();return}
   files=builders[cfg.builder].files(values());currentFile=Object.keys(files)[0];paintFiles();save();say('Project generated from your answers. Open each file, read it, then run the checks.','ok');$('#ws-check').scrollIntoView({behavior:'smooth'})};
  $('#ws-run-template').addEventListener('click',generate);
  if(Object.keys(files).length){currentFile=Object.keys(files)[0];paintFiles()}else paintFiles();
  // Optional: AI drafts the *content* fields only. Code always comes from the reviewed template.
  $('#ws-run-ai')?.addEventListener('click',async()=>{
   const want=cfg.aiFill||[];if(!want.length)return;
   say('Asking your AI provider to draft the content fields…');
   const v=values(),spec=want.map(id=>{const f=cfg.fields.find(x=>x.id===id);return `"${id}": ${f.label}${f.help?' — '+f.help:''}`}).join('\n');
   try{const r=await ai([{role:'system',content:'You draft content for a small software project. Return ONLY a JSON object, no code fences. Never invent facts, prices, people or links; use [[placeholder]] when unsure.'},{role:'user',content:`Project: ${cfg.name}\nKnown answers: ${JSON.stringify(v)}\nDraft these fields (multi-line values use \\n):\n${spec}`}],900);
    const m=r.text.match(/\{[\s\S]*\}/);if(!m)throw new Error('The model did not return JSON. Try again or fill the fields yourself.');
    const data=JSON.parse(m[0]);let n=0;for(const id of want)if(typeof data[id]==='string'&&form.elements[id]){form.elements[id].value=data[id].slice(0,4000);n++}
    save();say(`AI drafted ${n} field(s) with ${r.model}. Read and edit them — then press “Generate my project”.`,'ok');
   }catch(e){say(e.message,'warn')}});
  $('#ws-download').addEventListener('click',()=>{const blob=makeZip(Object.fromEntries(Object.entries(files).map(([k,v])=>[cfg.slug+'/'+k,v])));download(blob,cfg.slug+'.zip');record()});
 }else{
  $('#ws-run-template').addEventListener('click',()=>{const m=missing();if(m.length){say('Fill in: '+m.map(f=>f.label).join(', ')+'.','warn');form.elements[m[0].id]?.focus();return}
   if(draft.value.trim()&&!confirm('Replace your current draft with a fresh guided template?'))return;
   draft.value=fill(cfg.template,values(),true);save();say('Template ready. Replace every [[blank]] with your own words, then run the checks.','ok');draft.focus()});
  $('#ws-run-ai')?.addEventListener('click',async()=>{const m=missing();if(m.length){say('Fill in: '+m.map(f=>f.label).join(', ')+'.','warn');return}
   if(draft.value.trim()&&!confirm('Replace your current draft with a new AI draft?'))return;
   say('Drafting with your own AI key…');$('#ws-run-ai').disabled=true;
   try{const r=await ai([{role:'system',content:system},{role:'user',content:fill(cfg.prompt,values(),false)}]);draft.value=r.text;save();say(`Draft made by ${r.model} via your key. Now check it — AI drafts often fail at least one rule.`,'ok')}
   catch(e){say(e.message,'warn')}finally{paintKey()}});
 }

 // Check
 const resultsList=$('#ws-results'),fixList=$('#ws-fixes');
 function check(){
  let results;
  if(kind==='build'){if(!Object.keys(files).length){say('Generate your project first.','warn');return []}results=builders[cfg.builder].checks(files,values())}
  else{if(!draft.value.trim()){say('Write or generate a draft first.','warn');return []}results=runChecks([...(cfg.checks||[]),...(cfg.noFiller===false?[]:[{t:'not',re:FILLER,label:'No generic AI filler phrases'}])],draft.value,values())}
  lastResults=results;resultsList.innerHTML='';fixList.innerHTML='';
  for(const r of results){const li=document.createElement('li');li.className=r.pass?'pass':'fail';li.textContent=(r.pass?'✓ ':'✗ ')+r.label+(r.detail?' — '+r.detail:'');resultsList.append(li);
   if(!r.pass){const f=document.createElement('li');f.textContent=r.fix||r.label;fixList.append(f)}}
  const passed=results.filter(r=>r.pass).length;$('#ws-score').textContent=`${passed} of ${results.length} automatic checks passed`;
  if(!fixList.children.length){const f=document.createElement('li');f.textContent='All automatic checks pass. Now use the self-check list: read it aloud as the person who will receive it.';fixList.append(f)}
  $('#ws-revise')&&($('#ws-revise').disabled=!activeRoute()||passed===results.length);
  return results;
 }
 $('#ws-run-check').addEventListener('click',()=>{check();$('#ws-results').scrollIntoView({behavior:'smooth',block:'center'})});
 $('#ws-revise')?.addEventListener('click',async()=>{const failing=lastResults.filter(r=>!r.pass);if(!failing.length)return;say('Asking your AI to fix only the failing items…');
  try{const r=await ai([{role:'system',content:system},{role:'user',content:'Revise the draft below. Fix ONLY these problems and keep everything else unchanged:\n- '+failing.map(f=>f.fix||f.label).join('\n- ')+'\n\nOriginal brief:\n'+fill(cfg.prompt,values(),false)+'\n\nDRAFT:\n'+draft.value}]);draft.value=r.text;save();check();say('Revised. Compare it with your previous version — did the fix change anything you liked?','ok')}catch(e){say(e.message,'warn')}});

 // Ship
 function record(){try{const all=JSON.parse(localStorage.getItem('op-built-tools')||'{}');const passed=lastResults.filter(r=>r.pass).length;all[cfg.slug]={at:Date.now(),score:lastResults.length?passed+'/'+lastResults.length:''};localStorage.setItem('op-built-tools',JSON.stringify(all));$('#ws-shipped').hidden=false}catch{}}
 const download=(blob,name)=>{const a=document.createElement('a'),url=URL.createObjectURL(blob);a.href=url;a.download=name;document.body.append(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),1000)};
 $('#ws-copy')?.addEventListener('click',async()=>{if(!lastResults.length)check();try{await navigator.clipboard.writeText(draft.value);record();say('Copied. Paste it where it will be used.','ok')}catch{say('Copy blocked. Select the text and copy it manually.','warn')}});
 $('#ws-save')?.addEventListener('click',()=>{if(!lastResults.length)check();download(new Blob([draft.value],{type:'text/plain'}),cfg.slug+'.'+(cfg.ext||'txt'));record()});
}
