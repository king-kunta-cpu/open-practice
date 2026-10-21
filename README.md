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

## Release status
This 0.6.0 release is built and verified locally. The renamed public hostname and repository are **deployment targets, not confirmed live URLs**. The existing deployment is unchanged until authenticated transfer is completed. See `docs/LIVE-ACCESS.md` and `docs/IDENTITY-TRANSFER.md` before deploying: a fresh namespace would not contain existing accounts.

New-installation defaults keep AI off and use a fresh named database object. Existing installations must transfer their Durable Object namespace and preserve the original object ID. Do not deploy new-installation defaults over an existing account system.

## Pilot boundaries
No accreditation, verified assessment, automatic background sync, autonomous publishing, OAuth, payment checkout or admin analytics dashboard. Before wider launch: security review, backup/restore rehearsal, stronger abuse limits, budget controls and independent content review. Prior production account/provider checks do not establish that this release is deployed.

## Licensing
Code: MIT. Original learning/library material: CC BY 4.0. Archivo Black: included, unchanged SIL Open Font License. Third-party services have separate terms. No legal clearance, professional status or vulnerability-free certification is claimed. See `docs/OPERATING-NOTES.md`, `docs/SECURITY.md` and `docs/MONETISATION.md`.
