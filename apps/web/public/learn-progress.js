// "I did this" ticks for Learn lessons. Stored on this device only.
const KEY='op-learn-done';let done={};try{done=JSON.parse(localStorage.getItem(KEY)||'{}')}catch{}
const save=()=>{try{localStorage.setItem(KEY,JSON.stringify(done))}catch{}};
for(const b of document.querySelectorAll('[data-lesson-done]')){const id=b.dataset.lessonDone;const paint=()=>{b.textContent=done[id]?'✓ Done — nice work':'I did this ✓';b.setAttribute('aria-pressed',String(!!done[id]))};paint();b.addEventListener('click',()=>{if(done[id])delete done[id];else done[id]=Date.now();save();paint()})}
for(const c of document.querySelectorAll('[data-lesson]'))if(done[c.dataset.lesson])c.classList.add('built');
const n=document.getElementById('lessons-done');if(n)n.textContent=String(document.querySelectorAll('[data-lesson].built').length);
