# Open Practice
## Practical AI Engineering

Free practical learning. Independent, non-degree and non-accredited. One portable repository; no runtime package dependencies.

## Curriculum 2.0
- **6 build paths / 36 substantial activities / 36 worked examples.**
- **18 knowledge-review questions / 6 capstones / 30 rubric criteria.**
- **21 library resources**, including six full handbooks and six ZIP practice packs.
- **37 fictional fixture files**, including dirty datasets, reference outputs, templates, an offline quote calculator and an offline lexical-retrieval lab.
- Approximately **24 guided hours**, an editorial estimate not yet validated with learners.

Paths: prompting and evidence; support replies; spreadsheet cleaning; browser applications; automation and human review; cloud AI and retrieval. These are practical foundations, not complete professional AI-engineering preparation. Each activity has outcomes, explanation, a worked example, guided steps, expected evidence, common mistakes, a self-check and an offline alternative. Independent subject-matter review remains pending.

Browse `/curriculum.html`. Original sources live in `curriculum/courses/` and `curriculum/fixtures/`. Generated public JSON, handbooks, fixture copies and deterministic ZIPs come from `scripts/build-curriculum.py`.

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

## Live release / 0.7.0
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
