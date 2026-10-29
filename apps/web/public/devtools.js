// Pure-JavaScript developer utilities. Nothing leaves the browser. Each has a practice challenge.
const $=s=>document.querySelector(s);
const node=$('#ws-config');const cfg=node?JSON.parse(node.textContent):{};
const out=(t,tone='')=>{const o=$('#u-out');o.value=t;o.dataset.tone=tone};
const msg=(t,tone='')=>{const s=$('#u-status');s.textContent=t;s.dataset.tone=tone};
const record=()=>{try{const all=JSON.parse(localStorage.getItem('op-built-tools')||'{}');all[cfg.slug]={at:Date.now(),score:'challenge'};localStorage.setItem('op-built-tools',JSON.stringify(all));$('#ws-shipped').hidden=false}catch{}};
const challenge=(test,okText)=>$('#c-check')?.addEventListener('click',()=>{const r=test();const s=$('#c-status');s.textContent=r===true?'✓ '+okText:'✗ '+r;s.dataset.tone=r===true?'ok':'warn';if(r===true)record()});
const bytesToB64=b=>{let s='';for(const x of b)s+=String.fromCharCode(x);return btoa(s)};
export const b64={encode:(t,url)=>{let r=bytesToB64(new TextEncoder().encode(t));return url?r.replace(/\+/g,'-').replace(/\//g,'_').replace(/=+$/,''):r},decode:t=>{let s=t.trim().replace(/-/g,'+').replace(/_/g,'/').replace(/\s+/g,'');while(s.length%4)s+='=';const bin=atob(s);return new TextDecoder('utf-8',{fatal:true}).decode(Uint8Array.from(bin,c=>c.charCodeAt(0)))}};
export function estimateTokens(t){const chars=t.length,w=(t.match(/\S+/g)||[]).length;return {chars,words:w,tokens:Math.ceil(Math.max(chars/4,w*1.3))}}
export function jsonError(text){try{JSON.parse(text);return null}catch(e){const m=String(e.message).match(/position (\d+)/);if(!m)return e.message;const pos=+m[1],before=text.slice(0,pos),line=before.split('\n').length,col=pos-before.lastIndexOf('\n');return `${e.message.replace(/ in JSON at position \d+.*/,'')} at line ${line}, column ${col}`}}
// Small, safe Markdown subset → HTML. Text is escaped before any markup is added.
export function markdown(src){
 const esc=s=>s.replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
 const inline=s=>esc(s).replace(/`([^`]+)`/g,'<code>$1</code>').replace(/\*\*([^*]+)\*\*/g,'<strong>$1</strong>').replace(/\*([^*]+)\*/g,'<em>$1</em>').replace(/\[([^\]]+)\]\((https?:\/\/[^\s)]+|mailto:[^\s)]+|\/[^\s)]*)\)/g,(m,t,u)=>`<a href="${u}">${t}</a>`);
 const lines=src.replace(/\r/g,'').split('\n'),html=[];let list=null,code=null,para=[];
 const flush=()=>{if(para.length){html.push('<p>'+inline(para.join(' '))+'</p>');para=[]}if(list){html.push(`</${list}>`);list=null}};
 for(const line of lines){
  if(code!==null){if(/^```/.test(line)){html.push('<pre><code>'+esc(code.join('\n'))+'</code></pre>');code=null}else code.push(line);continue}
  if(/^```/.test(line)){flush();code=[];continue}
  let m;
  if((m=line.match(/^(#{1,6})\s+(.*)$/))){flush();html.push(`<h${m[1].length}>${inline(m[2])}</h${m[1].length}>`)}
  else if((m=line.match(/^\s*[-*]\s+(.*)$/))){if(para.length){html.push('<p>'+inline(para.join(' '))+'</p>');para=[]}if(list!=='ul'){if(list)html.push(`</${list}>`);html.push('<ul>');list='ul'}html.push('<li>'+inline(m[1])+'</li>')}
  else if((m=line.match(/^\s*\d+[.)]\s+(.*)$/))){if(para.length){html.push('<p>'+inline(para.join(' '))+'</p>');para=[]}if(list!=='ol'){if(list)html.push(`</${list}>`);html.push('<ol>');list='ol'}html.push('<li>'+inline(m[1])+'</li>')}
  else if(/^>\s?/.test(line)){flush();html.push('<blockquote>'+inline(line.replace(/^>\s?/,''))+'</blockquote>')}
  else if(/^(-{3,}|\*{3,})$/.test(line.trim())){flush();html.push('<hr>')}
  else if(!line.trim())flush();
  else{if(list){html.push(`</${list}>`);list=null}para.push(line.trim())}
 }
 if(code!==null)html.push('<pre><code>'+esc(code.join('\n'))+'</code></pre>');flush();return html.join('\n');
}
export function monthlyCost({requests,inTok,outTok,inPrice,outPrice,days}){return requests*days*(inTok*inPrice+outTok*outPrice)/1e6}

const tools={
 json(){const input=$('#u-in');
  $('#u-format').onclick=()=>{const e=jsonError(input.value);if(e){msg('Invalid JSON: '+e,'warn');return}out(JSON.stringify(JSON.parse(input.value),null,2));msg('Valid JSON, formatted with 2-space indents.','ok')};
  $('#u-minify').onclick=()=>{const e=jsonError(input.value);if(e){msg('Invalid JSON: '+e,'warn');return}out(JSON.stringify(JSON.parse(input.value)));msg('Minified: '+JSON.stringify(JSON.parse(input.value)).length+' characters.','ok')};
  challenge(()=>{const t=$('#c-in').value,e=jsonError(t);if(e)return 'Still invalid: '+e;const d=JSON.parse(t);return d&&d.name==='Tendai'&&d.age===29&&Array.isArray(d.skills)&&d.skills.length===2?true:'It parses, but keep the same data: name "Tendai", age 29 (a number), and both skills.'},'Fixed! You found the trailing comma, the single quotes and the unquoted key.')},
 base64(){const input=$('#u-in');
  $('#u-encode').onclick=()=>{out(b64.encode(input.value,$('#u-url').checked));msg('Encoded. Base64 is NOT encryption — anyone can decode it.','ok')};
  $('#u-decode').onclick=()=>{try{out(b64.decode(input.value));msg('Decoded.','ok')}catch{msg('That is not valid Base64 text (or not UTF-8 underneath).','warn')}};
  challenge(()=>$('#c-in').value.trim().toLowerCase().replace(/[.!]$/,'')==='keys belong in secrets, not in code'?true:'Not quite. Decode the challenge string with the tool above, then type the sentence.','Correct — and that is the rule for every project on this site.')},
 markdown(){const input=$('#u-in'),preview=$('#u-preview');
  const render=()=>{const h=markdown(input.value);out(h);preview.innerHTML=h;msg(h.split('\n').length+' HTML lines.','ok')};input.addEventListener('input',render);render();
  challenge(()=>{const h=markdown($('#c-in').value);if(!/<h2>/.test(h))return 'Add a level-2 heading (## Heading).';if((h.match(/<li>/g)||[]).length<3)return 'Add a list with at least 3 items (- item).';if(!/<a href="https:\/\//.test(h))return 'Add a link like [Open Practice](https://open-practice.zlnew.workers.dev).';if(!/<strong>/.test(h))return 'Make one word **bold**.';return true},'Your Markdown produces a heading, a list, a link and bold text.')},
 tokens(){const input=$('#u-in');
  const paint=()=>{const r=estimateTokens(input.value),ctx=+$('#u-context').value||8192;$('#u-stats').textContent=`${r.chars} characters · ${r.words} words · ≈${r.tokens} tokens · ${(100*r.tokens/ctx).toFixed(1)}% of a ${ctx.toLocaleString()}-token window`};input.addEventListener('input',paint);$('#u-context').addEventListener('change',paint);paint();
  challenge(()=>{const t=$('#c-in').value,r=estimateTokens(t);if(r.tokens>60)return `≈${r.tokens} tokens. Cut to 60 or fewer.`;for(const w of ['customer','refund','48'])if(!t.toLowerCase().includes(w))return `Keep the essential detail: “${w}”.`;return true},'Under 60 tokens with every essential detail kept. Shorter prompts are cheaper and often clearer.')},
 cost(){const ids=['requests','inTok','outTok','inPrice','outPrice','days'];
  const read=()=>Object.fromEntries(ids.map(k=>[k,Math.max(0,Number($('#u-'+k).value)||0)]));
  const paint=()=>{const v=read(),m=monthlyCost(v);$('#u-stats').textContent=`≈ $${m.toFixed(2)} per month · $${(m/Math.max(1,v.days)).toFixed(3)} per day · ${(v.requests*v.days).toLocaleString()} requests`};
  for(const k of ids)$('#u-'+k).addEventListener('input',paint);
  $('#u-preset').addEventListener('change',e=>{const [i,o]=e.target.value.split(',');if(i!==undefined){$('#u-inPrice').value=i;$('#u-outPrice').value=o;paint()}});paint();
  challenge(()=>{const a=Number(String($('#c-in').value).replace(/[$,\s]/g,''));const want=monthlyCost({requests:200,inTok:800,outTok:300,inPrice:0.5,outPrice:1.5,days:30});return Math.abs(a-want)<=want*0.05?true:'Not yet. Put the scenario numbers into the calculator above and read the monthly figure.'},'Correct: about $5.10 a month. Output tokens cost more, so short answers save money.')}
};
tools[cfg.util]?.();
