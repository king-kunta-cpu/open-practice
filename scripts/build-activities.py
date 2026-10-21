#!/usr/bin/env python3
"""Build the 50-activity studio, original SVG covers/guides and deterministic packs."""
from pathlib import Path
from collections import Counter
import json,html,textwrap,zipfile,io
import importlib.util
_spec=importlib.util.spec_from_file_location("activity_art",Path(__file__).with_name("activity-art.py"));art=importlib.util.module_from_spec(_spec);_spec.loader.exec_module(art)
R=Path(__file__).resolve().parent.parent;P=R/'apps/web/public';groups=json.loads((R/'curriculum/activity-collections.json').read_text());G={g['id']:g for g in groups};activities=[json.loads(p.read_text()) for p in sorted((R/'curriculum/activities').glob('*.json'))]
assert len(activities)==50 and Counter(a['collection'] for a in activities)=={g['id']:5 for g in groups}
for folder in ['activities','brand/activities','resources/activity-handbooks','resources/activity-inputs','resources/activity-packs','resources/activity-collections']:(P/folder).mkdir(parents=True,exist_ok=True)
palette=['#7c1f16','#89612b','#52433c','#943d2d','#62456c','#526443','#7c332d','#675341','#6a4b65','#465e56']
icons=[
 '<path d="M-48-30H32V20H-5L-29 41V20H-48zM-31-12H16M-31 3H3"/><path d="M42-8H60V38H42V50L26 38H7"/>',
 '<path d="M-50-30Q-24-39 0-25Q24-39 50-30V38Q24 29 0 43Q-24 29-50 38ZM0-25V43M-35-12L-14-8M14-8L35-12M-35 6L-14 10M14 10L35 6"/>',
 '<rect x="-47" y="-41" width="94" height="82" rx="5"/><path d="M-47-17H47M-47 8H47M-15-17V41M17-17V41"/><path d="M-32-29H11"/>',
 '<rect x="-51" y="-37" width="102" height="77" rx="8"/><circle cx="23" cy="-16" r="9"/><path d="M-51 25L-20-5L3 17L18 3L51 30"/>',
 '<path d="M-43 34L-23-16L30-39L44-25L17 26Z"/><path d="M-23-16L17 26M-43 34L-18 29M-6 2L30-34"/><circle cx="-36" cy="-27" r="8"/>',
 '<rect x="-52" y="-15" width="29" height="30" rx="6"/><rect x="23" y="-15" width="29" height="30" rx="6"/><circle cx="0" cy="-39" r="12"/><circle cx="0" cy="39" r="12"/><path d="M-23 0H23M0-27V-1M0 1V27"/>',
 '<circle cx="-8" cy="-8" r="31"/><path d="M14 14L48 48M-22-17H9M-22-4H4M-22 9H0"/><path d="M-47-46H-28M-47-46V-27"/>',
 '<rect x="-44" y="-40" width="88" height="80" rx="5"/><path d="M-44-29L0 5L44-29M-44 32L-14 7M44 32L14 7M-17-49H31"/>',
 '<rect x="-26" y="-48" width="52" height="96" rx="8"/><path d="M-13-33H13M-14-12H14M-14 0H5M-14 19H14"/><circle cx="0" cy="36" r="3"/>',
 '<path d="M0-48L43-31V4Q41 31 0 49Q-41 31-43 4V-31ZM-20 0L-5 15L24-17"/>'
]
def txt(x,y,value,size=20,fill='#fff5e5',anchor='start',family='Georgia,serif'):
 return f'<text x="{x}" y="{y}" text-anchor="{anchor}" fill="{fill}" font-size="{size}" font-family="{family}">{html.escape(value)}</text>'
def cover(a):
 if art.artwork(a):return art.cover(a,G[a["collection"]]["title"])
 gi=next(i for i,g in enumerate(groups) if g['id']==a['collection']);color=palette[gi];lines=textwrap.wrap(a['title'],23);out=f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 720" role="img" aria-label="{html.escape(a["title"])}"><rect width="600" height="720" rx="12" fill="{color}"/><path d="M0 0H18V720H0" fill="#000" opacity=".13"/><rect x="24" y="24" width="552" height="672" rx="7" fill="none" stroke="#d9b78f"/><rect x="34" y="34" width="532" height="652" rx="5" fill="none" stroke="#d9b78f" opacity=".25"/>'
 out+=txt(300,78,'OPEN PRACTICE / LEARN BY DOING',13,'#ecd4a8','middle','Arial,sans-serif')+txt(300,120,G[a['collection']]['title'].upper(),12,'#ecd4a8','middle','Arial,sans-serif')
 out+=f'<g transform="translate(300 265) scale(1.25)" fill="none" stroke="#ecd4a8" stroke-width="2.1" stroke-linejoin="round" stroke-linecap="round"><circle r="81" opacity=".32"/>{icons[gi]}</g>'
 for i,line in enumerate(lines):out+=txt(300,425+i*43,line,35,anchor='middle')
 out+=f'<path d="M100 587H500" stroke="#d9b78f" opacity=".6"/>'+txt(300,635,f'ACTIVITY {a["number"]:02d} / 50',20,'#ecd4a8','middle')+txt(300,667,f'{a["estimatedMinutes"]} MIN ESTIMATED · GUIDED PRACTICE',10,'#ecd4a8','middle','Arial,sans-serif')+'</svg>'
 return out

def guide(a):
 if art.artwork(a):return art.guide(a)
 out=f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1100 720" role="img" aria-label="Four-stage guide: {html.escape(a["title"])}"><rect width="1100" height="720" rx="24" fill="#fff9f1"/><rect x="1" y="1" width="1098" height="718" rx="24" fill="none" stroke="#ead8c2"/>'+txt(42,49,f'FIELD GUIDE / ACTIVITY {a["number"]:02d}',13,'#a8321f',family='Arial,sans-serif')
 for i,line in enumerate(textwrap.wrap(a['title'],48)):out+=txt(42,94+i*31,line,29,'#7c1f16')
 for i,step in enumerate(a['visualSteps']):
  x=42+(i%2)*526;y=160+(i//2)*230
  out+=f'<rect x="{x}" y="{y}" width="500" height="205" rx="18" fill="white" stroke="#ead8c2"/><circle cx="{x+38}" cy="{y+39}" r="21" fill="#fff1d8"/>'+txt(x+38,y+45,str(i+1),18,'#7c1f16','middle')+txt(x+74,y+46,step['title'],23,'#7c1f16')
  for j,line in enumerate(textwrap.wrap(step['text'],43)):out+=txt(x+26,y+95+j*24,line,16,'#6b5b4e',family='Arial,sans-serif')
  # A source card, inspection lens, comparison bars and review tick are conceptual annotations, not provider screenshots.
  glyph=['<path d="M0 0H45V50H0ZM8 12H35M8 24H29M8 36H32"/>','<circle cx="19" cy="18" r="17"/><path d="M32 31L49 48M12 18H26"/>','<path d="M0 10H47M0 25H34M0 40H43"/>','<rect width="48" height="48" rx="8"/><path d="M10 24L20 34L39 13"/>'][i]
  out+=f'<g transform="translate({x+414} {y+132})" fill="none" stroke="#a8321f" stroke-width="2" opacity=".65">{glyph}</g>'
 out+=txt(42,665,'ILLUSTRATED WORKFLOW — NOT A PROVIDER SCREENSHOT',12,'#84766a',family='Arial,sans-serif')+txt(42,692,'Keep the first attempt, test the result, and explain one limitation.',15,'#7c1f16')+'</svg>'
 return out

def handbook(a):
 rows=[f'# {a["number"]:02d}. {a["title"]}',f'Open Practice / {G[a["collection"]]["title"]}',f'Estimated time: {a["estimatedMinutes"]} minutes. Not learner-validated.','Original material: CC BY 4.0. Independent, non-degree and non-accredited.',a['goal'],'## Why this matters',a['explanation'],'## Before you start',a['providerNote'],'## Practice input','```text',a['sampleInput'],'```','## Copy-and-adapt prompt','```text',a['prompt'],'```','## Worked reference',a['workedExample'],'## Guided activity']
 rows += [f'{i+1}. **{s["title"]}.** {s["text"]}' for i,s in enumerate(a['steps'])]
 rows+=['## Test your result']+['- [ ] '+x for x in a['checks']]+['## Common mistakes']+['- '+x for x in a['commonMistakes']]+['## Evidence to keep']+['- **'+x['title']+'**: '+x['detail'] for x in a['evidence']]+['## No-account / offline route',a['offline'],'## Reflection',a['reflection'],'## Honest completion',a['completionNote'],a['editorialStatus']]
 return '\n\n'.join(rows)+'\n'

# Original sample files are generated/copied locally; no provider call or model is involved.
def sample_pdf():
 pages=[['Fictional community project report','Page 1','Technology investment, FY2025: $120,000.','Technology investment, FY2024: $95,000.'],['Fictional community project report','Page 2','Marketing spend, Q1 2025: $18,000.','Marketing spend, Q2 2025: not disclosed.'],['Fictional community project report','Page 3 - scope note','Figures are USD, before tax.','Investment excludes recurring software subscriptions.','Original fictional exercise material. CC BY 4.0.']]
 objects=[b'<< /Type /Catalog /Pages 2 0 R >>',b'',b'<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>'];kids=[]
 for lines in pages:
  number=len(objects)+1;kids.append(f'{number} 0 R');objects.append(f'<< /Type /Page /Parent 2 0 R /MediaBox [0 0 595 842] /Resources << /Font << /F1 3 0 R >> >> /Contents {number+1} 0 R >>'.encode())
  safe=lambda line:line.replace('\\','\\\\').replace('(','\\(').replace(')','\\)')
  stream=('BT /F1 14 Tf 60 780 Td '+' 0 -30 Td '.join('('+safe(line)+') Tj' for line in lines)+' ET').encode();objects.append(b'<< /Length '+str(len(stream)).encode()+b' >>\nstream\n'+stream+b'\nendstream')
 objects[1]=('<< /Type /Pages /Kids ['+' '.join(kids)+'] /Count 3 >>').encode();out=bytearray(b'%PDF-1.4\n');offsets=[]
 for i,obj in enumerate(objects):offsets.append(len(out));out.extend(f'{i+1} 0 obj\n'.encode()+obj+b'\nendobj\n')
 start=len(out);out.extend(f'xref\n0 {len(objects)+1}\n0000000000 65535 f \n'.encode())
 for offset in offsets:out.extend(f'{offset:010d} 00000 n \n'.encode())
 out.extend(f'trailer\n<< /Size {len(objects)+1} /Root 1 0 R >>\nstartxref\n{start}\n%%EOF\n'.encode());return out
extras={}
for source in (R/'curriculum/activity-fixtures').glob('*.csv'):
 target=P/'resources/activity-inputs'/source.name;target.write_bytes(source.read_bytes());extras[source.stem]=[{'title':'Fictional CSV dataset','url':'/resources/activity-inputs/'+source.name}]
(P/'resources/activity-inputs/document-extraction.pdf').write_bytes(sample_pdf());extras['document-extraction']=[{'title':'Original three-page fictional report PDF','url':'/resources/activity-inputs/document-extraction.pdf'}]
catalog=[]
for a in activities:
 a['collectionTitle']=G[a['collection']]['title'];id=a['id'];a['extraFiles']=extras.get(id,[]);a['cover']='/brand/activities/'+id+'-cover.svg';a['guide']='/brand/activities/'+id+'-guide.svg';a['handbook']='/resources/activity-handbooks/'+id+'.md';a['fixture']='/resources/activity-inputs/'+id+'.md';a['pack']='/resources/activity-packs/'+a['collection']+'.zip'
 (P/'activities'/f'{id}.json').write_text(json.dumps(a,ensure_ascii=False,indent=2)+'\n');(P/a['cover'].lstrip('/')).write_text(cover(a));(P/a['guide'].lstrip('/')).write_text(guide(a));(P/a['handbook'].lstrip('/')).write_text(handbook(a));(P/a['fixture'].lstrip('/')).write_text('# Original fictional input / '+a['title']+'\n\n'+a['sampleInput']+'\n\nNo private data or credentials are required. CC BY 4.0.\n')
 catalog.append({k:a[k] for k in ['id','number','title','collection','collectionTitle','goal','estimatedMinutes','capability','cover']})
for group in groups:
 members=[a for a in activities if a['collection']==group['id']];group.update({'activities':5,'estimatedMinutes':sum(a['estimatedMinutes'] for a in members),'cover':members[0]['cover'],'handbook':'/resources/activity-collections/'+group['id']+'.md','pack':members[0]['pack']})
 text='# '+group['title']+'\n\n'+group['description']+'\n\n---\n\n'+'\n\n---\n\n'.join(handbook(a) for a in members);(P/group['handbook'].lstrip('/')).write_text(text)
 entries={'README.md':('# Open Practice / '+group['title']+'\n\nFive guided activities. Open the Markdown handbooks, input fixtures and SVG visual guides in your normal reader/browser. Provider tools and cloud inference are separate; no models or credentials are included. All examples are original/fictional. Self-reported practice, not accredited assessment. CC BY 4.0.\n').encode(),'evidence-ledger.csv':b'activity,input,prompt,tool_and_mode,test_result,revision,limitation\n'}
 for a in members:
  for extra in a.get('extraFiles',[]):entries['inputs/'+Path(extra['url']).name]=(P/extra['url'].lstrip('/')).read_bytes()
  for folder,key in [('handbooks','handbook'),('inputs','fixture'),('covers','cover'),('guides','guide')]:entries[folder+'/'+Path(a[key]).name]=(P/a[key].lstrip('/')).read_bytes()
 buf=io.BytesIO()
 with zipfile.ZipFile(buf,'w',zipfile.ZIP_DEFLATED) as z:
  for name,data in sorted(entries.items()):
   info=zipfile.ZipInfo(name,(2026,10,21,0,0,0));info.compress_type=zipfile.ZIP_DEFLATED;z.writestr(info,data)
 (P/group['pack'].lstrip('/')).write_bytes(buf.getvalue())
manifest={'version':'1.0','activities':catalog,'collections':groups,'total':50,'guidedMinutes':sum(a['estimatedMinutes'] for a in activities),'visualGuides':50,'covers':50,'packs':10,'editorialStatus':'Original authored activities. Timing and independent subject-matter review remain pending. All completion records are learner self-reports.'}
(P/'activities.json').write_text(json.dumps(manifest,indent=2,ensure_ascii=False)+'\n')
# Activity collections join the existing library rather than replacing its 21 resources.
resources=json.loads((P/'resources.json').read_text());resources=[r for r in resources if not r['id'].startswith('activity-collection-')]
for g in groups:resources.append({'id':'activity-collection-'+g['id'],'title':g['title']+' — five-activity visual practice pack','kind':'Guided activity collection','description':'Five full activity handbooks, fictional inputs, illustrated covers, four-stage visual guides and an evidence ledger.','url':g['pack'],'licence':'CC BY 4.0','format':'ZIP','image':g['cover']})
(P/'resources.json').write_text(json.dumps(resources,indent=2,ensure_ascii=False)+'\n')
print(f'Built {len(activities)} activities, 50 covers, 50 visual guides, 50 handbooks, 10 collection packs; library now {len(resources)} resources.')

foundation=json.loads((P/'curriculum.json').read_text());foundation.update({'resources':len(resources),'foundationResources':21,'standaloneActivities':50,'totalActivities':86,'standaloneEstimatedMinutes':manifest['guidedMinutes']});(P/'curriculum.json').write_text(json.dumps(foundation,indent=2)+'\n')
