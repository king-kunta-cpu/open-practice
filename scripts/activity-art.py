"""Illustrated art direction for activity covers/guides. Standard-library build only.
Raster originals are compressed WebP under branding/activity-art, with self-contained
SVG wrappers so browser display, ZIP downloads and offline HTML need no network.
"""
from pathlib import Path
import base64,html,textwrap
ROOT=Path(__file__).resolve().parent.parent

def artwork(a):
 p=ROOT/'branding/activity-art'/(a['id']+'.webp')
 return p if p.exists() else None

def uri(path):return 'data:image/webp;base64,'+base64.b64encode(path.read_bytes()).decode()
def text(x,y,s,size=20,color='#fff',family='Georgia,serif',extra=''):
 return f'<text x="{x}" y="{y}" fill="{color}" font-family="{family}" font-size="{size}" {extra}>{html.escape(s)}</text>'
def cover(a,collection):
 lines=textwrap.wrap(a['title'],26);y=660-44*(len(lines)-1)
 out=f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 720" role="img" aria-label="{html.escape(a['title'])} — original colorful editorial artwork"><defs><linearGradient id="shade" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="#07142b" stop-opacity="0"/><stop offset=".5" stop-color="#07142b" stop-opacity=".7"/><stop offset="1" stop-color="#07142b" stop-opacity=".98"/></linearGradient><clipPath id="frame"><rect width="600" height="720" rx="20"/></clipPath></defs><g clip-path="url(#frame)"><image width="600" height="720" href="{uri(artwork(a))}"/><rect y="415" width="600" height="305" fill="url(#shade)"/><rect x="26" y="26" width="66" height="42" rx="21" fill="#fff5da"/>'''
 out+=text(59,54,f'{a["number"]:02d}',23,'#192c4b',extra='text-anchor="middle" font-weight="bold"')+text(574,54,'OPEN PRACTICE',13,family='Arial,sans-serif',extra='text-anchor="end" letter-spacing="2"')
 for i,line in enumerate(lines):out+=text(32,y+i*44,line,39,extra='font-weight="bold"')
 out+=text(33,698,collection.upper(),11,'#ffcf91',family='Arial,sans-serif',extra='letter-spacing="1.2"')+'</g></svg>'
 return out

def guide(a):
 colors=[('#f36d5a','#ffcd77'),('#1caea7','#8ce8c4'),('#7364d8','#c8afff'),('#e7a12c','#ffe4a0')]
 out=f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1100 1220" role="img" aria-label="Four-stage illustrated guide: {html.escape(a['title'])}"><defs><linearGradient id="night" x2="1" y2="1"><stop stop-color="#092449"/><stop offset="1" stop-color="#52336f"/></linearGradient><filter id="shadow" x="-.3" y="-.3" width="1.6" height="1.6"><feDropShadow dx="0" dy="7" stdDeviation="7" flood-color="#172142" flood-opacity=".16"/></filter><clipPath id="art"><rect x="32" y="32" width="262" height="314" rx="25"/></clipPath>'''
 for i,(c1,c2) in enumerate(colors):out+=f'<linearGradient id="step{i}" x2="1" y2="1"><stop stop-color="{c2}"/><stop offset="1" stop-color="{c1}"/></linearGradient>'
 out+='</defs><rect width="1100" height="1220" rx="26" fill="#fff8ee"/><path d="M26 0H1074Q1100 0 1100 26V380H0V26Q0 0 26 0" fill="url(#night)"/>'
 out+=f'<image x="32" y="32" width="262" height="314" href="{uri(artwork(a).with_name(a["id"]+"-guide.webp"))}" clip-path="url(#art)"/>'
 out+=text(334,70,f'FIELD GUIDE  /  ACTIVITY {a["number"]:02d}',16,'#ffd497',family='Arial,sans-serif',extra='letter-spacing="2"')
 for i,line in enumerate(textwrap.wrap(a['title'],29)):out+=text(334,130+i*51,line,43,extra='font-weight="bold"')
 out+=text(334,300,'Make it. Test it. Keep the evidence.',23,'#bcebe7')+text(334,334,'Original AI-generated artwork · illustrated workflow',15,'#ded3eb',family='Arial,sans-serif')
 glyphs=['<path d="M-22-27H12L25-14V28H-22ZM12-27V-13H25M-11-4H13M-11 7H9M-11 18H14"/>','<circle r="21"/><path d="M15 15L32 32M-8 0H8M0-8V8"/>','<path d="M-26 24V-9H-14V24M-6 24V-26H6V24M14 24V-1H26V24"/>','<path d="M0-31L27-21V2Q26 21 0 32Q-26 21-27 2V-21ZM-14 0L-3 11L17-12"/>']
 for i,step in enumerate(a['visualSteps']):
  x=32+(i%2)*534;y=414+(i//2)*340
  out+=f'<rect x="{x}" y="{y}" width="502" height="306" rx="24" fill="white" filter="url(#shadow)"/><path d="M{x+24} {y}H{x+478}Q{x+502} {y} {x+502} {y+24}V{y+100}H{x}V{y+24}Q{x} {y} {x+24} {y}" fill="url(#step{i})"/>'
  out+=f'<circle cx="{x+65}" cy="{y+52}" r="36" fill="#fff" opacity=".9"/><g transform="translate({x+65} {y+52}) scale(.8)" stroke="{colors[i][0]}" fill="none" stroke-width="4" stroke-linecap="round" stroke-linejoin="round">{glyphs[i]}</g>'
  out+=text(x+120,y+47,f'0{i+1}',14,'#142745',family='Arial,sans-serif',extra='font-weight="bold"')
  for j,line in enumerate(textwrap.wrap(step['title'],24)):out+=text(x+120,y+76+j*25,line,23,'#172844',extra='font-weight="bold"')
  for j,line in enumerate(textwrap.wrap(step['text'],39)):out+=text(x+26,y+143+j*27,line,19,'#3d4654',family='Arial,sans-serif')
  # Small sculptural diagrams carry the process visually instead of leaving blank cards.
  diagrams=[
   '<ellipse cx="240" cy="91" rx="170" ry="12" fill="#e8e1ed"/><g transform="rotate(-9 172 45)"><rect x="90" y="-5" width="145" height="91" rx="12" fill="#ffd28d" stroke="#eaa34b" stroke-width="2"/><path d="M112 18H204M112 36H188M112 54H199" stroke="#bd6f34" stroke-width="6" stroke-linecap="round"/></g><g transform="rotate(7 300 45)"><rect x="222" y="-2" width="145" height="91" rx="12" fill="#e0f8f0" stroke="#58c7b2" stroke-width="2"/><circle cx="250" cy="23" r="10" fill="#1caea7"/><path d="M273 23H342M245 48H338M245 66H313" stroke="#4e9b94" stroke-width="6" stroke-linecap="round"/></g>',
   '<ellipse cx="240" cy="91" rx="170" ry="12" fill="#e8e1ed"/><rect x="75" y="4" width="107" height="82" rx="17" fill="#e0f8f0" stroke="#77d4c5" stroke-width="2"/><circle cx="128" cy="38" r="17" fill="#24a99e"/><path d="M107 65H150" stroke="#24a99e" stroke-width="6" stroke-linecap="round"/><path d="M196 45C226-4 253 86 284 40M273 32L287 39L282 53" fill="none" stroke="#f18b66" stroke-width="8" stroke-linecap="round"/><rect x="310" y="-1" width="107" height="91" rx="17" fill="#ede5ff" stroke="#bc9ded" stroke-width="2"/><path d="M334 25H392M334 43H381M334 61H390" stroke="#8e6bd0" stroke-width="7" stroke-linecap="round"/>',
   '<ellipse cx="240" cy="91" rx="170" ry="12" fill="#e8e1ed"/><rect x="82" y="-5" width="228" height="98" rx="15" fill="#f1eaff" stroke="#c4aced" stroke-width="2"/><path d="M104 21H241M104 45H218M104 69H261" stroke="#8e70cc" stroke-width="10" stroke-linecap="round"/><circle cx="332" cy="32" r="40" fill="#d2f7ed" fill-opacity=".9" stroke="#249f9a" stroke-width="9"/><path d="M359 61L390 90" stroke="#e8a044" stroke-width="16" stroke-linecap="round"/><path d="M317 30L328 41L347 20" fill="none" stroke="#249f9a" stroke-width="6" stroke-linecap="round"/>',
   '<ellipse cx="240" cy="91" rx="170" ry="12" fill="#e8e1ed"/><path d="M93 4H179L196 20H351V89H93Z" fill="#edab46"/><rect x="136" y="-8" width="167" height="84" rx="12" fill="#fff7e8" stroke="#e3cda7" stroke-width="2"/><path d="M158 15H261M158 33H254M158 51H239" stroke="#b79c7a" stroke-width="6" stroke-linecap="round"/><path d="M88 38H360L344 93H102Z" fill="#ffd277" stroke="#e1a14c" stroke-width="2"/><path d="M325 44L363-7L379 5L341 56L325 61Z" fill="#8668cb" stroke="#60429f" stroke-width="2"/><path d="M325 61L330 44L341 56Z" fill="#f8ddb7"/>'
  ]
  out+=f'<g transform="translate({x} {y+180})">{diagrams[i]}</g>'

 out+='<path d="M40 1120H1060" stroke="#ddcdb9"/>'+text(40,1160,'A beautiful output is a starting point—not proof that it is correct.',22,'#7c1f16')+text(40,1192,'Keep the first attempt, your test results, one revision and one remaining limitation.',17,'#625869',family='Arial,sans-serif')+'</svg>'
 return out
