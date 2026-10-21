// Preparation only. Requires explicit operator deployment and post-transfer verification.
import {readFile,mkdir,writeFile} from 'node:fs/promises';
import {fileURLToPath} from 'node:url';
const source=process.env.SOURCE_WORKER,id=process.env.DB_OBJECT_ID;
if(!/^[a-z0-9-]{1,63}$/.test(source||'')||!/^[a-f0-9]{64}$/.test(id||''))throw Error('Set SOURCE_WORKER and the original 64-hex DB_OBJECT_ID. Do not invent a replacement ID.');
const root=fileURLToPath(new URL('../',import.meta.url));const config=JSON.parse(await readFile(root+'adapters/cloudflare/wrangler.jsonc','utf8'));
if(source===config.name)throw Error('Source and destination must differ.');
config.main=root+'adapters/cloudflare/worker.mjs';config.assets.directory=root+'apps/web/public';config.vars.DB_OBJECT_ID=id;config.vars.AI_ENABLED='false';
config.migrations=[{tag:'v1-account-transfer',transferred_classes:[{from:'LearnerDatabase',from_script:source,to:'LearnerDatabase'}]}];
await mkdir(root+'.wrangler',{recursive:true});await writeFile(root+'.wrangler/transfer.jsonc',JSON.stringify(config,null,2)+'\n');
console.log('Prepared .wrangler/transfer.jsonc. Nothing deployed. Inspect it, retain a recoverable backup, and verify the original namespace/object after deployment. AI remains off until new secrets and approved models are configured.');
