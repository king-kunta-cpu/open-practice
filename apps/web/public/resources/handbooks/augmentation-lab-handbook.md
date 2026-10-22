# Augment training data without contaminating the test

Open Practice / Measured machine learning / curriculum 1.0

Estimated guided practice: 4h estimated. This estimate has not been learner-tested.

Original practice material · CC BY 4.0 · Non-degree and non-accredited.

## What you will build

Deliver a leakage audit with inputs, tests and a reproducible handoff.

## Before you start

- Python + ML prerequisite; inspect the worked fixture before beginning.

- A text editor/spreadsheet for the manual route. Hosted Python/Jupyter for code exercises; applicable dependencies are in requirements.txt.

- For actual AI calls, a legitimate available cloud service and authorised learner credentials; no particular provider or country is mandatory.

## Learning outcomes

- Explain why the toy transformation is limited to this fixture.

- Retain immutable test data and original identifiers.

- Keep parent IDs so transformed copies remain identifiable.

- Use the same original holdout for baseline and augmented training.

- Keep a reproducible result and disclose safety, rights and regional access limits.

## Activity 1: State a label-preservation assumption

Estimated time: 35 minutes.

### Outcomes

- Explain why the toy transformation is limited to this fixture.

- Explain and retain a testable result and its limits.

Augmentation creates transformed training examples under a stated assumption about label preservation. It does not create independent real-world evidence. Transforming the held-out set or splitting near-duplicates across sets can inflate apparent performance.

Explain why the toy transformation is limited to this fixture. Inspect the supplied input before using any tool. Write the decision rules in your own words and calculate one small result independently. The reference output is an answer key for this deliberately bounded fixture, not proof of general capability.

Policy for this project: For this toy brightness feature, add 0.01 to training x only and preserve labels. Test rows must be unchanged. This small numerical shift is not valid for arbitrary domains.

For learners across regions underserved or excluded by mainstream providers: verify country eligibility, language, account/identity requirements, data terms, cost, quota and connectivity before choosing a cloud service. Use only legitimate available alternatives; never bypass restrictions or invent a country/account. No service access? Complete the labelled manual/fixture route without claiming a live AI run.

### Worked example

```text

SOURCE (authored fixture):
{
  "train": [
    {
      "id": "a",
      "x": 0.1,
      "label": 0
    },
    {
      "id": "b",
      "x": 0.2,
      "label": 0
    },
    {
      "id": "c",
      "x": 0.8,
      "label": 1
    }
  ],
  "test": [
    {
      "id": "t1",
      "x": 0.15,
      "label": 0
    },
    {
      "id": "t2",
      "x": 0.9,
      "label": 1
    }
  ]
}
INDEPENDENT FIXTURE TARGET:
{
  "original_train": 3,
  "augmented_train": 6,
  "unchanged_test": true,
  "unique_originals": 3
}

```

### Guided activity

1. Explain why the toy transformation is limited to this fixture.

2. Open input.json and expected.json from the practice pack; keep an unmodified original.

3. Record a manual prediction and the relevant rule before consulting the answer key.

4. Perform one small change and predict its effect before rerunning.

5. Keep the result and your reasoning in the lesson notes; do not mark a simulated run as live.

### Expected evidence

- State a label-preservation assumption — a saved, inspectable artefact tied to the supplied rule.

- A baseline or change-test record with expected/observed results and a limitation.

### Common mistakes

- Augment the test rows: fail the experiment design even if a score improves.

- Treating a supplied answer key, an authored example or self-review as independent field validation.

### Check your understanding

Which exact input, rule and expected value would let another learner falsify your conclusion in this activity, and what remains untested?

### Offline route

Use the supplied fictional JSON, expected results and paper/text evidence log without a provider account. Manual or constructed completion is labelled; it is not a live cloud integration or trained-model run.

## Activity 2: Split originals before transforming

Estimated time: 35 minutes.

### Outcomes

- Retain immutable test data and original identifiers.

- Explain and retain a testable result and its limits.

Augmentation creates transformed training examples under a stated assumption about label preservation. It does not create independent real-world evidence. Transforming the held-out set or splitting near-duplicates across sets can inflate apparent performance.

Retain immutable test data and original identifiers. Establish a baseline before changing prompts or code. Keep the original input immutable. Record expected values, observed values and whether each comparison passed. If the expected file conflicts with a justified policy, investigate rather than forcing a convenient match.

Policy for this project: For this toy brightness feature, add 0.01 to training x only and preserve labels. Test rows must be unchanged. This small numerical shift is not valid for arbitrary domains.

### Worked example

```text

MANUAL BASELINE / compare every named field
{
  "original_train": 3,
  "augmented_train": 6,
  "unchanged_test": true,
  "unique_originals": 3
}
Keep a separate observed-result column; the answer key is not a model response.

```

### Guided activity

1. Retain immutable test data and original identifiers.

2. Open input.json and expected.json from the practice pack; keep an unmodified original.

3. Record expected and observed values separately; explain every mismatch.

4. Perform one small change and predict its effect before rerunning.

5. Keep the result and your reasoning in the lesson notes; do not mark a simulated run as live.

### Expected evidence

- Split originals before transforming — a saved, inspectable artefact tied to the supplied rule.

- A baseline or change-test record with expected/observed results and a limitation.

### Common mistakes

- Use a shift that crosses a real label boundary: reject the label-preservation assumption.

- Treating a supplied answer key, an authored example or self-review as independent field validation.

### Check your understanding

Which exact input, rule and expected value would let another learner falsify your conclusion in this activity, and what remains untested?

### Offline route

Use the supplied fictional JSON, expected results and paper/text evidence log without a provider account. Manual or constructed completion is labelled; it is not a live cloud integration or trained-model run.

## Activity 3: Build a traceable augmentation step

Estimated time: 35 minutes.

### Outcomes

- Keep parent IDs so transformed copies remain identifiable.

- Explain and retain a testable result and its limits.

Augmentation creates transformed training examples under a stated assumption about label preservation. It does not create independent real-world evidence. Transforming the held-out set or splitting near-duplicates across sets can inflate apparent performance.

Keep parent IDs so transformed copies remain identifiable. Build one inspectable transformation or bounded AI prompt. Keep calculation and validation deterministic where possible. If you make a permitted hosted call, save the actual response separately from the authored examples and verify its material claims; the supplied reference never simulates a live model.

Policy for this project: For this toy brightness feature, add 0.01 to training x only and preserve labels. Test rows must be unchanged. This small numerical shift is not valid for arbitrary domains.

### Worked example

```text

PROJECT CONTRACT:
For this toy brightness feature, add 0.01 to training x only and preserve labels. Test rows must be unchanged. This small numerical shift is not valid for arbitrary domains.
HOSTED REFERENCE: open hosted-lab.ipynb or run reference.py with all fixture files together.
EXPECTED CONSTRUCTED RESULT:
{
  "original_train": 3,
  "augmented_train": 6,
  "unchanged_test": true,
  "unique_originals": 3
}

```

### Guided activity

1. Keep parent IDs so transformed copies remain identifiable.

2. Open hosted-lab.ipynb and the reference code from the practice pack; keep an unmodified original.

3. Record expected and observed values separately; explain every mismatch.

4. Perform Count transformed copies as new independent observations: flag pseudoreplication.

5. Keep the result and your reasoning in the lesson notes; do not mark a simulated run as live.

### Expected evidence

- Build a traceable augmentation step — a saved, inspectable artefact tied to the supplied rule.

- A baseline or change-test record with expected/observed results and a limitation.

### Common mistakes

- Count transformed copies as new independent observations: flag pseudoreplication.

- Treating a supplied answer key, an authored example or self-review as independent field validation.

### Check your understanding

Which exact input, rule and expected value would let another learner falsify your conclusion in this activity, and what remains untested?

### Offline route

Use the supplied fictional JSON, expected results and paper/text evidence log without a provider account. Manual or constructed completion is labelled; it is not a live cloud integration or trained-model run.

## Activity 4: Compare fair experiments

Estimated time: 35 minutes.

### Outcomes

- Use the same original holdout for baseline and augmented training.

- Explain and retain a testable result and its limits.

Augmentation creates transformed training examples under a stated assumption about label preservation. It does not create independent real-world evidence. Transforming the held-out set or splitting near-duplicates across sets can inflate apparent performance.

Use the same original holdout for baseline and augmented training. Change one assumption at a time and predict the result first. Retain the failure, the revision and the rerun evidence. A failure is useful information: hiding a bad output or editing a test target after seeing the answer destroys the value of the experiment.

Policy for this project: For this toy brightness feature, add 0.01 to training x only and preserve labels. Test rows must be unchanged. This small numerical shift is not valid for arbitrary domains.

### Worked example

```text

CHANGE TESTS — predict before running:
1. Augment the test rows: fail the experiment design even if a score improves.
2. Use a shift that crosses a real label boundary: reject the label-preservation assumption.
3. Count transformed copies as new independent observations: flag pseudoreplication.
Keep the original expected.json unchanged.

```

### Guided activity

1. Use the same original holdout for baseline and augmented training.

2. Open failure-tests.md from the practice pack; keep an unmodified original.

3. Record expected and observed values separately; explain every mismatch.

4. Perform Augment the test rows: fail the experiment design even if a score improves.

5. Keep the result and your reasoning in the lesson notes; do not mark a simulated run as live.

### Expected evidence

- Compare fair experiments — a saved, inspectable artefact tied to the supplied rule.

- A baseline or change-test record with expected/observed results and a limitation.

### Common mistakes

- Augment the test rows: fail the experiment design even if a score improves.

- Treating a supplied answer key, an authored example or self-review as independent field validation.

### Check your understanding

Which exact input, rule and expected value would let another learner falsify your conclusion in this activity, and what remains untested?

### Offline route

Use the supplied fictional JSON, expected results and paper/text evidence log without a provider account. Manual or constructed completion is labelled; it is not a live cloud integration or trained-model run.

## Activity 5: Challenge synthetic evidence

Estimated time: 35 minutes.

### Outcomes

- Repeated or generated examples do not establish demand, new users or field robustness.

- Explain and retain a testable result and its limits.

Augmentation creates transformed training examples under a stated assumption about label preservation. It does not create independent real-world evidence. Transforming the held-out set or splitting near-duplicates across sets can inflate apparent performance.

Repeated or generated examples do not establish demand, new users or field robustness. Review what the fixture cannot establish. Explain who owns the decision, where human approval is needed and which access or professional constraints remain. Do not describe a small educational success as production readiness, certification, legal compliance or a guarantee.

Policy for this project: For this toy brightness feature, add 0.01 to training x only and preserve labels. Test rows must be unchanged. This small numerical shift is not valid for arbitrary domains.

For learners across regions underserved or excluded by mainstream providers: verify country eligibility, language, account/identity requirements, data terms, cost, quota and connectivity before choosing a cloud service. Use only legitimate available alternatives; never bypass restrictions or invent a country/account. No service access? Complete the labelled manual/fixture route without claiming a live AI run.

### Worked example

```text

REVIEW BOUNDARY:
For this toy brightness feature, add 0.01 to training x only and preserve labels. Test rows must be unchanged. This small numerical shift is not valid for arbitrary domains.

ACCESS / NOT TESTED: unavailable provider, unsupported language and absent external feedback must remain explicit.

```

### Guided activity

1. Repeated or generated examples do not establish demand, new users or field robustness.

2. Open README.md and your evidence log from the practice pack; keep an unmodified original.

3. Record the human decision owner, limitations and any untested service access.

4. Perform one small change and predict its effect before rerunning.

5. Keep the result and your reasoning in the lesson notes; do not mark a simulated run as live.

### Expected evidence

- Challenge synthetic evidence — a saved, inspectable artefact tied to the supplied rule.

- A baseline or change-test record with expected/observed results and a limitation.

### Common mistakes

- Use a shift that crosses a real label boundary: reject the label-preservation assumption.

- Treating a supplied answer key, an authored example or self-review as independent field validation.

### Check your understanding

Which exact input, rule and expected value would let another learner falsify your conclusion in this activity, and what remains untested?

### Offline route

Use the supplied fictional JSON, expected results and paper/text evidence log without a provider account. Manual or constructed completion is labelled; it is not a live cloud integration or trained-model run.

## Activity 6: Deliver a leakage audit

Estimated time: 65 minutes.

### Outcomes

- Include parent mappings and a hash of untouched test rows.

- Explain and retain a testable result and its limits.

Augmentation creates transformed training examples under a stated assumption about label preservation. It does not create independent real-world evidence. Transforming the held-out set or splitting near-duplicates across sets can inflate apparent performance.

Include parent mappings and a hash of untouched test rows. Deliver a reproducible bundle rather than a screenshot alone. Include inputs, rules, output, failure tests, a short README and residual limitations. Ask another person to follow the instructions if possible; self-review and actual external review must be labelled separately.

Policy for this project: For this toy brightness feature, add 0.01 to training x only and preserve labels. Test rows must be unchanged. This small numerical shift is not valid for arbitrary domains.

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

1. Include parent mappings and a hash of untouched test rows.

2. Open README.md and your evidence log from the practice pack; keep an unmodified original.

3. Record the human decision owner, limitations and any untested service access.

4. Perform one small change and predict its effect before rerunning.

5. Keep the result and your reasoning in the lesson notes; do not mark a simulated run as live.

### Expected evidence

- Deliver a leakage audit — a saved, inspectable artefact tied to the supplied rule.

- A baseline or change-test record with expected/observed results and a limitation.

### Common mistakes

- Count transformed copies as new independent observations: flag pseudoreplication.

- Treating a supplied answer key, an authored example or self-review as independent field validation.

### Check your understanding

Which exact input, rule and expected value would let another learner falsify your conclusion in this activity, and what remains untested?

### Offline route

Use the supplied fictional JSON, expected results and paper/text evidence log without a provider account. Manual or constructed completion is labelled; it is not a live cloud integration or trained-model run.

## End-of-path review

These are self-check questions, not verified examinations.

### Question 1

For the supplied fixture, what is the expected original_train?

1. 3

2. It cannot be checked against the supplied input.

3. Whatever value the model reports most confidently.

Review answer: 1. The independent answer key only validates this constructed fixture. Preserve the source, rerun counterexamples, and disclose what was not tested.

### Question 2

How should you handle the project rule: For this toy brightness feature, add 0.01 to training x only and preserve labels. Test rows must be unchanged. This small numerical shift is not valid for arbitrary domains.

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

For this toy brightness feature, add 0.01 to training x only and preserve labels. Test rows must be unchanged. This small numerical shift is not valid for arbitrary domains. Regional access route is legitimate; credentials and private data are absent; manual/constructed work is clearly labelled.

## References

- [Scikit-learn common pitfalls](https://scikit-learn.org/stable/common_pitfalls.html)

## Editorial boundary

Original authored practice material; deterministic fixtures build-tested. Not independently expert-reviewed or learner-validated. Time estimates unvalidated.

Use fictional/redacted data and your own authorised provider credentials. Never include credentials in this pack or public work.
