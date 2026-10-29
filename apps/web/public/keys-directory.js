// API directory: filters and a private "keys I have" tracker stored on this device only.
const STORE='op-api-tracker';let mine={};try{mine=JSON.parse(localStorage.getItem(STORE)||'{}')}catch{}
const rows=[...document.querySelectorAll('.key-table tbody tr')],count=document.getElementById('key-count');let filter='all';
function paint(){let shown=0;for(const r of rows){const box=r.querySelector('input[data-api]'),have=!!mine[box.dataset.api];box.checked=have;const ok=filter==='all'||(filter==='mine'&&have)||(filter.startsWith('cat:')&&r.dataset.cat===filter.slice(4))||(filter.startsWith('kind:')&&r.dataset.kind===filter.slice(5));r.hidden=!ok;if(ok)shown++}count.textContent=`Showing ${shown} of ${rows.length} · You have ${Object.keys(mine).length}`}
for(const b of document.querySelectorAll('.key-filters button'))b.addEventListener('click',()=>{filter=b.dataset.filter;document.querySelectorAll('.key-filters button').forEach(x=>x.classList.toggle('selected',x===b));paint()});
for(const box of document.querySelectorAll('input[data-api]'))box.addEventListener('change',()=>{if(box.checked)mine[box.dataset.api]=1;else delete mine[box.dataset.api];try{localStorage.setItem(STORE,JSON.stringify(mine))}catch{}paint()});
paint();
