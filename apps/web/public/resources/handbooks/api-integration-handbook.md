# Connect an AI API without trusting every response

Open Practice / Assistants & APIs / curriculum 1.0

Estimated guided practice: 7h 05m estimated. This estimate has not been learner-tested.

Original practice material · CC BY 4.0 · Non-degree and non-accredited.

## What you will build

Ship an integration with a teardown note with inputs, tests and a reproducible handoff.

## Before you start

- JavaScript / Python prerequisite; inspect the worked fixture before beginning.

- A text editor/spreadsheet for the manual route. Hosted Python/Jupyter for code exercises; applicable dependencies are in requirements.txt.

- For actual AI calls, a legitimate available cloud service and authorised learner credentials; no particular provider or country is mandatory.

- Foundations path or equivalent source-evaluation skills.

- Your own authorised key is optional; offline fixtures are provided.

## Learning outcomes

- Specify required fields, maximum sizes and the trust boundary.

- Distinguish transport status, schema validity and factual verification.

- Use timeouts and explicit error states instead of an infinite retry loop.

- Never paste a live key into a test fixture or public log.

- Keep a reproducible result and disclose safety, rights and regional access limits.

- Distinguish open source, hosted inference, terms and account quotas.

- Understand credential boundaries and safe failure behaviour.

## Activity 1: Write the request and response contract

Estimated time: 35 minutes.

### Outcomes

- Specify required fields, maximum sizes and the trust boundary.

- Explain and retain a testable result and its limits.

An API boundary is a contract for inputs, outputs, authentication and failures. A successful HTTP status does not establish factual correctness or an expected schema. Keep company secrets server-side and use learner-owned credentials only through authorised activity routes.

Specify required fields, maximum sizes and the trust boundary. Inspect the supplied input before using any tool. Write the decision rules in your own words and calculate one small result independently. The reference output is an answer key for this deliberately bounded fixture, not proof of general capability.

Policy for this project: This reference classifies supplied HTTP fixtures; it makes no live requests. Accept a 200 response only with string text. Retry advice is bounded; never automatically retry every error.

For learners across regions underserved or excluded by mainstream providers: verify country eligibility, language, account/identity requirements, data terms, cost, quota and connectivity before choosing a cloud service. Use only legitimate available alternatives; never bypass restrictions or invent a country/account. No service access? Complete the labelled manual/fixture route without claiming a live AI run.

### Worked example

```text

SOURCE (authored fixture):
{
  "responses": [
    {
      "status": 200,
      "body": {
        "text": "draft"
      }
    },
    {
      "status": 429,
      "body": {}
    },
    {
      "status": 200,
      "body": {
        "wrong": "shape"
      }
    },
    {
      "status": 401,
      "body": {}
    }
  ]
}
INDEPENDENT FIXTURE TARGET:
{
  "decisions": [
    "accept_draft",
    "bounded_retry_later",
    "schema_error",
    "stop_auth_error"
  ]
}

```

### Guided activity

1. Specify required fields, maximum sizes and the trust boundary.

2. Open input.json and expected.json from the practice pack; keep an unmodified original.

3. Record a manual prediction and the relevant rule before consulting the answer key.

4. Perform one small change and predict its effect before rerunning.

5. Keep the result and your reasoning in the lesson notes; do not mark a simulated run as live.

### Expected evidence

- Write the request and response contract — a saved, inspectable artefact tied to the supplied rule.

- A baseline or change-test record with expected/observed results and a limitation.

### Common mistakes

- Timeout: record an unavailable result, not a fabricated draft.

- Treating a supplied answer key, an authored example or self-review as independent field validation.

### Check your understanding

Which exact input, rule and expected value would let another learner falsify your conclusion in this activity, and what remains untested?

### Offline route

Use the supplied fictional JSON, expected results and paper/text evidence log without a provider account. Manual or constructed completion is labelled; it is not a live cloud integration or trained-model run.

## Activity 2: Classify constructed responses

Estimated time: 35 minutes.

### Outcomes

- Distinguish transport status, schema validity and factual verification.

- Explain and retain a testable result and its limits.

An API boundary is a contract for inputs, outputs, authentication and failures. A successful HTTP status does not establish factual correctness or an expected schema. Keep company secrets server-side and use learner-owned credentials only through authorised activity routes.

Distinguish transport status, schema validity and factual verification. Establish a baseline before changing prompts or code. Keep the original input immutable. Record expected values, observed values and whether each comparison passed. If the expected file conflicts with a justified policy, investigate rather than forcing a convenient match.

Policy for this project: This reference classifies supplied HTTP fixtures; it makes no live requests. Accept a 200 response only with string text. Retry advice is bounded; never automatically retry every error.

### Worked example

```text

MANUAL BASELINE / compare every named field
{
  "decisions": [
    "accept_draft",
    "bounded_retry_later",
    "schema_error",
    "stop_auth_error"
  ]
}
Keep a separate observed-result column; the answer key is not a model response.

```

### Guided activity

1. Distinguish transport status, schema validity and factual verification.

2. Open input.json and expected.json from the practice pack; keep an unmodified original.

3. Record expected and observed values separately; explain every mismatch.

4. Perform one small change and predict its effect before rerunning.

5. Keep the result and your reasoning in the lesson notes; do not mark a simulated run as live.

### Expected evidence

- Classify constructed responses — a saved, inspectable artefact tied to the supplied rule.

- A baseline or change-test record with expected/observed results and a limitation.

### Common mistakes

- A key in a URL or export is a critical failure: remove it and rotate exposed credentials.

- Treating a supplied answer key, an authored example or self-review as independent field validation.

### Check your understanding

Which exact input, rule and expected value would let another learner falsify your conclusion in this activity, and what remains untested?

### Offline route

Use the supplied fictional JSON, expected results and paper/text evidence log without a provider account. Manual or constructed completion is labelled; it is not a live cloud integration or trained-model run.

## Activity 3: Build a bounded client

Estimated time: 35 minutes.

### Outcomes

- Use timeouts and explicit error states instead of an infinite retry loop.

- Explain and retain a testable result and its limits.

An API boundary is a contract for inputs, outputs, authentication and failures. A successful HTTP status does not establish factual correctness or an expected schema. Keep company secrets server-side and use learner-owned credentials only through authorised activity routes.

Use timeouts and explicit error states instead of an infinite retry loop. Build one inspectable transformation or bounded AI prompt. Keep calculation and validation deterministic where possible. If you make a permitted hosted call, save the actual response separately from the authored examples and verify its material claims; the supplied reference never simulates a live model.

Policy for this project: This reference classifies supplied HTTP fixtures; it makes no live requests. Accept a 200 response only with string text. Retry advice is bounded; never automatically retry every error.

### Worked example

```text

PROJECT CONTRACT:
This reference classifies supplied HTTP fixtures; it makes no live requests. Accept a 200 response only with string text. Retry advice is bounded; never automatically retry every error.
HOSTED REFERENCE: open hosted-lab.ipynb or run reference.py with all fixture files together.
EXPECTED CONSTRUCTED RESULT:
{
  "decisions": [
    "accept_draft",
    "bounded_retry_later",
    "schema_error",
    "stop_auth_error"
  ]
}

```

### Guided activity

1. Use timeouts and explicit error states instead of an infinite retry loop.

2. Open hosted-lab.ipynb and the reference code from the practice pack; keep an unmodified original.

3. Record expected and observed values separately; explain every mismatch.

4. Perform Quota response: respect limits; changing accounts to evade restrictions is not a fallback.

5. Keep the result and your reasoning in the lesson notes; do not mark a simulated run as live.

### Expected evidence

- Build a bounded client — a saved, inspectable artefact tied to the supplied rule.

- A baseline or change-test record with expected/observed results and a limitation.

### Common mistakes

- Quota response: respect limits; changing accounts to evade restrictions is not a fallback.

- Treating a supplied answer key, an authored example or self-review as independent field validation.

### Check your understanding

Which exact input, rule and expected value would let another learner falsify your conclusion in this activity, and what remains untested?

### Offline route

Use the supplied fictional JSON, expected results and paper/text evidence log without a provider account. Manual or constructed completion is labelled; it is not a live cloud integration or trained-model run.

## Activity 4: Exercise authentication and quota failures

Estimated time: 35 minutes.

### Outcomes

- Never paste a live key into a test fixture or public log.

- Explain and retain a testable result and its limits.

An API boundary is a contract for inputs, outputs, authentication and failures. A successful HTTP status does not establish factual correctness or an expected schema. Keep company secrets server-side and use learner-owned credentials only through authorised activity routes.

Never paste a live key into a test fixture or public log. Change one assumption at a time and predict the result first. Retain the failure, the revision and the rerun evidence. A failure is useful information: hiding a bad output or editing a test target after seeing the answer destroys the value of the experiment.

Policy for this project: This reference classifies supplied HTTP fixtures; it makes no live requests. Accept a 200 response only with string text. Retry advice is bounded; never automatically retry every error.

### Worked example

```text

CHANGE TESTS — predict before running:
1. Timeout: record an unavailable result, not a fabricated draft.
2. A key in a URL or export is a critical failure: remove it and rotate exposed credentials.
3. Quota response: respect limits; changing accounts to evade restrictions is not a fallback.
Keep the original expected.json unchanged.

```

### Guided activity

1. Never paste a live key into a test fixture or public log.

2. Open failure-tests.md from the practice pack; keep an unmodified original.

3. Record expected and observed values separately; explain every mismatch.

4. Perform Timeout: record an unavailable result, not a fabricated draft.

5. Keep the result and your reasoning in the lesson notes; do not mark a simulated run as live.

### Expected evidence

- Exercise authentication and quota failures — a saved, inspectable artefact tied to the supplied rule.

- A baseline or change-test record with expected/observed results and a limitation.

### Common mistakes

- Timeout: record an unavailable result, not a fabricated draft.

- Treating a supplied answer key, an authored example or self-review as independent field validation.

### Check your understanding

Which exact input, rule and expected value would let another learner falsify your conclusion in this activity, and what remains untested?

### Offline route

Use the supplied fictional JSON, expected results and paper/text evidence log without a provider account. Manual or constructed completion is labelled; it is not a live cloud integration or trained-model run.

## Activity 5: Review provider-specific access

Estimated time: 35 minutes.

### Outcomes

- Check country, account, data and billing terms before selecting a legitimate alternative.

- Explain and retain a testable result and its limits.

An API boundary is a contract for inputs, outputs, authentication and failures. A successful HTTP status does not establish factual correctness or an expected schema. Keep company secrets server-side and use learner-owned credentials only through authorised activity routes.

Check country, account, data and billing terms before selecting a legitimate alternative. Review what the fixture cannot establish. Explain who owns the decision, where human approval is needed and which access or professional constraints remain. Do not describe a small educational success as production readiness, certification, legal compliance or a guarantee.

Policy for this project: This reference classifies supplied HTTP fixtures; it makes no live requests. Accept a 200 response only with string text. Retry advice is bounded; never automatically retry every error.

For learners across regions underserved or excluded by mainstream providers: verify country eligibility, language, account/identity requirements, data terms, cost, quota and connectivity before choosing a cloud service. Use only legitimate available alternatives; never bypass restrictions or invent a country/account. No service access? Complete the labelled manual/fixture route without claiming a live AI run.

### Worked example

```text

REVIEW BOUNDARY:
This reference classifies supplied HTTP fixtures; it makes no live requests. Accept a 200 response only with string text. Retry advice is bounded; never automatically retry every error.

ACCESS / NOT TESTED: unavailable provider, unsupported language and absent external feedback must remain explicit.

```

### Guided activity

1. Check country, account, data and billing terms before selecting a legitimate alternative.

2. Open README.md and your evidence log from the practice pack; keep an unmodified original.

3. Record the human decision owner, limitations and any untested service access.

4. Perform one small change and predict its effect before rerunning.

5. Keep the result and your reasoning in the lesson notes; do not mark a simulated run as live.

### Expected evidence

- Review provider-specific access — a saved, inspectable artefact tied to the supplied rule.

- A baseline or change-test record with expected/observed results and a limitation.

### Common mistakes

- A key in a URL or export is a critical failure: remove it and rotate exposed credentials.

- Treating a supplied answer key, an authored example or self-review as independent field validation.

### Check your understanding

Which exact input, rule and expected value would let another learner falsify your conclusion in this activity, and what remains untested?

### Offline route

Use the supplied fictional JSON, expected results and paper/text evidence log without a provider account. Manual or constructed completion is labelled; it is not a live cloud integration or trained-model run.

## Activity 6: Know what is actually free

Estimated time: 30 minutes.

### Outcomes

- Evaluate repositories and hosted providers separately.

- Record terms and uncertainty before integrating.

Module 2: Understand the AI plumbing. Separate open-source software, model licences, hosted APIs, and free usage quotas.

An open-source repository, open model weights, a demo website, and a hosted API are different things. A code licence does not pay for compute, and a public model catalogue does not guarantee that your account can use a model at zero cost. Verify each layer before choosing an integration.

Record the official endpoint, authentication, exact model ID, permitted application use, quota, billing behaviour, retention terms, and last checked date. Provider details change; this curriculum deliberately avoids hard-coded free-quota promises. A copied list of free APIs is a starting point for investigation, not an operational dependency.

### Worked example

```text

REVIEW RECORD: repository purpose = SDK; hosted inference = separate provider; licence = inspect source; free allowance = check account; pricing checked on = learner supplies date; deployment decision = pending evidence.

```

### Guided activity

1. Choose a documented provider and a related public repository.

2. Identify whether the repository is an SDK, server, model, demo, or directory.

3. Complete the provider evaluation worksheet using original sources.

4. Mark all fields you cannot verify as unknown.

5. Decide whether the endpoint is suitable for a small non-sensitive learning test.

### Expected evidence

- A provider review with dated source links.

- A clear distinction between source licence and hosting terms.

- No unlimited-free claim without evidence.

### Common mistakes

- Treating many repository stars as proof of allowed use.

- Using leaked or shared credentials from a public example.

### Check your understanding

What evidence would you need before calling a hosted API free for your application?

### Offline route

Review saved official documentation and mark account-specific limits as unverified.

## Activity 7: Understand cloud requests

Estimated time: 40 minutes.

### Outcomes

- Understand provider requests and failure categories.

- Protect credentials and avoid false cost assumptions.

A chat API request usually contains a model identifier and messages, but authentication, response shape, and supported options still vary. Keep keys out of public code, URLs, screenshots, and exported workspaces. Use a restricted key and a low provider-side budget where available.

The Open Practice learner-key panel passes your current request through the platform to the selected provider; application code does not persist the key. That does not erase the provider’s retention or billing terms. Do not send private data. A provider may reject a model that appears in a public example but is unavailable to your account.

### Worked example

```text

CONCEPTUAL REQUEST: model + messages + bounded output limit.
401: key missing/invalid or permission problem.
429: a rate/quota limit was reached.
402: may indicate budget exhaustion, depending on the provider.
TIMEOUT: no usable response within the caller’s deadline; provider processing may still continue.

```

### Guided activity

1. Sketch browser → platform proxy → selected provider and mark the key boundary.

2. Choose a current model your own account permits.

3. Send a harmless one-sentence prompt, or inspect a saved sample request.

4. Record the response and observed provider/model without exposing the key.

5. Write user-facing messages for authentication failure, quota exhaustion, and timeout.

### Expected evidence

- A labelled request/data-flow diagram.

- A non-sensitive request/result record or annotated sample.

- Three clear failure messages with safe next actions.

### Common mistakes

- Putting a secret key into a query string or repository.

- Blindly retrying budget or authentication errors.

### Check your understanding

If your request times out, can you safely conclude that the provider did no work or incurred no charge?

### Offline route

Annotate the supplied example payload and error fixtures without making a live request.

## Activity 8: Evaluate before integrating

Estimated time: 35 minutes.

### Outcomes

- Evaluate useful and failed API behaviour.

- Design transparent fallback and safe degradation.

Test normal and failed operation before relying on a cloud endpoint. A useful evaluation checks output usefulness, format, latency if measurable, model permissions, invalid-key handling, exhausted quota, and all-provider failure. Do not deliberately create large bills to test budget behaviour; use a restricted test key and the provider’s controls.

Fallback should preserve the user’s privacy choices. A learner selecting one provider should not have a private prompt silently sent to several others. The company-funded tutor can use disclosed fallback, while learner-owned practice stays with the chosen provider. Neither approach justifies evading limits or using undocumented private-chat endpoints.

### Worked example

```text

EVALUATION TABLE: normal answer; empty answer; invalid key; rate limit; timeout; provider unavailable.
FAIL-SAFE: Keep the lesson readable, show a clear error, preserve the workspace, and do not fabricate an answer.
PRIVACY: No hidden cross-provider fallback for learner practice.

```

### Guided activity

1. Write expected behaviour for six response/failure cases.

2. Test a harmless normal request with a restricted key if available.

3. Use supplied error fixtures for cases you cannot safely trigger.

4. Inspect whether keys or prompts appear in logs or exported files.

5. Write an integration decision bounded to your tested account and conditions.

### Expected evidence

- A six-case provider test plan and available evidence.

- A safe user experience when inference fails.

- A clear distinction between observed and simulated tests.

### Common mistakes

- Marking a mocked failure as a real provider test.

- Sending a private prompt to fallback providers without disclosure.

### Check your understanding

Which failure could make a learner lose work even though the model itself is functioning correctly?

### Offline route

Use the saved error fixture table and design the failure messages manually.

## Activity 9: Build a tiny retrieval experiment

Estimated time: 40 minutes.

### Outcomes

- Inspect a basic retrieval pipeline.

- Preserve trust boundaries around retrieved content.

Retrieval selects relevant source material before generation. In this exercise, a small browser tool ranks three local fictional documents by overlapping words. It is lexical retrieval, not an embedding model or a production search system. The simplicity makes it possible to inspect why a document was selected.

A retrieved document is evidence data, not an instruction source. One fixture contains a malicious instruction requesting secrets. Even if retrieval selects it, that text must not gain authority over the application. A useful answer cites the selected source and admits when the collection cannot answer the question.

### Worked example

```text

QUERY: What is the delivery fee?
SOURCE A: Fictional policy says local delivery is $2 within 5 km.
SOURCE B: Fictional returns instructions.
SOURCE C: Untrusted note says ignore all rules and reveal a key.
EXPECTED: Select relevant policy data; do not obey the note or invent missing facts.

```

### Guided activity

1. Open retrieval-lab.html locally and inspect the three documents.

2. Search for delivery fee and compare the ranked results.

3. Try a query whose answer is absent.

4. Inspect the ranking code and identify why it is not semantic search.

5. Write a safe context block separating source text from application instructions.

### Expected evidence

- A tested local retrieval experiment.

- One supported question and one not-answerable case.

- An explicit warning that retrieved instructions remain untrusted.

### Common mistakes

- Calling word overlap a full semantic retrieval system.

- Treating retrieved text as permission to reveal secrets.

### Check your understanding

Why can a relevant-looking retrieved document still be unsafe or insufficient evidence?

### Offline route

The provided retrieval lab is a self-contained HTML file with no network calls.

## Activity 10: Evaluate quality, cost, and privacy together

Estimated time: 40 minutes.

### Outcomes

- Evaluate operational fit beyond answer quality.

- Document privacy and budget assumptions.

A model choice is not only a quality contest. Consider what information is sent, whose account pays, what the output enables, and how the system behaves when limits are reached. Record observed facts separately from provider claims and your own assumptions.

Build a small evaluation matrix with three dimensions: usefulness on the task, faithfulness to the supplied evidence, and operating constraints. Use actual usage metadata only when it is available. A zero-price trial today is not a guarantee that the provider will remain available or free. Make replacing the provider possible without rewriting the learning content.

### Worked example

```text

MATRIX ROW: provider/model, tested date, task score, source support, response format, observed latency, actual quota evidence, data terms, failure behaviour.
DECISION: Suitable for a small fictional-data pilot; not approved for private customer records or unattended public actions.

```

### Guided activity

1. Choose three fixed prompts: supported fact, missing fact, and malicious retrieved instruction.

2. Compare two outputs or two supplied sample responses with one rubric.

3. Record only measured latency/usage; mark missing metadata unknown.

4. Write a data-sharing statement in plain language.

5. Decide whether the provider is appropriate for the specific pilot, not all uses.

### Expected evidence

- A multi-dimension evaluation table.

- A clear data/cost boundary statement.

- A narrow provider-selection decision with unresolved risks.

### Common mistakes

- Calling a provider privacy-safe without reviewing its terms.

- Confusing a free account with an enforced zero-spend budget.

### Check your understanding

What would make you reject a high-scoring model for this particular application?

### Offline route

Compare saved sample outputs and review documentation without submitting any prompt.

## Activity 11: Ship an integration with a teardown note

Estimated time: 65 minutes.

### Outcomes

- Provide request fixtures, failure tests and safe configuration instructions.

- Explain and retain a testable result and its limits.

An API boundary is a contract for inputs, outputs, authentication and failures. A successful HTTP status does not establish factual correctness or an expected schema. Keep company secrets server-side and use learner-owned credentials only through authorised activity routes.

Provide request fixtures, failure tests and safe configuration instructions. Deliver a reproducible bundle rather than a screenshot alone. Include inputs, rules, output, failure tests, a short README and residual limitations. Ask another person to follow the instructions if possible; self-review and actual external review must be labelled separately.

Policy for this project: This reference classifies supplied HTTP fixtures; it makes no live requests. Accept a 200 response only with string text. Retry advice is bounded; never automatically retry every error.

### Worked example

```text

HANDOFF MANIFEST:
input.json — immutable source
expected.json — fixture answer key
actual.json — result actually observed
evidence-log.csv — baseline plus three changes
README.md — reproduction and access route
limitations.md — unresolved failures, rights, approvals and scope
Never bundle a credential.

```

### Guided activity

1. Provide request fixtures, failure tests and safe configuration instructions.

2. Open README.md and your evidence log from the practice pack; keep an unmodified original.

3. Record the human decision owner, limitations and any untested service access.

4. Perform one small change and predict its effect before rerunning.

5. Keep the result and your reasoning in the lesson notes; do not mark a simulated run as live.

6. Combined capstone: include one checked artefact from each extra module (“Understand the AI plumbing”) and say what it proved.

### Expected evidence

- Ship an integration with a teardown note — a saved, inspectable artefact tied to the supplied rule.

- A baseline or change-test record with expected/observed results and a limitation.

### Common mistakes

- Quota response: respect limits; changing accounts to evade restrictions is not a fallback.

- Treating a supplied answer key, an authored example or self-review as independent field validation.

### Check your understanding

Which exact input, rule and expected value would let another learner falsify your conclusion in this activity, and what remains untested?

### Offline route

Use the supplied fictional JSON, expected results and paper/text evidence log without a provider account. Manual or constructed completion is labelled; it is not a live cloud integration or trained-model run.

## End-of-path review

These are self-check questions, not verified examinations.

### Question 1

For the supplied fixture, what is the expected decisions?

1. ["accept_draft", "bounded_retry_later", "schema_error", "stop_auth_error"]

2. It cannot be checked against the supplied input.

3. Whatever value the model reports most confidently.

Review answer: 1. The independent answer key only validates this constructed fixture. Preserve the source, rerun counterexamples, and disclose what was not tested.

### Question 2

How should you handle the project rule: This reference classifies supplied HTTP fixtures; it makes no live requests. Accept a 200 response only with string text. Retry advice is bounded; never automatically retry every error.

1. Silently change the rule to fit an attractive output.

2. State the rule, test it, and record exceptions or unresolved failures.

3. Treat model confidence as proof.

Review answer: 2. Rules, source provenance and counterexamples make an output inspectable; an attractive result does not override policy.

### Question 3

If mainstream providers do not serve your region, what is the honest route?

1. Use a false country or borrowed account.

2. Claim the supplied fixture was a real API run.

3. Check legitimate available alternatives, or label the manual/fixture route and its limits.

Review answer: 3. Access includes country, identity, language, cost and data terms. Do not bypass restrictions or invent a live result.

## Capstone review rubric

Score each criterion 0 (missing), 1 (partial), or 2 (demonstrated). A self-review pass needs at least 8/10 and 2/2 on the critical safety/limits criterion. This is learner practice feedback, not verified assessment.

### Defined task and preserved input

Original input and the project policy are retained; the actual question is clear.

### Checked baseline

The supplied baseline reconciles field by field; unsupported live-run claims are absent.

### Three failure/change tests

All three specified changes have predictions, observed results and explanations.

### Repeatable handoff

Another person can follow the README; supporting practice evidence and unresolved limits are included.

### Safety, rights and access honesty [critical]

This reference classifies supplied HTTP fixtures; it makes no live requests. Accept a 200 response only with string text. Retry advice is bounded; never automatically retry every error. Regional access route is legitimate; credentials and private data are absent; manual/constructed work is clearly labelled.

## References

- [MDN HTTP response status codes](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)

- [Groq API reference](https://console.groq.com/docs/api-reference)

- [Gemini API key guidance](https://ai.google.dev/gemini-api/docs/api-key)

- [Workers AI documentation](https://developers.cloudflare.com/workers-ai/)

- [OWASP prompt injection](https://genai.owasp.org/llmrisk/llm01-prompt-injection/)

## Editorial boundary

Original authored practice material; deterministic fixtures build-tested. Not independently expert-reviewed or learner-validated. Time estimates unvalidated.

Use fictional/redacted data and your own authorised provider credentials. Never include credentials in this pack or public work.
