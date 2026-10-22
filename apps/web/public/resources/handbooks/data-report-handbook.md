# Build a report that reconciles to its source

Open Practice / Data & evidence / curriculum 1.0

Estimated guided practice: 4h estimated. This estimate has not been learner-tested.

Original practice material · CC BY 4.0 · Non-degree and non-accredited.

## What you will build

Deliver an auditable report pack with inputs, tests and a reproducible handoff.

## Before you start

- Spreadsheet onramp; inspect the worked fixture before beginning.

- A text editor/spreadsheet for the manual route. Hosted Python/Jupyter for code exercises; applicable dependencies are in requirements.txt.

- For actual AI calls, a legitimate available cloud service and authorised learner credentials; no particular provider or country is mandatory.

## Learning outcomes

- Choose a question the supplied rows can actually answer.

- Calculate subtotals independently before using a spreadsheet or AI.

- Keep transformations and aggregation rules visible.

- Add a row and verify that formulas include it.

- Keep a reproducible result and disclose safety, rights and regional access limits.

## Activity 1: Define the reporting question

Estimated time: 35 minutes.

### Outcomes

- Choose a question the supplied rows can actually answer.

- Explain and retain a testable result and its limits.

A report is a chain from input rows to claims. Reconcile numbers before making a chart, preserve excluded records and state the scope. A tiny fictional table can support a subtotal, not a claim about a national economy or a cause of business performance.

Choose a question the supplied rows can actually answer. Inspect the supplied input before using any tool. Write the decision rules in your own words and calculate one small result independently. The reference output is an answer key for this deliberately bounded fixture, not proof of general capability.

Policy for this project: Amounts are fictional whole units. Keep categories exact and expose the row count, category subtotals and grand total.

For learners across regions underserved or excluded by mainstream providers: verify country eligibility, language, account/identity requirements, data terms, cost, quota and connectivity before choosing a cloud service. Use only legitimate available alternatives; never bypass restrictions or invent a country/account. No service access? Complete the labelled manual/fixture route without claiming a live AI run.

### Worked example

```text

SOURCE (authored fixture):
{
  "rows": [
    {
      "category": "repairs",
      "amount": 12
    },
    {
      "category": "supplies",
      "amount": 7
    },
    {
      "category": "repairs",
      "amount": 8
    }
  ]
}
INDEPENDENT FIXTURE TARGET:
{
  "rows": 3,
  "categories": {
    "repairs": 20,
    "supplies": 7
  },
  "total": 27
}

```

### Guided activity

1. Choose a question the supplied rows can actually answer.

2. Open input.json and expected.json from the practice pack; keep an unmodified original.

3. Record a manual prediction and the relevant rule before consulting the answer key.

4. Perform one small change and predict its effect before rerunning.

5. Keep the result and your reasoning in the lesson notes; do not mark a simulated run as live.

### Expected evidence

- Define the reporting question — a saved, inspectable artefact tied to the supplied rule.

- A baseline or change-test record with expected/observed results and a limitation.

### Common mistakes

- Add supplies 3: supplies becomes 10 and total 30.

- Treating a supplied answer key, an authored example or self-review as independent field validation.

### Check your understanding

Which exact input, rule and expected value would let another learner falsify your conclusion in this activity, and what remains untested?

### Offline route

Use the supplied fictional JSON, expected results and paper/text evidence log without a provider account. Manual or constructed completion is labelled; it is not a live cloud integration or trained-model run.

## Activity 2: Reconcile a hand calculation

Estimated time: 35 minutes.

### Outcomes

- Calculate subtotals independently before using a spreadsheet or AI.

- Explain and retain a testable result and its limits.

A report is a chain from input rows to claims. Reconcile numbers before making a chart, preserve excluded records and state the scope. A tiny fictional table can support a subtotal, not a claim about a national economy or a cause of business performance.

Calculate subtotals independently before using a spreadsheet or AI. Establish a baseline before changing prompts or code. Keep the original input immutable. Record expected values, observed values and whether each comparison passed. If the expected file conflicts with a justified policy, investigate rather than forcing a convenient match.

Policy for this project: Amounts are fictional whole units. Keep categories exact and expose the row count, category subtotals and grand total.

### Worked example

```text

MANUAL BASELINE / compare every named field
{
  "rows": 3,
  "categories": {
    "repairs": 20,
    "supplies": 7
  },
  "total": 27
}
Keep a separate observed-result column; the answer key is not a model response.

```

### Guided activity

1. Calculate subtotals independently before using a spreadsheet or AI.

2. Open input.json and expected.json from the practice pack; keep an unmodified original.

3. Record expected and observed values separately; explain every mismatch.

4. Perform one small change and predict its effect before rerunning.

5. Keep the result and your reasoning in the lesson notes; do not mark a simulated run as live.

### Expected evidence

- Reconcile a hand calculation — a saved, inspectable artefact tied to the supplied rule.

- A baseline or change-test record with expected/observed results and a limitation.

### Common mistakes

- Rename repairs to Repairs: decide and document whether to normalise case.

- Treating a supplied answer key, an authored example or self-review as independent field validation.

### Check your understanding

Which exact input, rule and expected value would let another learner falsify your conclusion in this activity, and what remains untested?

### Offline route

Use the supplied fictional JSON, expected results and paper/text evidence log without a provider account. Manual or constructed completion is labelled; it is not a live cloud integration or trained-model run.

## Activity 3: Create a repeatable summary

Estimated time: 35 minutes.

### Outcomes

- Keep transformations and aggregation rules visible.

- Explain and retain a testable result and its limits.

A report is a chain from input rows to claims. Reconcile numbers before making a chart, preserve excluded records and state the scope. A tiny fictional table can support a subtotal, not a claim about a national economy or a cause of business performance.

Keep transformations and aggregation rules visible. Build one inspectable transformation or bounded AI prompt. Keep calculation and validation deterministic where possible. If you make a permitted hosted call, save the actual response separately from the authored examples and verify its material claims; the supplied reference never simulates a live model.

Policy for this project: Amounts are fictional whole units. Keep categories exact and expose the row count, category subtotals and grand total.

### Worked example

```text

PROJECT CONTRACT:
Amounts are fictional whole units. Keep categories exact and expose the row count, category subtotals and grand total.
HOSTED REFERENCE: open hosted-lab.ipynb or run reference.py with all fixture files together.
EXPECTED CONSTRUCTED RESULT:
{
  "rows": 3,
  "categories": {
    "repairs": 20,
    "supplies": 7
  },
  "total": 27
}

```

### Guided activity

1. Keep transformations and aggregation rules visible.

2. Open hosted-lab.ipynb and the reference code from the practice pack; keep an unmodified original.

3. Record expected and observed values separately; explain every mismatch.

4. Perform Remove a row: totals must change; do not keep a cached narrative.

5. Keep the result and your reasoning in the lesson notes; do not mark a simulated run as live.

### Expected evidence

- Create a repeatable summary — a saved, inspectable artefact tied to the supplied rule.

- A baseline or change-test record with expected/observed results and a limitation.

### Common mistakes

- Remove a row: totals must change; do not keep a cached narrative.

- Treating a supplied answer key, an authored example or self-review as independent field validation.

### Check your understanding

Which exact input, rule and expected value would let another learner falsify your conclusion in this activity, and what remains untested?

### Offline route

Use the supplied fictional JSON, expected results and paper/text evidence log without a provider account. Manual or constructed completion is labelled; it is not a live cloud integration or trained-model run.

## Activity 4: Check changes and exclusions

Estimated time: 35 minutes.

### Outcomes

- Add a row and verify that formulas include it.

- Explain and retain a testable result and its limits.

A report is a chain from input rows to claims. Reconcile numbers before making a chart, preserve excluded records and state the scope. A tiny fictional table can support a subtotal, not a claim about a national economy or a cause of business performance.

Add a row and verify that formulas include it. Change one assumption at a time and predict the result first. Retain the failure, the revision and the rerun evidence. A failure is useful information: hiding a bad output or editing a test target after seeing the answer destroys the value of the experiment.

Policy for this project: Amounts are fictional whole units. Keep categories exact and expose the row count, category subtotals and grand total.

### Worked example

```text

CHANGE TESTS — predict before running:
1. Add supplies 3: supplies becomes 10 and total 30.
2. Rename repairs to Repairs: decide and document whether to normalise case.
3. Remove a row: totals must change; do not keep a cached narrative.
Keep the original expected.json unchanged.

```

### Guided activity

1. Add a row and verify that formulas include it.

2. Open failure-tests.md from the practice pack; keep an unmodified original.

3. Record expected and observed values separately; explain every mismatch.

4. Perform Add supplies 3: supplies becomes 10 and total 30.

5. Keep the result and your reasoning in the lesson notes; do not mark a simulated run as live.

### Expected evidence

- Check changes and exclusions — a saved, inspectable artefact tied to the supplied rule.

- A baseline or change-test record with expected/observed results and a limitation.

### Common mistakes

- Add supplies 3: supplies becomes 10 and total 30.

- Treating a supplied answer key, an authored example or self-review as independent field validation.

### Check your understanding

Which exact input, rule and expected value would let another learner falsify your conclusion in this activity, and what remains untested?

### Offline route

Use the supplied fictional JSON, expected results and paper/text evidence log without a provider account. Manual or constructed completion is labelled; it is not a live cloud integration or trained-model run.

## Activity 5: Write only supported conclusions

Estimated time: 35 minutes.

### Outcomes

- Do not let a confident narrative invent causes or trends.

- Explain and retain a testable result and its limits.

A report is a chain from input rows to claims. Reconcile numbers before making a chart, preserve excluded records and state the scope. A tiny fictional table can support a subtotal, not a claim about a national economy or a cause of business performance.

Do not let a confident narrative invent causes or trends. Review what the fixture cannot establish. Explain who owns the decision, where human approval is needed and which access or professional constraints remain. Do not describe a small educational success as production readiness, certification, legal compliance or a guarantee.

Policy for this project: Amounts are fictional whole units. Keep categories exact and expose the row count, category subtotals and grand total.

For learners across regions underserved or excluded by mainstream providers: verify country eligibility, language, account/identity requirements, data terms, cost, quota and connectivity before choosing a cloud service. Use only legitimate available alternatives; never bypass restrictions or invent a country/account. No service access? Complete the labelled manual/fixture route without claiming a live AI run.

### Worked example

```text

REVIEW BOUNDARY:
Amounts are fictional whole units. Keep categories exact and expose the row count, category subtotals and grand total.

ACCESS / NOT TESTED: unavailable provider, unsupported language and absent external feedback must remain explicit.

```

### Guided activity

1. Do not let a confident narrative invent causes or trends.

2. Open README.md and your evidence log from the practice pack; keep an unmodified original.

3. Record the human decision owner, limitations and any untested service access.

4. Perform one small change and predict its effect before rerunning.

5. Keep the result and your reasoning in the lesson notes; do not mark a simulated run as live.

### Expected evidence

- Write only supported conclusions — a saved, inspectable artefact tied to the supplied rule.

- A baseline or change-test record with expected/observed results and a limitation.

### Common mistakes

- Rename repairs to Repairs: decide and document whether to normalise case.

- Treating a supplied answer key, an authored example or self-review as independent field validation.

### Check your understanding

Which exact input, rule and expected value would let another learner falsify your conclusion in this activity, and what remains untested?

### Offline route

Use the supplied fictional JSON, expected results and paper/text evidence log without a provider account. Manual or constructed completion is labelled; it is not a live cloud integration or trained-model run.

## Activity 6: Deliver an auditable report pack

Estimated time: 65 minutes.

### Outcomes

- Include source, cleaned data, calculations, chart and limitations.

- Explain and retain a testable result and its limits.

A report is a chain from input rows to claims. Reconcile numbers before making a chart, preserve excluded records and state the scope. A tiny fictional table can support a subtotal, not a claim about a national economy or a cause of business performance.

Include source, cleaned data, calculations, chart and limitations. Deliver a reproducible bundle rather than a screenshot alone. Include inputs, rules, output, failure tests, a short README and residual limitations. Ask another person to follow the instructions if possible; self-review and actual external review must be labelled separately.

Policy for this project: Amounts are fictional whole units. Keep categories exact and expose the row count, category subtotals and grand total.

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

1. Include source, cleaned data, calculations, chart and limitations.

2. Open README.md and your evidence log from the practice pack; keep an unmodified original.

3. Record the human decision owner, limitations and any untested service access.

4. Perform one small change and predict its effect before rerunning.

5. Keep the result and your reasoning in the lesson notes; do not mark a simulated run as live.

### Expected evidence

- Deliver an auditable report pack — a saved, inspectable artefact tied to the supplied rule.

- A baseline or change-test record with expected/observed results and a limitation.

### Common mistakes

- Remove a row: totals must change; do not keep a cached narrative.

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

How should you handle the project rule: Amounts are fictional whole units. Keep categories exact and expose the row count, category subtotals and grand total.

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

Amounts are fictional whole units. Keep categories exact and expose the row count, category subtotals and grand total. Regional access route is legitimate; credentials and private data are absent; manual/constructed work is clearly labelled.

## References

- [Pandas grouping guide](https://pandas.pydata.org/docs/user_guide/groupby.html)

## Editorial boundary

Original authored practice material; deterministic fixtures build-tested. Not independently expert-reviewed or learner-validated. Time estimates unvalidated.

Use fictional/redacted data and your own authorised provider credentials. Never include credentials in this pack or public work.
