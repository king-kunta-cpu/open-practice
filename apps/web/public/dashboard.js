import {getLearner,call} from './learner.js';
const $=s=>document.querySelector(s);
function localRecords(){try{const p=JSON.parse(localStorage.getItem('op-progress')||'{}');return p&&typeof p==='object'&&!Array.isArray(p)?p:{}}catch{return {}}}
function meaningful(r){return !!(r&&(r.done?.length||r.quiz||Object.values(r.notes||{}).some(n=>typeof n==='string'&&n.trim())))}
function putLocal(id,record){const all=localRecords();if(meaningful(all[id]))localStorage.setItem('op-draft-backup-'+id,JSON.stringify(all[id]));all[id]=record;localStorage.setItem('op-progress',JSON.stringify(all))}
async function refresh(){
 const button=$('#dashboard-retry');button.disabled=true;$('#dashboard-status').textContent='Loading your courses and saved work…';
 try{
  const learner=getLearner();$('#dashboard-title').textContent=learner?'Welcome back, '+learner.username+'.':'Your learning starts here.';
  $('#dashboard-intro').textContent=learner?'Continue a project, restore a cloud save, or start your next build.':'You can browse and build without an account. Sign in / Join to save across devices.';
  const courses=await(await fetch('/courses.json',{signal:AbortSignal.timeout(15000)})).json();let rows=[],failure='';
  if(learner){try{rows=(await call('/api/workspaces',undefined,'GET')).workspaces}catch(e){failure=e.message}}
  const cloud=new Map(rows.map(w=>[w.course_id,w]));const local=localRecords();const root=$('#dashboard-courses');root.replaceChildren();
  for(const course of courses){const saved=cloud.get(course.id);let record=null;try{if(saved)record=JSON.parse(saved.content)}catch{}const draft=local[course.id];const active=meaningful(draft)?draft:record;const done=Array.isArray(active?.done)?active.done.length:0;
   const card=document.createElement('article');card.className='resource-card';const tag=document.createElement('div');tag.className='eyebrow';tag.textContent=course.track;
   const h=document.createElement('h3');h.textContent=course.title;const description=document.createElement('p');description.textContent=course.project;const state=document.createElement('p');state.textContent=done+'/3 lesson steps · '+(saved?'Cloud save: '+new Date(saved.updated_at).toLocaleString():meaningful(draft)?'Browser draft only':'Not started');
   const open=document.createElement('button');open.className='primary';open.textContent=meaningful(draft)?'Continue browser draft →':saved?'Continue saved work →':'Start building →';open.onclick=()=>{try{if(!meaningful(draft)&&record)putLocal(course.id,record);location.assign('/?course='+encodeURIComponent(course.id))}catch{state.textContent='Browser storage unavailable. Allow storage before restoring saved work.'}};
   card.append(tag,h,description,state,open);
   if(saved&&record&&meaningful(draft)){const restore=document.createElement('button');restore.textContent='Restore cloud copy';let armed=false;restore.onclick=()=>{if(!armed){armed=true;restore.textContent='Confirm: use cloud copy';state.textContent='This replaces the browser draft for this course. A local backup is kept. Click again to confirm.';return}try{putLocal(course.id,record);location.assign('/?course='+encodeURIComponent(course.id))}catch{state.textContent='Could not restore into browser storage.'}};card.append(restore)}root.append(card)
  }
  $('#dashboard-status').textContent=failure?'Cloud saves could not load: '+failure+' Your browser drafts are still available. Use Refresh to retry.':!learner?'Browsing without an account. Click Sign in / Join to enable cloud saves.':rows.length?'Loaded '+rows.length+' saved workspace'+(rows.length===1?'':'s')+'. Choose a course below.':'No cloud saves yet—nothing is missing or frozen. Start a course below, then click Save to account inside it.';
 }catch(e){$('#dashboard-status').textContent='Could not load the dashboard: '+e.message+'. Use Refresh to retry.'}finally{button.disabled=false}
}
$('#dashboard-retry').onclick=refresh;window.addEventListener('op-signout',refresh);await refresh();
