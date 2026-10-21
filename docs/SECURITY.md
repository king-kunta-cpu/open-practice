# Security and privacy notes

## Exposed credentials
Revoke any credentials posted in chat. The code does not use or reproduce them. Create replacements with only necessary scopes; store them in deployment secrets or environment injection. Repository publication and AI inference should not share broad credentials. Enable your Git host's secret scanning if available. The included pattern scan is a basic check, not comprehensive detection.

## Inference boundaries
- Server-only keys; no public key fields in the UI.
- Same-origin POST and bounded JSON body/question sizes.
- Canonical server-loaded course context rather than arbitrary client system prompts.
- Exact operator-approved model allowlist, output-token bounds, and one attempt per provider.
- Approximate IP limiter on Workers; single-process IP limiter on Node.
- AI disabled by default and when configuration/limits are missing.
- No prompt/response logging or history database in application code.

Same-origin checks are not authentication. Forged HTTP clients and distributed attacks remain possible. Rate limits do not enforce a daily global spending ceiling. A public deployment needs provider budgets, abuse monitoring and potentially authentication/Turnstile plus stronger distributed limits.

The native Cloudflare AI binding cannot be reliably cancelled by this application's timeout. The response deadline bounds caller waiting, but an abandoned inference may continue and consume quota even if fallback succeeds. REST requests use AbortController, which also does not guarantee a provider stopped billing. Do not advertise fallback as cost-free.

Cross-request circuit breakers and quota cooldowns are not implemented; each new question may try a provider that failed on the previous question. Review and pause failing providers through configuration during a pilot.

## Privacy
Fallback may transmit a question and canonical lesson text to Groq, Cloudflare, and Pollinations. A successful primary stops the chain. Learner notes and prior chats are not included in tutor payloads by the app. Questions can still contain personal data; instruct learners not to submit it. Provider retention, subprocessors and operational platform logs require separate review. No unqualified anonymity or zero-retention claim.

Local notes stay in that browser and exports contain those notes. A shared computer is not a private vault. Clear sensitive notes and restrict export sharing. Review privacy, safeguarding and consent requirements before serving children or collecting learner accounts.

## Content and code
Lesson drafts require maintainer review. No autonomous publication or execution of learner code. Prompt injection is not fully solved by a system instruction; the tutor has no tool permissions. Render model answers as text, not HTML.

## Accounts, tracking and learner keys (current release)
Usernames are public identifiers, not verified identities. Passwords use salted PBKDF2-SHA256 (100,000 iterations, within the Workers WebCrypto limit); recovery codes and 30-day session tokens are hashed. This is a pilot authentication implementation, not a security audit or production certification. Complete an independent review and consider a stronger managed identity/password-hardening design before broad enrolment.

Sessions use Secure/HttpOnly/SameSite=Strict host-only cookies. SQL uses bound parameters. Registration and recovery are rate limited; distributed attacks and denial of service remain possible. Password resets invalidate prior sessions. There is no email reset or default admin account. Account deletion removes active account/workspace/event records; platform backups or downloaded files have separate retention.

First-party events are tied to authenticated accounts and include only an allowed event name, a course/resource identifier, and timestamp. Account consent and adult attestation are required for registration. No user age or real-world identity is verified. Daily cleanup removes events older than 90 days and expired sessions; deletion also occurs during sign-in cleanup.

Learner practice credentials exist only in the request/input field and provider call, not database rows, browser storage, analytics, source files, or offline exports. The key field clears on each request/sign-out. Do not enable request-body capture in platform observability: it could expose credentials despite the application's no-logging design. The learner-selected provider receives the prompt and can incur that learner's charges. There is no cross-provider fallback in learner practice.
