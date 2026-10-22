# Measure whether a workflow actually saves time

Open Practice / Planning & uncertainty / curriculum 1.0

Estimated guided practice: 4h estimated. This estimate has not been learner-tested.

Original practice material · CC BY 4.0 · Non-degree and non-accredited.

## What you will build

Deliver a measured recommendation with inputs, tests and a reproducible handoff.

## Before you start

- Open entry; inspect the worked fixture before beginning.

- A text editor/spreadsheet for the manual route. Hosted Python/Jupyter for code exercises; applicable dependencies are in requirements.txt.

- For actual AI calls, a legitimate available cloud service and authorised learner credentials; no particular provider or country is mandatory.

## Learning outcomes

- Define start/stop rules and a privacy-preserving log.

- Keep task difficulty and output criteria comparable.

- Include checking and repair rather than timing the first draft only.

- Add setup cost and inspect the change in the verdict.

- Keep a reproducible result and disclose safety, rights and regional access limits.

## Activity 1: Choose a voluntary recurring task

Estimated time: 35 minutes.

### Outcomes

- Define start/stop rules and a privacy-preserving log.

- Explain and retain a testable result and its limits.

A productivity experiment must include setup, checking and repair. Comparing a polished assisted attempt with an unfamiliar manual attempt biases the result. Repeated tasks differ; report the actual sample and conditions rather than a universal percentage.

Define start/stop rules and a privacy-preserving log. Inspect the supplied input before using any tool. Write the decision rules in your own words and calculate one small result independently. The reference output is an answer key for this deliberately bounded fixture, not proof of general capability.

Policy for this project: Total assisted time equals draft plus checking plus rework. Keep all observations, including cases where assistance loses time. No private diary uploads or employee surveillance.

For learners across regions underserved or excluded by mainstream providers: verify country eligibility, language, account/identity requirements, data terms, cost, quota and connectivity before choosing a cloud service. Use only legitimate available alternatives; never bypass restrictions or invent a country/account. No service access? Complete the labelled manual/fixture route without claiming a live AI run.

### Worked example

```text

SOURCE (authored fixture):
{
  "manual": [
    10,
    12,
    8
  ],
  "draft": [
    4,
    5,
    3
  ],
  "check": [
    3,
    4,
    2
  ],
  "rework": [
    3,
    2,
    3
  ]
}
INDEPENDENT FIXTURE TARGET:
{
  "manual_total": 30,
  "assisted_total": 29,
  "saved_minutes": 1
}

```

### Guided activity

1. Define start/stop rules and a privacy-preserving log.

2. Open input.json and expected.json from the practice pack; keep an unmodified original.

3. Record a manual prediction and the relevant rule before consulting the answer key.

4. Perform one small change and predict its effect before rerunning.

5. Keep the result and your reasoning in the lesson notes; do not mark a simulated run as live.

### Expected evidence

- Choose a voluntary recurring task — a saved, inspectable artefact tied to the supplied rule.

- A baseline or change-test record with expected/observed results and a limitation.

### Common mistakes

- Add 3 setup minutes: net saving changes to -2.

- Treating a supplied answer key, an authored example or self-review as independent field validation.

### Check your understanding

Which exact input, rule and expected value would let another learner falsify your conclusion in this activity, and what remains untested?

### Offline route

Use the supplied fictional JSON, expected results and paper/text evidence log without a provider account. Manual or constructed completion is labelled; it is not a live cloud integration or trained-model run.

## Activity 2: Record a manual baseline

Estimated time: 35 minutes.

### Outcomes

- Keep task difficulty and output criteria comparable.

- Explain and retain a testable result and its limits.

A productivity experiment must include setup, checking and repair. Comparing a polished assisted attempt with an unfamiliar manual attempt biases the result. Repeated tasks differ; report the actual sample and conditions rather than a universal percentage.

Keep task difficulty and output criteria comparable. Establish a baseline before changing prompts or code. Keep the original input immutable. Record expected values, observed values and whether each comparison passed. If the expected file conflicts with a justified policy, investigate rather than forcing a convenient match.

Policy for this project: Total assisted time equals draft plus checking plus rework. Keep all observations, including cases where assistance loses time. No private diary uploads or employee surveillance.

### Worked example

```text

MANUAL BASELINE / compare every named field
{
  "manual_total": 30,
  "assisted_total": 29,
  "saved_minutes": 1
}
Keep a separate observed-result column; the answer key is not a model response.

```

### Guided activity

1. Keep task difficulty and output criteria comparable.

2. Open input.json and expected.json from the practice pack; keep an unmodified original.

3. Record expected and observed values separately; explain every mismatch.

4. Perform one small change and predict its effect before rerunning.

5. Keep the result and your reasoning in the lesson notes; do not mark a simulated run as live.

### Expected evidence

- Record a manual baseline — a saved, inspectable artefact tied to the supplied rule.

- A baseline or change-test record with expected/observed results and a limitation.

### Common mistakes

- Drop the slowest assisted case: label cherry-picking, not improvement.

- Treating a supplied answer key, an authored example or self-review as independent field validation.

### Check your understanding

Which exact input, rule and expected value would let another learner falsify your conclusion in this activity, and what remains untested?

### Offline route

Use the supplied fictional JSON, expected results and paper/text evidence log without a provider account. Manual or constructed completion is labelled; it is not a live cloud integration or trained-model run.

## Activity 3: Count the full assisted workflow

Estimated time: 35 minutes.

### Outcomes

- Include checking and repair rather than timing the first draft only.

- Explain and retain a testable result and its limits.

A productivity experiment must include setup, checking and repair. Comparing a polished assisted attempt with an unfamiliar manual attempt biases the result. Repeated tasks differ; report the actual sample and conditions rather than a universal percentage.

Include checking and repair rather than timing the first draft only. Build one inspectable transformation or bounded AI prompt. Keep calculation and validation deterministic where possible. If you make a permitted hosted call, save the actual response separately from the authored examples and verify its material claims; the supplied reference never simulates a live model.

Policy for this project: Total assisted time equals draft plus checking plus rework. Keep all observations, including cases where assistance loses time. No private diary uploads or employee surveillance.

### Worked example

```text

PROJECT CONTRACT:
Total assisted time equals draft plus checking plus rework. Keep all observations, including cases where assistance loses time. No private diary uploads or employee surveillance.
HOSTED REFERENCE: open hosted-lab.ipynb or run reference.py with all fixture files together.
EXPECTED CONSTRUCTED RESULT:
{
  "manual_total": 30,
  "assisted_total": 29,
  "saved_minutes": 1
}

```

### Guided activity

1. Include checking and repair rather than timing the first draft only.

2. Open hosted-lab.ipynb and the reference code from the practice pack; keep an unmodified original.

3. Record expected and observed values separately; explain every mismatch.

4. Perform A task changes in complexity: record the confound rather than reusing a prior saving.

5. Keep the result and your reasoning in the lesson notes; do not mark a simulated run as live.

### Expected evidence

- Count the full assisted workflow — a saved, inspectable artefact tied to the supplied rule.

- A baseline or change-test record with expected/observed results and a limitation.

### Common mistakes

- A task changes in complexity: record the confound rather than reusing a prior saving.

- Treating a supplied answer key, an authored example or self-review as independent field validation.

### Check your understanding

Which exact input, rule and expected value would let another learner falsify your conclusion in this activity, and what remains untested?

### Offline route

Use the supplied fictional JSON, expected results and paper/text evidence log without a provider account. Manual or constructed completion is labelled; it is not a live cloud integration or trained-model run.

## Activity 4: Stress-test the apparent saving

Estimated time: 35 minutes.

### Outcomes

- Add setup cost and inspect the change in the verdict.

- Explain and retain a testable result and its limits.

A productivity experiment must include setup, checking and repair. Comparing a polished assisted attempt with an unfamiliar manual attempt biases the result. Repeated tasks differ; report the actual sample and conditions rather than a universal percentage.

Add setup cost and inspect the change in the verdict. Change one assumption at a time and predict the result first. Retain the failure, the revision and the rerun evidence. A failure is useful information: hiding a bad output or editing a test target after seeing the answer destroys the value of the experiment.

Policy for this project: Total assisted time equals draft plus checking plus rework. Keep all observations, including cases where assistance loses time. No private diary uploads or employee surveillance.

### Worked example

```text

CHANGE TESTS — predict before running:
1. Add 3 setup minutes: net saving changes to -2.
2. Drop the slowest assisted case: label cherry-picking, not improvement.
3. A task changes in complexity: record the confound rather than reusing a prior saving.
Keep the original expected.json unchanged.

```

### Guided activity

1. Add setup cost and inspect the change in the verdict.

2. Open failure-tests.md from the practice pack; keep an unmodified original.

3. Record expected and observed values separately; explain every mismatch.

4. Perform Add 3 setup minutes: net saving changes to -2.

5. Keep the result and your reasoning in the lesson notes; do not mark a simulated run as live.

### Expected evidence

- Stress-test the apparent saving — a saved, inspectable artefact tied to the supplied rule.

- A baseline or change-test record with expected/observed results and a limitation.

### Common mistakes

- Add 3 setup minutes: net saving changes to -2.

- Treating a supplied answer key, an authored example or self-review as independent field validation.

### Check your understanding

Which exact input, rule and expected value would let another learner falsify your conclusion in this activity, and what remains untested?

### Offline route

Use the supplied fictional JSON, expected results and paper/text evidence log without a provider account. Manual or constructed completion is labelled; it is not a live cloud integration or trained-model run.

## Activity 5: Build a sustainable work plan

Estimated time: 35 minutes.

### Outcomes

- Prioritisation is a choice with constraints, not a reason to monitor other people secretly.

- Explain and retain a testable result and its limits.

A productivity experiment must include setup, checking and repair. Comparing a polished assisted attempt with an unfamiliar manual attempt biases the result. Repeated tasks differ; report the actual sample and conditions rather than a universal percentage.

Prioritisation is a choice with constraints, not a reason to monitor other people secretly. Review what the fixture cannot establish. Explain who owns the decision, where human approval is needed and which access or professional constraints remain. Do not describe a small educational success as production readiness, certification, legal compliance or a guarantee.

Policy for this project: Total assisted time equals draft plus checking plus rework. Keep all observations, including cases where assistance loses time. No private diary uploads or employee surveillance.

For learners across regions underserved or excluded by mainstream providers: verify country eligibility, language, account/identity requirements, data terms, cost, quota and connectivity before choosing a cloud service. Use only legitimate available alternatives; never bypass restrictions or invent a country/account. No service access? Complete the labelled manual/fixture route without claiming a live AI run.

### Worked example

```text

REVIEW BOUNDARY:
Total assisted time equals draft plus checking plus rework. Keep all observations, including cases where assistance loses time. No private diary uploads or employee surveillance.

ACCESS / NOT TESTED: unavailable provider, unsupported language and absent external feedback must remain explicit.

```

### Guided activity

1. Prioritisation is a choice with constraints, not a reason to monitor other people secretly.

2. Open README.md and your evidence log from the practice pack; keep an unmodified original.

3. Record the human decision owner, limitations and any untested service access.

4. Perform one small change and predict its effect before rerunning.

5. Keep the result and your reasoning in the lesson notes; do not mark a simulated run as live.

### Expected evidence

- Build a sustainable work plan — a saved, inspectable artefact tied to the supplied rule.

- A baseline or change-test record with expected/observed results and a limitation.

### Common mistakes

- Drop the slowest assisted case: label cherry-picking, not improvement.

- Treating a supplied answer key, an authored example or self-review as independent field validation.

### Check your understanding

Which exact input, rule and expected value would let another learner falsify your conclusion in this activity, and what remains untested?

### Offline route

Use the supplied fictional JSON, expected results and paper/text evidence log without a provider account. Manual or constructed completion is labelled; it is not a live cloud integration or trained-model run.

## Activity 6: Deliver a measured recommendation

Estimated time: 65 minutes.

### Outcomes

- Report sample, conditions and a reversible next step.

- Explain and retain a testable result and its limits.

A productivity experiment must include setup, checking and repair. Comparing a polished assisted attempt with an unfamiliar manual attempt biases the result. Repeated tasks differ; report the actual sample and conditions rather than a universal percentage.

Report sample, conditions and a reversible next step. Deliver a reproducible bundle rather than a screenshot alone. Include inputs, rules, output, failure tests, a short README and residual limitations. Ask another person to follow the instructions if possible; self-review and actual external review must be labelled separately.

Policy for this project: Total assisted time equals draft plus checking plus rework. Keep all observations, including cases where assistance loses time. No private diary uploads or employee surveillance.

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

1. Report sample, conditions and a reversible next step.

2. Open README.md and your evidence log from the practice pack; keep an unmodified original.

3. Record the human decision owner, limitations and any untested service access.

4. Perform one small change and predict its effect before rerunning.

5. Keep the result and your reasoning in the lesson notes; do not mark a simulated run as live.

### Expected evidence

- Deliver a measured recommendation — a saved, inspectable artefact tied to the supplied rule.

- A baseline or change-test record with expected/observed results and a limitation.

### Common mistakes

- A task changes in complexity: record the confound rather than reusing a prior saving.

- Treating a supplied answer key, an authored example or self-review as independent field validation.

### Check your understanding

Which exact input, rule and expected value would let another learner falsify your conclusion in this activity, and what remains untested?

### Offline route

Use the supplied fictional JSON, expected results and paper/text evidence log without a provider account. Manual or constructed completion is labelled; it is not a live cloud integration or trained-model run.

## End-of-path review

These are self-check questions, not verified examinations.

### Question 1

For the supplied fixture, what is the expected manual_total?

1. 30

2. It cannot be checked against the supplied input.

3. Whatever value the model reports most confidently.

Review answer: 1. The independent answer key only validates this constructed fixture. Preserve the source, rerun counterexamples, and disclose what was not tested.

### Question 2

How should you handle the project rule: Total assisted time equals draft plus checking plus rework. Keep all observations, including cases where assistance loses time. No private diary uploads or employee surveillance.

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

Total assisted time equals draft plus checking plus rework. Keep all observations, including cases where assistance loses time. No private diary uploads or employee surveillance. Regional access route is legitimate; credentials and private data are absent; manual/constructed work is clearly labelled.

## References

- [Python time measurement](https://docs.python.org/3/library/timeit.html)

## Editorial boundary

Original authored practice material; deterministic fixtures build-tested. Not independently expert-reviewed or learner-validated. Time estimates unvalidated.

Use fictional/redacted data and your own authorised provider credentials. Never include credentials in this pack or public work.
