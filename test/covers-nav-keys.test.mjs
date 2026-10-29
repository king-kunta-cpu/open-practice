import {test} from 'node:test';import assert from 'node:assert/strict';import {readFile,readdir} from 'node:fs/promises';import {createHash} from 'node:crypto';
const pub=new URL('../apps/web/public/',import.meta.url);const read=p=>readFile(new URL(p,pub),'utf8');
const art=async dir=>{const out={};try{for(const f of await readdir(new URL(dir,new URL('../',import.meta.url))))out[f]=createHash('sha256').update(await readFile(new URL(dir+f,new URL('../',import.meta.url)))).digest('hex')}catch{}return out};
test('0.11.1 covers: no two tools, library items or courses share artwork, and every tool cover shown on a page is its own',async()=>{
  const all={...await art('branding/tool-art/'),...await art('branding/library-art/')};const seen=new Map();
  for(const [f,h] of Object.entries(all)){assert.ok(!seen.has(h),`${f} duplicates ${seen.get(h)}`);seen.set(h,f)}
  const idx=await read('free-tools/index.html');const used=[...idx.matchAll(/data-tool="([^"]+)"[^>]*><img class="hub-card-cover" src="\/brand\/tools\/([^".?]+)\.svg/g)];
  for(const [,slug,file] of used)assert.equal(file,slug,'a card shows only its own tool cover');
  assert.equal(new Set(used.map(m=>m[2])).size,used.length);
  for(const [,slug] of used){const page=await read(`free-tools/${slug}/index.html`).catch(()=>null);if(page)assert.match(page,new RegExp(`class="tool-cover" src="/brand/tools/${slug}\\.svg`))}
  const lib=JSON.parse(await readFile(new URL('../curriculum/library-base.json',import.meta.url),'utf8'));const own=lib.map(i=>i.image.split('?')[0]).filter(s=>s.startsWith('/brand/library/'));
  assert.equal(new Set(own).size,own.length,'library items never share a cover');
});
test('0.11.1 nav: one Tools menu (free tools first), no separate Free Tools entry',async()=>{
  for(const name of ['index.html','free-tools/index.html','api-keys/index.html','tools.html']){const h=await read(name);const nav=h.match(/<nav id="main-nav"[\s\S]*?<\/nav>/)[0];
    assert.doesNotMatch(nav,/>Free Tools</);assert.equal((nav.match(/class="nav-top" href="\/free-tools\/"/g)||[]).length,1);assert.match(nav,/<a href="\/free-tools\/"><b>39 free tools<\/b>/);assert.match(nav,/<a href="\/tools.html"/)}
  assert.match(await read('free-tools/index.html'),/class="nav-top" href="\/free-tools\/" aria-current="page">Tools</);
});
test('0.11.1 API keys: every provider row has a real Sign up button that opens safely in a new tab',async()=>{
  const h=await read('api-keys/index.html');const rows=h.match(/<tr data-cat=/g).length;const btns=[...h.matchAll(/<a class="key-signup" href="https:\/\/[^"]+" rel="noopener nofollow" target="_blank" aria-label="Sign up for [^"]+ \(opens in a new tab\)">Sign up ↗<\/a>/g)];
  assert.equal(btns.length,rows);assert.match(await read('api-keys/groq/index.html'),/class="key-signup"[^>]*>Sign up ↗</);assert.match(await read('hub.css'),/\.key-signup\{display:inline-flex/);
});
test('0.11.6 covers: every library item and every info page with its own art shows it, and none share',async()=>{
  const {existsSync}=await import('node:fs');
  const lib=JSON.parse(await readFile(new URL('../curriculum/library-base.json',import.meta.url),'utf8'));
  const libHtml=await read('library.html');
  for(const it of lib)if(existsSync(new URL(`../branding/library-art/${it.id}.webp`,import.meta.url))){
    assert.ok(it.image.startsWith(`/brand/library/${it.id}.svg`),`${it.id} points at its own cover`);
    assert.ok(libHtml.includes(`/brand/library/${it.id}.svg`),`${it.id} cover shown in the library`)}
  const pages=JSON.parse(await readFile(new URL('../curriculum/site-pages.json',import.meta.url),'utf8'));
  for(const pg of pages)if(existsSync(new URL(`../apps/web/public/brand/pages/${pg.slug}.webp`,import.meta.url)))
    assert.match(await read(`${pg.slug}.html`),new RegExp(`class="info-hero">[\\s\\S]*?<img src="/brand/pages/${pg.slug}\\.webp`),`${pg.slug} shows its own art`);
});
