# Open Practice — one repository, replaceable infrastructure

A practical, independent, non-accredited AI school. Starter materials are drafts for review.

## Quick start
Node 22+ recommended. No runtime dependencies required.

```sh
cp config/env.example .env
npm run dev
# http://localhost:3001
npm run check
```
For Node 20 without env-file support: export configuration variables in your shell and run `npm start`.

## Repository map
```text
apps/web/public/              Static school, lessons, local progress, exports
packages/core/api.mjs         Portable Web Request/Response API and validation
packages/ai/router.mjs        Provider selection, bounded fallback, output normalisation
adapters/cloudflare/          Workers assets, AI binding and rate-limit integration
adapters/node/                Dependency-free server, local limits, CF REST alternative
config/env.example           Blank configuration contract; no credentials
scripts/                     Basic secret-pattern scan
.github/workflows/           Read-only scheduled and PR checks
 test/                       Content, security and mocked provider-routing tests
 docs/                       Deployment, security and migration runbooks
Dockerfile                   Alternate hosting with Node 22
```

## Hosting and AI are independent
Default model priority: **Groq → Cloudflare Workers AI → Pollinations**. Only configured and explicitly approved models are eligible. Pollinations remains last, not the primary. Each provider is attempted once per request, with a deadline. Changing provider priority does not change course files or learner data.

**GitHub Models is intentionally excluded.** GitHub's current documentation reports the service fully retired July 30, 2026. GitHub remains the code/CI host, not an inference dependency. See https://docs.github.com/en/github-models . GitHub Copilot is a separate service, not an interchangeable free school API.

## Configure cloud tutoring
AI is OFF by default. Choose exact current models from your account/provider catalogue; do not assume catalogue presence implies free use. Set model variables, secret keys, and matching `provider:model-id` entries in `APPROVED_MODELS`. The approved list is an operator review gate, not automatic price verification. Set `AI_ENABLED=true` only after configuring limits and provider-side budgets.

Cloudflare deployment: configuration goes in `adapters/cloudflare/wrangler.jsonc`; set secrets with Wrangler, never in vars. Native Workers AI needs the `AI` binding rather than a runtime account token. Node deployment uses environment variables and Cloudflare REST if that provider is desired. See [deployment](docs/DEPLOY.md).

## What works
Six courses / eighteen practical lessons; search and filters; self-reported local notes and progress; deterministic quizzes; Markdown project briefs; JSON record export; optional course-grounded cloud tutoring; automated checks. No learner accounts, separate database, app telemetry, or chat-history persistence.

## Not yet implemented
Autonomous content production/publication, global budget accounting, cross-request circuit breakers, provider benchmarking/model discovery, verified assessments, record re-import, learner sync, and moderation. Runtime provider calls have mocked tests, not authenticated integration tests. No real provider credentials were used to build this repository.

## Portability
Copy this repository to any Git host; use the Node server or Dockerfile on another host; keep the same `/api/status` and `/api/tutor` contracts. See [migration](docs/MIGRATION.md). Local progress belongs to the browser origin: changing domains does not automatically migrate it.

## Security and limits
Read [security](docs/SECURITY.md) before enabling a public tutor. API quotas are not unlimited. Rate limiting is not a global spend cap. Configure provider-side budgets, review billing behaviour and data terms, and obtain appropriate consent. Fallback can send the same question to more than one provider.

Code: MIT. Original lessons: CC BY 4.0. Third-party services/models retain their own terms.

Deployment-tool note: an initial Wrangler dependency audit reported six advisories in its development dependency tree. It was removed from the application dependency graph; this does not certify the external CLI as vulnerability-free. Review/audit your deployment tooling before authenticated use.
