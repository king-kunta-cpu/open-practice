# Join two datasets without multiplying the truth

Open Practice / Data & evidence / curriculum 1.0

Estimated guided practice: 4h estimated. This estimate has not been learner-tested.

Original practice material · CC BY 4.0 · Non-degree and non-accredited.

## What you will build

Deliver a wrangling pipeline with inputs, tests and a reproducible handoff.

## Before you start

- Python prerequisite; inspect the worked fixture before beginning.

- A text editor/spreadsheet for the manual route. Hosted Python/Jupyter for code exercises; applicable dependencies are in requirements.txt.

- For actual AI calls, a legitimate available cloud service and authorised learner credentials; no particular provider or country is mandatory.

## Learning outcomes

- Write the unit of each table and the key cardinality.

- Compute a known total without deleting unknown items.

- Validate uniqueness before combining records.

- Watch both row counts and monetary totals after the join.

- Keep a reproducible result and disclose safety, rights and regional access limits.

## Activity 1: Declare the join relationship

Estimated time: 35 minutes.

### Outcomes

- Write the unit of each table and the key cardinality.

- Explain and retain a testable result and its limits.

Joining datasets depends on key uniqueness and relationship cardinality. A many-to-many join can multiply rows and amounts without a syntax error. Check unmatched and repeated keys before summarising the merged table.

Write the unit of each table and the key cardinality. Inspect the supplied input before using any tool. Write the decision rules in your own words and calculate one small result independently. The reference output is an answer key for this deliberately bounded fixture, not proof of general capability.

Policy for this project: Lookup keys must be unique for this many-to-one join. Preserve every order and report missing lookup keys rather than silently dropping orders.

For learners across regions underserved or excluded by mainstream providers: verify country eligibility, language, account/identity requirements, data terms, cost, quota and connectivity before choosing a cloud service. Use only legitimate available alternatives; never bypass restrictions or invent a country/account. No service access? Complete the labelled manual/fixture route without claiming a live AI run.

### Worked example

```text

SOURCE (authored fixture):
{
  "orders": [
    {
      "id": "o1",
      "product": "p1",
      "qty": 2
    },
    {
      "id": "o2",
      "product": "p2",
      "qty": 1
    },
    {
      "id": "o3",
      "product": "missing",
      "qty": 1
    }
  ],
  "prices": {
    "p1": 3,
    "p2": 5
  }
}
INDEPENDENT FIXTURE TARGET:
{
  "orders": 3,
  "matched": 2,
  "unmatched": [
    "o3"
  ],
  "known_total": 11
}

```

### Guided activity

1. Write the unit of each table and the key cardinality.

2. Open input.json and expected.json from the practice pack; keep an unmodified original.

3. Record a manual prediction and the relevant rule before consulting the answer key.

4. Perform one small change and predict its effect before rerunning.

5. Keep the result and your reasoning in the lesson notes; do not mark a simulated run as live.

### Expected evidence

- Declare the join relationship — a saved, inspectable artefact tied to the supplied rule.

- A baseline or change-test record with expected/observed results and a limitation.

### Common mistakes

- Duplicate a lookup key: reject ambiguous cardinality before joining.

- Treating a supplied answer key, an authored example or self-review as independent field validation.

### Check your understanding

Which exact input, rule and expected value would let another learner falsify your conclusion in this activity, and what remains untested?

### Offline route

Use the supplied fictional JSON, expected results and paper/text evidence log without a provider account. Manual or constructed completion is labelled; it is not a live cloud integration or trained-model run.

## Activity 2: Trace matched and unmatched rows

Estimated time: 35 minutes.

### Outcomes

- Compute a known total without deleting unknown items.

- Explain and retain a testable result and its limits.

Joining datasets depends on key uniqueness and relationship cardinality. A many-to-many join can multiply rows and amounts without a syntax error. Check unmatched and repeated keys before summarising the merged table.

Compute a known total without deleting unknown items. Establish a baseline before changing prompts or code. Keep the original input immutable. Record expected values, observed values and whether each comparison passed. If the expected file conflicts with a justified policy, investigate rather than forcing a convenient match.

Policy for this project: Lookup keys must be unique for this many-to-one join. Preserve every order and report missing lookup keys rather than silently dropping orders.

### Worked example

```text

MANUAL BASELINE / compare every named field
{
  "orders": 3,
  "matched": 2,
  "unmatched": [
    "o3"
  ],
  "known_total": 11
}
Keep a separate observed-result column; the answer key is not a model response.

```

### Guided activity

1. Compute a known total without deleting unknown items.

2. Open input.json and expected.json from the practice pack; keep an unmodified original.

3. Record expected and observed values separately; explain every mismatch.

4. Perform one small change and predict its effect before rerunning.

5. Keep the result and your reasoning in the lesson notes; do not mark a simulated run as live.

### Expected evidence

- Trace matched and unmatched rows — a saved, inspectable artefact tied to the supplied rule.

- A baseline or change-test record with expected/observed results and a limitation.

### Common mistakes

- Drop the unmatched order: report that data loss explicitly.

- Treating a supplied answer key, an authored example or self-review as independent field validation.

### Check your understanding

Which exact input, rule and expected value would let another learner falsify your conclusion in this activity, and what remains untested?

### Offline route

Use the supplied fictional JSON, expected results and paper/text evidence log without a provider account. Manual or constructed completion is labelled; it is not a live cloud integration or trained-model run.

## Activity 3: Build a checked merge

Estimated time: 35 minutes.

### Outcomes

- Validate uniqueness before combining records.

- Explain and retain a testable result and its limits.

Joining datasets depends on key uniqueness and relationship cardinality. A many-to-many join can multiply rows and amounts without a syntax error. Check unmatched and repeated keys before summarising the merged table.

Validate uniqueness before combining records. Build one inspectable transformation or bounded AI prompt. Keep calculation and validation deterministic where possible. If you make a permitted hosted call, save the actual response separately from the authored examples and verify its material claims; the supplied reference never simulates a live model.

Policy for this project: Lookup keys must be unique for this many-to-one join. Preserve every order and report missing lookup keys rather than silently dropping orders.

### Worked example

```text

PROJECT CONTRACT:
Lookup keys must be unique for this many-to-one join. Preserve every order and report missing lookup keys rather than silently dropping orders.
HOSTED REFERENCE: open hosted-lab.ipynb or run reference.py with all fixture files together.
EXPECTED CONSTRUCTED RESULT:
{
  "orders": 3,
  "matched": 2,
  "unmatched": [
    "o3"
  ],
  "known_total": 11
}

```

### Guided activity

1. Validate uniqueness before combining records.

2. Open hosted-lab.ipynb and the reference code from the practice pack; keep an unmodified original.

3. Record expected and observed values separately; explain every mismatch.

4. Perform Quantity zero is a valid zero-value order under this fixture policy.

5. Keep the result and your reasoning in the lesson notes; do not mark a simulated run as live.

### Expected evidence

- Build a checked merge — a saved, inspectable artefact tied to the supplied rule.

- A baseline or change-test record with expected/observed results and a limitation.

### Common mistakes

- Quantity zero is a valid zero-value order under this fixture policy.

- Treating a supplied answer key, an authored example or self-review as independent field validation.

### Check your understanding

Which exact input, rule and expected value would let another learner falsify your conclusion in this activity, and what remains untested?

### Offline route

Use the supplied fictional JSON, expected results and paper/text evidence log without a provider account. Manual or constructed completion is labelled; it is not a live cloud integration or trained-model run.

## Activity 4: Test duplicated and missing keys

Estimated time: 35 minutes.

### Outcomes

- Watch both row counts and monetary totals after the join.

- Explain and retain a testable result and its limits.

Joining datasets depends on key uniqueness and relationship cardinality. A many-to-many join can multiply rows and amounts without a syntax error. Check unmatched and repeated keys before summarising the merged table.

Watch both row counts and monetary totals after the join. Change one assumption at a time and predict the result first. Retain the failure, the revision and the rerun evidence. A failure is useful information: hiding a bad output or editing a test target after seeing the answer destroys the value of the experiment.

Policy for this project: Lookup keys must be unique for this many-to-one join. Preserve every order and report missing lookup keys rather than silently dropping orders.

### Worked example

```text

CHANGE TESTS — predict before running:
1. Duplicate a lookup key: reject ambiguous cardinality before joining.
2. Drop the unmatched order: report that data loss explicitly.
3. Quantity zero is a valid zero-value order under this fixture policy.
Keep the original expected.json unchanged.

```

### Guided activity

1. Watch both row counts and monetary totals after the join.

2. Open failure-tests.md from the practice pack; keep an unmodified original.

3. Record expected and observed values separately; explain every mismatch.

4. Perform Duplicate a lookup key: reject ambiguous cardinality before joining.

5. Keep the result and your reasoning in the lesson notes; do not mark a simulated run as live.

### Expected evidence

- Test duplicated and missing keys — a saved, inspectable artefact tied to the supplied rule.

- A baseline or change-test record with expected/observed results and a limitation.

### Common mistakes

- Duplicate a lookup key: reject ambiguous cardinality before joining.

- Treating a supplied answer key, an authored example or self-review as independent field validation.

### Check your understanding

Which exact input, rule and expected value would let another learner falsify your conclusion in this activity, and what remains untested?

### Offline route

Use the supplied fictional JSON, expected results and paper/text evidence log without a provider account. Manual or constructed completion is labelled; it is not a live cloud integration or trained-model run.

## Activity 5: Handle nested and text fields

Estimated time: 35 minutes.

### Outcomes

- Flatten only with a documented mapping and preserve original IDs.

- Explain and retain a testable result and its limits.

Joining datasets depends on key uniqueness and relationship cardinality. A many-to-many join can multiply rows and amounts without a syntax error. Check unmatched and repeated keys before summarising the merged table.

Flatten only with a documented mapping and preserve original IDs. Review what the fixture cannot establish. Explain who owns the decision, where human approval is needed and which access or professional constraints remain. Do not describe a small educational success as production readiness, certification, legal compliance or a guarantee.

Policy for this project: Lookup keys must be unique for this many-to-one join. Preserve every order and report missing lookup keys rather than silently dropping orders.

For learners across regions underserved or excluded by mainstream providers: verify country eligibility, language, account/identity requirements, data terms, cost, quota and connectivity before choosing a cloud service. Use only legitimate available alternatives; never bypass restrictions or invent a country/account. No service access? Complete the labelled manual/fixture route without claiming a live AI run.

### Worked example

```text

REVIEW BOUNDARY:
Lookup keys must be unique for this many-to-one join. Preserve every order and report missing lookup keys rather than silently dropping orders.

ACCESS / NOT TESTED: unavailable provider, unsupported language and absent external feedback must remain explicit.

```

### Guided activity

1. Flatten only with a documented mapping and preserve original IDs.

2. Open README.md and your evidence log from the practice pack; keep an unmodified original.

3. Record the human decision owner, limitations and any untested service access.

4. Perform one small change and predict its effect before rerunning.

5. Keep the result and your reasoning in the lesson notes; do not mark a simulated run as live.

### Expected evidence

- Handle nested and text fields — a saved, inspectable artefact tied to the supplied rule.

- A baseline or change-test record with expected/observed results and a limitation.

### Common mistakes

- Drop the unmatched order: report that data loss explicitly.

- Treating a supplied answer key, an authored example or self-review as independent field validation.

### Check your understanding

Which exact input, rule and expected value would let another learner falsify your conclusion in this activity, and what remains untested?

### Offline route

Use the supplied fictional JSON, expected results and paper/text evidence log without a provider account. Manual or constructed completion is labelled; it is not a live cloud integration or trained-model run.

## Activity 6: Deliver a wrangling pipeline

Estimated time: 65 minutes.

### Outcomes

- Include row reconciliation, unknown-key policy and repeatability tests.

- Explain and retain a testable result and its limits.

Joining datasets depends on key uniqueness and relationship cardinality. A many-to-many join can multiply rows and amounts without a syntax error. Check unmatched and repeated keys before summarising the merged table.

Include row reconciliation, unknown-key policy and repeatability tests. Deliver a reproducible bundle rather than a screenshot alone. Include inputs, rules, output, failure tests, a short README and residual limitations. Ask another person to follow the instructions if possible; self-review and actual external review must be labelled separately.

Policy for this project: Lookup keys must be unique for this many-to-one join. Preserve every order and report missing lookup keys rather than silently dropping orders.

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

1. Include row reconciliation, unknown-key policy and repeatability tests.

2. Open README.md and your evidence log from the practice pack; keep an unmodified original.

3. Record the human decision owner, limitations and any untested service access.

4. Perform one small change and predict its effect before rerunning.

5. Keep the result and your reasoning in the lesson notes; do not mark a simulated run as live.

### Expected evidence

- Deliver a wrangling pipeline — a saved, inspectable artefact tied to the supplied rule.

- A baseline or change-test record with expected/observed results and a limitation.

### Common mistakes

- Quantity zero is a valid zero-value order under this fixture policy.

- Treating a supplied answer key, an authored example or self-review as independent field validation.

### Check your understanding

Which exact input, rule and expected value would let another learner falsify your conclusion in this activity, and what remains untested?

### Offline route

Use the supplied fictional JSON, expected results and paper/text evidence log without a provider account. Manual or constructed completion is labelled; it is not a live cloud integration or trained-model run.

## End-of-path review

These are self-check questions, not verified examinations.

### Question 1

For the supplied fixture, what is the expected orders?

1. 3

2. It cannot be checked against the supplied input.

3. Whatever value the model reports most confidently.

Review answer: 1. The independent answer key only validates this constructed fixture. Preserve the source, rerun counterexamples, and disclose what was not tested.

### Question 2

How should you handle the project rule: Lookup keys must be unique for this many-to-one join. Preserve every order and report missing lookup keys rather than silently dropping orders.

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

Lookup keys must be unique for this many-to-one join. Preserve every order and report missing lookup keys rather than silently dropping orders. Regional access route is legitimate; credentials and private data are absent; manual/constructed work is clearly labelled.

## References

- [Pandas merge validation](https://pandas.pydata.org/docs/user_guide/merging.html)

## Editorial boundary

Original authored practice material; deterministic fixtures build-tested. Not independently expert-reviewed or learner-validated. Time estimates unvalidated.

Use fictional/redacted data and your own authorised provider credentials. Never include credentials in this pack or public work.
