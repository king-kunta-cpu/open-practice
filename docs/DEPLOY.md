# Deployment runbook

## 0. Rotate exposed credentials
Revoke credentials previously pasted into chat. Create new, narrowly scoped tokens. Do not paste replacements into chat, Git, course text or browser settings. Do not use the repository-host token as the model-provider token. Credentials are deliberately absent from this bundle.

## 1. Create one repository
From the extracted repository root:

```sh
git init -b main
git add .
git commit -m "Initial portable platform"
# Create an empty repository in your own account, then use its real SSH URL:
git remote add origin git@github.com:YOUR_ACCOUNT/YOUR_REPOSITORY.git
git push -u origin main
```
Replace example account/repository names. Use SSH or a credential manager, not a token embedded in a remote URL. Repository creation/push is not performed by this bundle. CI checks are read-only and do not deploy automatically.

## Existing deployment: stop and read first

For an identity/Worker rename, follow `IDENTITY-TRANSFER.md`, not the fresh-install command below. This release is deployed; the existing account namespace/object are preserved. Build content with `npm run build:assets` before either deployment path.

## 2. Fresh installation only: deploy to Cloudflare with AI off

```sh
npm install
npx wrangler@latest login
npm run check
npm run deploy:fresh
```
The included lockfile should be kept in the repository. After initial installation, use `npm ci`. Review the example rate-limiter namespace 1001 for your account. Worker free-plan limits and AI free allowances are separate. Validate the current platform configuration before public launch.

## 3. Configure AI
- Groq: choose a current text-chat model your account can use; set `GROQ_MODEL` in Wrangler vars. Create a restricted key and run:
  `npx wrangler@latest secret put GROQ_API_KEY --config adapters/cloudflare/wrangler.jsonc`
- Cloudflare: choose a current text-generation model that supports messages and a response string; set `CLOUDFLARE_MODEL`. The native binding is already declared. No runtime account API token is needed on Workers.
- Pollinations: optional last fallback; set `POLLINATIONS_MODEL` and run:
  `npx wrangler@latest secret put POLLINATIONS_KEY --config adapters/cloudflare/wrangler.jsonc`

Set `APPROVED_MODELS` to comma-separated exact pairs, e.g. `groq:EXACT_GROQ_ID,cloudflare:EXACT_CF_ID,pollinations:EXACT_POLLINATIONS_ID`. These are syntax examples, not real model IDs. Approve only models whose account access, allowed use, privacy and pricing you checked. Remove any provider you do not want receiving questions.

Set `AI_ENABLED` to `true` and redeploy. First test with a small provider-side budget. Confirm a normal answer, exhausted quota, invalid key, provider timeout, rate limit, and all-provider failure. Confirm no credentials appear in browser source or logs. Mock tests do not prove production account access.

## 4. Node or Docker hosting

```sh
cp config/env.example .env
# Fill .env locally, not in Git.
npm run dev
# or inject environment variables through your hosting platform and run npm start
```

Docker:
```sh
docker build -t open-practice .
docker run --rm --env-file .env -p 3001:3001 open-practice
```
Set `PUBLIC_ORIGIN` to your externally visible HTTPS origin behind a reverse proxy. Terminate HTTPS on your host. The Node adapter intentionally does not trust forwarded client-IP headers: behind a proxy all users may share one limiter bucket. Before a public Node deployment, configure a trusted-proxy-aware distributed limiter at the edge. The included in-memory limiter is for a single-instance pilot; restarts reset it and replicas do not share it.

## Reference documentation
- Groq chat API: https://console.groq.com/docs/api-reference
- Groq model catalogue: https://console.groq.com/docs/models
- Workers AI binding: https://developers.cloudflare.com/workers-ai/configuration/bindings/
- Workers AI catalogue: https://developers.cloudflare.com/workers-ai/models/
- Workers rate limits: https://developers.cloudflare.com/workers/runtime-apis/bindings/rate-limit/
- Pollinations: https://gen.pollinations.ai/docs
- GitHub Models retirement: https://docs.github.com/en/github-models

Provider models and quotas change. Deliberately no ten-model availability or perpetual-free promise is baked into the code.

Wrangler is fetched as external tooling, not included in the runtime or lockfile. Audit the exact CLI version you intend to use, then pin that reviewed version in your own release process. The default latest CLI command is convenient, not a reproducible pinned deployment toolchain.

## Learner storage release
Live accounts use `LearnerDatabase`, a SQLite Durable Object in the same Worker. The config includes its namespace binding and a migration tagged `v1-learners`, plus separate auth and learning-event limiters and a daily retention cron. Do not remove or rename the namespace/class or change the stable `open-practice` object name during a routine update: that can orphan account data. Cloudflare D1 creation was denied by the current deployment token; no D1 database was created.

Deploying this configuration to a new Cloudflare account creates a fresh database; it does not migrate learners automatically. Retain the old deployment until a verified data export/import process is complete. No automatic operator-wide export has been implemented yet. Users can export their account/workspace data.

Native Node accounts require Node 22.13+ and a persistent SQLite file, default `data/learners.sqlite`. Mount a persistent Docker volume at `/app/data`; do not bake database files into images. Use HTTPS and set `PUBLIC_ORIGIN` to the exact public origin. Secure session cookies require a secure context. In-memory rate limits are single-instance pilot controls, not scalable distributed protection.

Account permissions are self-service only: no public admin export endpoint or default admin password exists. Library and News Drops are edited through the Git repository. News entries require a date, source links and editorial review.

## Update this existing production installation
Use the main `adapters/cloudflare/wrangler.jsonc` with `npm run deploy` after reviewing/pinning deployment tooling, building assets and passing checks. Preserve `DB_OBJECT_ID` and the completed `v1-account-transfer` tag. This is not the fresh-install path. Cloudflare retains the secrets separately. Do not enable an unapproved model or replace the existing database selector.
