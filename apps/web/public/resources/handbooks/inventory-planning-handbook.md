# Make a reversible stock-planning decision

Open Practice / Planning & uncertainty / curriculum 1.0

Estimated guided practice: 4h estimated. This estimate has not been learner-tested.

Original practice material · CC BY 4.0 · Non-degree and non-accredited.

## What you will build

Deliver a planning dashboard with inputs, tests and a reproducible handoff.

## Before you start

- Spreadsheet onramp; inspect the worked fixture before beginning.

- A text editor/spreadsheet for the manual route. Hosted Python/Jupyter for code exercises; applicable dependencies are in requirements.txt.

- For actual AI calls, a legitimate available cloud service and authorised learner credentials; no particular provider or country is mandatory.

## Learning outcomes

- Specify units, horizon and the reversibility of the action.

- Keep the moving-average arithmetic visible.

- Separate forecast, stock, safety buffer and resulting quantity.

- Change one input at a time and compare with expected behaviour.

- Keep a reproducible result and disclose safety, rights and regional access limits.

## Activity 1: Describe the stock decision

Estimated time: 35 minutes.

### Outcomes

- Specify units, horizon and the reversibility of the action.

- Explain and retain a testable result and its limits.

Inventory planning balances shortages and excess stock under uncertainty. A moving average is a transparent baseline, not an oracle. Show how the reorder rule uses forecast demand, current stock and safety stock before inviting an AI narrative.

Specify units, horizon and the reversibility of the action. Inspect the supplied input before using any tool. Write the decision rules in your own words and calculate one small result independently. The reference output is an answer key for this deliberately bounded fixture, not proof of general capability.

Policy for this project: Forecast next demand with the arithmetic mean. Reorder max(0, ceiling(forecast + safety - stock)). No live purchasing or warehouse control.

For learners across regions underserved or excluded by mainstream providers: verify country eligibility, language, account/identity requirements, data terms, cost, quota and connectivity before choosing a cloud service. Use only legitimate available alternatives; never bypass restrictions or invent a country/account. No service access? Complete the labelled manual/fixture route without claiming a live AI run.

### Worked example

```text

SOURCE (authored fixture):
{
  "demand": [
    10,
    12,
    14
  ],
  "stock": 9,
  "safety": 2
}
INDEPENDENT FIXTURE TARGET:
{
  "forecast": 12,
  "reorder": 5
}

```

### Guided activity

1. Specify units, horizon and the reversibility of the action.

2. Open input.json and expected.json from the practice pack; keep an unmodified original.

3. Record a manual prediction and the relevant rule before consulting the answer key.

4. Perform one small change and predict its effect before rerunning.

5. Keep the result and your reasoning in the lesson notes; do not mark a simulated run as live.

### Expected evidence

- Describe the stock decision — a saved, inspectable artefact tied to the supplied rule.

- A baseline or change-test record with expected/observed results and a limitation.

### Common mistakes

- Increase stock to 20: reorder is 0, not a negative purchase.

- Treating a supplied answer key, an authored example or self-review as independent field validation.

### Check your understanding

Which exact input, rule and expected value would let another learner falsify your conclusion in this activity, and what remains untested?

### Offline route

Use the supplied fictional JSON, expected results and paper/text evidence log without a provider account. Manual or constructed completion is labelled; it is not a live cloud integration or trained-model run.

## Activity 2: Calculate a naive forecast

Estimated time: 35 minutes.

### Outcomes

- Keep the moving-average arithmetic visible.

- Explain and retain a testable result and its limits.

Inventory planning balances shortages and excess stock under uncertainty. A moving average is a transparent baseline, not an oracle. Show how the reorder rule uses forecast demand, current stock and safety stock before inviting an AI narrative.

Keep the moving-average arithmetic visible. Establish a baseline before changing prompts or code. Keep the original input immutable. Record expected values, observed values and whether each comparison passed. If the expected file conflicts with a justified policy, investigate rather than forcing a convenient match.

Policy for this project: Forecast next demand with the arithmetic mean. Reorder max(0, ceiling(forecast + safety - stock)). No live purchasing or warehouse control.

### Worked example

```text

MANUAL BASELINE / compare every named field
{
  "forecast": 12,
  "reorder": 5
}
Keep a separate observed-result column; the answer key is not a model response.

```

### Guided activity

1. Keep the moving-average arithmetic visible.

2. Open input.json and expected.json from the practice pack; keep an unmodified original.

3. Record expected and observed values separately; explain every mismatch.

4. Perform one small change and predict its effect before rerunning.

5. Keep the result and your reasoning in the lesson notes; do not mark a simulated run as live.

### Expected evidence

- Calculate a naive forecast — a saved, inspectable artefact tied to the supplied rule.

- A baseline or change-test record with expected/observed results and a limitation.

### Common mistakes

- A missing demand value must be flagged, not guessed as zero.

- Treating a supplied answer key, an authored example or self-review as independent field validation.

### Check your understanding

Which exact input, rule and expected value would let another learner falsify your conclusion in this activity, and what remains untested?

### Offline route

Use the supplied fictional JSON, expected results and paper/text evidence log without a provider account. Manual or constructed completion is labelled; it is not a live cloud integration or trained-model run.

## Activity 3: Build a reorder worksheet

Estimated time: 35 minutes.

### Outcomes

- Separate forecast, stock, safety buffer and resulting quantity.

- Explain and retain a testable result and its limits.

Inventory planning balances shortages and excess stock under uncertainty. A moving average is a transparent baseline, not an oracle. Show how the reorder rule uses forecast demand, current stock and safety stock before inviting an AI narrative.

Separate forecast, stock, safety buffer and resulting quantity. Build one inspectable transformation or bounded AI prompt. Keep calculation and validation deterministic where possible. If you make a permitted hosted call, save the actual response separately from the authored examples and verify its material claims; the supplied reference never simulates a live model.

Policy for this project: Forecast next demand with the arithmetic mean. Reorder max(0, ceiling(forecast + safety - stock)). No live purchasing or warehouse control.

### Worked example

```text

PROJECT CONTRACT:
Forecast next demand with the arithmetic mean. Reorder max(0, ceiling(forecast + safety - stock)). No live purchasing or warehouse control.
HOSTED REFERENCE: open hosted-lab.ipynb or run reference.py with all fixture files together.
EXPECTED CONSTRUCTED RESULT:
{
  "forecast": 12,
  "reorder": 5
}

```

### Guided activity

1. Separate forecast, stock, safety buffer and resulting quantity.

2. Open hosted-lab.ipynb and the reference code from the practice pack; keep an unmodified original.

3. Record expected and observed values separately; explain every mismatch.

4. Perform A supplier delay invalidates a one-period assumption; revise the plan explicitly.

5. Keep the result and your reasoning in the lesson notes; do not mark a simulated run as live.

### Expected evidence

- Build a reorder worksheet — a saved, inspectable artefact tied to the supplied rule.

- A baseline or change-test record with expected/observed results and a limitation.

### Common mistakes

- A supplier delay invalidates a one-period assumption; revise the plan explicitly.

- Treating a supplied answer key, an authored example or self-review as independent field validation.

### Check your understanding

Which exact input, rule and expected value would let another learner falsify your conclusion in this activity, and what remains untested?

### Offline route

Use the supplied fictional JSON, expected results and paper/text evidence log without a provider account. Manual or constructed completion is labelled; it is not a live cloud integration or trained-model run.

## Activity 4: Test shortage and overstock cases

Estimated time: 35 minutes.

### Outcomes

- Change one input at a time and compare with expected behaviour.

- Explain and retain a testable result and its limits.

Inventory planning balances shortages and excess stock under uncertainty. A moving average is a transparent baseline, not an oracle. Show how the reorder rule uses forecast demand, current stock and safety stock before inviting an AI narrative.

Change one input at a time and compare with expected behaviour. Change one assumption at a time and predict the result first. Retain the failure, the revision and the rerun evidence. A failure is useful information: hiding a bad output or editing a test target after seeing the answer destroys the value of the experiment.

Policy for this project: Forecast next demand with the arithmetic mean. Reorder max(0, ceiling(forecast + safety - stock)). No live purchasing or warehouse control.

### Worked example

```text

CHANGE TESTS — predict before running:
1. Increase stock to 20: reorder is 0, not a negative purchase.
2. A missing demand value must be flagged, not guessed as zero.
3. A supplier delay invalidates a one-period assumption; revise the plan explicitly.
Keep the original expected.json unchanged.

```

### Guided activity

1. Change one input at a time and compare with expected behaviour.

2. Open failure-tests.md from the practice pack; keep an unmodified original.

3. Record expected and observed values separately; explain every mismatch.

4. Perform Increase stock to 20: reorder is 0, not a negative purchase.

5. Keep the result and your reasoning in the lesson notes; do not mark a simulated run as live.

### Expected evidence

- Test shortage and overstock cases — a saved, inspectable artefact tied to the supplied rule.

- A baseline or change-test record with expected/observed results and a limitation.

### Common mistakes

- Increase stock to 20: reorder is 0, not a negative purchase.

- Treating a supplied answer key, an authored example or self-review as independent field validation.

### Check your understanding

Which exact input, rule and expected value would let another learner falsify your conclusion in this activity, and what remains untested?

### Offline route

Use the supplied fictional JSON, expected results and paper/text evidence log without a provider account. Manual or constructed completion is labelled; it is not a live cloud integration or trained-model run.

## Activity 5: Review suppliers and human authority

Estimated time: 35 minutes.

### Outcomes

- A recommendation is not an authorised purchase or a material-suitability judgement.

- Explain and retain a testable result and its limits.

Inventory planning balances shortages and excess stock under uncertainty. A moving average is a transparent baseline, not an oracle. Show how the reorder rule uses forecast demand, current stock and safety stock before inviting an AI narrative.

A recommendation is not an authorised purchase or a material-suitability judgement. Review what the fixture cannot establish. Explain who owns the decision, where human approval is needed and which access or professional constraints remain. Do not describe a small educational success as production readiness, certification, legal compliance or a guarantee.

Policy for this project: Forecast next demand with the arithmetic mean. Reorder max(0, ceiling(forecast + safety - stock)). No live purchasing or warehouse control.

For learners across regions underserved or excluded by mainstream providers: verify country eligibility, language, account/identity requirements, data terms, cost, quota and connectivity before choosing a cloud service. Use only legitimate available alternatives; never bypass restrictions or invent a country/account. No service access? Complete the labelled manual/fixture route without claiming a live AI run.

### Worked example

```text

REVIEW BOUNDARY:
Forecast next demand with the arithmetic mean. Reorder max(0, ceiling(forecast + safety - stock)). No live purchasing or warehouse control.

ACCESS / NOT TESTED: unavailable provider, unsupported language and absent external feedback must remain explicit.

```

### Guided activity

1. A recommendation is not an authorised purchase or a material-suitability judgement.

2. Open README.md and your evidence log from the practice pack; keep an unmodified original.

3. Record the human decision owner, limitations and any untested service access.

4. Perform one small change and predict its effect before rerunning.

5. Keep the result and your reasoning in the lesson notes; do not mark a simulated run as live.

### Expected evidence

- Review suppliers and human authority — a saved, inspectable artefact tied to the supplied rule.

- A baseline or change-test record with expected/observed results and a limitation.

### Common mistakes

- A missing demand value must be flagged, not guessed as zero.

- Treating a supplied answer key, an authored example or self-review as independent field validation.

### Check your understanding

Which exact input, rule and expected value would let another learner falsify your conclusion in this activity, and what remains untested?

### Offline route

Use the supplied fictional JSON, expected results and paper/text evidence log without a provider account. Manual or constructed completion is labelled; it is not a live cloud integration or trained-model run.

## Activity 6: Deliver a planning dashboard

Estimated time: 65 minutes.

### Outcomes

- Attach scenarios, assumptions and an approval step.

- Explain and retain a testable result and its limits.

Inventory planning balances shortages and excess stock under uncertainty. A moving average is a transparent baseline, not an oracle. Show how the reorder rule uses forecast demand, current stock and safety stock before inviting an AI narrative.

Attach scenarios, assumptions and an approval step. Deliver a reproducible bundle rather than a screenshot alone. Include inputs, rules, output, failure tests, a short README and residual limitations. Ask another person to follow the instructions if possible; self-review and actual external review must be labelled separately.

Policy for this project: Forecast next demand with the arithmetic mean. Reorder max(0, ceiling(forecast + safety - stock)). No live purchasing or warehouse control.

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

1. Attach scenarios, assumptions and an approval step.

2. Open README.md and your evidence log from the practice pack; keep an unmodified original.

3. Record the human decision owner, limitations and any untested service access.

4. Perform one small change and predict its effect before rerunning.

5. Keep the result and your reasoning in the lesson notes; do not mark a simulated run as live.

### Expected evidence

- Deliver a planning dashboard — a saved, inspectable artefact tied to the supplied rule.

- A baseline or change-test record with expected/observed results and a limitation.

### Common mistakes

- A supplier delay invalidates a one-period assumption; revise the plan explicitly.

- Treating a supplied answer key, an authored example or self-review as independent field validation.

### Check your understanding

Which exact input, rule and expected value would let another learner falsify your conclusion in this activity, and what remains untested?

### Offline route

Use the supplied fictional JSON, expected results and paper/text evidence log without a provider account. Manual or constructed completion is labelled; it is not a live cloud integration or trained-model run.

## End-of-path review

These are self-check questions, not verified examinations.

### Question 1

For the supplied fixture, what is the expected forecast?

1. 12

2. It cannot be checked against the supplied input.

3. Whatever value the model reports most confidently.

Review answer: 1. The independent answer key only validates this constructed fixture. Preserve the source, rerun counterexamples, and disclose what was not tested.

### Question 2

How should you handle the project rule: Forecast next demand with the arithmetic mean. Reorder max(0, ceiling(forecast + safety - stock)). No live purchasing or warehouse control.

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

Forecast next demand with the arithmetic mean. Reorder max(0, ceiling(forecast + safety - stock)). No live purchasing or warehouse control. Regional access route is legitimate; credentials and private data are absent; manual/constructed work is clearly labelled.

## References

- [Forecasting principles and practice](https://otexts.com/fpp3/)

## Editorial boundary

Original authored practice material; deterministic fixtures build-tested. Not independently expert-reviewed or learner-validated. Time estimates unvalidated.

Use fictional/redacted data and your own authorised provider credentials. Never include credentials in this pack or public work.
