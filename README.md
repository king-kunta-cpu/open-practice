# Open Practice
## Practical AI Engineering

Free practical learning. Independent, non-degree and non-accredited. One portable repository; no runtime package dependencies.

## Curriculum 2.0
- **6 build paths / 36 substantial activities / 36 worked examples.**
- **18 knowledge-review questions / 6 capstones / 30 rubric criteria.**
- **31 library resources**, including six foundation handbooks/packs and ten new five-activity visual packs.
- **37 fictional fixture files**, including dirty datasets, reference outputs, templates, an offline quote calculator and an offline lexical-retrieval lab.
- Approximately **24 guided hours**, an editorial estimate not yet validated with learners.

Paths: prompting and evidence; support replies; spreadsheet cleaning; browser applications; automation and human review; cloud AI and retrieval. These are practical foundations, not complete professional AI-engineering preparation. Each activity has outcomes, explanation, a worked example, guided steps, expected evidence, common mistakes, a self-check and an offline alternative. Independent subject-matter review remains pending.

Browse `/curriculum.html`. Original sources live in `curriculum/courses/` and `curriculum/fixtures/`. Generated public JSON, handbooks, fixture copies and deterministic ZIPs come from `scripts/build-curriculum.py`.

## The 50-activity practice studio
A further **50 standalone guided activities** now extend the 36 foundation activities: **86 total**, across six foundation paths plus ten five-activity collections. Visit `/activities.html`. Each new activity has an original input, copyable prompt, worked reference, five guided steps, three test checks, a four-stage illustrated guide, common mistakes, an offline route and an evidence workspace.

The release adds **50 individual covers, 50 visual guides, 50 handbooks, 50 input sheets, ten collection workbooks and ten deterministic practice packs**, plus original CSV datasets and a three-page fictional report PDF. A new editorial illustration introduces the collection. Estimated additional guided practice is 1,985 minutes (about 33 hours); combined estimated guided practice is about 57 hours. These are not learner-tested timings.

Search/filter by collection; keep local evidence; explicitly save/load account copies; record the actual route (manual fixture, design-only or hosted AI run); download a self-contained illustrated HTML workspace; reimport its progress JSON. The learner dashboard shows standalone-activity records separately from foundation progress. Existing foundation IDs and notes are unchanged.

Small deterministic tools help check JSON structure, limited regex policies (in a time-bounded worker), script-disabled HTML, basic Markdown hierarchy and actual colour contrast. They are not AI inference or complete correctness/accessibility certification. SQL/formula activities include known-reference CSV fixtures, not automatic execution against production data.

Canonical sources: `curriculum/activities/`, `curriculum/activity-collections.json`, `curriculum/activity-fixtures/`. Build with `scripts/build-activities.py` after the foundation builder. See `curriculum/ACTIVITY-AUTHORING.md` for scope, source links and corrections to unsafe/outdated claims in the original exercise drafts.

## Run and verify
Requires Node 22.13+ for native SQLite accounts, and Python 3 for the content build.
```sh
cp config/env.example .env
npm run build:assets
npm run dev
npm run check
```
The default local port is 3001. For remote preview, bind to the supplied public origin and serve over HTTPS. Node SQLite currently emits an experimental-runtime warning.

## Working platform
- Username/password accounts, hashed recovery codes, secure sessions, export and deletion; **email magic links are not implemented**.
- Explicit cloud save/load, stale-write detection, visible empty/error/retry states.
- Local progress and notes without an account. Existing first-three-activity notes/completions retain their indices; the expanded review is versioned separately.
- Standalone native HTML workspaces with all six activities, review questions, capstone rubric and editable notes. Download an updated copy to preserve edits; export JSON for online import. Fixture packs are separate downloads.
- Completion and rubric scores are **learner self-reports**, not verified credentials. Capstone threshold: at least 8/10 and 2/2 on the critical safety criterion.
- First-party named learning events, no advertising trackers. No keystrokes, private prompts or keys in event payloads; daily 90-day retention cleanup.
- Temporary learner-owned Groq, Google AI Studio/Gemini and Cloudflare connections. Activity credentials are separate from the optional company tutor. Do not put secrets in notes.
- Company tutor receives only the selected activity, not every lesson in the path. Approved fallback order: Groq → Cloudflare → Pollinations; no local/browser inference.
- Free library and three dated source-linked News Drops; these are not an automated news feed.

## Four-component ceiling / portability
Source and CI on GitHub; hosting on Cloudflare Workers; storage in a SQLite Durable Object; cloud inference. The Node/SQLite adapter and Dockerfile support migration without application rewrites. Do not add more infrastructure merely to duplicate existing functions.

```text
curriculum/              Canonical activities, fixture sources and base library
apps/web/public/         Website, generated curriculum, resources, offline exporter
packages/                Portable accounts, tutor and learner-provider APIs
adapters/cloudflare/     Worker and SQLite Durable Object adapter
adapters/node/           Node server and native SQLite adapter
migrations/              Portable SQL account schema
scripts/                 Content/assets builders, transfer preparation, secret scan
 test/                   Automated functional and curriculum tests
 docs/                   Operations, deployment, security and verification
branding/                Original artwork and licensed display font
```

## Live release / 0.8.0
- Platform: https://open-practice.zlnew.workers.dev
- My learning: https://open-practice.zlnew.workers.dev/dashboard.html
- Curriculum: https://open-practice.zlnew.workers.dev/curriculum.html
- Library: https://open-practice.zlnew.workers.dev/library.html
- Repository: https://github.com/king-kunta-cpu/open-practice

The editorial-collection interface and expanded curriculum are deployed. The existing Durable Object namespace was transferred without changing its ID or original database object selector. A pre-transfer account and saved workspace were successfully retrieved on the new hostname. The previous address redirects; sign in again on the new hostname because sessions are host-scoped. Existing browser-local drafts on the former origin do not automatically move; cloud-saved work is retained. Keep exported files if you still have unsynced local work.

`adapters/cloudflare/wrangler.jsonc` is now the production configuration. It preserves the original object selector and completed migration tag. **Do not replace it with fresh-install defaults on this deployment.** A separate `wrangler.fresh-install.jsonc` keeps company AI off and creates a new store for a genuinely new installation in another account. Use `npm run deploy:fresh` only for that case. Secrets remain in Cloudflare, not source.

See `docs/LIVE-ACCESS.md`, `docs/VERIFICATION.md` and `docs/IDENTITY-TRANSFER.md` for deployment evidence and remaining gates.

## Pilot boundaries
No accreditation, verified assessment, automatic background sync, autonomous publishing, OAuth, payment checkout or admin analytics dashboard. Before wider launch: security review, backup/restore rehearsal, stronger abuse limits, budget controls and independent content review. Prior production account/provider checks do not establish that this release is deployed.

## Licensing
Code: MIT. Original learning/library material: CC BY 4.0. Archivo Black: included, unchanged SIL Open Font License. Third-party services have separate terms. No legal clearance, professional status or vulnerability-free certification is claimed. See `docs/OPERATING-NOTES.md`, `docs/SECURITY.md` and `docs/MONETISATION.md`.

## Editorial Collection interface / 0.7.0
The public and learner interfaces now follow the requested reference’s actual cream/burgundy format: #FDF7EE canvas, #7C1F16 serif headings, #A8321F terracotta actions, white rounded cards, miniature cover selectors and a two-column collection browser. Native Georgia and Arial replace the heavy dark interface. The theme covers the homepage, dashboard, lessons, reviews/rubrics, account dialogs, curriculum, library/news, practice labs and standalone offline exports. No fabricated reader statistics, urgency, reviews, advertisements or reference-site content were copied.

45 automated tests and local/production Chromium checks cover the curriculum, retained account/offline functionality, new public collection interactions and responsive layouts. Production transfer and deployment are verified; see the live release section above.

## Verification / 0.8.0
57 automated tests pass. The new browser suite visits all 50 detailed activities, checks cover/guide loading, search/filter, evidence recording, offline edit/reopen/import, verification tools, activity account save/restore, dashboard visibility and responsive layouts. The existing foundation suite remains passing. See `docs/VERIFICATION.md` for the final production status.
