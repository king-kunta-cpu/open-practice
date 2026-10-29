// Marks tools already built on this device and shows the count.
try{const built=JSON.parse(localStorage.getItem('op-built-tools')||'{}');let n=0;for(const card of document.querySelectorAll('[data-tool]')){if(built[card.dataset.tool]){card.classList.add('built');n++}}const c=document.getElementById('built-count');if(c)c.textContent=String(n)}catch{}
