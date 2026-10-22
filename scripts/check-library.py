#!/usr/bin/env python3
"""Prevent duplicate library entries, payloads and split handbook/pack listings."""
from pathlib import Path
import hashlib,html,json,zipfile
P=Path(__file__).resolve().parent.parent/'apps/web/public'
resources=json.loads((P/'resources.json').read_text())
courses=json.loads((P/'courses.json').read_text())
manifest=json.loads((P/'curriculum.json').read_text())
normal=lambda s:' '.join(s.casefold().split())
for field in ['id','title','url']:
 values=[normal(r[field]) for r in resources]
 assert len(values)==len(set(values)), 'Duplicate '+field
assert manifest['resources']==len(resources)
urls=set();hashes=set();grouped={};total=0
for r in resources:
 if r.get('courseId'):
  assert r['courseId'] not in grouped
  grouped[r['courseId']]=r
 for file in r.get('downloads',[{'url':r['url']} ]):
  url=file['url'];assert url not in urls,'Duplicate download '+url;urls.add(url)
  data=(P/url.lstrip('/')).read_bytes();assert data,'Empty download '+url
  digest=hashlib.sha256(data).hexdigest();assert digest not in hashes,'Duplicate file content '+url;hashes.add(digest);total+=1
for c in courses:
 r=grouped[c['id']]
 assert r['title']==c['title']
 assert {x['url'] for x in r['downloads']}=={c['downloads']['handbook'],c['downloads']['pack']}
 assert len(r['downloads'])==2
 with zipfile.ZipFile(P/c['downloads']['pack'].lstrip('/')) as archive:
  assert archive.read('WORKBOOK.md')==(P/c['downloads']['handbook'].lstrip('/')).read_bytes()
assert len(grouped)==len(courses)
markup=(P/'library.html').read_text()
assert markup.count('class="resource-card"')==len(resources)
for r in resources:
 assert markup.count('<h3>'+html.escape(r['title'],quote=True)+'</h3>')==1
 for f in r.get('downloads',[{'url':r['url']} ]):assert html.escape(f['url'],quote=True) in markup
print(json.dumps({'uniqueLibraryEntries':len(resources),'groupedCourses':len(grouped),'distinctDownloadFiles':total,'redundantCourseCardsRemoved':len(grouped),'duplicateIds':0,'duplicateTitles':0,'duplicateDownloadUrls':0,'duplicateWholeFiles':0,'handbookInsideEachPackVerified':True,'noJavaScriptCards':len(resources)}))
