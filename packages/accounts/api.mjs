const headers={'Content-Type':'application/json','Cache-Control':'no-store','X-Content-Type-Options':'nosniff'};
const reply=(body,status=200,extra={})=>new Response(JSON.stringify(body),{status,headers:{...headers,...extra}});
const hex=bytes=>Array.from(new Uint8Array(bytes),b=>b.toString(16).padStart(2,'0')).join('');
const unhex=text=>Uint8Array.from(text.match(/../g)||[],x=>parseInt(x,16));
export const randomToken=()=>hex(crypto.getRandomValues(new Uint8Array(32)));
export async function digest(text){return hex(await crypto.subtle.digest('SHA-256',new TextEncoder().encode(text)))}
export async function passwordHash(password,salt){const key=await crypto.subtle.importKey('raw',new TextEncoder().encode(password),'PBKDF2',false,['deriveBits']);return hex(await crypto.subtle.deriveBits({name:'PBKDF2',salt:unhex(salt),iterations:100000,hash:'SHA-256'},key,256))}
export function equal(a,b){if(typeof a!=='string'||typeof b!=='string'||a.length!==b.length)return false;let diff=0;for(let i=0;i<a.length;i++)diff|=a.charCodeAt(i)^b.charCodeAt(i);return diff===0}
export async function readJSON(request,max=120000){const reader=request.body?.getReader();if(!reader)throw Error('JSON required');let size=0,parts=[];for(;;){const {done,value}=await reader.read();if(done)break;size+=value.length;if(size>max){await reader.cancel();throw Error('Request too large')}parts.push(value)}const bytes=new Uint8Array(size);let at=0;for(const p of parts){bytes.set(p,at);at+=p.length}return JSON.parse(new TextDecoder().decode(bytes))}
export async function learnerFor(request,db){const cookie=request.headers.get('cookie')||'';const token=cookie.match(/(?:^|;\s*)__Host-op_session=([a-f0-9]{64})(?:;|$)/)?.[1];if(!token)return null;return db.prepare('SELECT learners.id, learners.username FROM sessions JOIN learners ON learners.id = sessions.learner_id WHERE sessions.token_hash = ? AND sessions.expires_at > ?').bind(await digest(token),Date.now()).first()}
const cookie=token=>`__Host-op_session=${token}; Path=/; HttpOnly; Secure; SameSite=Strict; Max-Age=2592000`;
async function session(db,user){const token=randomToken();await db.prepare('INSERT INTO sessions(token_hash,learner_id,expires_at) VALUES(?,?,?)').bind(await digest(token),user.id,Date.now()+30*86400000).run();return cookie(token)}
export const eventNames=new Set(['lesson_opened','lesson_completed','checkpoint_passed','workspace_saved','workspace_downloaded','resource_downloaded','news_opened']);
export async function accountAPI(request,env){
 const path=new URL(request.url).pathname,db=env.DB;if(!db)return reply({error:'Accounts require the configured school database.'},503);
 if(!['GET','POST','PUT','DELETE'].includes(request.method))return reply({error:'Method not allowed'},405);
 if(request.method!=='GET'&&request.headers.get('origin')!==new URL(request.url).origin)return reply({error:'Same-origin requests only'},403);
 if(request.method!=='GET'){
  const limiter=['/api/account/register','/api/account/login','/api/account/recover','/api/account/rotate-recovery','/api/account/delete'].includes(path)?env.AUTH_LIMITER:env.LEARNING_LIMITER;
  if(!limiter)return reply({error:'Safety limits not configured'},503);
  const ok=await limiter.limit({key:'account:'+ (request.headers.get('CF-Connecting-IP')||'unknown')});if(!ok.success)return reply({error:'Too many requests. Wait a minute.'},429);
 }
 const user=await learnerFor(request,db);
 if(path==='/api/account/me'&&request.method==='GET')return reply({learner:user?{id:user.id,username:user.username}:null});
 if(path==='/api/account/register'&&request.method==='POST'){
  const b=await readJSON(request,4000);const username=String(b.username||'').trim().toLowerCase();
  if(!/^[a-z0-9_-]{3,32}$/.test(username)||typeof b.password!=='string'||b.password.length<12||b.password.length>128)return reply({error:'Use a 3–32 character username (letters, numbers, _ or -) and a password of 12–128 characters.'},400);
  if(b.consent!==true||b.adult!==true)return reply({error:'Accept account storage and learning-event collection to register.'},400);
  const id=crypto.randomUUID(),salt=randomToken(),recovery=randomToken();
  try{await db.prepare('INSERT INTO learners(id,username,salt,password_hash,recovery_hash,created_at) VALUES(?,?,?,?,?,?)').bind(id,username,salt,await passwordHash(b.password,salt),await digest(recovery),Date.now()).run()}catch{return reply({error:'Username unavailable or registration failed.'},409)}
  return reply({learner:{id,username},recoveryCode:recovery,notice:'Save this recovery code privately. It is shown once; no email recovery is configured.'},201,{'Set-Cookie':await session(db,{id})});
 }
 if(path==='/api/account/login'&&request.method==='POST'){
  const b=await readJSON(request,4000);if(typeof b.password!=='string'||b.password.length>128)return reply({error:'Invalid credentials'},401);
  const row=await db.prepare('SELECT * FROM learners WHERE username = ?').bind(String(b.username||'').trim().toLowerCase()).first();
  const hash=await passwordHash(b.password,row?.salt||'00'.repeat(32));if(!row||!equal(hash,row.password_hash))return reply({error:'Invalid credentials'},401);
  await db.batch([db.prepare('DELETE FROM sessions WHERE expires_at < ?').bind(Date.now()),db.prepare('DELETE FROM learning_events WHERE created_at < ?').bind(Date.now()-90*86400000)]);
  return reply({learner:{id:row.id,username:row.username}},200,{'Set-Cookie':await session(db,row)});
 }
 if(path==='/api/account/recover'&&request.method==='POST'){
  const b=await readJSON(request,4000);if(typeof b.password!=='string'||b.password.length<12||b.password.length>128||typeof b.recoveryCode!=='string')return reply({error:'Recovery code and new password required'},400);
  const row=await db.prepare('SELECT * FROM learners WHERE username = ?').bind(String(b.username||'').trim().toLowerCase()).first();
  if(!row||!equal(await digest(b.recoveryCode),row.recovery_hash))return reply({error:'Invalid recovery details'},401);
  const salt=randomToken(),recovery=randomToken();
  await db.batch([db.prepare('UPDATE learners SET salt = ?, password_hash = ?, recovery_hash = ? WHERE id = ?').bind(salt,await passwordHash(b.password,salt),await digest(recovery),row.id),db.prepare('DELETE FROM sessions WHERE learner_id = ?').bind(row.id)]);
  return reply({learner:{id:row.id,username:row.username},recoveryCode:recovery},200,{'Set-Cookie':await session(db,row)});
 }
 if(!user)return reply({error:'Sign in first'},401);
 if(path==='/api/account/logout'&&request.method==='POST'){
  const token=request.headers.get('cookie')?.match(/__Host-op_session=([a-f0-9]{64})/)?.[1];if(token)await db.prepare('DELETE FROM sessions WHERE token_hash = ?').bind(await digest(token)).run();return reply({ok:true},200,{'Set-Cookie':'__Host-op_session=; Path=/; HttpOnly; Secure; SameSite=Strict; Max-Age=0'});
 }
 if(path==='/api/account/rotate-recovery'&&request.method==='POST'){
  const b=await readJSON(request,4000);const row=await db.prepare('SELECT * FROM learners WHERE id = ?').bind(user.id).first();
  if(typeof b.password!=='string'||b.password.length>128||!equal(await passwordHash(b.password,row.salt),row.password_hash))return reply({error:'Current password required'},401);
  const recovery=randomToken();await db.batch([db.prepare('UPDATE learners SET recovery_hash = ? WHERE id = ?').bind(await digest(recovery),user.id),db.prepare('DELETE FROM sessions WHERE learner_id = ?').bind(user.id)]);
  return reply({recoveryCode:recovery},200,{'Set-Cookie':await session(db,user)});
 }
 if(path==='/api/account/export'&&request.method==='GET'){
  const workspaces=await db.prepare('SELECT course_id,content,updated_at FROM workspaces WHERE learner_id = ?').bind(user.id).all();const events=await db.prepare('SELECT event,course_id,created_at FROM learning_events WHERE learner_id = ? ORDER BY created_at DESC LIMIT 10000').bind(user.id).all();return reply({learner:{username:user.username},workspaces:workspaces.results,events:events.results});
 }
 if(path==='/api/account/delete'&&request.method==='POST'){
  const b=await readJSON(request,4000);const row=await db.prepare('SELECT * FROM learners WHERE id = ?').bind(user.id).first();if(typeof b.password!=='string'||b.password.length>128||!equal(await passwordHash(b.password,row.salt),row.password_hash))return reply({error:'Password required'},401);
  await db.batch([db.prepare('DELETE FROM sessions WHERE learner_id = ?').bind(user.id),db.prepare('DELETE FROM learning_events WHERE learner_id = ?').bind(user.id),db.prepare('DELETE FROM workspaces WHERE learner_id = ?').bind(user.id),db.prepare('DELETE FROM learners WHERE id = ?').bind(user.id)]);return reply({ok:true},200,{'Set-Cookie':'__Host-op_session=; Path=/; HttpOnly; Secure; SameSite=Strict; Max-Age=0'});
 }
 if(path==='/api/workspaces'&&request.method==='GET'){const rows=await db.prepare('SELECT course_id,content,updated_at FROM workspaces WHERE learner_id = ?').bind(user.id).all();return reply({workspaces:rows.results})}
 if(path==='/api/workspaces'&&request.method==='PUT'){
  const b=await readJSON(request);if(!/^[a-z0-9_-]{1,40}$/.test(b.course||'')||!b.workspace||typeof b.workspace!=='object'||Array.isArray(b.workspace))return reply({error:'Valid course and workspace required'},400);
  const content=JSON.stringify(b.workspace);if(content.length>50000)return reply({error:'Workspace too large (50 KB maximum)'},413);
  const old=await db.prepare('SELECT updated_at FROM workspaces WHERE learner_id = ? AND course_id = ?').bind(user.id,b.course).first();
  if(old&&b.expectedVersion!==old.updated_at)return reply({error:'Another device saved a newer version. Reload before overwriting.',conflict:true},409);
  const now=Date.now();
  if(old){const result=await db.prepare('UPDATE workspaces SET content = ?, updated_at = ? WHERE learner_id = ? AND course_id = ? AND updated_at = ?').bind(content,now,user.id,b.course,old.updated_at).run();if(!result.meta?.changes)return reply({error:'Workspace changed. Reload first.',conflict:true},409)}
  else{try{await db.prepare('INSERT INTO workspaces(learner_id,course_id,content,updated_at) VALUES(?,?,?,?)').bind(user.id,b.course,content,now).run()}catch{return reply({error:'Workspace changed. Reload first.',conflict:true},409)}}
  return reply({ok:true,updatedAt:now});
 }
 if(path==='/api/events'&&request.method==='POST'){
  const b=await readJSON(request,2000);if(!eventNames.has(b.event)||typeof b.course!=='string'||b.course.length>80)return reply({error:'Unknown learning event'},400);
  await db.prepare('INSERT INTO learning_events(id,learner_id,event,course_id,created_at) VALUES(?,?,?,?,?)').bind(crypto.randomUUID(),user.id,b.event,b.course,Date.now()).run();return reply({ok:true});
 }
 return reply({error:'Not found'},404);
}
