export function mountCollection(courses,{onOpen,onDownload}){
 const $=s=>document.querySelector(s),stage=$('#browse-stage');if(!stage||!courses.length)return;let index=0,start=null;
 function select(next){
  index=(next+courses.length)%courses.length;const c=courses[index];
  $('#browse-counter').textContent='BUILD PATH '+(index+1)+' OF '+courses.length;
  $('#browse-cover').src='/brand/covers/'+c.id+'.svg?v=illustrated-20261021';$('#browse-cover').alt=c.title+' practice handbook';
  $('#browse-track').textContent=c.track+' · Guided practice';$('#browse-title').textContent=c.title;$('#browse-project').textContent=c.project;$('#browse-description').textContent=c.description;$('#browse-time').textContent=c.time;
  $('#browse-outcome').textContent=c.outcomes[0];$('#browse-safety').textContent=c.outcomes[c.outcomes.length-1];$('#browse-handbook').href=c.downloads.handbook;
  $('#browse-primary').onclick=()=>onOpen(c);$('#browse-download').onclick=()=>onDownload(c);
 }
 const prev=$('#browse-prev'),next=$('#browse-next');prev.onclick=()=>select(index-1);next.onclick=()=>select(index+1);
 function navigate(e){
  if(!['ArrowLeft','ArrowRight','Home','End'].includes(e.key)||e.altKey||e.ctrlKey||e.metaKey||e.shiftKey)return;
  if(e.target!==stage&&e.target!==prev&&e.target!==next)return;
  e.preventDefault();select(e.key==='Home'?0:e.key==='End'?courses.length-1:index+(e.key==='ArrowRight'?1:-1));
 }
 stage.onkeydown=navigate;
 const swipe=$('#browse-swipe');swipe.onpointerdown=e=>{if(e.target.closest('button,a')||e.isPrimary===false||(e.pointerType==='mouse'&&e.button!==0))return;start={x:e.clientX,y:e.clientY,id:e.pointerId};swipe.setPointerCapture(e.pointerId)};
 swipe.onpointerup=e=>{if(!start||e.pointerId!==start.id)return;const dx=e.clientX-start.x,dy=e.clientY-start.y;if(Math.abs(dx)>55&&Math.abs(dx)>Math.abs(dy)*1.2)select(index+(dx<0?1:-1));start=null};
 swipe.onpointercancel=swipe.onlostpointercapture=()=>{start=null};select(0)
}
