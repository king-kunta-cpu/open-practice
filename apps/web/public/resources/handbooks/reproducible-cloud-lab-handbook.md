# A cloud lab someone else can rerun

Open Practice / Cloud & code / curriculum 1.0

Estimated guided practice: 4h estimated. This estimate has not been learner-tested.

Original practice material · CC BY 4.0 · Non-degree and non-accredited.

## What you will build

Ship a reproducibility bundle with inputs, tests and a reproducible handoff.

## Before you start

- Coding onramp; inspect the worked fixture before beginning.

- A text editor/spreadsheet for the manual route. Hosted Python/Jupyter for code exercises; applicable dependencies are in requirements.txt.

- For actual AI calls, a legitimate available cloud service and authorised learner credentials; no particular provider or country is mandatory.

## Learning outcomes

- Record runtime version, inputs and access constraints before executing any cell.

- Read the fictional rows as data; use a runtime secret only for an optional hosted API call.

- Return accepted counts and totals before requesting any narrative.

- Run every cell in order after a restart and compare the deterministic result.

- Keep a reproducible result and disclose safety, rights and regional access limits.

## Activity 1: Open a fresh runtime

Estimated time: 35 minutes.

### Outcomes

- Record runtime version, inputs and access constraints before executing any cell.

- Explain and retain a testable result and its limits.

A reproducible notebook starts with declared inputs and a clean runtime, not a screenshot. Separate deterministic preparation from an optional hosted model call. Temporary notebook storage can disappear; retain the original file and the output contract.

Record runtime version, inputs and access constraints before executing any cell. Inspect the supplied input before using any tool. Write the decision rules in your own words and calculate one small result independently. The reference output is an answer key for this deliberately bounded fixture, not proof of general capability.

Policy for this project: Reject non-numeric amounts; preserve zero; never embed account keys in cells, URLs or exported outputs.

For learners across regions underserved or excluded by mainstream providers: verify country eligibility, language, account/identity requirements, data terms, cost, quota and connectivity before choosing a cloud service. Use only legitimate available alternatives; never bypass restrictions or invent a country/account. No service access? Complete the labelled manual/fixture route without claiming a live AI run.

### Worked example

```text

SOURCE (authored fixture):
{
  "rows": [
    {
      "id": "a",
      "amount": 12
    },
    {
      "id": "b",
      "amount": 0
    },
    {
      "id": "c",
      "amount": "unknown"
    },
    {
      "id": "d",
      "amount": 8
    }
  ]
}
INDEPENDENT FIXTURE TARGET:
{
  "accepted": 3,
  "rejected": [
    "c"
  ],
  "total": 20
}

```

### Guided activity

1. Record runtime version, inputs and access constraints before executing any cell.

2. Open input.json and expected.json from the practice pack; keep an unmodified original.

3. Record a manual prediction and the relevant rule before consulting the answer key.

4. Perform one small change and predict its effect before rerunning.

5. Keep the result and your reasoning in the lesson notes; do not mark a simulated run as live.

### Expected evidence

- Open a fresh runtime — a saved, inspectable artefact tied to the supplied rule.

- A baseline or change-test record with expected/observed results and a limitation.

### Common mistakes

- Restart the hosted runtime: the same supplied input must still total 20.

- Treating a supplied answer key, an authored example or self-review as independent field validation.

### Check your understanding

Which exact input, rule and expected value would let another learner falsify your conclusion in this activity, and what remains untested?

### Offline route

Use the supplied fictional JSON, expected results and paper/text evidence log without a provider account. Manual or constructed completion is labelled; it is not a live cloud integration or trained-model run.

## Activity 2: Separate data from secrets

Estimated time: 35 minutes.

### Outcomes

- Read the fictional rows as data; use a runtime secret only for an optional hosted API call.

- Explain and retain a testable result and its limits.

A reproducible notebook starts with declared inputs and a clean runtime, not a screenshot. Separate deterministic preparation from an optional hosted model call. Temporary notebook storage can disappear; retain the original file and the output contract.

Read the fictional rows as data; use a runtime secret only for an optional hosted API call. Establish a baseline before changing prompts or code. Keep the original input immutable. Record expected values, observed values and whether each comparison passed. If the expected file conflicts with a justified policy, investigate rather than forcing a convenient match.

Policy for this project: Reject non-numeric amounts; preserve zero; never embed account keys in cells, URLs or exported outputs.

### Worked example

```text

MANUAL BASELINE / compare every named field
{
  "accepted": 3,
  "rejected": [
    "c"
  ],
  "total": 20
}
Keep a separate observed-result column; the answer key is not a model response.

```

### Guided activity

1. Read the fictional rows as data; use a runtime secret only for an optional hosted API call.

2. Open input.json and expected.json from the practice pack; keep an unmodified original.

3. Record expected and observed values separately; explain every mismatch.

4. Perform one small change and predict its effect before rerunning.

5. Keep the result and your reasoning in the lesson notes; do not mark a simulated run as live.

### Expected evidence

- Separate data from secrets — a saved, inspectable artefact tied to the supplied rule.

- A baseline or change-test record with expected/observed results and a limitation.

### Common mistakes

- Change amount 8 to 9: expected total becomes 21.

- Treating a supplied answer key, an authored example or self-review as independent field validation.

### Check your understanding

Which exact input, rule and expected value would let another learner falsify your conclusion in this activity, and what remains untested?

### Offline route

Use the supplied fictional JSON, expected results and paper/text evidence log without a provider account. Manual or constructed completion is labelled; it is not a live cloud integration or trained-model run.

## Activity 3: Build a pure preparation cell

Estimated time: 35 minutes.

### Outcomes

- Return accepted counts and totals before requesting any narrative.

- Explain and retain a testable result and its limits.

A reproducible notebook starts with declared inputs and a clean runtime, not a screenshot. Separate deterministic preparation from an optional hosted model call. Temporary notebook storage can disappear; retain the original file and the output contract.

Return accepted counts and totals before requesting any narrative. Build one inspectable transformation or bounded AI prompt. Keep calculation and validation deterministic where possible. If you make a permitted hosted call, save the actual response separately from the authored examples and verify its material claims; the supplied reference never simulates a live model.

Policy for this project: Reject non-numeric amounts; preserve zero; never embed account keys in cells, URLs or exported outputs.

### Worked example

```text

PROJECT CONTRACT:
Reject non-numeric amounts; preserve zero; never embed account keys in cells, URLs or exported outputs.
HOSTED REFERENCE: open hosted-lab.ipynb or run reference.py with all fixture files together.
EXPECTED CONSTRUCTED RESULT:
{
  "accepted": 3,
  "rejected": [
    "c"
  ],
  "total": 20
}

```

### Guided activity

1. Return accepted counts and totals before requesting any narrative.

2. Open hosted-lab.ipynb and the reference code from the practice pack; keep an unmodified original.

3. Record expected and observed values separately; explain every mismatch.

4. Perform A missing credential must skip a live model call, not invent a response.

5. Keep the result and your reasoning in the lesson notes; do not mark a simulated run as live.

### Expected evidence

- Build a pure preparation cell — a saved, inspectable artefact tied to the supplied rule.

- A baseline or change-test record with expected/observed results and a limitation.

### Common mistakes

- A missing credential must skip a live model call, not invent a response.

- Treating a supplied answer key, an authored example or self-review as independent field validation.

### Check your understanding

Which exact input, rule and expected value would let another learner falsify your conclusion in this activity, and what remains untested?

### Offline route

Use the supplied fictional JSON, expected results and paper/text evidence log without a provider account. Manual or constructed completion is labelled; it is not a live cloud integration or trained-model run.

## Activity 4: Restart and rerun

Estimated time: 35 minutes.

### Outcomes

- Run every cell in order after a restart and compare the deterministic result.

- Explain and retain a testable result and its limits.

A reproducible notebook starts with declared inputs and a clean runtime, not a screenshot. Separate deterministic preparation from an optional hosted model call. Temporary notebook storage can disappear; retain the original file and the output contract.

Run every cell in order after a restart and compare the deterministic result. Change one assumption at a time and predict the result first. Retain the failure, the revision and the rerun evidence. A failure is useful information: hiding a bad output or editing a test target after seeing the answer destroys the value of the experiment.

Policy for this project: Reject non-numeric amounts; preserve zero; never embed account keys in cells, URLs or exported outputs.

### Worked example

```text

CHANGE TESTS — predict before running:
1. Restart the hosted runtime: the same supplied input must still total 20.
2. Change amount 8 to 9: expected total becomes 21.
3. A missing credential must skip a live model call, not invent a response.
Keep the original expected.json unchanged.

```

### Guided activity

1. Run every cell in order after a restart and compare the deterministic result.

2. Open failure-tests.md from the practice pack; keep an unmodified original.

3. Record expected and observed values separately; explain every mismatch.

4. Perform Restart the hosted runtime: the same supplied input must still total 20.

5. Keep the result and your reasoning in the lesson notes; do not mark a simulated run as live.

### Expected evidence

- Restart and rerun — a saved, inspectable artefact tied to the supplied rule.

- A baseline or change-test record with expected/observed results and a limitation.

### Common mistakes

- Restart the hosted runtime: the same supplied input must still total 20.

- Treating a supplied answer key, an authored example or self-review as independent field validation.

### Check your understanding

Which exact input, rule and expected value would let another learner falsify your conclusion in this activity, and what remains untested?

### Offline route

Use the supplied fictional JSON, expected results and paper/text evidence log without a provider account. Manual or constructed completion is labelled; it is not a live cloud integration or trained-model run.

## Activity 5: Hand a notebook to someone else

Estimated time: 35 minutes.

### Outcomes

- Remove private paths and provide an explicit no-service fallback.

- Explain and retain a testable result and its limits.

A reproducible notebook starts with declared inputs and a clean runtime, not a screenshot. Separate deterministic preparation from an optional hosted model call. Temporary notebook storage can disappear; retain the original file and the output contract.

Remove private paths and provide an explicit no-service fallback. Review what the fixture cannot establish. Explain who owns the decision, where human approval is needed and which access or professional constraints remain. Do not describe a small educational success as production readiness, certification, legal compliance or a guarantee.

Policy for this project: Reject non-numeric amounts; preserve zero; never embed account keys in cells, URLs or exported outputs.

For learners across regions underserved or excluded by mainstream providers: verify country eligibility, language, account/identity requirements, data terms, cost, quota and connectivity before choosing a cloud service. Use only legitimate available alternatives; never bypass restrictions or invent a country/account. No service access? Complete the labelled manual/fixture route without claiming a live AI run.

### Worked example

```text

REVIEW BOUNDARY:
Reject non-numeric amounts; preserve zero; never embed account keys in cells, URLs or exported outputs.

ACCESS / NOT TESTED: unavailable provider, unsupported language and absent external feedback must remain explicit.

```

### Guided activity

1. Remove private paths and provide an explicit no-service fallback.

2. Open README.md and your evidence log from the practice pack; keep an unmodified original.

3. Record the human decision owner, limitations and any untested service access.

4. Perform one small change and predict its effect before rerunning.

5. Keep the result and your reasoning in the lesson notes; do not mark a simulated run as live.

### Expected evidence

- Hand a notebook to someone else — a saved, inspectable artefact tied to the supplied rule.

- A baseline or change-test record with expected/observed results and a limitation.

### Common mistakes

- Change amount 8 to 9: expected total becomes 21.

- Treating a supplied answer key, an authored example or self-review as independent field validation.

### Check your understanding

Which exact input, rule and expected value would let another learner falsify your conclusion in this activity, and what remains untested?

### Offline route

Use the supplied fictional JSON, expected results and paper/text evidence log without a provider account. Manual or constructed completion is labelled; it is not a live cloud integration or trained-model run.

## Activity 6: Ship a reproducibility bundle

Estimated time: 65 minutes.

### Outcomes

- Package inputs, notebook, results and failure log without credentials.

- Explain and retain a testable result and its limits.

A reproducible notebook starts with declared inputs and a clean runtime, not a screenshot. Separate deterministic preparation from an optional hosted model call. Temporary notebook storage can disappear; retain the original file and the output contract.

Package inputs, notebook, results and failure log without credentials. Deliver a reproducible bundle rather than a screenshot alone. Include inputs, rules, output, failure tests, a short README and residual limitations. Ask another person to follow the instructions if possible; self-review and actual external review must be labelled separately.

Policy for this project: Reject non-numeric amounts; preserve zero; never embed account keys in cells, URLs or exported outputs.

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

1. Package inputs, notebook, results and failure log without credentials.

2. Open README.md and your evidence log from the practice pack; keep an unmodified original.

3. Record the human decision owner, limitations and any untested service access.

4. Perform one small change and predict its effect before rerunning.

5. Keep the result and your reasoning in the lesson notes; do not mark a simulated run as live.

### Expected evidence

- Ship a reproducibility bundle — a saved, inspectable artefact tied to the supplied rule.

- A baseline or change-test record with expected/observed results and a limitation.

### Common mistakes

- A missing credential must skip a live model call, not invent a response.

- Treating a supplied answer key, an authored example or self-review as independent field validation.

### Check your understanding

Which exact input, rule and expected value would let another learner falsify your conclusion in this activity, and what remains untested?

### Offline route

Use the supplied fictional JSON, expected results and paper/text evidence log without a provider account. Manual or constructed completion is labelled; it is not a live cloud integration or trained-model run.

## End-of-path review

These are self-check questions, not verified examinations.

### Question 1

For the supplied fixture, what is the expected accepted?

1. 3

2. It cannot be checked against the supplied input.

3. Whatever value the model reports most confidently.

Review answer: 1. The independent answer key only validates this constructed fixture. Preserve the source, rerun counterexamples, and disclose what was not tested.

### Question 2

How should you handle the project rule: Reject non-numeric amounts; preserve zero; never embed account keys in cells, URLs or exported outputs.

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

Reject non-numeric amounts; preserve zero; never embed account keys in cells, URLs or exported outputs. Regional access route is legitimate; credentials and private data are absent; manual/constructed work is clearly labelled.

## References

- [Jupyter notebook documentation](https://docs.jupyter.org/en/latest/)

## Editorial boundary

Original authored practice material; deterministic fixtures build-tested. Not independently expert-reviewed or learner-validated. Time estimates unvalidated.

Use fictional/redacted data and your own authorised provider credentials. Never include credentials in this pack or public work.
