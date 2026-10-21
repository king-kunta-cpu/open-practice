# Access and release state

## Current release
Version 0.6.0 is built and tested in the workspace. A local preview is available through the running preview server. No production transfer, repository rename or external push was completed for this release because deployment credentials are not available in the current environment.

## Intended identity destinations — not confirmed live
- Platform target: `https://open-practice.zlnew.workers.dev`
- Repository target: `https://github.com/king-kunta-cpu/open-practice`
- Paths: `/curriculum.html`, `/dashboard.html`, `/library.html`, `/news.html`, `/privacy.html`.

The previous production hostname/repository remain unchanged. Their identifiers are intentionally not repeated in the active source. Follow `IDENTITY-TRANSFER.md` to preserve existing accounts before changing public destinations. A different hostname requires learners to sign in again; cookies must not be copied between hosts.

## Operator access
- Source hosting: https://github.com/login
- Hosting/storage: https://dash.cloudflare.com/
- Groq: https://console.groq.com/

No default administrator password exists. Content is managed in this repository. Provider credentials and deployment tokens belong in the hosting secret manager or an authenticated CLI, never source, chat or learner notes. Rotate credentials previously exposed in conversation. Email-link login remains unimplemented pending a verified sender/domain/service.
