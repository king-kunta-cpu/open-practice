# Live access — 0.7.0 / 21 October 2026

- Platform: https://open-practice.zlnew.workers.dev
- My learning: https://open-practice.zlnew.workers.dev/dashboard.html
- Curriculum: https://open-practice.zlnew.workers.dev/curriculum.html
- Library: https://open-practice.zlnew.workers.dev/library.html
- News: https://open-practice.zlnew.workers.dev/news.html
- Privacy: https://open-practice.zlnew.workers.dev/privacy.html
- Repository: https://github.com/king-kunta-cpu/open-practice

The existing repository was renamed, not duplicated. The existing learner namespace/object were preserved during the Worker transfer. An account created before transfer signed in on the new host and retrieved the same notes and progress. A stale update was rejected with HTTP 409. The company tutor returned an actual Groq response. Daily retention cleanup is configured at 03:00 UTC.

The previous public address now redirects to the current hostname. The retired redirect has no database or tutor-secret binding and no scheduled task. The original host's sessions are not copied: sign in again. Account-saved work remains available; origin-local drafts do not automatically transfer. Restore an exported per-path progress JSON when needed. No whole-account automatic bulk import is claimed.

## Operator access
- GitHub: https://github.com/login
- Cloudflare: https://dash.cloudflare.com/
- Groq: https://console.groq.com/

No default administrator account/password exists. Content is managed in the repository. Credentials are managed in the hosting secret manager, never committed or added to downloads. Rotate the GitHub and Cloudflare tokens exposed in conversation after verification. Email magic-link login remains unimplemented; no verified sender/domain/service is configured.
