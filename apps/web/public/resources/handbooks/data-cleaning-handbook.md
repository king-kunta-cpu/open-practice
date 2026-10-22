# Repair dirty records without inventing facts

Open Practice / Data & evidence / curriculum 1.0

Estimated guided practice: 4h estimated. This estimate has not been learner-tested.

Original practice material · CC BY 4.0 · Non-degree and non-accredited.

## What you will build

Ship a repair kit and audit trail with inputs, tests and a reproducible handoff.

## Before you start

- Spreadsheet onramp; inspect the worked fixture before beginning.

- A text editor/spreadsheet for the manual route. Hosted Python/Jupyter for code exercises; applicable dependencies are in requirements.txt.

- For actual AI calls, a legitimate available cloud service and authorised learner credentials; no particular provider or country is mandatory.

## Learning outcomes

- Specify identifier, amount and validation rules in plain language.

- Establish accepted rows and rejection reasons before automating.

- Return clean data and a reject log without overwriting the source.

- Use distinct reason codes so failures remain explainable.

- Keep a reproducible result and disclose safety, rights and regional access limits.

## Activity 1: Write a data dictionary

Estimated time: 35 minutes.

### Outcomes

- Specify identifier, amount and validation rules in plain language.

- Explain and retain a testable result and its limits.

Cleaning is a policy decision with an audit trail. Duplicate IDs, blanks and invalid types are different problems. Preserve the original and reject ambiguous values rather than making a complete-looking table with invented numbers.

Specify identifier, amount and validation rules in plain language. Inspect the supplied input before using any tool. Write the decision rules in your own words and calculate one small result independently. The reference output is an answer key for this deliberately bounded fixture, not proof of general capability.

Policy for this project: IDs must be unique, amounts finite and non-negative; zero is valid. First occurrence wins only in this fixture; real conflicting records require review.

For learners across regions underserved or excluded by mainstream providers: verify country eligibility, language, account/identity requirements, data terms, cost, quota and connectivity before choosing a cloud service. Use only legitimate available alternatives; never bypass restrictions or invent a country/account. No service access? Complete the labelled manual/fixture route without claiming a live AI run.

### Worked example

```text

SOURCE (authored fixture):
{
  "rows": [
    {
      "id": "a",
      "amount": 5
    },
    {
      "id": "b",
      "amount": 0
    },
    {
      "id": "a",
      "amount": 5
    },
    {
      "id": "c",
      "amount": "?"
    },
    {
      "id": "d",
      "amount": -1
    }
  ]
}
INDEPENDENT FIXTURE TARGET:
{
  "accepted": 2,
  "total": 5,
  "reasons": [
    "duplicate_id",
    "non_numeric",
    "negative_amount"
  ]
}

```

### Guided activity

1. Specify identifier, amount and validation rules in plain language.

2. Open input.json and expected.json from the practice pack; keep an unmodified original.

3. Record a manual prediction and the relevant rule before consulting the answer key.

4. Perform one small change and predict its effect before rerunning.

5. Keep the result and your reasoning in the lesson notes; do not mark a simulated run as live.

### Expected evidence

- Write a data dictionary — a saved, inspectable artefact tied to the supplied rule.

- A baseline or change-test record with expected/observed results and a limitation.

### Common mistakes

- Conflicting duplicate: send to a human instead of quietly selecting a value.

- Treating a supplied answer key, an authored example or self-review as independent field validation.

### Check your understanding

Which exact input, rule and expected value would let another learner falsify your conclusion in this activity, and what remains untested?

### Offline route

Use the supplied fictional JSON, expected results and paper/text evidence log without a provider account. Manual or constructed completion is labelled; it is not a live cloud integration or trained-model run.

## Activity 2: Mark each dirty row manually

Estimated time: 35 minutes.

### Outcomes

- Establish accepted rows and rejection reasons before automating.

- Explain and retain a testable result and its limits.

Cleaning is a policy decision with an audit trail. Duplicate IDs, blanks and invalid types are different problems. Preserve the original and reject ambiguous values rather than making a complete-looking table with invented numbers.

Establish accepted rows and rejection reasons before automating. Establish a baseline before changing prompts or code. Keep the original input immutable. Record expected values, observed values and whether each comparison passed. If the expected file conflicts with a justified policy, investigate rather than forcing a convenient match.

Policy for this project: IDs must be unique, amounts finite and non-negative; zero is valid. First occurrence wins only in this fixture; real conflicting records require review.

### Worked example

```text

MANUAL BASELINE / compare every named field
{
  "accepted": 2,
  "total": 5,
  "reasons": [
    "duplicate_id",
    "non_numeric",
    "negative_amount"
  ]
}
Keep a separate observed-result column; the answer key is not a model response.

```

### Guided activity

1. Establish accepted rows and rejection reasons before automating.

2. Open input.json and expected.json from the practice pack; keep an unmodified original.

3. Record expected and observed values separately; explain every mismatch.

4. Perform one small change and predict its effect before rerunning.

5. Keep the result and your reasoning in the lesson notes; do not mark a simulated run as live.

### Expected evidence

- Mark each dirty row manually — a saved, inspectable artefact tied to the supplied rule.

- A baseline or change-test record with expected/observed results and a limitation.

### Common mistakes

- Blank amount is not zero.

- Treating a supplied answer key, an authored example or self-review as independent field validation.

### Check your understanding

Which exact input, rule and expected value would let another learner falsify your conclusion in this activity, and what remains untested?

### Offline route

Use the supplied fictional JSON, expected results and paper/text evidence log without a provider account. Manual or constructed completion is labelled; it is not a live cloud integration or trained-model run.

## Activity 3: Build a non-destructive cleaner

Estimated time: 35 minutes.

### Outcomes

- Return clean data and a reject log without overwriting the source.

- Explain and retain a testable result and its limits.

Cleaning is a policy decision with an audit trail. Duplicate IDs, blanks and invalid types are different problems. Preserve the original and reject ambiguous values rather than making a complete-looking table with invented numbers.

Return clean data and a reject log without overwriting the source. Build one inspectable transformation or bounded AI prompt. Keep calculation and validation deterministic where possible. If you make a permitted hosted call, save the actual response separately from the authored examples and verify its material claims; the supplied reference never simulates a live model.

Policy for this project: IDs must be unique, amounts finite and non-negative; zero is valid. First occurrence wins only in this fixture; real conflicting records require review.

### Worked example

```text

PROJECT CONTRACT:
IDs must be unique, amounts finite and non-negative; zero is valid. First occurrence wins only in this fixture; real conflicting records require review.
HOSTED REFERENCE: open hosted-lab.ipynb or run reference.py with all fixture files together.
EXPECTED CONSTRUCTED RESULT:
{
  "accepted": 2,
  "total": 5,
  "reasons": [
    "duplicate_id",
    "non_numeric",
    "negative_amount"
  ]
}

```

### Guided activity

1. Return clean data and a reject log without overwriting the source.

2. Open hosted-lab.ipynb and the reference code from the practice pack; keep an unmodified original.

3. Record expected and observed values separately; explain every mismatch.

4. Perform Rejecting every unusual value can remove legitimate data; review the policy before generalising.

5. Keep the result and your reasoning in the lesson notes; do not mark a simulated run as live.

### Expected evidence

- Build a non-destructive cleaner — a saved, inspectable artefact tied to the supplied rule.

- A baseline or change-test record with expected/observed results and a limitation.

### Common mistakes

- Rejecting every unusual value can remove legitimate data; review the policy before generalising.

- Treating a supplied answer key, an authored example or self-review as independent field validation.

### Check your understanding

Which exact input, rule and expected value would let another learner falsify your conclusion in this activity, and what remains untested?

### Offline route

Use the supplied fictional JSON, expected results and paper/text evidence log without a provider account. Manual or constructed completion is labelled; it is not a live cloud integration or trained-model run.

## Activity 4: Test duplicates, blanks and zero

Estimated time: 35 minutes.

### Outcomes

- Use distinct reason codes so failures remain explainable.

- Explain and retain a testable result and its limits.

Cleaning is a policy decision with an audit trail. Duplicate IDs, blanks and invalid types are different problems. Preserve the original and reject ambiguous values rather than making a complete-looking table with invented numbers.

Use distinct reason codes so failures remain explainable. Change one assumption at a time and predict the result first. Retain the failure, the revision and the rerun evidence. A failure is useful information: hiding a bad output or editing a test target after seeing the answer destroys the value of the experiment.

Policy for this project: IDs must be unique, amounts finite and non-negative; zero is valid. First occurrence wins only in this fixture; real conflicting records require review.

### Worked example

```text

CHANGE TESTS — predict before running:
1. Conflicting duplicate: send to a human instead of quietly selecting a value.
2. Blank amount is not zero.
3. Rejecting every unusual value can remove legitimate data; review the policy before generalising.
Keep the original expected.json unchanged.

```

### Guided activity

1. Use distinct reason codes so failures remain explainable.

2. Open failure-tests.md from the practice pack; keep an unmodified original.

3. Record expected and observed values separately; explain every mismatch.

4. Perform Conflicting duplicate: send to a human instead of quietly selecting a value.

5. Keep the result and your reasoning in the lesson notes; do not mark a simulated run as live.

### Expected evidence

- Test duplicates, blanks and zero — a saved, inspectable artefact tied to the supplied rule.

- A baseline or change-test record with expected/observed results and a limitation.

### Common mistakes

- Conflicting duplicate: send to a human instead of quietly selecting a value.

- Treating a supplied answer key, an authored example or self-review as independent field validation.

### Check your understanding

Which exact input, rule and expected value would let another learner falsify your conclusion in this activity, and what remains untested?

### Offline route

Use the supplied fictional JSON, expected results and paper/text evidence log without a provider account. Manual or constructed completion is labelled; it is not a live cloud integration or trained-model run.

## Activity 5: Audit the source and policy

Estimated time: 35 minutes.

### Outcomes

- Validate subject matter against primary tool documentation, not a misleading catalogue heading.

- Explain and retain a testable result and its limits.

Cleaning is a policy decision with an audit trail. Duplicate IDs, blanks and invalid types are different problems. Preserve the original and reject ambiguous values rather than making a complete-looking table with invented numbers.

Validate subject matter against primary tool documentation, not a misleading catalogue heading. Review what the fixture cannot establish. Explain who owns the decision, where human approval is needed and which access or professional constraints remain. Do not describe a small educational success as production readiness, certification, legal compliance or a guarantee.

Policy for this project: IDs must be unique, amounts finite and non-negative; zero is valid. First occurrence wins only in this fixture; real conflicting records require review.

For learners across regions underserved or excluded by mainstream providers: verify country eligibility, language, account/identity requirements, data terms, cost, quota and connectivity before choosing a cloud service. Use only legitimate available alternatives; never bypass restrictions or invent a country/account. No service access? Complete the labelled manual/fixture route without claiming a live AI run.

### Worked example

```text

REVIEW BOUNDARY:
IDs must be unique, amounts finite and non-negative; zero is valid. First occurrence wins only in this fixture; real conflicting records require review.

ACCESS / NOT TESTED: unavailable provider, unsupported language and absent external feedback must remain explicit.

```

### Guided activity

1. Validate subject matter against primary tool documentation, not a misleading catalogue heading.

2. Open README.md and your evidence log from the practice pack; keep an unmodified original.

3. Record the human decision owner, limitations and any untested service access.

4. Perform one small change and predict its effect before rerunning.

5. Keep the result and your reasoning in the lesson notes; do not mark a simulated run as live.

### Expected evidence

- Audit the source and policy — a saved, inspectable artefact tied to the supplied rule.

- A baseline or change-test record with expected/observed results and a limitation.

### Common mistakes

- Blank amount is not zero.

- Treating a supplied answer key, an authored example or self-review as independent field validation.

### Check your understanding

Which exact input, rule and expected value would let another learner falsify your conclusion in this activity, and what remains untested?

### Offline route

Use the supplied fictional JSON, expected results and paper/text evidence log without a provider account. Manual or constructed completion is labelled; it is not a live cloud integration or trained-model run.

## Activity 6: Ship a repair kit and audit trail

Estimated time: 65 minutes.

### Outcomes

- Include the original, cleaned data, rejects and tests.

- Explain and retain a testable result and its limits.

Cleaning is a policy decision with an audit trail. Duplicate IDs, blanks and invalid types are different problems. Preserve the original and reject ambiguous values rather than making a complete-looking table with invented numbers.

Include the original, cleaned data, rejects and tests. Deliver a reproducible bundle rather than a screenshot alone. Include inputs, rules, output, failure tests, a short README and residual limitations. Ask another person to follow the instructions if possible; self-review and actual external review must be labelled separately.

Policy for this project: IDs must be unique, amounts finite and non-negative; zero is valid. First occurrence wins only in this fixture; real conflicting records require review.

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

1. Include the original, cleaned data, rejects and tests.

2. Open README.md and your evidence log from the practice pack; keep an unmodified original.

3. Record the human decision owner, limitations and any untested service access.

4. Perform one small change and predict its effect before rerunning.

5. Keep the result and your reasoning in the lesson notes; do not mark a simulated run as live.

### Expected evidence

- Ship a repair kit and audit trail — a saved, inspectable artefact tied to the supplied rule.

- A baseline or change-test record with expected/observed results and a limitation.

### Common mistakes

- Rejecting every unusual value can remove legitimate data; review the policy before generalising.

- Treating a supplied answer key, an authored example or self-review as independent field validation.

### Check your understanding

Which exact input, rule and expected value would let another learner falsify your conclusion in this activity, and what remains untested?

### Offline route

Use the supplied fictional JSON, expected results and paper/text evidence log without a provider account. Manual or constructed completion is labelled; it is not a live cloud integration or trained-model run.

## End-of-path review

These are self-check questions, not verified examinations.

### Question 1

For the supplied fixture, what is the expected accepted?

1. 2

2. It cannot be checked against the supplied input.

3. Whatever value the model reports most confidently.

Review answer: 1. The independent answer key only validates this constructed fixture. Preserve the source, rerun counterexamples, and disclose what was not tested.

### Question 2

How should you handle the project rule: IDs must be unique, amounts finite and non-negative; zero is valid. First occurrence wins only in this fixture; real conflicting records require review.

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

IDs must be unique, amounts finite and non-negative; zero is valid. First occurrence wins only in this fixture; real conflicting records require review. Regional access route is legitimate; credentials and private data are absent; manual/constructed work is clearly labelled.

## References

- [Pandas missing-data guidance](https://pandas.pydata.org/docs/user_guide/missing_data.html)

## Editorial boundary

Original authored practice material; deterministic fixtures build-tested. Not independently expert-reviewed or learner-validated. Time estimates unvalidated.

Use fictional/redacted data and your own authorised provider credentials. Never include credentials in this pack or public work.
