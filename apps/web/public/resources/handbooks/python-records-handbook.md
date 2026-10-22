# Turn records into a tested Python report

Open Practice / Cloud & code / curriculum 1.0

Estimated guided practice: 4h estimated. This estimate has not been learner-tested.

Original practice material · CC BY 4.0 · Non-degree and non-accredited.

## What you will build

Package a script another learner can inspect with inputs, tests and a reproducible handoff.

## Before you start

- Coding onramp; inspect the worked fixture before beginning.

- A text editor/spreadsheet for the manual route. Hosted Python/Jupyter for code exercises; applicable dependencies are in requirements.txt.

- For actual AI calls, a legitimate available cloud service and authorised learner credentials; no particular provider or country is mandatory.

## Learning outcomes

- Inspect why an unknown amount is not the same as zero.

- Use a loop and explicit condition before introducing abstractions.

- Return structured results instead of printing every decision in one block.

- Catch errors at the input boundary without silently discarding evidence.

- Keep a reproducible result and disclose safety, rights and regional access limits.

## Activity 1: Read values and types

Estimated time: 35 minutes.

### Outcomes

- Inspect why an unknown amount is not the same as zero.

- Explain and retain a testable result and its limits.

A small script is useful when its input rules and failure behaviour are visible. Distinguish strings from numbers, keep original rows, and return a value that can be tested. An AI-generated function still needs human-readable control flow and independent examples.

Inspect why an unknown amount is not the same as zero. Inspect the supplied input before using any tool. Write the decision rules in your own words and calculate one small result independently. The reference output is an answer key for this deliberately bounded fixture, not proof of general capability.

Policy for this project: Accept finite non-negative numeric amounts, retain identifiers and reject invalid rows with a reason. Never use eval on input text.

For learners across regions underserved or excluded by mainstream providers: verify country eligibility, language, account/identity requirements, data terms, cost, quota and connectivity before choosing a cloud service. Use only legitimate available alternatives; never bypass restrictions or invent a country/account. No service access? Complete the labelled manual/fixture route without claiming a live AI run.

### Worked example

```text

SOURCE (authored fixture):
{
  "rows": [
    {
      "id": "r1",
      "amount": 4
    },
    {
      "id": "r2",
      "amount": 6
    },
    {
      "id": "r3",
      "amount": "?"
    },
    {
      "id": "r4",
      "amount": 0
    }
  ]
}
INDEPENDENT FIXTURE TARGET:
{
  "accepted": 3,
  "total": 10,
  "rejected": [
    "r3"
  ]
}

```

### Guided activity

1. Inspect why an unknown amount is not the same as zero.

2. Open input.json and expected.json from the practice pack; keep an unmodified original.

3. Record a manual prediction and the relevant rule before consulting the answer key.

4. Perform one small change and predict its effect before rerunning.

5. Keep the result and your reasoning in the lesson notes; do not mark a simulated run as live.

### Expected evidence

- Read values and types — a saved, inspectable artefact tied to the supplied rule.

- A baseline or change-test record with expected/observed results and a limitation.

### Common mistakes

- Add amount 2: expected total becomes 12.

- Treating a supplied answer key, an authored example or self-review as independent field validation.

### Check your understanding

Which exact input, rule and expected value would let another learner falsify your conclusion in this activity, and what remains untested?

### Offline route

Use the supplied fictional JSON, expected results and paper/text evidence log without a provider account. Manual or constructed completion is labelled; it is not a live cloud integration or trained-model run.

## Activity 2: Write the smallest correct function

Estimated time: 35 minutes.

### Outcomes

- Use a loop and explicit condition before introducing abstractions.

- Explain and retain a testable result and its limits.

A small script is useful when its input rules and failure behaviour are visible. Distinguish strings from numbers, keep original rows, and return a value that can be tested. An AI-generated function still needs human-readable control flow and independent examples.

Use a loop and explicit condition before introducing abstractions. Establish a baseline before changing prompts or code. Keep the original input immutable. Record expected values, observed values and whether each comparison passed. If the expected file conflicts with a justified policy, investigate rather than forcing a convenient match.

Policy for this project: Accept finite non-negative numeric amounts, retain identifiers and reject invalid rows with a reason. Never use eval on input text.

### Worked example

```text

MANUAL BASELINE / compare every named field
{
  "accepted": 3,
  "total": 10,
  "rejected": [
    "r3"
  ]
}
Keep a separate observed-result column; the answer key is not a model response.

```

### Guided activity

1. Use a loop and explicit condition before introducing abstractions.

2. Open input.json and expected.json from the practice pack; keep an unmodified original.

3. Record expected and observed values separately; explain every mismatch.

4. Perform one small change and predict its effect before rerunning.

5. Keep the result and your reasoning in the lesson notes; do not mark a simulated run as live.

### Expected evidence

- Write the smallest correct function — a saved, inspectable artefact tied to the supplied rule.

- A baseline or change-test record with expected/observed results and a limitation.

### Common mistakes

- Use amount -1: reject it under the stated policy.

- Treating a supplied answer key, an authored example or self-review as independent field validation.

### Check your understanding

Which exact input, rule and expected value would let another learner falsify your conclusion in this activity, and what remains untested?

### Offline route

Use the supplied fictional JSON, expected results and paper/text evidence log without a provider account. Manual or constructed completion is labelled; it is not a live cloud integration or trained-model run.

## Activity 3: Separate parsing from reporting

Estimated time: 35 minutes.

### Outcomes

- Return structured results instead of printing every decision in one block.

- Explain and retain a testable result and its limits.

A small script is useful when its input rules and failure behaviour are visible. Distinguish strings from numbers, keep original rows, and return a value that can be tested. An AI-generated function still needs human-readable control flow and independent examples.

Return structured results instead of printing every decision in one block. Build one inspectable transformation or bounded AI prompt. Keep calculation and validation deterministic where possible. If you make a permitted hosted call, save the actual response separately from the authored examples and verify its material claims; the supplied reference never simulates a live model.

Policy for this project: Accept finite non-negative numeric amounts, retain identifiers and reject invalid rows with a reason. Never use eval on input text.

### Worked example

```text

PROJECT CONTRACT:
Accept finite non-negative numeric amounts, retain identifiers and reject invalid rows with a reason. Never use eval on input text.
HOSTED REFERENCE: open hosted-lab.ipynb or run reference.py with all fixture files together.
EXPECTED CONSTRUCTED RESULT:
{
  "accepted": 3,
  "total": 10,
  "rejected": [
    "r3"
  ]
}

```

### Guided activity

1. Return structured results instead of printing every decision in one block.

2. Open hosted-lab.ipynb and the reference code from the practice pack; keep an unmodified original.

3. Record expected and observed values separately; explain every mismatch.

4. Perform Provide an empty rows list: accepted is 0 and total is 0.

5. Keep the result and your reasoning in the lesson notes; do not mark a simulated run as live.

### Expected evidence

- Separate parsing from reporting — a saved, inspectable artefact tied to the supplied rule.

- A baseline or change-test record with expected/observed results and a limitation.

### Common mistakes

- Provide an empty rows list: accepted is 0 and total is 0.

- Treating a supplied answer key, an authored example or self-review as independent field validation.

### Check your understanding

Which exact input, rule and expected value would let another learner falsify your conclusion in this activity, and what remains untested?

### Offline route

Use the supplied fictional JSON, expected results and paper/text evidence log without a provider account. Manual or constructed completion is labelled; it is not a live cloud integration or trained-model run.

## Activity 4: Test missing and malformed inputs

Estimated time: 35 minutes.

### Outcomes

- Catch errors at the input boundary without silently discarding evidence.

- Explain and retain a testable result and its limits.

A small script is useful when its input rules and failure behaviour are visible. Distinguish strings from numbers, keep original rows, and return a value that can be tested. An AI-generated function still needs human-readable control flow and independent examples.

Catch errors at the input boundary without silently discarding evidence. Change one assumption at a time and predict the result first. Retain the failure, the revision and the rerun evidence. A failure is useful information: hiding a bad output or editing a test target after seeing the answer destroys the value of the experiment.

Policy for this project: Accept finite non-negative numeric amounts, retain identifiers and reject invalid rows with a reason. Never use eval on input text.

### Worked example

```text

CHANGE TESTS — predict before running:
1. Add amount 2: expected total becomes 12.
2. Use amount -1: reject it under the stated policy.
3. Provide an empty rows list: accepted is 0 and total is 0.
Keep the original expected.json unchanged.

```

### Guided activity

1. Catch errors at the input boundary without silently discarding evidence.

2. Open failure-tests.md from the practice pack; keep an unmodified original.

3. Record expected and observed values separately; explain every mismatch.

4. Perform Add amount 2: expected total becomes 12.

5. Keep the result and your reasoning in the lesson notes; do not mark a simulated run as live.

### Expected evidence

- Test missing and malformed inputs — a saved, inspectable artefact tied to the supplied rule.

- A baseline or change-test record with expected/observed results and a limitation.

### Common mistakes

- Add amount 2: expected total becomes 12.

- Treating a supplied answer key, an authored example or self-review as independent field validation.

### Check your understanding

Which exact input, rule and expected value would let another learner falsify your conclusion in this activity, and what remains untested?

### Offline route

Use the supplied fictional JSON, expected results and paper/text evidence log without a provider account. Manual or constructed completion is labelled; it is not a live cloud integration or trained-model run.

## Activity 5: Refactor without changing behaviour

Estimated time: 35 minutes.

### Outcomes

- Reuse tests while extracting functions; an AI title does not make ordinary Python model training.

- Explain and retain a testable result and its limits.

A small script is useful when its input rules and failure behaviour are visible. Distinguish strings from numbers, keep original rows, and return a value that can be tested. An AI-generated function still needs human-readable control flow and independent examples.

Reuse tests while extracting functions; an AI title does not make ordinary Python model training. Review what the fixture cannot establish. Explain who owns the decision, where human approval is needed and which access or professional constraints remain. Do not describe a small educational success as production readiness, certification, legal compliance or a guarantee.

Policy for this project: Accept finite non-negative numeric amounts, retain identifiers and reject invalid rows with a reason. Never use eval on input text.

For learners across regions underserved or excluded by mainstream providers: verify country eligibility, language, account/identity requirements, data terms, cost, quota and connectivity before choosing a cloud service. Use only legitimate available alternatives; never bypass restrictions or invent a country/account. No service access? Complete the labelled manual/fixture route without claiming a live AI run.

Supporting practice — A single coding prerequisite, not a duplicate AI course: Control flow, file handling and functions remain ordinary programming even when AI drafts the code. Reuse the same tests after refactoring. A renamed course or a more complex class hierarchy is not evidence that the program learns from data. Refactor the report function into parsing, validation and summary stages; prove unchanged baseline results.

### Worked example

```text

REVIEW BOUNDARY:
Accept finite non-negative numeric amounts, retain identifiers and reject invalid rows with a reason. Never use eval on input text.
Refactor the report function into parsing, validation and summary stages; prove unchanged baseline results.
ACCESS / NOT TESTED: unavailable provider, unsupported language and absent external feedback must remain explicit.

```

### Guided activity

1. Reuse tests while extracting functions; an AI title does not make ordinary Python model training.

2. Open README.md and your evidence log from the practice pack; keep an unmodified original.

3. Record the human decision owner, limitations and any untested service access.

4. Perform one small change and predict its effect before rerunning.

5. Keep the result and your reasoning in the lesson notes; do not mark a simulated run as live.

6. Refactor the report function into parsing, validation and summary stages; prove unchanged baseline results.

### Expected evidence

- Refactor without changing behaviour — a saved, inspectable artefact tied to the supplied rule.

- A baseline or change-test record with expected/observed results and a limitation.

- Refactor the report function into parsing, validation and summary stages; prove unchanged baseline results.

### Common mistakes

- Use amount -1: reject it under the stated policy.

- Treating a supplied answer key, an authored example or self-review as independent field validation.

### Check your understanding

Which exact input, rule and expected value would let another learner falsify your conclusion in this activity, and what remains untested?

### Offline route

Use the supplied fictional JSON, expected results and paper/text evidence log without a provider account. Manual or constructed completion is labelled; it is not a live cloud integration or trained-model run.

## Activity 6: Package a script another learner can inspect

Estimated time: 65 minutes.

### Outcomes

- Provide inputs, expected results and run instructions for a hosted notebook.

- Explain and retain a testable result and its limits.

A small script is useful when its input rules and failure behaviour are visible. Distinguish strings from numbers, keep original rows, and return a value that can be tested. An AI-generated function still needs human-readable control flow and independent examples.

Provide inputs, expected results and run instructions for a hosted notebook. Deliver a reproducible bundle rather than a screenshot alone. Include inputs, rules, output, failure tests, a short README and residual limitations. Ask another person to follow the instructions if possible; self-review and actual external review must be labelled separately.

Policy for this project: Accept finite non-negative numeric amounts, retain identifiers and reject invalid rows with a reason. Never use eval on input text.

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

1. Provide inputs, expected results and run instructions for a hosted notebook.

2. Open README.md and your evidence log from the practice pack; keep an unmodified original.

3. Record the human decision owner, limitations and any untested service access.

4. Perform one small change and predict its effect before rerunning.

5. Keep the result and your reasoning in the lesson notes; do not mark a simulated run as live.

### Expected evidence

- Package a script another learner can inspect — a saved, inspectable artefact tied to the supplied rule.

- A baseline or change-test record with expected/observed results and a limitation.

### Common mistakes

- Provide an empty rows list: accepted is 0 and total is 0.

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

How should you handle the project rule: Accept finite non-negative numeric amounts, retain identifiers and reject invalid rows with a reason. Never use eval on input text.

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

Accept finite non-negative numeric amounts, retain identifiers and reject invalid rows with a reason. Never use eval on input text. Regional access route is legitimate; credentials and private data are absent; manual/constructed work is clearly labelled.

## References

- [Python tutorial](https://docs.python.org/3/tutorial/)

## Editorial boundary

Original authored practice material; deterministic fixtures build-tested. Not independently expert-reviewed or learner-validated. Time estimates unvalidated.

Use fictional/redacted data and your own authorised provider credentials. Never include credentials in this pack or public work.
