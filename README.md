# Open Practice — portable practical AI school

Independent, non-accredited, free-to-learn pilot. One repository, replaceable hosting and AI providers. Original starter lessons are drafts for review.

## Live
- School: https://open-practice-school.zlnew.workers.dev
- Library: https://open-practice-school.zlnew.workers.dev/library.html
- News Drops: https://open-practice-school.zlnew.workers.dev/news.html
- Privacy: https://open-practice-school.zlnew.workers.dev/privacy.html
- Repository: https://github.com/king-kunta-cpu/open-practice-school

## Working features
- Six practical courses, eighteen lessons, six deterministic knowledge checks.
- Username/password accounts, recovery codes, secure sessions, account export and deletion.
- Explicit cloud workspace saves, loading on another session/device, stale-write detection.
- Local notes and progress for learners who choose not to sign in.
- Self-contained offline HTML workspaces: lessons, editable notes, checklists and knowledge checks. Save edits by downloading an updated HTML copy. Export offline progress as JSON and import it back into the online course before saving to your account.
- First-party learning events, not advertising trackers: opens, completions, saves, downloads, and source-link opens. No keystrokes, private prompts, or keys in event payloads. Daily 90-day retention cleanup.
- Learner-owned temporary connections: Groq, Google AI Studio/Gemini, Cloudflare Workers AI. Keys are never persisted by app code; prompts pass through the school server to the chosen provider. Key fields clear after requests/sign-out.
- Free library: six templates/datasets/code starters and three original SVG assets.
- News Drops: three dated, reviewed source-linked reference/release entries, not a live automated news feed.
- Optional company-funded course tutor, currently verified with Groq.

## Repository
```text
apps/web/public/          Website, lessons, library/news, offline exporter, analytics client
packages/core/           Portable tutor API
packages/accounts/       SQL-based accounts, sessions, workspaces, events
packages/ai/             Company-provider fallback and learner-key requests
adapters/cloudflare/     Worker, SQLite Durable Object store, deployment configuration
adapters/node/           Node 22.13+ server and native SQLite store
migrations/              Portable account schema
config/                  Blank environment template
scripts/                 Generated-asset builder and basic secret scan
.github/workflows/       Read-only tests on push, PR and weekly schedule
 test/                   21 automated tests (all run on Node 22)
 docs/                   Deployment, migration, security, live access and verification
Dockerfile               Node hosting alternative; persist /app/data
```

## Local start
Node 22.13+ is required for accounts; no third-party runtime dependencies.
```sh
cp config/env.example .env
npm run dev
npm run check
```
Open port 3001. Configure HTTPS/public origin behind a reverse proxy. Native SQLite is experimental in Node 22 and should be reviewed on runtime upgrades. Older Node can serve lessons but account storage is unavailable.

## Lean production stack
GitHub for source/CI; Cloudflare Worker plus its SQLite Durable Object for hosting/storage; cloud inference providers. D1 creation was not permitted by the supplied deployment token, so the live account database uses built-in SQLite Durable Objects instead. The SQL account interface also accepts D1 if you provision it later.

Default company fallback order: Groq → Cloudflare AI → Pollinations. Only explicitly approved/configured models are eligible. Live primary Groq is verified; Cloudflare fallback model and Pollinations credentials are not configured. The learner-key exercise path never falls back to another provider or the company's key.

GitHub Models is intentionally excluded: official docs report retirement on July 30, 2026 (https://docs.github.com/en/github-models). Repositories, GitHub sign-in and Copilot are separate products.

## Deployment and portability
See docs/DEPLOY.md and docs/MIGRATION.md. Run `node scripts/build-inline-assets.mjs` before direct Workers API uploads. Wrangler serves canonical static files; generated assets are also present for API deployment. Committed defaults keep company AI off for safe new installations. Live configuration/secrets are separate from those defaults.

## Pilot limitations
Adult accounts only, with recovery codes and no email reset. No accreditation, verified assessment, admin analytics dashboard, automatic news ingestion, autonomous publication, OAuth, or automatic background sync. Cloud saves are explicit and local/cloud conflict handling is visible. There is no automatic operator-wide database export tool yet; learner account export is implemented. Complete backup/restore rehearsal, private support, security review, stronger abuse controls and provider budgets before scaling.

## Verification
21 tests pass on Node 22. Live HTTP checks covered account creation, sessions, cloud persistence, stale-write rejection, event export, sign-out, sign-in, recovery, learner-owned Groq inference, and deletion. Real Chromium checks covered registration, cloud save, offline HTML edit/download/reopen, library/news rendering and mobile overflow. Temporary test accounts were deleted. See docs/VERIFICATION.md.

## Licensing and tooling
Code: MIT. Original lessons and library materials: CC BY 4.0. Third-party models/services have their own terms. All app runtime code is dependency-free; Wrangler is external deployment tooling, not in the runtime dependency graph. Audit and pin your chosen deployment CLI before authenticated production use; the initial Wrangler toolchain audit reported development dependency advisories, so it was removed from app dependencies. This is not certification that external tooling is vulnerability-free.
