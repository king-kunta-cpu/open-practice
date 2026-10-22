# See a gradient step succeed—and fail

Open Practice / Planning & uncertainty / curriculum 1.0

Estimated guided practice: 4h estimated. This estimate has not been learner-tested.

Original practice material · CC BY 4.0 · Non-degree and non-accredited.

## What you will build

Ship an inspectable optimisation notebook with inputs, tests and a reproducible handoff.

## Before you start

- Algebra prerequisite; inspect the worked fixture before beginning.

- A text editor/spreadsheet for the manual route. Hosted Python/Jupyter for code exercises; applicable dependencies are in requirements.txt.

- For actual AI calls, a legitimate available cloud service and authorised learner credentials; no particular provider or country is mandatory.

## Learning outcomes

- Calculate three losses by hand and identify the minimiser.

- Connect the derivative sign to the direction of movement.

- Record both parameter change and loss change.

- Use the deliberate overshoot as evidence, not an unexplained software error.

- Keep a reproducible result and disclose safety, rights and regional access limits.

## Activity 1: Inspect a simple loss curve

Estimated time: 35 minutes.

### Outcomes

- Calculate three losses by hand and identify the minimiser.

- Explain and retain a testable result and its limits.

Gradient descent changes parameters using a derivative and a learning rate. A downhill direction does not guarantee improvement with an arbitrarily large step. Inspect a scalar example before moving to matrices and higher-dimensional objectives.

Calculate three losses by hand and identify the minimiser. Inspect the supplied input before using any tool. Write the decision rules in your own words and calculate one small result independently. The reference output is an answer key for this deliberately bounded fixture, not proof of general capability.

Policy for this project: Use f(x)=(x-3)^2 and derivative 2(x-3). Apply exactly one step. Round reported values consistently; calculations are deterministic, not an LLM judgement.

For learners across regions underserved or excluded by mainstream providers: verify country eligibility, language, account/identity requirements, data terms, cost, quota and connectivity before choosing a cloud service. Use only legitimate available alternatives; never bypass restrictions or invent a country/account. No service access? Complete the labelled manual/fixture route without claiming a live AI run.

### Worked example

```text

SOURCE (authored fixture):
{
  "start": 0,
  "learning_rate": 0.25
}
INDEPENDENT FIXTURE TARGET:
{
  "gradient": -6,
  "next_x": 1.5,
  "loss_before": 9,
  "loss_after": 2.25
}

```

### Guided activity

1. Calculate three losses by hand and identify the minimiser.

2. Open input.json and expected.json from the practice pack; keep an unmodified original.

3. Record a manual prediction and the relevant rule before consulting the answer key.

4. Perform one small change and predict its effect before rerunning.

5. Keep the result and your reasoning in the lesson notes; do not mark a simulated run as live.

### Expected evidence

- Inspect a simple loss curve — a saved, inspectable artefact tied to the supplied rule.

- A baseline or change-test record with expected/observed results and a limitation.

### Common mistakes

- Learning rate 1.5: next x is 9 and loss increases to 36.

- Treating a supplied answer key, an authored example or self-review as independent field validation.

### Check your understanding

Which exact input, rule and expected value would let another learner falsify your conclusion in this activity, and what remains untested?

### Offline route

Use the supplied fictional JSON, expected results and paper/text evidence log without a provider account. Manual or constructed completion is labelled; it is not a live cloud integration or trained-model run.

## Activity 2: Derive the update rule

Estimated time: 35 minutes.

### Outcomes

- Connect the derivative sign to the direction of movement.

- Explain and retain a testable result and its limits.

Gradient descent changes parameters using a derivative and a learning rate. A downhill direction does not guarantee improvement with an arbitrarily large step. Inspect a scalar example before moving to matrices and higher-dimensional objectives.

Connect the derivative sign to the direction of movement. Establish a baseline before changing prompts or code. Keep the original input immutable. Record expected values, observed values and whether each comparison passed. If the expected file conflicts with a justified policy, investigate rather than forcing a convenient match.

Policy for this project: Use f(x)=(x-3)^2 and derivative 2(x-3). Apply exactly one step. Round reported values consistently; calculations are deterministic, not an LLM judgement.

### Worked example

```text

MANUAL BASELINE / compare every named field
{
  "gradient": -6,
  "next_x": 1.5,
  "loss_before": 9,
  "loss_after": 2.25
}
Keep a separate observed-result column; the answer key is not a model response.

```

### Guided activity

1. Connect the derivative sign to the direction of movement.

2. Open input.json and expected.json from the practice pack; keep an unmodified original.

3. Record expected and observed values separately; explain every mismatch.

4. Perform one small change and predict its effect before rerunning.

5. Keep the result and your reasoning in the lesson notes; do not mark a simulated run as live.

### Expected evidence

- Derive the update rule — a saved, inspectable artefact tied to the supplied rule.

- A baseline or change-test record with expected/observed results and a limitation.

### Common mistakes

- Start at 3: gradient is zero and the point stays fixed.

- Treating a supplied answer key, an authored example or self-review as independent field validation.

### Check your understanding

Which exact input, rule and expected value would let another learner falsify your conclusion in this activity, and what remains untested?

### Offline route

Use the supplied fictional JSON, expected results and paper/text evidence log without a provider account. Manual or constructed completion is labelled; it is not a live cloud integration or trained-model run.

## Activity 3: Implement and verify one step

Estimated time: 35 minutes.

### Outcomes

- Record both parameter change and loss change.

- Explain and retain a testable result and its limits.

Gradient descent changes parameters using a derivative and a learning rate. A downhill direction does not guarantee improvement with an arbitrarily large step. Inspect a scalar example before moving to matrices and higher-dimensional objectives.

Record both parameter change and loss change. Build one inspectable transformation or bounded AI prompt. Keep calculation and validation deterministic where possible. If you make a permitted hosted call, save the actual response separately from the authored examples and verify its material claims; the supplied reference never simulates a live model.

Policy for this project: Use f(x)=(x-3)^2 and derivative 2(x-3). Apply exactly one step. Round reported values consistently; calculations are deterministic, not an LLM judgement.

### Worked example

```text

PROJECT CONTRACT:
Use f(x)=(x-3)^2 and derivative 2(x-3). Apply exactly one step. Round reported values consistently; calculations are deterministic, not an LLM judgement.
HOSTED REFERENCE: open hosted-lab.ipynb or run reference.py with all fixture files together.
EXPECTED CONSTRUCTED RESULT:
{
  "gradient": -6,
  "next_x": 1.5,
  "loss_before": 9,
  "loss_after": 2.25
}

```

### Guided activity

1. Record both parameter change and loss change.

2. Open hosted-lab.ipynb and the reference code from the practice pack; keep an unmodified original.

3. Record expected and observed values separately; explain every mismatch.

4. Perform Negative learning rate: label invalid for this descent policy.

5. Keep the result and your reasoning in the lesson notes; do not mark a simulated run as live.

### Expected evidence

- Implement and verify one step — a saved, inspectable artefact tied to the supplied rule.

- A baseline or change-test record with expected/observed results and a limitation.

### Common mistakes

- Negative learning rate: label invalid for this descent policy.

- Treating a supplied answer key, an authored example or self-review as independent field validation.

### Check your understanding

Which exact input, rule and expected value would let another learner falsify your conclusion in this activity, and what remains untested?

### Offline route

Use the supplied fictional JSON, expected results and paper/text evidence log without a provider account. Manual or constructed completion is labelled; it is not a live cloud integration or trained-model run.

## Activity 4: Make the learning rate fail

Estimated time: 35 minutes.

### Outcomes

- Use the deliberate overshoot as evidence, not an unexplained software error.

- Explain and retain a testable result and its limits.

Gradient descent changes parameters using a derivative and a learning rate. A downhill direction does not guarantee improvement with an arbitrarily large step. Inspect a scalar example before moving to matrices and higher-dimensional objectives.

Use the deliberate overshoot as evidence, not an unexplained software error. Change one assumption at a time and predict the result first. Retain the failure, the revision and the rerun evidence. A failure is useful information: hiding a bad output or editing a test target after seeing the answer destroys the value of the experiment.

Policy for this project: Use f(x)=(x-3)^2 and derivative 2(x-3). Apply exactly one step. Round reported values consistently; calculations are deterministic, not an LLM judgement.

### Worked example

```text

CHANGE TESTS — predict before running:
1. Learning rate 1.5: next x is 9 and loss increases to 36.
2. Start at 3: gradient is zero and the point stays fixed.
3. Negative learning rate: label invalid for this descent policy.
Keep the original expected.json unchanged.

```

### Guided activity

1. Use the deliberate overshoot as evidence, not an unexplained software error.

2. Open failure-tests.md from the practice pack; keep an unmodified original.

3. Record expected and observed values separately; explain every mismatch.

4. Perform Learning rate 1.5: next x is 9 and loss increases to 36.

5. Keep the result and your reasoning in the lesson notes; do not mark a simulated run as live.

### Expected evidence

- Make the learning rate fail — a saved, inspectable artefact tied to the supplied rule.

- A baseline or change-test record with expected/observed results and a limitation.

### Common mistakes

- Learning rate 1.5: next x is 9 and loss increases to 36.

- Treating a supplied answer key, an authored example or self-review as independent field validation.

### Check your understanding

Which exact input, rule and expected value would let another learner falsify your conclusion in this activity, and what remains untested?

### Offline route

Use the supplied fictional JSON, expected results and paper/text evidence log without a provider account. Manual or constructed completion is labelled; it is not a live cloud integration or trained-model run.

## Activity 5: Connect vectors and gradients

Estimated time: 35 minutes.

### Outcomes

- Apply the same reasoning coordinate by coordinate without pretending a scalar demo proves deep learning.

- Explain and retain a testable result and its limits.

Gradient descent changes parameters using a derivative and a learning rate. A downhill direction does not guarantee improvement with an arbitrarily large step. Inspect a scalar example before moving to matrices and higher-dimensional objectives.

Apply the same reasoning coordinate by coordinate without pretending a scalar demo proves deep learning. Review what the fixture cannot establish. Explain who owns the decision, where human approval is needed and which access or professional constraints remain. Do not describe a small educational success as production readiness, certification, legal compliance or a guarantee.

Policy for this project: Use f(x)=(x-3)^2 and derivative 2(x-3). Apply exactly one step. Round reported values consistently; calculations are deterministic, not an LLM judgement.

For learners across regions underserved or excluded by mainstream providers: verify country eligibility, language, account/identity requirements, data terms, cost, quota and connectivity before choosing a cloud service. Use only legitimate available alternatives; never bypass restrictions or invent a country/account. No service access? Complete the labelled manual/fixture route without claiming a live AI run.

### Worked example

```text

REVIEW BOUNDARY:
Use f(x)=(x-3)^2 and derivative 2(x-3). Apply exactly one step. Round reported values consistently; calculations are deterministic, not an LLM judgement.

ACCESS / NOT TESTED: unavailable provider, unsupported language and absent external feedback must remain explicit.

```

### Guided activity

1. Apply the same reasoning coordinate by coordinate without pretending a scalar demo proves deep learning.

2. Open README.md and your evidence log from the practice pack; keep an unmodified original.

3. Record the human decision owner, limitations and any untested service access.

4. Perform one small change and predict its effect before rerunning.

5. Keep the result and your reasoning in the lesson notes; do not mark a simulated run as live.

### Expected evidence

- Connect vectors and gradients — a saved, inspectable artefact tied to the supplied rule.

- A baseline or change-test record with expected/observed results and a limitation.

### Common mistakes

- Start at 3: gradient is zero and the point stays fixed.

- Treating a supplied answer key, an authored example or self-review as independent field validation.

### Check your understanding

Which exact input, rule and expected value would let another learner falsify your conclusion in this activity, and what remains untested?

### Offline route

Use the supplied fictional JSON, expected results and paper/text evidence log without a provider account. Manual or constructed completion is labelled; it is not a live cloud integration or trained-model run.

## Activity 6: Ship an inspectable optimisation notebook

Estimated time: 65 minutes.

### Outcomes

- Include the curve, failed step and assumptions.

- Explain and retain a testable result and its limits.

Gradient descent changes parameters using a derivative and a learning rate. A downhill direction does not guarantee improvement with an arbitrarily large step. Inspect a scalar example before moving to matrices and higher-dimensional objectives.

Include the curve, failed step and assumptions. Deliver a reproducible bundle rather than a screenshot alone. Include inputs, rules, output, failure tests, a short README and residual limitations. Ask another person to follow the instructions if possible; self-review and actual external review must be labelled separately.

Policy for this project: Use f(x)=(x-3)^2 and derivative 2(x-3). Apply exactly one step. Round reported values consistently; calculations are deterministic, not an LLM judgement.

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

1. Include the curve, failed step and assumptions.

2. Open README.md and your evidence log from the practice pack; keep an unmodified original.

3. Record the human decision owner, limitations and any untested service access.

4. Perform one small change and predict its effect before rerunning.

5. Keep the result and your reasoning in the lesson notes; do not mark a simulated run as live.

### Expected evidence

- Ship an inspectable optimisation notebook — a saved, inspectable artefact tied to the supplied rule.

- A baseline or change-test record with expected/observed results and a limitation.

### Common mistakes

- Negative learning rate: label invalid for this descent policy.

- Treating a supplied answer key, an authored example or self-review as independent field validation.

### Check your understanding

Which exact input, rule and expected value would let another learner falsify your conclusion in this activity, and what remains untested?

### Offline route

Use the supplied fictional JSON, expected results and paper/text evidence log without a provider account. Manual or constructed completion is labelled; it is not a live cloud integration or trained-model run.

## End-of-path review

These are self-check questions, not verified examinations.

### Question 1

For the supplied fixture, what is the expected gradient?

1. -6

2. It cannot be checked against the supplied input.

3. Whatever value the model reports most confidently.

Review answer: 1. The independent answer key only validates this constructed fixture. Preserve the source, rerun counterexamples, and disclose what was not tested.

### Question 2

How should you handle the project rule: Use f(x)=(x-3)^2 and derivative 2(x-3). Apply exactly one step. Round reported values consistently; calculations are deterministic, not an LLM judgement.

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

Use f(x)=(x-3)^2 and derivative 2(x-3). Apply exactly one step. Round reported values consistently; calculations are deterministic, not an LLM judgement. Regional access route is legitimate; credentials and private data are absent; manual/constructed work is clearly labelled.

## References

- [NumPy linear algebra documentation](https://numpy.org/doc/stable/reference/routines.linalg.html)

## Editorial boundary

Original authored practice material; deterministic fixtures build-tested. Not independently expert-reviewed or learner-validated. Time estimates unvalidated.

Use fictional/redacted data and your own authorised provider credentials. Never include credentials in this pack or public work.
