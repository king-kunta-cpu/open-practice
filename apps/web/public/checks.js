// Deterministic rubric checks. Same rules run with or without AI, so the learner always gets real feedback.
export const words=t=>(t.trim().match(/[\p{L}\p{N}][\p{L}\p{N}'’.-]*/gu)||[]).length;
const lines=t=>t.split(/\r?\n/).map(s=>s.trim()).filter(Boolean);
const sentences=t=>t.replace(/\n+/g,' ').split(/(?<=[.!?])\s+/).map(s=>s.trim()).filter(s=>words(s)>0);
const keyPhrase=v=>String(v||'').trim().split(/\s+/).slice(0,3).join(' ').replace(/[.,;:!?]+$/,'').toLowerCase();
export function runChecks(checks,text,values={}){
 const t=String(text||''),lower=t.toLowerCase(),out=[];
 for(const c of checks||[]){
  let pass=true,label=c.label,fix=c.fix,detail='';
  switch(c.t){
   case 'words':{const n=words(t);pass=(c.min==null||n>=c.min)&&(c.max==null||n<=c.max);label??=c.max==null?`At least ${c.min} words`:`Length is ${c.min??0}–${c.max} words`;detail=n+' words';fix??=n<(c.min??0)?`Add detail until you reach at least ${c.min} words.`:`Cut to ${c.max} words or fewer. Remove repetition first.`;break}
   case 'chars':{const n=t.trim().length;pass=(c.min==null||n>=c.min)&&(c.max==null||n<=c.max);label??=`Length is ${c.min??0}–${c.max} characters`;detail=n+' characters';fix??=n>c.max?`Shorten to ${c.max} characters.`:`Add detail; aim for at least ${c.min} characters.`;break}
   case 'eachline':{const ls=lines(t).filter(l=>!c.skip||!new RegExp(c.skip,'i').test(l));const bad=ls.filter(l=>l.length>c.max);pass=ls.length>0&&!bad.length;label??=`Every line is ${c.max} characters or fewer`;detail=bad.length?bad.length+' line(s) too long':'';fix??=`Shorten each line to ${c.max} characters.`;break}
   case 'lines':{const n=lines(t).filter(l=>!c.match||new RegExp(c.match,c.flags??'i').test(l)).length;pass=(c.min==null||n>=c.min)&&(c.max==null||n<=c.max);label??=c.max==null?`Has at least ${c.min??1} ${c.what||'lines'}`:`Has ${c.min??0}–${c.max} ${c.what||'lines'}`;detail=n+' found';fix??=c.max==null?`Add more ${c.what||'lines'} until you have at least ${c.min}.`:n>c.max?`Cut down to ${c.max} ${c.what||'lines'} or fewer.`:`Add more ${c.what||'lines'} until you have at least ${c.min??0}.`;break}
   case 'has':{const v=keyPhrase(values[c.field]);pass=!v||lower.includes(v);label??=`Mentions your ${c.name||c.field}`;fix??=`Use “${String(values[c.field]||'').trim()}” in the text so the reader knows it is about them.`;break}
   case 'any':{const hit=c.terms.some(x=>lower.includes(x.toLowerCase()));pass=hit;label??=c.label;fix??=c.fix;break}
   case 'not':{const m=t.match(new RegExp(c.re,c.flags??'i'));pass=!m;label??='Avoids weak phrasing';detail=m?'Found: “'+m[0]+'”':'';fix??='Remove or rewrite: “'+(m?m[0]:'')+'”.';break}
   case 're':{pass=new RegExp(c.re,c.flags??'i').test(t);break}
   case 'count':{const n=(t.match(new RegExp(c.re,(c.flags??'i')+'g'))||[]).length;pass=(c.min==null||n>=c.min)&&(c.max==null||n<=c.max);detail=n+' found';break}
   case 'blanks':{const m=t.match(/\[\[[^\]]*\]\]/g)||[];pass=!m.length;label??='Every [[blank]] in the template is filled in';detail=m.length?m.length+' left':'';fix??='Replace each [[…]] with your own words. Start with: '+(m[0]||'');break}
   case 'sentence':{const long=sentences(t).filter(s=>words(s)>c.max);pass=!long.length;label??=`No sentence is longer than ${c.max} words`;detail=long.length?long.length+' long sentence(s)':'';fix??='Split this sentence: “'+(long[0]||'').slice(0,90)+'…”';break}
   case 'question':{pass=/\?/.test(t);label??='Includes a question';fix??='Add one question the reader can answer.';break}
   default:pass=true;
  }
  out.push({label:label||c.t,pass,fix:fix||'',detail});
 }
 return out;
}
// Shared quality checks for AI-flavoured filler that most writing tools want removed.
export const FILLER='\\b(in today\'s (fast-paced|digital) world|unlock(ing)? the (power|potential)|delve|game[- ]changer|revolutioni[sz]e|as an ai( language model)?|elevate your|seamless(ly)?|leverage synergies|look no further)\\b';
