# Migration contract

## Move the Git repository
Clone/push to a new Git host. All app code, content, provider adapters, CI configuration, licences and deployment configuration are in this repo. GitHub Actions itself must be replaced if moving to a different CI engine; `npm run check` is the portable check command.

## Move off Cloudflare hosting
Run `adapters/node/server.mjs` on Node 22+ or use the Dockerfile. Serve the unchanged static files. Set the new external origin with `PUBLIC_ORIGIN`. Replace platform-native limits with suitable host/edge limits before scaling. To retain Cloudflare AI while hosting elsewhere, set `CLOUDFLARE_ACCOUNT_ID` and a narrowly scoped `CLOUDFLARE_AI_TOKEN`; the router will use REST instead of the native binding. Or remove Cloudflare from the provider order entirely.

## Replace an AI provider
The UI only relies on `/api/status` and `/api/tutor`. Add a provider adapter to `packages/ai/router.mjs`; preserve `{text,provider,model}` as its normalised output. Add an approved model and update the order. Extend mocked tests before enabling. Providers are not interchangeable with regard to privacy, terms, or quality.

## Preserve learning materials
All course records live in `apps/web/public/courses.json`. Stable course IDs map progress to lessons. Avoid changing IDs or reordering lessons without a progress migration; progress currently uses lesson indices. There is no remote content service to export.

## Learner records
Current notes and progress live in localStorage under `op-progress` on the browser origin. Back up using the UI export before changing domains. The app does not currently import those backups; domain migration requires an explicit, reviewed import/migration feature or retaining the original origin. Do not promise automatic transfer. JSON exports are readable and contain learner notes, so handle them privately.

## No hidden dependencies
No database, proprietary LMS format, CDN scripts/fonts, account provider or paid inference SDK. The Node runtime has no package dependencies; Wrangler is a development/deployment dependency only. Optional hosted inference is still external infrastructure.
