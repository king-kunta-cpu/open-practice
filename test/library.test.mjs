import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {execFileSync} from 'node:child_process';
const read=p=>readFile(new URL('../apps/web/public/'+p,import.meta.url),'utf8');
test('library has one entry per course, with both formats together and no duplicated destinations',async()=>{
 const resources=JSON.parse(await read('resources.json')),courses=JSON.parse(await read('courses.json'));
 assert.equal(resources.length,55);assert.equal(resources.filter(r=>r.courseId).length,36);
 const urls=[];for(const r of resources)for(const f of r.downloads||[{url:r.url}])urls.push(f.url);
 assert.equal(urls.length,91);assert.equal(new Set(urls).size,urls.length);
 for(const c of courses){const cards=resources.filter(r=>r.courseId===c.id);assert.equal(cards.length,1);assert.equal(cards[0].title,c.title);assert.deepEqual(cards[0].downloads.map(f=>f.url),[c.downloads.handbook,c.downloads.pack]);assert.ok(!resources.some(r=>r.id===c.id+'-handbook'||r.id===c.id+'-pack'))}
 const html=await read('library.html');assert.equal((html.match(/class="library-downloads"/g)||[]).length,55);
});
test('library content audit rejects repeated listings and verifies grouped handbook/pack content',()=>{
 const report=JSON.parse(execFileSync('python3',['scripts/check-library.py'],{cwd:new URL('../',import.meta.url),encoding:'utf8'}));
 assert.equal(report.uniqueLibraryEntries,55);assert.equal(report.distinctDownloadFiles,91);assert.equal(report.duplicateWholeFiles,0);assert.equal(report.handbookInsideEachPackVerified,true);
});
