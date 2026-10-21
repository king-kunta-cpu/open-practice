// Keep catalogue queries separate from credential autofill and unsolicited input events.
// Password-manager hints are advisory; intent/focus checks are the actual filter boundary.
const guards=new WeakMap();
export function guardSearch(input,changed){
 if(guards.has(input)){const state=guards.get(input);if(changed){state.changed=changed;input.setAttribute('data-search-bound','true')}return state.controller}
 const state={changed:changed||(()=>{})};
 let query='',armed=false,intentUntil=0;
 input.value='';input.autocomplete='off';input.name='op-catalogue-'+input.id;
 input.setAttribute('autocapitalize','none');input.spellcheck=false;
 input.setAttribute('data-lpignore','true');input.setAttribute('data-1p-ignore','true');
 function autofilled(){try{return input.matches(':autofill')||input.matches(':-webkit-autofill')}catch{return false}}
 const restore=()=>{if(input.value!==query)input.value=query};
 for(const event of ['keydown','pointerdown','paste','cut'])input.addEventListener(event,e=>{if(e.isTrusted&&document.activeElement===input)intentUntil=Date.now()+2000});
 input.addEventListener('beforeinput',e=>{armed=e.isTrusted&&document.activeElement===input&&e.inputType!=='insertReplacementText'&&!autofilled()});
 input.addEventListener('input',e=>{
  if(!e.isTrusted||document.activeElement!==input||autofilled()||(!armed&&Date.now()>intentUntil)){armed=false;restore();return}
  armed=false;query=input.value;state.changed(query);
 });
 input.addEventListener('blur',()=>{armed=false;intentUntil=0;restore()});
 input.addEventListener('animationstart',e=>{if(e.animationName==='op-autofill')restore()});
 window.addEventListener('pageshow',restore);
 state.controller={get value(){return query},clear(){query='';armed=false;intentUntil=0;input.value='';state.changed(query)}};
 guards.set(input,state);input.setAttribute('data-search-ready','true');if(changed)input.setAttribute('data-search-bound','true');return state.controller;
}
// Install the safety boundary before catalogue fetches or account initialization finish.
if(typeof document!=='undefined')document.querySelectorAll('input[type=search]').forEach(input=>guardSearch(input));
