# Build a small project plan you can verify

Open Practice / Planning & uncertainty / curriculum 1.0

Estimated guided practice: 4h estimated. This estimate has not been learner-tested.

Original practice material · CC BY 4.0 · Non-degree and non-accredited.

## What you will build

Deliver a plan and retrospective template with inputs, tests and a reproducible handoff.

## Before you start

- Open entry; inspect the worked fixture before beginning.

- A text editor/spreadsheet for the manual route. Hosted Python/Jupyter for code exercises; applicable dependencies are in requirements.txt.

- For actual AI calls, a legitimate available cloud service and authorised learner credentials; no particular provider or country is mandatory.

## Learning outcomes

- Write each predecessor before drawing dates.

- Use a small dependency graph and hand-check the critical chain.

- Compute finish times from input durations rather than typing static dates.

- Reject invalid dependency graphs; document resource assumptions.

- Keep a reproducible result and disclose safety, rights and regional access limits.

## Activity 1: Map deliverables and dependencies

Estimated time: 35 minutes.

### Outcomes

- Write each predecessor before drawing dates.

- Explain and retain a testable result and its limits.

A plan needs dependency logic and capacity limits, not just attractive dates. Calculate the earliest possible finish under explicit assumptions. A change in duration must propagate to dependent work rather than remain hidden in a cached report.

Write each predecessor before drawing dates. Inspect the supplied input before using any tool. Write the decision rules in your own words and calculate one small result independently. The reference output is an answer key for this deliberately bounded fixture, not proof of general capability.

Policy for this project: Task A takes 2 days, B takes 3 after A, and C takes 1 after A. B and C can run in parallel. No staffing or safety-engineering decisions are automated.

For learners across regions underserved or excluded by mainstream providers: verify country eligibility, language, account/identity requirements, data terms, cost, quota and connectivity before choosing a cloud service. Use only legitimate available alternatives; never bypass restrictions or invent a country/account. No service access? Complete the labelled manual/fixture route without claiming a live AI run.

### Worked example

```text

SOURCE (authored fixture):
{
  "duration": {
    "A": 2,
    "B": 3,
    "C": 1
  },
  "depends": {
    "A": [],
    "B": [
      "A"
    ],
    "C": [
      "A"
    ]
  }
}
INDEPENDENT FIXTURE TARGET:
{
  "finish": {
    "A": 2,
    "B": 5,
    "C": 3
  },
  "project_days": 5
}

```

### Guided activity

1. Write each predecessor before drawing dates.

2. Open input.json and expected.json from the practice pack; keep an unmodified original.

3. Record a manual prediction and the relevant rule before consulting the answer key.

4. Perform one small change and predict its effect before rerunning.

5. Keep the result and your reasoning in the lesson notes; do not mark a simulated run as live.

### Expected evidence

- Map deliverables and dependencies — a saved, inspectable artefact tied to the supplied rule.

- A baseline or change-test record with expected/observed results and a limitation.

### Common mistakes

- Add a dependency A after B: detect a cycle.

- Treating a supplied answer key, an authored example or self-review as independent field validation.

### Check your understanding

Which exact input, rule and expected value would let another learner falsify your conclusion in this activity, and what remains untested?

### Offline route

Use the supplied fictional JSON, expected results and paper/text evidence log without a provider account. Manual or constructed completion is labelled; it is not a live cloud integration or trained-model run.

## Activity 2: Calculate the earliest finish

Estimated time: 35 minutes.

### Outcomes

- Use a small dependency graph and hand-check the critical chain.

- Explain and retain a testable result and its limits.

A plan needs dependency logic and capacity limits, not just attractive dates. Calculate the earliest possible finish under explicit assumptions. A change in duration must propagate to dependent work rather than remain hidden in a cached report.

Use a small dependency graph and hand-check the critical chain. Establish a baseline before changing prompts or code. Keep the original input immutable. Record expected values, observed values and whether each comparison passed. If the expected file conflicts with a justified policy, investigate rather than forcing a convenient match.

Policy for this project: Task A takes 2 days, B takes 3 after A, and C takes 1 after A. B and C can run in parallel. No staffing or safety-engineering decisions are automated.

### Worked example

```text

MANUAL BASELINE / compare every named field
{
  "finish": {
    "A": 2,
    "B": 5,
    "C": 3
  },
  "project_days": 5
}
Keep a separate observed-result column; the answer key is not a model response.

```

### Guided activity

1. Use a small dependency graph and hand-check the critical chain.

2. Open input.json and expected.json from the practice pack; keep an unmodified original.

3. Record expected and observed values separately; explain every mismatch.

4. Perform one small change and predict its effect before rerunning.

5. Keep the result and your reasoning in the lesson notes; do not mark a simulated run as live.

### Expected evidence

- Calculate the earliest finish — a saved, inspectable artefact tied to the supplied rule.

- A baseline or change-test record with expected/observed results and a limitation.

### Common mistakes

- Increase A to 4 days: project duration becomes 7.

- Treating a supplied answer key, an authored example or self-review as independent field validation.

### Check your understanding

Which exact input, rule and expected value would let another learner falsify your conclusion in this activity, and what remains untested?

### Offline route

Use the supplied fictional JSON, expected results and paper/text evidence log without a provider account. Manual or constructed completion is labelled; it is not a live cloud integration or trained-model run.

## Activity 3: Build a change-aware plan

Estimated time: 35 minutes.

### Outcomes

- Compute finish times from input durations rather than typing static dates.

- Explain and retain a testable result and its limits.

A plan needs dependency logic and capacity limits, not just attractive dates. Calculate the earliest possible finish under explicit assumptions. A change in duration must propagate to dependent work rather than remain hidden in a cached report.

Compute finish times from input durations rather than typing static dates. Build one inspectable transformation or bounded AI prompt. Keep calculation and validation deterministic where possible. If you make a permitted hosted call, save the actual response separately from the authored examples and verify its material claims; the supplied reference never simulates a live model.

Policy for this project: Task A takes 2 days, B takes 3 after A, and C takes 1 after A. B and C can run in parallel. No staffing or safety-engineering decisions are automated.

### Worked example

```text

PROJECT CONTRACT:
Task A takes 2 days, B takes 3 after A, and C takes 1 after A. B and C can run in parallel. No staffing or safety-engineering decisions are automated.
HOSTED REFERENCE: open hosted-lab.ipynb or run reference.py with all fixture files together.
EXPECTED CONSTRUCTED RESULT:
{
  "finish": {
    "A": 2,
    "B": 5,
    "C": 3
  },
  "project_days": 5
}

```

### Guided activity

1. Compute finish times from input durations rather than typing static dates.

2. Open hosted-lab.ipynb and the reference code from the practice pack; keep an unmodified original.

3. Record expected and observed values separately; explain every mismatch.

4. Perform Only one worker available: parallel execution is no longer a valid assumption.

5. Keep the result and your reasoning in the lesson notes; do not mark a simulated run as live.

### Expected evidence

- Build a change-aware plan — a saved, inspectable artefact tied to the supplied rule.

- A baseline or change-test record with expected/observed results and a limitation.

### Common mistakes

- Only one worker available: parallel execution is no longer a valid assumption.

- Treating a supplied answer key, an authored example or self-review as independent field validation.

### Check your understanding

Which exact input, rule and expected value would let another learner falsify your conclusion in this activity, and what remains untested?

### Offline route

Use the supplied fictional JSON, expected results and paper/text evidence log without a provider account. Manual or constructed completion is labelled; it is not a live cloud integration or trained-model run.

## Activity 4: Test a cycle and capacity change

Estimated time: 35 minutes.

### Outcomes

- Reject invalid dependency graphs; document resource assumptions.

- Explain and retain a testable result and its limits.

A plan needs dependency logic and capacity limits, not just attractive dates. Calculate the earliest possible finish under explicit assumptions. A change in duration must propagate to dependent work rather than remain hidden in a cached report.

Reject invalid dependency graphs; document resource assumptions. Change one assumption at a time and predict the result first. Retain the failure, the revision and the rerun evidence. A failure is useful information: hiding a bad output or editing a test target after seeing the answer destroys the value of the experiment.

Policy for this project: Task A takes 2 days, B takes 3 after A, and C takes 1 after A. B and C can run in parallel. No staffing or safety-engineering decisions are automated.

### Worked example

```text

CHANGE TESTS — predict before running:
1. Add a dependency A after B: detect a cycle.
2. Increase A to 4 days: project duration becomes 7.
3. Only one worker available: parallel execution is no longer a valid assumption.
Keep the original expected.json unchanged.

```

### Guided activity

1. Reject invalid dependency graphs; document resource assumptions.

2. Open failure-tests.md from the practice pack; keep an unmodified original.

3. Record expected and observed values separately; explain every mismatch.

4. Perform Add a dependency A after B: detect a cycle.

5. Keep the result and your reasoning in the lesson notes; do not mark a simulated run as live.

### Expected evidence

- Test a cycle and capacity change — a saved, inspectable artefact tied to the supplied rule.

- A baseline or change-test record with expected/observed results and a limitation.

### Common mistakes

- Add a dependency A after B: detect a cycle.

- Treating a supplied answer key, an authored example or self-review as independent field validation.

### Check your understanding

Which exact input, rule and expected value would let another learner falsify your conclusion in this activity, and what remains untested?

### Offline route

Use the supplied fictional JSON, expected results and paper/text evidence log without a provider account. Manual or constructed completion is labelled; it is not a live cloud integration or trained-model run.

## Activity 5: Rehearse stakeholder communication

Estimated time: 35 minutes.

### Outcomes

- Name an owner and uncertainty without inventing executive authority.

- Explain and retain a testable result and its limits.

A plan needs dependency logic and capacity limits, not just attractive dates. Calculate the earliest possible finish under explicit assumptions. A change in duration must propagate to dependent work rather than remain hidden in a cached report.

Name an owner and uncertainty without inventing executive authority. Review what the fixture cannot establish. Explain who owns the decision, where human approval is needed and which access or professional constraints remain. Do not describe a small educational success as production readiness, certification, legal compliance or a guarantee.

Policy for this project: Task A takes 2 days, B takes 3 after A, and C takes 1 after A. B and C can run in parallel. No staffing or safety-engineering decisions are automated.

For learners across regions underserved or excluded by mainstream providers: verify country eligibility, language, account/identity requirements, data terms, cost, quota and connectivity before choosing a cloud service. Use only legitimate available alternatives; never bypass restrictions or invent a country/account. No service access? Complete the labelled manual/fixture route without claiming a live AI run.

Supporting practice — Leadership as delivery and accountability: A useful project owner communicates scope, uncertainty, decisions and responsibility. A plan generated by AI does not give authority over people. Practise a change conversation that names trade-offs and asks for approval rather than promising impossible dates. Produce a stakeholder handoff, owner/decision table and retrospective with one negotiated change.

### Worked example

```text

REVIEW BOUNDARY:
Task A takes 2 days, B takes 3 after A, and C takes 1 after A. B and C can run in parallel. No staffing or safety-engineering decisions are automated.
Produce a stakeholder handoff, owner/decision table and retrospective with one negotiated change.
ACCESS / NOT TESTED: unavailable provider, unsupported language and absent external feedback must remain explicit.

```

### Guided activity

1. Name an owner and uncertainty without inventing executive authority.

2. Open README.md and your evidence log from the practice pack; keep an unmodified original.

3. Record the human decision owner, limitations and any untested service access.

4. Perform one small change and predict its effect before rerunning.

5. Keep the result and your reasoning in the lesson notes; do not mark a simulated run as live.

6. Produce a stakeholder handoff, owner/decision table and retrospective with one negotiated change.

### Expected evidence

- Rehearse stakeholder communication — a saved, inspectable artefact tied to the supplied rule.

- A baseline or change-test record with expected/observed results and a limitation.

- Produce a stakeholder handoff, owner/decision table and retrospective with one negotiated change.

### Common mistakes

- Increase A to 4 days: project duration becomes 7.

- Treating a supplied answer key, an authored example or self-review as independent field validation.

### Check your understanding

Which exact input, rule and expected value would let another learner falsify your conclusion in this activity, and what remains untested?

### Offline route

Use the supplied fictional JSON, expected results and paper/text evidence log without a provider account. Manual or constructed completion is labelled; it is not a live cloud integration or trained-model run.

## Activity 6: Deliver a plan and retrospective template

Estimated time: 65 minutes.

### Outcomes

- Track actual work separately from estimates.

- Explain and retain a testable result and its limits.

A plan needs dependency logic and capacity limits, not just attractive dates. Calculate the earliest possible finish under explicit assumptions. A change in duration must propagate to dependent work rather than remain hidden in a cached report.

Track actual work separately from estimates. Deliver a reproducible bundle rather than a screenshot alone. Include inputs, rules, output, failure tests, a short README and residual limitations. Ask another person to follow the instructions if possible; self-review and actual external review must be labelled separately.

Policy for this project: Task A takes 2 days, B takes 3 after A, and C takes 1 after A. B and C can run in parallel. No staffing or safety-engineering decisions are automated.

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

1. Track actual work separately from estimates.

2. Open README.md and your evidence log from the practice pack; keep an unmodified original.

3. Record the human decision owner, limitations and any untested service access.

4. Perform one small change and predict its effect before rerunning.

5. Keep the result and your reasoning in the lesson notes; do not mark a simulated run as live.

### Expected evidence

- Deliver a plan and retrospective template — a saved, inspectable artefact tied to the supplied rule.

- A baseline or change-test record with expected/observed results and a limitation.

### Common mistakes

- Only one worker available: parallel execution is no longer a valid assumption.

- Treating a supplied answer key, an authored example or self-review as independent field validation.

### Check your understanding

Which exact input, rule and expected value would let another learner falsify your conclusion in this activity, and what remains untested?

### Offline route

Use the supplied fictional JSON, expected results and paper/text evidence log without a provider account. Manual or constructed completion is labelled; it is not a live cloud integration or trained-model run.

## End-of-path review

These are self-check questions, not verified examinations.

### Question 1

For the supplied fixture, what is the expected finish?

1. {"A": 2, "B": 5, "C": 3}

2. It cannot be checked against the supplied input.

3. Whatever value the model reports most confidently.

Review answer: 1. The independent answer key only validates this constructed fixture. Preserve the source, rerun counterexamples, and disclose what was not tested.

### Question 2

How should you handle the project rule: Task A takes 2 days, B takes 3 after A, and C takes 1 after A. B and C can run in parallel. No staffing or safety-engineering decisions are automated.

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

Task A takes 2 days, B takes 3 after A, and C takes 1 after A. B and C can run in parallel. No staffing or safety-engineering decisions are automated. Regional access route is legitimate; credentials and private data are absent; manual/constructed work is clearly labelled.

## References

- [Python graphlib documentation](https://docs.python.org/3/library/graphlib.html)

## Editorial boundary

Original authored practice material; deterministic fixtures build-tested. Not independently expert-reviewed or learner-validated. Time estimates unvalidated.

Use fictional/redacted data and your own authorised provider credentials. Never include credentials in this pack or public work.
