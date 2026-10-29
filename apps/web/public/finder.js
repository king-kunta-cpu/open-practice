// Tool finder quiz: builds a short plan from answers. Config lives in #finder-config (CSP-safe).
const cfg=JSON.parse(document.getElementById('finder-config').textContent),form=document.getElementById('finder'),out=document.getElementById('finder-result');
form.addEventListener('submit',e=>{e.preventDefault();const a=Object.fromEntries(new FormData(form));const pick=k=>cfg.results[k]||[];
 const steps=[['Use today',pick(a.goal)[0]],['Learn next',(a.level==='new'?pick('new'):a.level==='dev'?pick('dev'):pick(a.goal).slice(1,2))[0]||pick(a.goal)[1]],['Then',(a.time==='more'?pick('more'):pick(a.goal).slice(2,3))[0]||pick('more')[0]]];
 if(a.key!=='yes')steps.push(['Optional',pick(a.key)[0]]);
 out.replaceChildren();const h=document.createElement('h2');h.textContent='Your starting plan';out.append(h);const ol=document.createElement('ol');ol.className='key-steps';
 for(const [label,item] of steps){if(!item)continue;const li=document.createElement('li'),b=document.createElement('b'),l=document.createElement('a');b.textContent=label+': ';l.href=item[0];l.textContent=item[1];li.append(b,l);ol.append(li)}
 out.append(ol);const p=document.createElement('p');p.textContent=a.time==='15'?'15 minutes is enough for the first step. Finish it before starting the next.':'Work through the steps in order — each one ends with something real.';out.append(p);out.hidden=false;out.scrollIntoView({behavior:'smooth',block:'start'});try{localStorage.setItem('op-finder',JSON.stringify(a))}catch{}});
