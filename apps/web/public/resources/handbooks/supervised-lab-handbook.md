# Fit a regression and inspect its residuals

Open Practice / Measured machine learning / curriculum 1.0

Estimated guided practice: 4h estimated. This estimate has not been learner-tested.

Original practice material · CC BY 4.0 · Non-degree and non-accredited.

## What you will build

Ship a supervised experiment record with inputs, tests and a reproducible handoff.

## Before you start

- Python + statistics; inspect the worked fixture before beginning.

- A text editor/spreadsheet for the manual route. Hosted Python/Jupyter for code exercises; applicable dependencies are in requirements.txt.

- For actual AI calls, a legitimate available cloud service and authorised learner credentials; no particular provider or country is mandatory.

## Learning outcomes

- Separate input availability from the future value being predicted.

- Use only training targets for the naive estimate.

- Calculate slope, intercept and residuals explicitly.

- Extrapolation needs caution even when this synthetic example succeeds.

- Keep a reproducible result and disclose safety, rights and regional access limits.

## Activity 1: Define the regression target

Estimated time: 35 minutes.

### Outcomes

- Separate input availability from the future value being predicted.

- Explain and retain a testable result and its limits.

Regression estimates a relationship between inputs and a numeric target. A synthetic straight line is useful for checking code, but perfect fit on a designed fixture is not a real-world benchmark. Compare with a mean baseline and preserve the future test example.

Separate input availability from the future value being predicted. Inspect the supplied input before using any tool. Write the decision rules in your own words and calculate one small result independently. The reference output is an answer key for this deliberately bounded fixture, not proof of general capability.

Policy for this project: Fit training pairs (1,5),(2,8),(3,11),(4,14). Test x=5 against y=17 only after fitting. Do not imply causal or production validity.

For learners across regions underserved or excluded by mainstream providers: verify country eligibility, language, account/identity requirements, data terms, cost, quota and connectivity before choosing a cloud service. Use only legitimate available alternatives; never bypass restrictions or invent a country/account. No service access? Complete the labelled manual/fixture route without claiming a live AI run.

### Worked example

```text

SOURCE (authored fixture):
{
  "x": [
    1,
    2,
    3,
    4
  ],
  "y": [
    5,
    8,
    11,
    14
  ],
  "test_x": 5,
  "test_y": 17
}
INDEPENDENT FIXTURE TARGET:
{
  "slope": 3,
  "intercept": 2,
  "prediction": 17,
  "absolute_error": 0,
  "mean_baseline_error": 7.5
}

```

### Guided activity

1. Separate input availability from the future value being predicted.

2. Open input.json and expected.json from the practice pack; keep an unmodified original.

3. Record a manual prediction and the relevant rule before consulting the answer key.

4. Perform one small change and predict its effect before rerunning.

5. Keep the result and your reasoning in the lesson notes; do not mark a simulated run as live.

### Expected evidence

- Define the regression target — a saved, inspectable artefact tied to the supplied rule.

- A baseline or change-test record with expected/observed results and a limitation.

### Common mistakes

- All training x values equal: the simple slope is undefined.

- Treating a supplied answer key, an authored example or self-review as independent field validation.

### Check your understanding

Which exact input, rule and expected value would let another learner falsify your conclusion in this activity, and what remains untested?

### Offline route

Use the supplied fictional JSON, expected results and paper/text evidence log without a provider account. Manual or constructed completion is labelled; it is not a live cloud integration or trained-model run.

## Activity 2: Compute a mean baseline

Estimated time: 35 minutes.

### Outcomes

- Use only training targets for the naive estimate.

- Explain and retain a testable result and its limits.

Regression estimates a relationship between inputs and a numeric target. A synthetic straight line is useful for checking code, but perfect fit on a designed fixture is not a real-world benchmark. Compare with a mean baseline and preserve the future test example.

Use only training targets for the naive estimate. Establish a baseline before changing prompts or code. Keep the original input immutable. Record expected values, observed values and whether each comparison passed. If the expected file conflicts with a justified policy, investigate rather than forcing a convenient match.

Policy for this project: Fit training pairs (1,5),(2,8),(3,11),(4,14). Test x=5 against y=17 only after fitting. Do not imply causal or production validity.

### Worked example

```text

MANUAL BASELINE / compare every named field
{
  "slope": 3,
  "intercept": 2,
  "prediction": 17,
  "absolute_error": 0,
  "mean_baseline_error": 7.5
}
Keep a separate observed-result column; the answer key is not a model response.

```

### Guided activity

1. Use only training targets for the naive estimate.

2. Open input.json and expected.json from the practice pack; keep an unmodified original.

3. Record expected and observed values separately; explain every mismatch.

4. Perform one small change and predict its effect before rerunning.

5. Keep the result and your reasoning in the lesson notes; do not mark a simulated run as live.

### Expected evidence

- Compute a mean baseline — a saved, inspectable artefact tied to the supplied rule.

- A baseline or change-test record with expected/observed results and a limitation.

### Common mistakes

- Change the test target to 19: prediction stays 17 and absolute error becomes 2.

- Treating a supplied answer key, an authored example or self-review as independent field validation.

### Check your understanding

Which exact input, rule and expected value would let another learner falsify your conclusion in this activity, and what remains untested?

### Offline route

Use the supplied fictional JSON, expected results and paper/text evidence log without a provider account. Manual or constructed completion is labelled; it is not a live cloud integration or trained-model run.

## Activity 3: Fit and inspect a straight line

Estimated time: 35 minutes.

### Outcomes

- Calculate slope, intercept and residuals explicitly.

- Explain and retain a testable result and its limits.

Regression estimates a relationship between inputs and a numeric target. A synthetic straight line is useful for checking code, but perfect fit on a designed fixture is not a real-world benchmark. Compare with a mean baseline and preserve the future test example.

Calculate slope, intercept and residuals explicitly. Build one inspectable transformation or bounded AI prompt. Keep calculation and validation deterministic where possible. If you make a permitted hosted call, save the actual response separately from the authored examples and verify its material claims; the supplied reference never simulates a live model.

Policy for this project: Fit training pairs (1,5),(2,8),(3,11),(4,14). Test x=5 against y=17 only after fitting. Do not imply causal or production validity.

### Worked example

```text

PROJECT CONTRACT:
Fit training pairs (1,5),(2,8),(3,11),(4,14). Test x=5 against y=17 only after fitting. Do not imply causal or production validity.
HOSTED REFERENCE: open hosted-lab.ipynb or run reference.py with all fixture files together.
EXPECTED CONSTRUCTED RESULT:
{
  "slope": 3,
  "intercept": 2,
  "prediction": 17,
  "absolute_error": 0,
  "mean_baseline_error": 7.5
}

```

### Guided activity

1. Calculate slope, intercept and residuals explicitly.

2. Open hosted-lab.ipynb and the reference code from the practice pack; keep an unmodified original.

3. Record expected and observed values separately; explain every mismatch.

4. Perform Use test y while fitting: identify leakage even if error falls.

5. Keep the result and your reasoning in the lesson notes; do not mark a simulated run as live.

### Expected evidence

- Fit and inspect a straight line — a saved, inspectable artefact tied to the supplied rule.

- A baseline or change-test record with expected/observed results and a limitation.

### Common mistakes

- Use test y while fitting: identify leakage even if error falls.

- Treating a supplied answer key, an authored example or self-review as independent field validation.

### Check your understanding

Which exact input, rule and expected value would let another learner falsify your conclusion in this activity, and what remains untested?

### Offline route

Use the supplied fictional JSON, expected results and paper/text evidence log without a provider account. Manual or constructed completion is labelled; it is not a live cloud integration or trained-model run.

## Activity 4: Test outside the training range

Estimated time: 35 minutes.

### Outcomes

- Extrapolation needs caution even when this synthetic example succeeds.

- Explain and retain a testable result and its limits.

Regression estimates a relationship between inputs and a numeric target. A synthetic straight line is useful for checking code, but perfect fit on a designed fixture is not a real-world benchmark. Compare with a mean baseline and preserve the future test example.

Extrapolation needs caution even when this synthetic example succeeds. Change one assumption at a time and predict the result first. Retain the failure, the revision and the rerun evidence. A failure is useful information: hiding a bad output or editing a test target after seeing the answer destroys the value of the experiment.

Policy for this project: Fit training pairs (1,5),(2,8),(3,11),(4,14). Test x=5 against y=17 only after fitting. Do not imply causal or production validity.

### Worked example

```text

CHANGE TESTS — predict before running:
1. All training x values equal: the simple slope is undefined.
2. Change the test target to 19: prediction stays 17 and absolute error becomes 2.
3. Use test y while fitting: identify leakage even if error falls.
Keep the original expected.json unchanged.

```

### Guided activity

1. Extrapolation needs caution even when this synthetic example succeeds.

2. Open failure-tests.md from the practice pack; keep an unmodified original.

3. Record expected and observed values separately; explain every mismatch.

4. Perform All training x values equal: the simple slope is undefined.

5. Keep the result and your reasoning in the lesson notes; do not mark a simulated run as live.

### Expected evidence

- Test outside the training range — a saved, inspectable artefact tied to the supplied rule.

- A baseline or change-test record with expected/observed results and a limitation.

### Common mistakes

- All training x values equal: the simple slope is undefined.

- Treating a supplied answer key, an authored example or self-review as independent field validation.

### Check your understanding

Which exact input, rule and expected value would let another learner falsify your conclusion in this activity, and what remains untested?

### Offline route

Use the supplied fictional JSON, expected results and paper/text evidence log without a provider account. Manual or constructed completion is labelled; it is not a live cloud integration or trained-model run.

## Activity 5: Compare model selection fairly

Estimated time: 35 minutes.

### Outcomes

- Choose metrics before comparing methods; do not optimise on the final test example.

- Explain and retain a testable result and its limits.

Regression estimates a relationship between inputs and a numeric target. A synthetic straight line is useful for checking code, but perfect fit on a designed fixture is not a real-world benchmark. Compare with a mean baseline and preserve the future test example.

Choose metrics before comparing methods; do not optimise on the final test example. Review what the fixture cannot establish. Explain who owns the decision, where human approval is needed and which access or professional constraints remain. Do not describe a small educational success as production readiness, certification, legal compliance or a guarantee.

Policy for this project: Fit training pairs (1,5),(2,8),(3,11),(4,14). Test x=5 against y=17 only after fitting. Do not imply causal or production validity.

For learners across regions underserved or excluded by mainstream providers: verify country eligibility, language, account/identity requirements, data terms, cost, quota and connectivity before choosing a cloud service. Use only legitimate available alternatives; never bypass restrictions or invent a country/account. No service access? Complete the labelled manual/fixture route without claiming a live AI run.

### Worked example

```text

REVIEW BOUNDARY:
Fit training pairs (1,5),(2,8),(3,11),(4,14). Test x=5 against y=17 only after fitting. Do not imply causal or production validity.

ACCESS / NOT TESTED: unavailable provider, unsupported language and absent external feedback must remain explicit.

```

### Guided activity

1. Choose metrics before comparing methods; do not optimise on the final test example.

2. Open README.md and your evidence log from the practice pack; keep an unmodified original.

3. Record the human decision owner, limitations and any untested service access.

4. Perform one small change and predict its effect before rerunning.

5. Keep the result and your reasoning in the lesson notes; do not mark a simulated run as live.

### Expected evidence

- Compare model selection fairly — a saved, inspectable artefact tied to the supplied rule.

- A baseline or change-test record with expected/observed results and a limitation.

### Common mistakes

- Change the test target to 19: prediction stays 17 and absolute error becomes 2.

- Treating a supplied answer key, an authored example or self-review as independent field validation.

### Check your understanding

Which exact input, rule and expected value would let another learner falsify your conclusion in this activity, and what remains untested?

### Offline route

Use the supplied fictional JSON, expected results and paper/text evidence log without a provider account. Manual or constructed completion is labelled; it is not a live cloud integration or trained-model run.

## Activity 6: Ship a supervised experiment record

Estimated time: 65 minutes.

### Outcomes

- Document the fixture design and why zero error is not a general claim.

- Explain and retain a testable result and its limits.

Regression estimates a relationship between inputs and a numeric target. A synthetic straight line is useful for checking code, but perfect fit on a designed fixture is not a real-world benchmark. Compare with a mean baseline and preserve the future test example.

Document the fixture design and why zero error is not a general claim. Deliver a reproducible bundle rather than a screenshot alone. Include inputs, rules, output, failure tests, a short README and residual limitations. Ask another person to follow the instructions if possible; self-review and actual external review must be labelled separately.

Policy for this project: Fit training pairs (1,5),(2,8),(3,11),(4,14). Test x=5 against y=17 only after fitting. Do not imply causal or production validity.

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

1. Document the fixture design and why zero error is not a general claim.

2. Open README.md and your evidence log from the practice pack; keep an unmodified original.

3. Record the human decision owner, limitations and any untested service access.

4. Perform one small change and predict its effect before rerunning.

5. Keep the result and your reasoning in the lesson notes; do not mark a simulated run as live.

### Expected evidence

- Ship a supervised experiment record — a saved, inspectable artefact tied to the supplied rule.

- A baseline or change-test record with expected/observed results and a limitation.

### Common mistakes

- Use test y while fitting: identify leakage even if error falls.

- Treating a supplied answer key, an authored example or self-review as independent field validation.

### Check your understanding

Which exact input, rule and expected value would let another learner falsify your conclusion in this activity, and what remains untested?

### Offline route

Use the supplied fictional JSON, expected results and paper/text evidence log without a provider account. Manual or constructed completion is labelled; it is not a live cloud integration or trained-model run.

## End-of-path review

These are self-check questions, not verified examinations.

### Question 1

For the supplied fixture, what is the expected slope?

1. 3

2. It cannot be checked against the supplied input.

3. Whatever value the model reports most confidently.

Review answer: 1. The independent answer key only validates this constructed fixture. Preserve the source, rerun counterexamples, and disclose what was not tested.

### Question 2

How should you handle the project rule: Fit training pairs (1,5),(2,8),(3,11),(4,14). Test x=5 against y=17 only after fitting. Do not imply causal or production validity.

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

Fit training pairs (1,5),(2,8),(3,11),(4,14). Test x=5 against y=17 only after fitting. Do not imply causal or production validity. Regional access route is legitimate; credentials and private data are absent; manual/constructed work is clearly labelled.

## References

- [Scikit-learn linear models](https://scikit-learn.org/stable/modules/linear_model.html)

## Editorial boundary

Original authored practice material; deterministic fixtures build-tested. Not independently expert-reviewed or learner-validated. Time estimates unvalidated.

Use fictional/redacted data and your own authorised provider credentials. Never include credentials in this pack or public work.
