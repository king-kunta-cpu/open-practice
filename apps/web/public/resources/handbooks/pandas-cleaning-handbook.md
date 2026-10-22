# Make cleaning decisions testable with Pandas

Open Practice / Data & evidence / curriculum 1.0

Estimated guided practice: 4h estimated. This estimate has not been learner-tested.

Original practice material · CC BY 4.0 · Non-degree and non-accredited.

## What you will build

Ship tests with the cleaner with inputs, tests and a reproducible handoff.

## Before you start

- Python + Pandas prerequisite; inspect the worked fixture before beginning.

- A text editor/spreadsheet for the manual route. Hosted Python/Jupyter for code exercises; applicable dependencies are in requirements.txt.

- For actual AI calls, a legitimate available cloud service and authorised learner credentials; no particular provider or country is mandatory.

## Learning outcomes

- Identify values that must survive cleaning, including a legitimate outlier.

- Distinguish exact copies from conflicting records.

- Show each transformation and its affected row count.

- Assert that the outlier survives and totals reconcile.

- Keep a reproducible result and disclose safety, rights and regional access limits.

## Activity 1: Write preservation invariants

Estimated time: 35 minutes.

### Outcomes

- Identify values that must survive cleaning, including a legitimate outlier.

- Explain and retain a testable result and its limits.

A cleaning script needs tests for preservation as well as removal. Missing values, duplicates and outliers have different meanings. A high value may be a legitimate transaction; automatically deleting it can distort the report.

Identify values that must survive cleaning, including a legitimate outlier. Inspect the supplied input before using any tool. Write the decision rules in your own words and calculate one small result independently. The reference output is an answer key for this deliberately bounded fixture, not proof of general capability.

Policy for this project: Drop exact duplicate IDs only in this fixture, fill missing units with the stated zero policy, and retain the legitimate 100-unit outlier. In real work, review conflicting duplicates and missing-value semantics first.

For learners across regions underserved or excluded by mainstream providers: verify country eligibility, language, account/identity requirements, data terms, cost, quota and connectivity before choosing a cloud service. Use only legitimate available alternatives; never bypass restrictions or invent a country/account. No service access? Complete the labelled manual/fixture route without claiming a live AI run.

### Worked example

```text

SOURCE (authored fixture):
{
  "rows": [
    {
      "id": "a",
      "units": 2
    },
    {
      "id": "b",
      "units": null
    },
    {
      "id": "a",
      "units": 2
    },
    {
      "id": "c",
      "units": 100
    }
  ]
}
INDEPENDENT FIXTURE TARGET:
{
  "rows": 3,
  "units": [
    2,
    0,
    100
  ],
  "total": 102,
  "outlier_retained": true
}

```

### Guided activity

1. Identify values that must survive cleaning, including a legitimate outlier.

2. Open input.json and expected.json from the practice pack; keep an unmodified original.

3. Record a manual prediction and the relevant rule before consulting the answer key.

4. Perform one small change and predict its effect before rerunning.

5. Keep the result and your reasoning in the lesson notes; do not mark a simulated run as live.

### Expected evidence

- Write preservation invariants — a saved, inspectable artefact tied to the supplied rule.

- A baseline or change-test record with expected/observed results and a limitation.

### Common mistakes

- A duplicate ID with a different amount needs review, not automatic first-row selection.

- Treating a supplied answer key, an authored example or self-review as independent field validation.

### Check your understanding

Which exact input, rule and expected value would let another learner falsify your conclusion in this activity, and what remains untested?

### Offline route

Use the supplied fictional JSON, expected results and paper/text evidence log without a provider account. Manual or constructed completion is labelled; it is not a live cloud integration or trained-model run.

## Activity 2: Inspect missingness and duplicates

Estimated time: 35 minutes.

### Outcomes

- Distinguish exact copies from conflicting records.

- Explain and retain a testable result and its limits.

A cleaning script needs tests for preservation as well as removal. Missing values, duplicates and outliers have different meanings. A high value may be a legitimate transaction; automatically deleting it can distort the report.

Distinguish exact copies from conflicting records. Establish a baseline before changing prompts or code. Keep the original input immutable. Record expected values, observed values and whether each comparison passed. If the expected file conflicts with a justified policy, investigate rather than forcing a convenient match.

Policy for this project: Drop exact duplicate IDs only in this fixture, fill missing units with the stated zero policy, and retain the legitimate 100-unit outlier. In real work, review conflicting duplicates and missing-value semantics first.

### Worked example

```text

MANUAL BASELINE / compare every named field
{
  "rows": 3,
  "units": [
    2,
    0,
    100
  ],
  "total": 102,
  "outlier_retained": true
}
Keep a separate observed-result column; the answer key is not a model response.

```

### Guided activity

1. Distinguish exact copies from conflicting records.

2. Open input.json and expected.json from the practice pack; keep an unmodified original.

3. Record expected and observed values separately; explain every mismatch.

4. Perform one small change and predict its effect before rerunning.

5. Keep the result and your reasoning in the lesson notes; do not mark a simulated run as live.

### Expected evidence

- Inspect missingness and duplicates — a saved, inspectable artefact tied to the supplied rule.

- A baseline or change-test record with expected/observed results and a limitation.

### Common mistakes

- Changing the missing policy to unknown means the old zero-fill expected file is no longer authoritative.

- Treating a supplied answer key, an authored example or self-review as independent field validation.

### Check your understanding

Which exact input, rule and expected value would let another learner falsify your conclusion in this activity, and what remains untested?

### Offline route

Use the supplied fictional JSON, expected results and paper/text evidence log without a provider account. Manual or constructed completion is labelled; it is not a live cloud integration or trained-model run.

## Activity 3: Implement an explicit Pandas policy

Estimated time: 35 minutes.

### Outcomes

- Show each transformation and its affected row count.

- Explain and retain a testable result and its limits.

A cleaning script needs tests for preservation as well as removal. Missing values, duplicates and outliers have different meanings. A high value may be a legitimate transaction; automatically deleting it can distort the report.

Show each transformation and its affected row count. Build one inspectable transformation or bounded AI prompt. Keep calculation and validation deterministic where possible. If you make a permitted hosted call, save the actual response separately from the authored examples and verify its material claims; the supplied reference never simulates a live model.

Policy for this project: Drop exact duplicate IDs only in this fixture, fill missing units with the stated zero policy, and retain the legitimate 100-unit outlier. In real work, review conflicting duplicates and missing-value semantics first.

### Worked example

```text

PROJECT CONTRACT:
Drop exact duplicate IDs only in this fixture, fill missing units with the stated zero policy, and retain the legitimate 100-unit outlier. In real work, review conflicting duplicates and missing-value semantics first.
HOSTED REFERENCE: open hosted-lab.ipynb or run reference.py with all fixture files together.
EXPECTED CONSTRUCTED RESULT:
{
  "rows": 3,
  "units": [
    2,
    0,
    100
  ],
  "total": 102,
  "outlier_retained": true
}

```

### Guided activity

1. Show each transformation and its affected row count.

2. Open hosted-lab.ipynb and the reference code from the practice pack; keep an unmodified original.

3. Record expected and observed values separately; explain every mismatch.

4. Perform Do not remove 100 just because it is far from the median.

5. Keep the result and your reasoning in the lesson notes; do not mark a simulated run as live.

### Expected evidence

- Implement an explicit Pandas policy — a saved, inspectable artefact tied to the supplied rule.

- A baseline or change-test record with expected/observed results and a limitation.

### Common mistakes

- Do not remove 100 just because it is far from the median.

- Treating a supplied answer key, an authored example or self-review as independent field validation.

### Check your understanding

Which exact input, rule and expected value would let another learner falsify your conclusion in this activity, and what remains untested?

### Offline route

Use the supplied fictional JSON, expected results and paper/text evidence log without a provider account. Manual or constructed completion is labelled; it is not a live cloud integration or trained-model run.

## Activity 4: Test accidental data loss

Estimated time: 35 minutes.

### Outcomes

- Assert that the outlier survives and totals reconcile.

- Explain and retain a testable result and its limits.

A cleaning script needs tests for preservation as well as removal. Missing values, duplicates and outliers have different meanings. A high value may be a legitimate transaction; automatically deleting it can distort the report.

Assert that the outlier survives and totals reconcile. Change one assumption at a time and predict the result first. Retain the failure, the revision and the rerun evidence. A failure is useful information: hiding a bad output or editing a test target after seeing the answer destroys the value of the experiment.

Policy for this project: Drop exact duplicate IDs only in this fixture, fill missing units with the stated zero policy, and retain the legitimate 100-unit outlier. In real work, review conflicting duplicates and missing-value semantics first.

### Worked example

```text

CHANGE TESTS — predict before running:
1. A duplicate ID with a different amount needs review, not automatic first-row selection.
2. Changing the missing policy to unknown means the old zero-fill expected file is no longer authoritative.
3. Do not remove 100 just because it is far from the median.
Keep the original expected.json unchanged.

```

### Guided activity

1. Assert that the outlier survives and totals reconcile.

2. Open failure-tests.md from the practice pack; keep an unmodified original.

3. Record expected and observed values separately; explain every mismatch.

4. Perform A duplicate ID with a different amount needs review, not automatic first-row selection.

5. Keep the result and your reasoning in the lesson notes; do not mark a simulated run as live.

### Expected evidence

- Test accidental data loss — a saved, inspectable artefact tied to the supplied rule.

- A baseline or change-test record with expected/observed results and a limitation.

### Common mistakes

- A duplicate ID with a different amount needs review, not automatic first-row selection.

- Treating a supplied answer key, an authored example or self-review as independent field validation.

### Check your understanding

Which exact input, rule and expected value would let another learner falsify your conclusion in this activity, and what remains untested?

### Offline route

Use the supplied fictional JSON, expected results and paper/text evidence log without a provider account. Manual or constructed completion is labelled; it is not a live cloud integration or trained-model run.

## Activity 5: Separate preparation from model fitting

Estimated time: 35 minutes.

### Outcomes

- Do not learn normalisation parameters from future data.

- Explain and retain a testable result and its limits.

A cleaning script needs tests for preservation as well as removal. Missing values, duplicates and outliers have different meanings. A high value may be a legitimate transaction; automatically deleting it can distort the report.

Do not learn normalisation parameters from future data. Review what the fixture cannot establish. Explain who owns the decision, where human approval is needed and which access or professional constraints remain. Do not describe a small educational success as production readiness, certification, legal compliance or a guarantee.

Policy for this project: Drop exact duplicate IDs only in this fixture, fill missing units with the stated zero policy, and retain the legitimate 100-unit outlier. In real work, review conflicting duplicates and missing-value semantics first.

For learners across regions underserved or excluded by mainstream providers: verify country eligibility, language, account/identity requirements, data terms, cost, quota and connectivity before choosing a cloud service. Use only legitimate available alternatives; never bypass restrictions or invent a country/account. No service access? Complete the labelled manual/fixture route without claiming a live AI run.

### Worked example

```text

REVIEW BOUNDARY:
Drop exact duplicate IDs only in this fixture, fill missing units with the stated zero policy, and retain the legitimate 100-unit outlier. In real work, review conflicting duplicates and missing-value semantics first.

ACCESS / NOT TESTED: unavailable provider, unsupported language and absent external feedback must remain explicit.

```

### Guided activity

1. Do not learn normalisation parameters from future data.

2. Open README.md and your evidence log from the practice pack; keep an unmodified original.

3. Record the human decision owner, limitations and any untested service access.

4. Perform one small change and predict its effect before rerunning.

5. Keep the result and your reasoning in the lesson notes; do not mark a simulated run as live.

### Expected evidence

- Separate preparation from model fitting — a saved, inspectable artefact tied to the supplied rule.

- A baseline or change-test record with expected/observed results and a limitation.

### Common mistakes

- Changing the missing policy to unknown means the old zero-fill expected file is no longer authoritative.

- Treating a supplied answer key, an authored example or self-review as independent field validation.

### Check your understanding

Which exact input, rule and expected value would let another learner falsify your conclusion in this activity, and what remains untested?

### Offline route

Use the supplied fictional JSON, expected results and paper/text evidence log without a provider account. Manual or constructed completion is labelled; it is not a live cloud integration or trained-model run.

## Activity 6: Ship tests with the cleaner

Estimated time: 65 minutes.

### Outcomes

- Include expected rows, rationale and a reject/review policy.

- Explain and retain a testable result and its limits.

A cleaning script needs tests for preservation as well as removal. Missing values, duplicates and outliers have different meanings. A high value may be a legitimate transaction; automatically deleting it can distort the report.

Include expected rows, rationale and a reject/review policy. Deliver a reproducible bundle rather than a screenshot alone. Include inputs, rules, output, failure tests, a short README and residual limitations. Ask another person to follow the instructions if possible; self-review and actual external review must be labelled separately.

Policy for this project: Drop exact duplicate IDs only in this fixture, fill missing units with the stated zero policy, and retain the legitimate 100-unit outlier. In real work, review conflicting duplicates and missing-value semantics first.

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

1. Include expected rows, rationale and a reject/review policy.

2. Open README.md and your evidence log from the practice pack; keep an unmodified original.

3. Record the human decision owner, limitations and any untested service access.

4. Perform one small change and predict its effect before rerunning.

5. Keep the result and your reasoning in the lesson notes; do not mark a simulated run as live.

### Expected evidence

- Ship tests with the cleaner — a saved, inspectable artefact tied to the supplied rule.

- A baseline or change-test record with expected/observed results and a limitation.

### Common mistakes

- Do not remove 100 just because it is far from the median.

- Treating a supplied answer key, an authored example or self-review as independent field validation.

### Check your understanding

Which exact input, rule and expected value would let another learner falsify your conclusion in this activity, and what remains untested?

### Offline route

Use the supplied fictional JSON, expected results and paper/text evidence log without a provider account. Manual or constructed completion is labelled; it is not a live cloud integration or trained-model run.

## End-of-path review

These are self-check questions, not verified examinations.

### Question 1

For the supplied fixture, what is the expected rows?

1. 3

2. It cannot be checked against the supplied input.

3. Whatever value the model reports most confidently.

Review answer: 1. The independent answer key only validates this constructed fixture. Preserve the source, rerun counterexamples, and disclose what was not tested.

### Question 2

How should you handle the project rule: Drop exact duplicate IDs only in this fixture, fill missing units with the stated zero policy, and retain the legitimate 100-unit outlier. In real work, review conflicting duplicates and missing-value semantics first.

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

Drop exact duplicate IDs only in this fixture, fill missing units with the stated zero policy, and retain the legitimate 100-unit outlier. In real work, review conflicting duplicates and missing-value semantics first. Regional access route is legitimate; credentials and private data are absent; manual/constructed work is clearly labelled.

## References

- [Pandas data-cleaning documentation](https://pandas.pydata.org/docs/user_guide/missing_data.html)

## Editorial boundary

Original authored practice material; deterministic fixtures build-tested. Not independently expert-reviewed or learner-validated. Time estimates unvalidated.

Use fictional/redacted data and your own authorised provider credentials. Never include credentials in this pack or public work.
