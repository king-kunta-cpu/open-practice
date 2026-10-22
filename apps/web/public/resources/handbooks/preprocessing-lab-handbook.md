# Build a preprocessing step that cannot see the future

Open Practice / Measured machine learning / curriculum 1.0

Estimated guided practice: 4h estimated. This estimate has not been learner-tested.

Original practice material · CC BY 4.0 · Non-degree and non-accredited.

## What you will build

Ship a leakage-resistant pipeline contract with inputs, tests and a reproducible handoff.

## Before you start

- Python + ML prerequisite; inspect the worked fixture before beginning.

- A text editor/spreadsheet for the manual route. Hosted Python/Jupyter for code exercises; applicable dependencies are in requirements.txt.

- For actual AI calls, a legitimate available cloud service and authorised learner credentials; no particular provider or country is mandatory.

## Learning outcomes

- Write down which rows the fitted transformation is allowed to inspect.

- Use only the observed training values.

- Return fitted parameters separately from transformed data.

- Demonstrate that training parameters do not change.

- Keep a reproducible result and disclose safety, rights and regional access limits.

## Activity 1: Mark the training boundary

Estimated time: 35 minutes.

### Outcomes

- Write down which rows the fitted transformation is allowed to inspect.

- Explain and retain a testable result and its limits.

Preprocessing learns parameters such as means from training data. Including test values in that calculation leaks information before fitting a predictor. Keep fitted parameters explicit so the boundary can be checked even in a tiny fixture.

Write down which rows the fitted transformation is allowed to inspect. Inspect the supplied input before using any tool. Write the decision rules in your own words and calculate one small result independently. The reference output is an answer key for this deliberately bounded fixture, not proof of general capability.

Policy for this project: Fit a mean imputer on training values only, ignoring null. Transform train and test using that one mean; never refit on the test set.

For learners across regions underserved or excluded by mainstream providers: verify country eligibility, language, account/identity requirements, data terms, cost, quota and connectivity before choosing a cloud service. Use only legitimate available alternatives; never bypass restrictions or invent a country/account. No service access? Complete the labelled manual/fixture route without claiming a live AI run.

### Worked example

```text

SOURCE (authored fixture):
{
  "train": [
    2,
    null,
    4
  ],
  "test": [
    100,
    null
  ]
}
INDEPENDENT FIXTURE TARGET:
{
  "training_mean": 3,
  "train_filled": [
    2,
    3,
    4
  ],
  "test_filled": [
    100,
    3
  ]
}

```

### Guided activity

1. Write down which rows the fitted transformation is allowed to inspect.

2. Open input.json and expected.json from the practice pack; keep an unmodified original.

3. Record a manual prediction and the relevant rule before consulting the answer key.

4. Perform one small change and predict its effect before rerunning.

5. Keep the result and your reasoning in the lesson notes; do not mark a simulated run as live.

### Expected evidence

- Mark the training boundary — a saved, inspectable artefact tied to the supplied rule.

- A baseline or change-test record with expected/observed results and a limitation.

### Common mistakes

- Including 100 in the fit would change the mean: detect the leakage.

- Treating a supplied answer key, an authored example or self-review as independent field validation.

### Check your understanding

Which exact input, rule and expected value would let another learner falsify your conclusion in this activity, and what remains untested?

### Offline route

Use the supplied fictional JSON, expected results and paper/text evidence log without a provider account. Manual or constructed completion is labelled; it is not a live cloud integration or trained-model run.

## Activity 2: Calculate the permitted mean

Estimated time: 35 minutes.

### Outcomes

- Use only the observed training values.

- Explain and retain a testable result and its limits.

Preprocessing learns parameters such as means from training data. Including test values in that calculation leaks information before fitting a predictor. Keep fitted parameters explicit so the boundary can be checked even in a tiny fixture.

Use only the observed training values. Establish a baseline before changing prompts or code. Keep the original input immutable. Record expected values, observed values and whether each comparison passed. If the expected file conflicts with a justified policy, investigate rather than forcing a convenient match.

Policy for this project: Fit a mean imputer on training values only, ignoring null. Transform train and test using that one mean; never refit on the test set.

### Worked example

```text

MANUAL BASELINE / compare every named field
{
  "training_mean": 3,
  "train_filled": [
    2,
    3,
    4
  ],
  "test_filled": [
    100,
    3
  ]
}
Keep a separate observed-result column; the answer key is not a model response.

```

### Guided activity

1. Use only the observed training values.

2. Open input.json and expected.json from the practice pack; keep an unmodified original.

3. Record expected and observed values separately; explain every mismatch.

4. Perform one small change and predict its effect before rerunning.

5. Keep the result and your reasoning in the lesson notes; do not mark a simulated run as live.

### Expected evidence

- Calculate the permitted mean — a saved, inspectable artefact tied to the supplied rule.

- A baseline or change-test record with expected/observed results and a limitation.

### Common mistakes

- All training values missing: stop and request a stated fallback policy.

- Treating a supplied answer key, an authored example or self-review as independent field validation.

### Check your understanding

Which exact input, rule and expected value would let another learner falsify your conclusion in this activity, and what remains untested?

### Offline route

Use the supplied fictional JSON, expected results and paper/text evidence log without a provider account. Manual or constructed completion is labelled; it is not a live cloud integration or trained-model run.

## Activity 3: Implement fit then transform

Estimated time: 35 minutes.

### Outcomes

- Return fitted parameters separately from transformed data.

- Explain and retain a testable result and its limits.

Preprocessing learns parameters such as means from training data. Including test values in that calculation leaks information before fitting a predictor. Keep fitted parameters explicit so the boundary can be checked even in a tiny fixture.

Return fitted parameters separately from transformed data. Build one inspectable transformation or bounded AI prompt. Keep calculation and validation deterministic where possible. If you make a permitted hosted call, save the actual response separately from the authored examples and verify its material claims; the supplied reference never simulates a live model.

Policy for this project: Fit a mean imputer on training values only, ignoring null. Transform train and test using that one mean; never refit on the test set.

### Worked example

```text

PROJECT CONTRACT:
Fit a mean imputer on training values only, ignoring null. Transform train and test using that one mean; never refit on the test set.
HOSTED REFERENCE: open hosted-lab.ipynb or run reference.py with all fixture files together.
EXPECTED CONSTRUCTED RESULT:
{
  "training_mean": 3,
  "train_filled": [
    2,
    3,
    4
  ],
  "test_filled": [
    100,
    3
  ]
}

```

### Guided activity

1. Return fitted parameters separately from transformed data.

2. Open hosted-lab.ipynb and the reference code from the practice pack; keep an unmodified original.

3. Record expected and observed values separately; explain every mismatch.

4. Perform A new extreme test value must not change stored training parameters.

5. Keep the result and your reasoning in the lesson notes; do not mark a simulated run as live.

### Expected evidence

- Implement fit then transform — a saved, inspectable artefact tied to the supplied rule.

- A baseline or change-test record with expected/observed results and a limitation.

### Common mistakes

- A new extreme test value must not change stored training parameters.

- Treating a supplied answer key, an authored example or self-review as independent field validation.

### Check your understanding

Which exact input, rule and expected value would let another learner falsify your conclusion in this activity, and what remains untested?

### Offline route

Use the supplied fictional JSON, expected results and paper/text evidence log without a provider account. Manual or constructed completion is labelled; it is not a live cloud integration or trained-model run.

## Activity 4: Inject an extreme test value

Estimated time: 35 minutes.

### Outcomes

- Demonstrate that training parameters do not change.

- Explain and retain a testable result and its limits.

Preprocessing learns parameters such as means from training data. Including test values in that calculation leaks information before fitting a predictor. Keep fitted parameters explicit so the boundary can be checked even in a tiny fixture.

Demonstrate that training parameters do not change. Change one assumption at a time and predict the result first. Retain the failure, the revision and the rerun evidence. A failure is useful information: hiding a bad output or editing a test target after seeing the answer destroys the value of the experiment.

Policy for this project: Fit a mean imputer on training values only, ignoring null. Transform train and test using that one mean; never refit on the test set.

### Worked example

```text

CHANGE TESTS — predict before running:
1. Including 100 in the fit would change the mean: detect the leakage.
2. All training values missing: stop and request a stated fallback policy.
3. A new extreme test value must not change stored training parameters.
Keep the original expected.json unchanged.

```

### Guided activity

1. Demonstrate that training parameters do not change.

2. Open failure-tests.md from the practice pack; keep an unmodified original.

3. Record expected and observed values separately; explain every mismatch.

4. Perform Including 100 in the fit would change the mean: detect the leakage.

5. Keep the result and your reasoning in the lesson notes; do not mark a simulated run as live.

### Expected evidence

- Inject an extreme test value — a saved, inspectable artefact tied to the supplied rule.

- A baseline or change-test record with expected/observed results and a limitation.

### Common mistakes

- Including 100 in the fit would change the mean: detect the leakage.

- Treating a supplied answer key, an authored example or self-review as independent field validation.

### Check your understanding

Which exact input, rule and expected value would let another learner falsify your conclusion in this activity, and what remains untested?

### Offline route

Use the supplied fictional JSON, expected results and paper/text evidence log without a provider account. Manual or constructed completion is labelled; it is not a live cloud integration or trained-model run.

## Activity 5: Extend to time and class imbalance

Estimated time: 35 minutes.

### Outcomes

- Keep chronological splits and resampling inside training only.

- Explain and retain a testable result and its limits.

Preprocessing learns parameters such as means from training data. Including test values in that calculation leaks information before fitting a predictor. Keep fitted parameters explicit so the boundary can be checked even in a tiny fixture.

Keep chronological splits and resampling inside training only. Review what the fixture cannot establish. Explain who owns the decision, where human approval is needed and which access or professional constraints remain. Do not describe a small educational success as production readiness, certification, legal compliance or a guarantee.

Policy for this project: Fit a mean imputer on training values only, ignoring null. Transform train and test using that one mean; never refit on the test set.

For learners across regions underserved or excluded by mainstream providers: verify country eligibility, language, account/identity requirements, data terms, cost, quota and connectivity before choosing a cloud service. Use only legitimate available alternatives; never bypass restrictions or invent a country/account. No service access? Complete the labelled manual/fixture route without claiming a live AI run.

### Worked example

```text

REVIEW BOUNDARY:
Fit a mean imputer on training values only, ignoring null. Transform train and test using that one mean; never refit on the test set.

ACCESS / NOT TESTED: unavailable provider, unsupported language and absent external feedback must remain explicit.

```

### Guided activity

1. Keep chronological splits and resampling inside training only.

2. Open README.md and your evidence log from the practice pack; keep an unmodified original.

3. Record the human decision owner, limitations and any untested service access.

4. Perform one small change and predict its effect before rerunning.

5. Keep the result and your reasoning in the lesson notes; do not mark a simulated run as live.

### Expected evidence

- Extend to time and class imbalance — a saved, inspectable artefact tied to the supplied rule.

- A baseline or change-test record with expected/observed results and a limitation.

### Common mistakes

- All training values missing: stop and request a stated fallback policy.

- Treating a supplied answer key, an authored example or self-review as independent field validation.

### Check your understanding

Which exact input, rule and expected value would let another learner falsify your conclusion in this activity, and what remains untested?

### Offline route

Use the supplied fictional JSON, expected results and paper/text evidence log without a provider account. Manual or constructed completion is labelled; it is not a live cloud integration or trained-model run.

## Activity 6: Ship a leakage-resistant pipeline contract

Estimated time: 65 minutes.

### Outcomes

- Attach tests for missingness, refit attempts and parameter provenance.

- Explain and retain a testable result and its limits.

Preprocessing learns parameters such as means from training data. Including test values in that calculation leaks information before fitting a predictor. Keep fitted parameters explicit so the boundary can be checked even in a tiny fixture.

Attach tests for missingness, refit attempts and parameter provenance. Deliver a reproducible bundle rather than a screenshot alone. Include inputs, rules, output, failure tests, a short README and residual limitations. Ask another person to follow the instructions if possible; self-review and actual external review must be labelled separately.

Policy for this project: Fit a mean imputer on training values only, ignoring null. Transform train and test using that one mean; never refit on the test set.

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

1. Attach tests for missingness, refit attempts and parameter provenance.

2. Open README.md and your evidence log from the practice pack; keep an unmodified original.

3. Record the human decision owner, limitations and any untested service access.

4. Perform one small change and predict its effect before rerunning.

5. Keep the result and your reasoning in the lesson notes; do not mark a simulated run as live.

### Expected evidence

- Ship a leakage-resistant pipeline contract — a saved, inspectable artefact tied to the supplied rule.

- A baseline or change-test record with expected/observed results and a limitation.

### Common mistakes

- A new extreme test value must not change stored training parameters.

- Treating a supplied answer key, an authored example or self-review as independent field validation.

### Check your understanding

Which exact input, rule and expected value would let another learner falsify your conclusion in this activity, and what remains untested?

### Offline route

Use the supplied fictional JSON, expected results and paper/text evidence log without a provider account. Manual or constructed completion is labelled; it is not a live cloud integration or trained-model run.

## End-of-path review

These are self-check questions, not verified examinations.

### Question 1

For the supplied fixture, what is the expected training_mean?

1. 3

2. It cannot be checked against the supplied input.

3. Whatever value the model reports most confidently.

Review answer: 1. The independent answer key only validates this constructed fixture. Preserve the source, rerun counterexamples, and disclose what was not tested.

### Question 2

How should you handle the project rule: Fit a mean imputer on training values only, ignoring null. Transform train and test using that one mean; never refit on the test set.

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

Fit a mean imputer on training values only, ignoring null. Transform train and test using that one mean; never refit on the test set. Regional access route is legitimate; credentials and private data are absent; manual/constructed work is clearly labelled.

## References

- [Scikit-learn pipelines](https://scikit-learn.org/stable/modules/compose.html)

## Editorial boundary

Original authored practice material; deterministic fixtures build-tested. Not independently expert-reviewed or learner-validated. Time estimates unvalidated.

Use fictional/redacted data and your own authorised provider credentials. Never include credentials in this pack or public work.
