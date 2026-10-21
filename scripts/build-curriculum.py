#!/usr/bin/env python3
"""Build the public curriculum, offline workbooks, fixture files and deterministic packs."""
from pathlib import Path
import json,shutil,zipfile,io
ROOT=Path(__file__).resolve().parent.parent
PUBLIC=ROOT/'apps/web/public'
courses=sorted((json.loads(p.read_text()) for p in (ROOT/'curriculum/courses').glob('*.json')),key=lambda c:c['num'])
resources=json.loads((ROOT/'curriculum/library-base.json').read_text())
def handbook(c):
 lines=[f"# {c['title']}",f"Open Practice / {c['track']} / curriculum {c['version']}",f"Estimated guided practice: {c['time']}. This estimate has not been learner-tested.","Original practice material · CC BY 4.0 · Non-degree and non-accredited.","## What you will build",c['project'],"## Before you start"]
 lines += ['- '+x for x in c['prerequisites']]+['## Learning outcomes']+['- '+x for x in c['outcomes']]
 for i,l in enumerate(c['lessons']):
  lines += [f"## Activity {i+1}: {l['title']}",f"Estimated time: {l['estimatedMinutes']} minutes.","### Outcomes"]+['- '+x for x in l['outcomes']]+[l['text'],"### Worked example","```text",l['example'],"```","### Guided activity"]+[f"{j+1}. {x}" for j,x in enumerate(l['steps'])]+['### Expected evidence']+['- '+x for x in l['expected']]+['### Common mistakes']+['- '+x for x in l['commonMistakes']]+['### Check your understanding',l['selfCheck'],'### Offline route',l['offline']]
 lines+=['## End-of-path review','These are self-check questions, not verified examinations.']
 for i,q in enumerate(c['assessment']):
  lines += [f"### Question {i+1}",q['question']]+[f"{j+1}. {text}" for j,text in enumerate(q['options'])]+[f"Review answer: {q['answer']+1}. {q['explanation']}"]
 lines += ['## Capstone review rubric',c['capstone']['scoring']]
 for r in c['capstone']['rubric']:lines += [f"### {r['title']}"+(' [critical]' if r['critical'] else ''),r['evidence']]
 lines+=['## References']+[f"- [{x['title']}]({x['url']})" for x in c['references']]+['## Editorial boundary',c['editorialStatus'],'Use fictional/redacted data and your own authorised provider credentials. Never include credentials in this pack or public work.']
 return '\n\n'.join(lines)+'\n'
for c in courses:
 assert len(c['lessons'])==6 and len(c['assessment'])==3 and len(c['capstone']['rubric'])==5
 target=PUBLIC/'resources/curriculum'/c['id'];target.mkdir(parents=True,exist_ok=True)
 for source in (ROOT/'curriculum/fixtures'/c['id']).iterdir():
  if source.is_file():shutil.copyfile(source,target/source.name)
 c['fixtureFiles']=[{'title':p.name,'url':'/resources/curriculum/'+c['id']+'/'+p.name} for p in sorted(target.iterdir()) if p.is_file()]
 text=handbook(c)
 book=PUBLIC/'resources/handbooks'/f"{c['id']}-handbook.md";book.parent.mkdir(parents=True,exist_ok=True);book.write_text(text)
 pack=PUBLIC/'resources/packs'/f"{c['id']}-practice-pack.zip";pack.parent.mkdir(parents=True,exist_ok=True)
 contents={'WORKBOOK.md':text.encode(),'course.json':json.dumps(c,indent=2,ensure_ascii=False).encode()}
 for p in sorted(target.iterdir()):
  if p.is_file():contents['fixtures/'+p.name]=p.read_bytes()
 buffer=io.BytesIO()
 with zipfile.ZipFile(buffer,'w',zipfile.ZIP_DEFLATED) as archive:
  for name,data in contents.items():
   info=zipfile.ZipInfo(name,date_time=(2026,10,21,0,0,0));info.compress_type=zipfile.ZIP_DEFLATED;archive.writestr(info,data)
 pack.write_bytes(buffer.getvalue())
 resources.extend([dict(id=c['id']+'-handbook',title=c['title']+' — complete handbook',kind='Course handbook',description='Six detailed activities, worked examples, expected outputs, review questions and a five-criterion capstone rubric.',url=c['downloads']['handbook'],licence='CC BY 4.0',format='MD',image='/brand/covers/'+c['id']+'.svg?v=illustrated-20261021'),dict(id=c['id']+'-pack',title=c['title']+' — practice pack',kind='Practice pack',description='The full workbook plus fictional inputs, reference outputs, templates and test fixtures. No provider keys required to download.',url=c['downloads']['pack'],licence='CC BY 4.0',format='ZIP',image='/brand/covers/'+c['id']+'.svg?v=illustrated-20261021')])
manifest={'version':'2.0','identity':'Open Practice','descriptor':'Practical AI Engineering','paths':len(courses),'lessons':sum(len(c['lessons']) for c in courses),'workedExamples':sum(len(c['lessons']) for c in courses),'reviewQuestions':sum(len(c['assessment']) for c in courses),'capstones':len(courses),'rubricCriteria':sum(len(c['capstone']['rubric']) for c in courses),'estimatedMinutes':sum(c['estimatedMinutes'] for c in courses),'resources':len(resources),'fixtureFiles':sum(len(c['fixtureFiles']) for c in courses),'editorialStatus':'Original authored practice material. Estimates are unvalidated; independent subject-matter review remains pending.','roadmap':[{'title':'Document assistants and retrieval evaluation','status':'Planned, not yet available'},{'title':'Small application backends and tool permissions','status':'Planned, not yet available'},{'title':'Multimodal workflows and accessibility','status':'Planned, not yet available'},{'title':'Deployment, monitoring and maintenance','status':'Planned, not yet available'}]}
(PUBLIC/'courses.json').write_text(json.dumps(courses,indent=2,ensure_ascii=False)+'\n');(PUBLIC/'resources.json').write_text(json.dumps(resources,indent=2,ensure_ascii=False)+'\n');(PUBLIC/'curriculum.json').write_text(json.dumps(manifest,indent=2)+'\n')
print(json.dumps(manifest,indent=2))
