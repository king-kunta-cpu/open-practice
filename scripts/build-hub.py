#!/usr/bin/env python3
"""Build the Open Practice hub: free tools, API keys, academy, learn, directory, prompts, glossary, community.
Then unify header/footer on every page and write sitemap.xml, robots.txt and llms.txt. No network."""
import json, re, sys
from pathlib import Path
HERE = Path(__file__).resolve().parent
sys.path[:0] = [str(HERE / 'hub'), str(HERE.parent / 'content/hub')]
import layout
from layout import P, BASE, header, FOOTER, URLS, UPDATED, e
import pages_tools, pages_keys
from tools_write import WRITE
from tools_build import BUILD, DEV, SPECIAL

courses = {c['id']: c for c in json.loads((P / 'courses.json').read_text())}
TOOLS = BUILD + WRITE + DEV
assert len(TOOLS) + len(SPECIAL) == 39, len(TOOLS) + len(SPECIAL)
slugs = [t['slug'] for t in TOOLS + SPECIAL]
assert len(slugs) == len(set(slugs)), 'duplicate tool slug'
BY_SLUG = {t['slug']: t for t in TOOLS + SPECIAL}

# ---- sections ------------------------------------------------------------
pages_tools.index_page(TOOLS, SPECIAL)
for t in TOOLS:
    pages_tools.tool_page(t, all_by_slug=BY_SLUG, courses=courses)
pages_keys.build()

import importlib
for name in ['pages_academy', 'pages_learn', 'pages_directory', 'pages_prompts', 'pages_misc']:
    try:
        mod = importlib.import_module(name)
    except ModuleNotFoundError as err:
        if err.name == name:
            continue
        raise
    mod.build(courses=courses, tools=BY_SLUG)

# ---- unify chrome on every other page --------------------------------------
ACTIVE = {'curriculum.html': 'Academy', 'activities.html': 'Academy', 'library.html': 'Academy', 'dashboard.html': 'Academy', 'tools.html': 'Tools', 'news.html': 'News'}
generated = {str(p) for p in P.rglob('index.html')}
existing = []
for path in sorted(P.rglob('*.html')):
    rel = path.relative_to(P).as_posix()
    if rel.startswith('resources/') or str(path) in generated and '/' in rel:
        continue
    text = path.read_text()
    if '<header' not in text:
        continue
    active = ACTIVE.get(rel, 'Academy' if rel.startswith(('builds/', 'activities/')) else '')
    text = re.sub(r'<header[^>]*>.*?</header>', lambda m: header(active), text, count=1, flags=re.S)
    text = re.sub(r'<footer[^>]*>.*?</footer>', lambda m: FOOTER, text, count=1, flags=re.S)
    if '/hub.css' not in text:
        text = text.replace('<link rel="stylesheet" href="/style.css">', '<link rel="stylesheet" href="/style.css"><link rel="stylesheet" href="/hub.css">', 1)
    if '/nav.js' not in text:
        text = text.replace('</body>', '<script type="module" src="/nav.js"></script></body>', 1)
    path.write_text(text)
    if 'name="robots" content="noindex' not in text and rel != 'operator-metrics.html':
        existing.append(rel)

# ---- sitemap, robots, llms.txt -------------------------------------------
def prio(rel):
    if rel == 'index.html':
        return 1.0
    if rel.startswith('builds/'):
        return 0.8
    if rel.startswith('activities/'):
        return 0.6
    return 0.5
entries = {}
for rel in existing:
    url = '/' if rel == 'index.html' else '/' + rel
    entries[url] = prio(rel)
for url, pr in URLS:
    entries[url] = pr
assert len(entries) == len(set(entries))
xml = ['<?xml version="1.0" encoding="UTF-8"?>', '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">']
for url, pr in sorted(entries.items(), key=lambda kv: (-kv[1], kv[0])):
    xml.append(f'<url><loc>{BASE}{url}</loc><lastmod>{UPDATED}</lastmod><priority>{pr:.1f}</priority></url>')
xml.append('</urlset>')
(P / 'sitemap.xml').write_text('\n'.join(xml) + '\n')
(P / 'robots.txt').write_text('User-agent: *\nAllow: /\nDisallow: /operator-metrics.html\nDisallow: /api/\nDisallow: /settings/\n\nSitemap: ' + BASE + '/sitemap.xml\n')
sections = [('Free tools (learn by doing)', '/free-tools/'), ('Free AI API keys and guides', '/api-keys/'), ('Academy courses', '/academy/'), ('Learn: beginners, seniors, kids', '/learn/'), ('AI glossary', '/glossary/'), ('Prompt library', '/prompts/'), ('AI tools directory', '/ai-tools/'), ('LLM guide', '/llms/'), ('Comparisons', '/compare/'), ('Tutorials', '/tutorials/'), ('Use cases', '/use-cases/'), ('Tool finder quiz', '/tool-finder/'), ('News', '/news.html'), ('Community', '/community/')]
llms = ['# Open Practice', '', '> Free, independent, practical AI learning. Every lesson and tool is learn-by-doing: brief → make → check → improve → ship. No signup needed; learners can bring their own free AI key or use guided templates without AI. Original lessons are CC BY 4.0; code is MIT.', '',
        '## Sections', *[f'- [{n}]({BASE}{u})' for n, u in sections if u.rstrip('/').split('/')[-1] and (u == '/news.html' or (P / u.strip('/') / 'index.html').exists())], '',
        '## Free tools', *[f'- [{t["name"]}]({BASE}/free-tools/{t["slug"]}/): {t["desc"]}' for t in TOOLS], '',
        '## Courses', *[f'- [{c["title"]}]({BASE}/builds/{c["id"]}.html): {c["project"]}' for c in courses.values()], '',
        '## Facts', '- Not accredited; self-review is not assessment.', '- Keys entered in tools stay in the learner\'s browser and go straight to the chosen provider.', f'- Content last updated {UPDATED}.', '']
(P / 'llms.txt').write_text('\n'.join(llms))
print(f'hub: {len(URLS)} generated pages, sitemap {len(entries)} URLs')
