# 45. Explain an API with success and failure paths

Open Practice / Assistants & workflows

Estimated time: 35 minutes. Not learner-validated.

Original material: CC BY 4.0. Independent, non-degree and non-accredited.

Map a request and response without exposing credentials or inventing a service’s internals.

## Why this matters

An API is an agreed interface, not a window into every internal system. Use an invented service so you can distinguish the known contract from implementation guesses. Include authentication, permissions, status codes, rate limits and data minimization. A diagram is not a connected API call.

## Before you start

Materials are free. External tools may require an adult account, credits, regional eligibility or a paid plan. Check current terms before using them. Do not paste passwords, API keys, private messages or other people’s personal data. No model runs locally or downloads automatically on this platform.

## Practice input

```text

Fictional contract: GET /playlists/p01 with a valid authorized token returns {"id":"p01","tracks":["t01","t02"]}. Missing/invalid token → 401. Valid token without access → 403. Missing playlist → 404. Too many requests → 429 with a retry hint. No real service or credential is involved.

```

## Copy-and-adapt prompt

```text

Explain this fictional API in plain language as a request/response flow. Include the five outcomes, what the client should display and what it must not log. Distinguish authentication from permission. Do not invent a real music service’s endpoints or internal architecture.

```

## Worked reference

401 means credentials are missing/invalid; 403 means the supplied identity lacks access. A 429 should not trigger an endless tight retry loop. Tokens belong in protected request handling, not screenshots, URLs, analytics or shared exercise notes.

## Guided activity

1. **Read the contract.** Separate endpoint, method, credentials, allowed response fields and status codes.

2. **Build a success flow.** Trace the fictional mobile app’s request and the returned track IDs.

3. **Add the four failure routes.** Write a safe message and next action for 401, 403, 404 and 429.

4. **Minimize the log.** Keep status, timing and a non-secret request ID; omit tokens and unnecessary personal data.

5. **Teach it back.** Explain the difference between authentication and permission using the two relevant statuses.

## Test your result

- [ ] Success and all four failure outcomes appear in the flow.

- [ ] 401 and 403 are distinguished and rate limiting has a bounded retry/wait policy.

- [ ] The artifact is labelled a contract simulation and contains no real tokens or invented live endpoints.

## Common mistakes

- Confusing a valid login with permission to read every resource.

- Putting API keys in query strings or shared screenshots.

## Evidence to keep

- **Keep the build**: Save your original input, exact prompt and resulting artifact. Success and all four failure outcomes appear in the flow.

- **Show what you tested**: Record a pass/fail result and evidence for every check below. 401 and 403 are distinguished and rate limiting has a bounded retry/wait policy.

- **Explain a limitation**: Write what changed after one deliberate revision and name a remaining failure mode. Confusing a valid login with permission to read every resource.

## No-account / offline route

Move request/status cards through the flow and explain the client’s next action for each.

## Reflection

Which error should lead to a permission review rather than another login attempt?

## Honest completion

Completion is a learner self-report based on saved evidence, not verified assessment or an accredited credential.

Original authored activity; independent subject-matter review and learner timing remain pending.
