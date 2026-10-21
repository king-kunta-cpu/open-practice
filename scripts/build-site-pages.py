#!/usr/bin/env python3
"""Render supporting pages, the illustrated library and shared footer links; no network."""
from pathlib import Path
import html,json,re
R=Path(__file__).resolve().parent.parent;P=R/'apps/web/public';BASE='https://open-practice.zlnew.workers.dev';e=lambda s:html.escape(str(s),quote=True)
pages=json.loads((R/'curriculum/site-pages.json').read_text());template=(P/'library.html').read_text();head=template.split('<main>')[0];footer='<footer>'+template.split('<footer>',1)[1].split('</footer>',1)[0]+'</footer>'
for page in pages:
 slug=page['slug'];h=re.sub(r'<title>.*?</title>','<title>'+e(page['label'])+' · Open Practice</title>',head);h=h.replace(' aria-current="page"','');h=h.replace('</head>',f'<meta name="description" content="{e(page["intro"])}"><link rel="canonical" href="{BASE}/{slug}.html"></head>')
 body=f'<article class="reading-page"><section class="info-hero"><div><div class="eyebrow">OPEN PRACTICE / {e(page["label"].upper())}</div><h1>{e(page["title"])}</h1><p>{e(page["intro"])}</p><p class="info-updated">Published 21 October 2026 · current independent pilot</p></div><img src="/brand/covers/{page["cover"]}.svg?v=illustrated-20261021" alt="{e(page["label"])} — original AI-generated editorial illustration" width="410" height="520"></section>'
 for title,text in page['sections']:body+='<section><h2>'+e(title)+'</h2>'+('<div>'+text+'</div>' if '<' in text else '<p>'+e(text)+'</p>')+'</section>'
 body+='</article>'
 (P/f'{slug}.html').write_text(h+'<main>'+body+'</main>'+footer+'<script type="module" src="/learner.js"></script><script type="module" src="/growth.js"></script></body></html>')
# The library is usable without JavaScript; filtering progressively enhances it.
resources=json.loads((P/'resources.json').read_text());cards=''
for item in resources:
 image=item.get('image');assert image,'Every resource must have a cover: '+item['id']
 preview=f'<details class="resource-preview"><summary>Preview the downloadable diagram</summary><img src="{e(item["previewImage"])}" alt="{e(item["title"])} — downloadable diagram" loading="lazy"></details>' if item.get('previewImage') else ''
 cards+=f'<article class="resource-card"><a class="resource-art" href="{e(item["url"])}" download aria-label="Download {e(item["title"])}"><img class="resource-cover" src="{e(image)}" alt="{e(item["title"])} — illustrated resource cover" width="410" height="520" loading="lazy"></a><div class="resource-body"><div class="eyebrow">{e(item["kind"])} · {e(item["format"])}</div><h3>{e(item["title"])}</h3><p>{e(item["description"])}</p>{preview}<p>Licence: {e(item["licence"])}</p><a class="primary" href="{e(item["url"])}" download>Download free ↓</a></div></article>'
p=P/'library.html';s=p.read_text();start=s.index('<div id="hub-items"');end=s.index('</main>',start);s=s[:start]+'<div id="hub-items" class="cards hub-grid">'+cards+'</div>'+s[end:]
if 'id="hub-results"' not in s:s=s.replace('<div id="hub-items"',f'<p id="hub-results" role="status">{len(resources)} illustrated resources</p><div id="hub-items"')
s=s.replace('<section class="hub-hero">','<section class="hub-hero library-intro">',1);p.write_text(s)
# Add policy/help links once to every public page, including rendered activity guides.
links=[('about','About'),('help','Help & FAQ'),('privacy','Privacy policy'),('cookies','Cookies & storage'),('terms','Terms of use'),('licensing','Licensing'),('accessibility','Accessibility'),('contact','Contact')]
nav='<div class="policy-links" role="navigation" aria-label="Policies and help">'+''.join(f'<a href="/{slug}.html">{label}</a>' for slug,label in links)+'</div>'
files=list(P.glob('*.html'))+list((P/'activities').glob('*.html'))+list((P/'demonstrations').glob('*.html'))
for p in files:
 s=p.read_text();s=re.sub(r'<div class="policy-links"[^>]*>.*?</div>','',s,flags=re.S);s=s.replace('</footer>',nav+'</footer>');p.write_text(s)
# Extend the generated sitemap without duplicates.
p=P/'sitemap.xml';s=p.read_text();paths=['/privacy.html']+['/'+page['slug']+'.html' for page in pages]
for path in paths:
 if BASE+path not in s:s=s.replace('</urlset>','<url><loc>'+BASE+path+'</loc></url></urlset>')
p.write_text(s)
print(f'Built {len(pages)} supporting pages, {len(resources)} illustrated library cards, and shared policy/help navigation.')
