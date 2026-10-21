import {readdir,readFile} from 'node:fs/promises';
const ignore=new Set(['node_modules','.git','.wrangler']);
const pattern=/(?:ghp_[A-Za-z0-9]{30,}|github_pat_[A-Za-z0-9_]{35,}|gsk_[A-Za-z0-9]{30,}|cfut_[A-Za-z0-9]{30,})/;
let failures=0;
async function scan(dir){for(const e of await readdir(dir,{withFileTypes:true})){if(ignore.has(e.name)||e.name==='.env'||e.name.startsWith('.env.')||e.name==='.dev.vars')continue;const path=dir+'/'+e.name;if(e.isDirectory())await scan(path);else if(pattern.test(await readFile(path,'utf8'))){console.error('Potential credential in '+path);failures++}}}
await scan('.');if(failures)process.exit(1);console.log('Basic credential-pattern scan passed (not a complete secret scanner).');
