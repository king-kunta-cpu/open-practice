# Live access

- School: https://open-practice-school.zlnew.workers.dev
- Source repository: https://github.com/king-kunta-cpu/open-practice-school
- GitHub owner: king-kunta-cpu
- GitHub sign-in: https://github.com/login
- Cloudflare sign-in: https://dash.cloudflare.com/
- Groq sign-in: https://console.groq.com/

Learners do not need accounts. Progress is browser-local; no admin/password system was invented or created. Content is administered in the Git repository and deployed to the Worker. Production secrets are managed in Cloudflare, not here.

Verified: public homepage, course JSON, status endpoint and one actual Groq tutor response returned HTTP 200.

Pending: a verified Cloudflare AI fallback model, Pollinations credentials, custom domain, stronger public-abuse controls, provider-side budget confirmation, and automated deployment. GitHub CI checks code; pushing does not currently trigger a Cloudflare release.

Security: credentials exposed in chat must be rotated. Replacing the Groq key also requires updating the GROQ_API_KEY Worker secret. Rotate GitHub and Cloudflare deployment tokens without adding them to this repository.
