# Automate the boring bit—safely

Open Practice / Automation / curriculum 2.0

Estimated guided practice: 4h estimated. This estimate has not been learner-tested.

Original practice material · CC BY 4.0 · Non-degree and non-accredited.

## What you will build

Design an approval-first workflow

## Before you start

- Understand a task specification and simple tables/JSON.

- No real account integrations are needed.

## Learning outcomes

- Map states, permissions and failure paths.

- Design bounded retries and duplicate protection.

- Validate requests and protect review/approval boundaries.

- Deliver an operationally reviewable dry-run design.

## Activity 1: Map the workflow

Estimated time: 30 minutes.

### Outcomes

- Map automation states and responsibilities.

- Separate generated text from permission to act.

An automation is a sequence of state changes, not just a prompt on a timer. Define the input, validation, transformation, review, output, and failure path. Start with a fictional weekly task summary so you can reason about the process without sending messages or touching real systems.

The sample input contains four tasks: two done, one todo, and one blocked. A checked summary must preserve those counts. AI may help draft the wording, but it must not decide whether publication is authorised. Put the approval gate in deterministic workflow logic rather than relying on a sentence in a prompt.

### Worked example

```text

FLOW: task JSON → validate → count states → draft summary → human review → approved output.
EXPECTED COUNTS: total 4; done 2; todo 1; blocked 1.
FAILURE PATH: invalid input is rejected; missing approval means do not publish.

```

### Guided activity

1. Draw the six stages and mark where data crosses a service boundary.

2. Identify which stages need AI and which are deterministic.

3. Calculate expected task counts independently.

4. Define the reviewer and the observable approval signal.

5. Draw a separate failure path for invalid input and provider failure.

### Expected evidence

- A workflow diagram with explicit failure paths.

- Correct expected counts for the fictional task list.

- A deterministic approval gate outside the model.

### Common mistakes

- Calling a generated paragraph a completed workflow.

- Letting the model decide that its own output is approved.

### Check your understanding

If the model writes approved in its answer, does that authorise publication in your design?

### Offline route

Use the fixture JSON and draw the process without connecting any service.

## Activity 2: Plan retries and duplicate protection

Estimated time: 40 minutes.

### Outcomes

- Design bounded retries and replay handling.

- Recognise partial failures around side effects.

Retrying a failed request can duplicate an action if the first attempt actually succeeded but its response was lost. Use a stable job identifier and check recorded state before any side effect. A timestamp alone may not identify the same logical job across retries.

Not every failure deserves a retry. Authentication failures require configuration changes; exhausted budgets require a human decision or a reset, not a loop. Temporary network or provider failures may be retried a small number of times with a delay. Respect documented provider limits and do not rotate accounts to evade them.

### Worked example

```text

JOB: weekly-demo-001.
STATES: received → validated → drafted → awaiting_review → approved → published.
REPLAY: If weekly-demo-001 is already published, return its recorded result without publishing again.
RETRY POLICY: at most two attempts for a transient failure; never blindly retry 401/402.

```

### Guided activity

1. Choose a stable ID for the weekly report job.

2. Write a state record containing job ID, status, attempts, and last error category.

3. Simulate the same request arriving twice.

4. Write separate handling for authentication, budget, rate-limit, and transient failures.

5. State what happens if the process stops after publishing but before saving its final status.

### Expected evidence

- A retry policy and state model.

- A duplicate-request simulation with no second side effect.

- An acknowledged partial-failure risk and proposed mitigation.

### Common mistakes

- Retrying every HTTP error immediately.

- Assuming exactly-once delivery without controlling the side-effect boundary.

### Check your understanding

Which missing record could make a published job run again after a restart?

### Offline route

Walk through repeated requests using a paper state table.

## Activity 3: Keep a stop switch

Estimated time: 35 minutes.

### Outcomes

- Define operational controls and safe defaults.

- Recover without exposing secrets or widening permissions.

An automated workflow needs limited permissions, a pause control, and a clear person responsible for recovery. Logs should make failures understandable without storing API keys, private prompts, or unnecessary personal data. A stop switch is only useful if someone knows how to operate it and has tested it.

Define safe defaults: disabled until configured, draft-only before approval, and no publication when the reviewer or provider is unavailable. A workflow can continue to prepare a manual report when AI fails. Availability of the underlying learning material or input data should not depend on a model responding.

### Worked example

```text

STOP PROCEDURE: disable publication; record the last completed job ID; notify the reviewer; inspect pending cases; correct the issue; rerun dry-run tests; resume only after explicit approval.
LOG EXAMPLE: job_id, stage, result_code, time—not key, raw prompt, or customer record.

```

### Guided activity

1. List the minimum permissions each stage needs.

2. Write a five-step pause and recovery procedure.

3. Choose safe log fields and identify fields that must never be logged.

4. Simulate a provider outage while publication is disabled.

5. Check that a manual summary remains possible.

### Expected evidence

- A tested stop procedure.

- A minimum-permission map and log-field list.

- A manual fallback that does not require cloud AI.

### Common mistakes

- Giving a report generator broad account administration rights.

- Writing secrets into logs to make debugging easier.

### Check your understanding

Who can pause the workflow, and how do they know the pause actually took effect?

### Offline route

Perform a tabletop shutdown exercise with the fictional job records.

## Activity 4: Validate webhook inputs and replays

Estimated time: 40 minutes.

### Outcomes

- Validate message structure and trust boundaries.

- Distinguish a practice simulation from authenticated integration.

A webhook is an untrusted request until validated. Check expected fields, types, size, method, origin/authentication requirements, and allowed values. A valid JSON document can still carry an invalid job. Never treat model-generated text or an incoming approved field as proof of a trusted reviewer’s action.

This exercise uses saved JSON examples rather than a public endpoint. It does not implement cryptographic webhook signatures. In a real integration, follow the provider’s signature verification and replay-protection guidance. Do not invent a generic signature algorithm and assume it matches every provider.

### Worked example

```text

INPUT CASES: complete job; duplicate job ID; missing job ID; tasks is a string instead of an array; approved=false.
EXPECTED: validate structure before processing; reject invalid types; deduplicate repeated IDs; keep unapproved jobs out of publication.

```

### Guided activity

1. Read webhook-cases.json and list the required fields and types.

2. Classify each case before running any transformation.

3. Write an expected response and next state for each case.

4. Add a payload-size limit to your design.

5. Document that signature verification remains a production requirement, not a completed feature here.

### Expected evidence

- A schema/checklist and five classified input cases.

- No publication path from an untrusted approval field.

- A precise statement about unimplemented signature verification.

### Common mistakes

- Parsing JSON and calling it fully validated.

- Trusting a claimed role or approval inside incoming data.

### Check your understanding

Why is approved=true in a request body not sufficient evidence of human authorisation?

### Offline route

Classify the saved request examples manually; no webhook needs to be exposed.

## Activity 5: Instrument and recover safely

Estimated time: 40 minutes.

### Outcomes

- Build minimal useful observability.

- Reconcile operational counts and investigate exceptions.

Useful monitoring reports what stage failed, how often, and what the operator can do next. It does not need to capture every prompt or private document. Start with counts for received, rejected, drafted, awaiting review, published, and failed jobs.

A dashboard is not evidence that a workflow is correct. Reconcile counts and inspect exceptional cases. If two copies of the same job are received and one is published, report the duplicate as a replay rather than a second completed job. Keep a runbook that describes expected alerts and a safe replay procedure.

### Worked example

```text

RUN SUMMARY: received 5; invalid 1; duplicate replays 1; unique valid jobs 3; awaiting review 2; published 1.
RECONCILIATION: 1 invalid + 1 duplicate + 3 unique valid = 5 received.
ALERT: publication attempted without trusted approval → pause and investigate.

```

### Guided activity

1. Create a run summary from the supplied simulated events.

2. Reconcile received events to rejected, replayed, and unique jobs.

3. Choose two alerts with an actionable response.

4. Write a safe replay procedure that checks side-effect status.

5. Review the log design for secrets and unnecessary personal data.

### Expected evidence

- A reconciled operational report.

- Two alerts and an operator runbook.

- A documented safe-replay check.

### Common mistakes

- Counting every retry as a new successful job.

- Collecting private content when aggregate state is sufficient.

### Check your understanding

Can you explain every received event without double-counting a replay?

### Offline route

Use the supplied event table and build the operational report in a spreadsheet.

## Activity 6: Capstone: design an approval-first report pipeline

Estimated time: 55 minutes.

### Outcomes

- Deliver a reviewable automation design.

- Communicate production gaps honestly.

Deliver a complete design and dry-run simulation for the fictional weekly report. The artefact should explain what data enters, how it is checked, what AI may draft, who approves, how publication would be guarded, and how the process stops. Actual unattended publication is outside this exercise.

Use a small state table to demonstrate normal operation, invalid input, replay, provider outage, and a stop command. The work is successful when another learner can follow those cases and identify the next safe action. Do not claim that a diagram is a deployed agent or that a dry run proves production reliability.

### Worked example

```text

PACK: workflow.svg or diagram.md; schema.md; state-table.csv; test-cases.md; retry-policy.md; runbook.md.
ACCEPTANCE: every test has a next state; replays do not duplicate publication; all public actions require a trusted approval gate; stop procedure is demonstrated.

```

### Guided activity

1. Assemble the six design artefacts and a fictional input set.

2. Run five dry-run scenarios and record states after each step.

3. Challenge one partial-failure case with another reviewer.

4. Score the capstone rubric using actual scenario evidence.

5. Publish a redacted design pack labelled simulation, not production deployment.

### Expected evidence

- A complete approval-first design pack.

- Five traceable dry-run scenarios.

- A candid list of production gaps and a tested stop procedure.

### Common mistakes

- Claiming autonomy while hiding an untested manual step.

- Presenting simulated results as real delivered messages.

### Check your understanding

Which part would need the strongest additional review before connecting this design to real accounts?

### Offline route

The capstone is intentionally completable with files, diagrams, and manual simulation.

## End-of-path review

These are self-check questions, not verified examinations.

### Question 1

Which action needs a human approval gate in this exercise?

1. Reading fictional sample tasks

2. Publishing a public message

3. Checking a required field

Review answer: 2. Check the relevant worked example and its evidence/authority boundary.

### Question 2

Does an incoming approved=true field establish trusted human approval?

1. Yes, if it is valid JSON.

2. Only if the model repeats it.

3. No; approval must be authenticated outside untrusted content.

Review answer: 3. Parsing a field does not establish who set it or whether they had authority.

### Question 3

Why record a stable job ID?

1. To recognise repeated delivery of the same logical job.

2. To hide failures.

3. To guarantee all networks deliver exactly once.

Review answer: 1. Stable IDs support deduplication; they do not automatically solve every side-effect boundary.

## Capstone review rubric

Score each criterion 0 (missing), 1 (partial), or 2 (demonstrated). A self-review pass needs at least 8/10 and 2/2 on the final safety/limits criterion. This is practice feedback, not verified assessment.

### Workflow model

Input, validation, drafting, review, publication and failure paths are explicit.

### Replay handling

Stable IDs and state checks prevent duplicate simulated publication.

### Failure coverage

Five scenarios have traceable next states and safe defaults.

### Operations

Minimal logs, alerts, reconciliation and stop/recovery procedures are demonstrated.

### Authority and honesty [critical]

No real unattended public actions; simulation and production gaps are labelled.

## References

- [HTTP response status codes](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)

- [OWASP logging guidance](https://cheatsheetseries.owasp.org/cheatsheets/Logging_Cheat_Sheet.html)

## Editorial boundary

Original authored practice material; not independently expert-reviewed.

Use fictional/redacted data and your own authorised provider credentials. Never include credentials in this pack or public work.
