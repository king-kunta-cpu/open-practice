# Test one AI claim in the real world

Open Practice / AI foundations / curriculum 1.0

Estimated guided practice: 4h estimated. This estimate has not been learner-tested.

Original practice material · CC BY 4.0 · Non-degree and non-accredited.

## What you will build

Keep an evidence-based verdict with inputs, tests and a reproducible handoff.

## Before you start

- Open entry; inspect the worked fixture before beginning.

- A text editor/spreadsheet for the manual route. Hosted Python/Jupyter for code exercises; applicable dependencies are in requirements.txt.

- For actual AI calls, a legitimate available cloud service and authorised learner credentials; no particular provider or country is mandatory.

## Learning outcomes

- Pick a task with a known answer and no private or consequential data.

- Use the same input and count the full start-to-finish time.

- Record real outputs only when a permitted endpoint is available.

- The supplied example loses its apparent speed advantage after checking.

- Keep a reproducible result and disclose safety, rights and regional access limits.

## Activity 1: Choose a reversible task

Estimated time: 35 minutes.

### Outcomes

- Pick a task with a known answer and no private or consequential data.

- Explain and retain a testable result and its limits.

A useful introduction to AI starts with a bounded task and an observable failure. Measure checking and rework as well as first-draft speed. One small successful example does not establish general reasoning, reliability across languages or suitability for consequential decisions.

Pick a task with a known answer and no private or consequential data. Inspect the supplied input before using any tool. Write the decision rules in your own words and calculate one small result independently. The reference output is an answer key for this deliberately bounded fixture, not proof of general capability.

Policy for this project: Count full workflow time. Claims must carry evidence and uncertainty. Simulated customers and constructed outputs are not real validation.

For learners across regions underserved or excluded by mainstream providers: verify country eligibility, language, account/identity requirements, data terms, cost, quota and connectivity before choosing a cloud service. Use only legitimate available alternatives; never bypass restrictions or invent a country/account. No service access? Complete the labelled manual/fixture route without claiming a live AI run.

Supporting practice — Everyday applications with boundaries: Map one task each in writing, data and vision. Name a useful output and a failure that would matter to its user. Healthcare diagnosis, consequential financial decisions and autonomous actions are outside this beginner exercise. Make a three-row use-case map with a human owner and an explicit stop condition.

### Worked example

```text

SOURCE (authored fixture):
{
  "manual_minutes": [
    8,
    7,
    9
  ],
  "assisted_minutes": [
    4,
    4,
    5
  ],
  "checking_minutes": [
    3,
    4,
    4
  ]
}
INDEPENDENT FIXTURE TARGET:
{
  "manual_total": 24,
  "assisted_total": 24,
  "saved_minutes": 0,
  "claim": "no measured time saving"
}

```

### Guided activity

1. Pick a task with a known answer and no private or consequential data.

2. Open input.json and expected.json from the practice pack; keep an unmodified original.

3. Record a manual prediction and the relevant rule before consulting the answer key.

4. Perform one small change and predict its effect before rerunning.

5. Keep the result and your reasoning in the lesson notes; do not mark a simulated run as live.

6. Make a three-row use-case map with a human owner and an explicit stop condition.

### Expected evidence

- Choose a reversible task — a saved, inspectable artefact tied to the supplied rule.

- A baseline or change-test record with expected/observed results and a limitation.

- Make a three-row use-case map with a human owner and an explicit stop condition.

### Common mistakes

- Ignore checking time: you would falsely claim an 11-minute saving.

- Treating a supplied answer key, an authored example or self-review as independent field validation.

### Check your understanding

Which exact input, rule and expected value would let another learner falsify your conclusion in this activity, and what remains untested?

### Offline route

Use the supplied fictional JSON, expected results and paper/text evidence log without a provider account. Manual or constructed completion is labelled; it is not a live cloud integration or trained-model run.

## Activity 2: Measure the manual route

Estimated time: 35 minutes.

### Outcomes

- Use the same input and count the full start-to-finish time.

- Explain and retain a testable result and its limits.

A useful introduction to AI starts with a bounded task and an observable failure. Measure checking and rework as well as first-draft speed. One small successful example does not establish general reasoning, reliability across languages or suitability for consequential decisions.

Use the same input and count the full start-to-finish time. Establish a baseline before changing prompts or code. Keep the original input immutable. Record expected values, observed values and whether each comparison passed. If the expected file conflicts with a justified policy, investigate rather than forcing a convenient match.

Policy for this project: Count full workflow time. Claims must carry evidence and uncertainty. Simulated customers and constructed outputs are not real validation.

Supporting practice — One introduction, multiple ways to test: Use the same small task to distinguish data, a model response, a deterministic check and human approval. A second introductory label is not a second skill. Change one input and predict how each stage should respond before rerunning. Keep an input-to-check trace and one counterexample; reuse it rather than repeating another survey.

### Worked example

```text

MANUAL BASELINE / compare every named field
{
  "manual_total": 24,
  "assisted_total": 24,
  "saved_minutes": 0,
  "claim": "no measured time saving"
}
Keep a separate observed-result column; the answer key is not a model response.

```

### Guided activity

1. Use the same input and count the full start-to-finish time.

2. Open input.json and expected.json from the practice pack; keep an unmodified original.

3. Record expected and observed values separately; explain every mismatch.

4. Perform one small change and predict its effect before rerunning.

5. Keep the result and your reasoning in the lesson notes; do not mark a simulated run as live.

6. Keep an input-to-check trace and one counterexample; reuse it rather than repeating another survey.

### Expected evidence

- Measure the manual route — a saved, inspectable artefact tied to the supplied rule.

- A baseline or change-test record with expected/observed results and a limitation.

- Keep an input-to-check trace and one counterexample; reuse it rather than repeating another survey.

### Common mistakes

- Add five minutes of rework: the assisted workflow is slower.

- Treating a supplied answer key, an authored example or self-review as independent field validation.

### Check your understanding

Which exact input, rule and expected value would let another learner falsify your conclusion in this activity, and what remains untested?

### Offline route

Use the supplied fictional JSON, expected results and paper/text evidence log without a provider account. Manual or constructed completion is labelled; it is not a live cloud integration or trained-model run.

## Activity 3: Try a hosted AI route

Estimated time: 35 minutes.

### Outcomes

- Record real outputs only when a permitted endpoint is available.

- Explain and retain a testable result and its limits.

A useful introduction to AI starts with a bounded task and an observable failure. Measure checking and rework as well as first-draft speed. One small successful example does not establish general reasoning, reliability across languages or suitability for consequential decisions.

Record real outputs only when a permitted endpoint is available. Build one inspectable transformation or bounded AI prompt. Keep calculation and validation deterministic where possible. If you make a permitted hosted call, save the actual response separately from the authored examples and verify its material claims; the supplied reference never simulates a live model.

Policy for this project: Count full workflow time. Claims must carry evidence and uncertainty. Simulated customers and constructed outputs are not real validation.

Supporting practice — Terminology you can demonstrate: Machine learning fits patterns from examples; a generative model produces candidate content; a rule-based validator checks stated conditions. None of these names makes a system autonomous or correct. Explain the difference using your actual task, not memorised jargon. Write a glossary of five terms, each tied to a real observation and a limitation.

### Worked example

```text

PROJECT CONTRACT:
Count full workflow time. Claims must carry evidence and uncertainty. Simulated customers and constructed outputs are not real validation.
HOSTED REFERENCE: open hosted-lab.ipynb or run reference.py with all fixture files together.
EXPECTED CONSTRUCTED RESULT:
{
  "manual_total": 24,
  "assisted_total": 24,
  "saved_minutes": 0,
  "claim": "no measured time saving"
}

```

### Guided activity

1. Record real outputs only when a permitted endpoint is available.

2. Open hosted-lab.ipynb and the reference code from the practice pack; keep an unmodified original.

3. Record expected and observed values separately; explain every mismatch.

4. Perform Change the language or context: repeat the evaluation rather than transferring the result blindly.

5. Keep the result and your reasoning in the lesson notes; do not mark a simulated run as live.

6. Write a glossary of five terms, each tied to a real observation and a limitation.

### Expected evidence

- Try a hosted AI route — a saved, inspectable artefact tied to the supplied rule.

- A baseline or change-test record with expected/observed results and a limitation.

- Write a glossary of five terms, each tied to a real observation and a limitation.

### Common mistakes

- Change the language or context: repeat the evaluation rather than transferring the result blindly.

- Treating a supplied answer key, an authored example or self-review as independent field validation.

### Check your understanding

Which exact input, rule and expected value would let another learner falsify your conclusion in this activity, and what remains untested?

### Offline route

Use the supplied fictional JSON, expected results and paper/text evidence log without a provider account. Manual or constructed completion is labelled; it is not a live cloud integration or trained-model run.

## Activity 4: Count checking and repair

Estimated time: 35 minutes.

### Outcomes

- The supplied example loses its apparent speed advantage after checking.

- Explain and retain a testable result and its limits.

A useful introduction to AI starts with a bounded task and an observable failure. Measure checking and rework as well as first-draft speed. One small successful example does not establish general reasoning, reliability across languages or suitability for consequential decisions.

The supplied example loses its apparent speed advantage after checking. Change one assumption at a time and predict the result first. Retain the failure, the revision and the rerun evidence. A failure is useful information: hiding a bad output or editing a test target after seeing the answer destroys the value of the experiment.

Policy for this project: Count full workflow time. Claims must carry evidence and uncertainty. Simulated customers and constructed outputs are not real validation.

### Worked example

```text

CHANGE TESTS — predict before running:
1. Ignore checking time: you would falsely claim an 11-minute saving.
2. Add five minutes of rework: the assisted workflow is slower.
3. Change the language or context: repeat the evaluation rather than transferring the result blindly.
Keep the original expected.json unchanged.

```

### Guided activity

1. The supplied example loses its apparent speed advantage after checking.

2. Open failure-tests.md from the practice pack; keep an unmodified original.

3. Record expected and observed values separately; explain every mismatch.

4. Perform Ignore checking time: you would falsely claim an 11-minute saving.

5. Keep the result and your reasoning in the lesson notes; do not mark a simulated run as live.

### Expected evidence

- Count checking and repair — a saved, inspectable artefact tied to the supplied rule.

- A baseline or change-test record with expected/observed results and a limitation.

### Common mistakes

- Ignore checking time: you would falsely claim an 11-minute saving.

- Treating a supplied answer key, an authored example or self-review as independent field validation.

### Check your understanding

Which exact input, rule and expected value would let another learner falsify your conclusion in this activity, and what remains untested?

### Offline route

Use the supplied fictional JSON, expected results and paper/text evidence log without a provider account. Manual or constructed completion is labelled; it is not a live cloud integration or trained-model run.

## Activity 5: Audit capability and impact claims

Estimated time: 35 minutes.

### Outcomes

- Separate narrow performance, AGI speculation and effects on affected people.

- Explain and retain a testable result and its limits.

A useful introduction to AI starts with a bounded task and an observable failure. Measure checking and rework as well as first-draft speed. One small successful example does not establish general reasoning, reliability across languages or suitability for consequential decisions.

Separate narrow performance, AGI speculation and effects on affected people. Review what the fixture cannot establish. Explain who owns the decision, where human approval is needed and which access or professional constraints remain. Do not describe a small educational success as production readiness, certification, legal compliance or a guarantee.

Policy for this project: Count full workflow time. Claims must carry evidence and uncertainty. Simulated customers and constructed outputs are not real validation.

For learners across regions underserved or excluded by mainstream providers: verify country eligibility, language, account/identity requirements, data terms, cost, quota and connectivity before choosing a cloud service. Use only legitimate available alternatives; never bypass restrictions or invent a country/account. No service access? Complete the labelled manual/fixture route without claiming a live AI run.

Supporting practice — Capability claims versus AGI speculation: AGI is a research concept, not something established by a fluent answer. Make a dated claim ledger: observed result, source, uncertainty and what further test would change the claim. Do not turn a narrow task success into a forecast about intelligence or employment. Classify three claims as observed, inferred or speculative; attach evidence and a disconfirming test.

### Worked example

```text

REVIEW BOUNDARY:
Count full workflow time. Claims must carry evidence and uncertainty. Simulated customers and constructed outputs are not real validation.
Classify three claims as observed, inferred or speculative; attach evidence and a disconfirming test.
ACCESS / NOT TESTED: unavailable provider, unsupported language and absent external feedback must remain explicit.

```

### Guided activity

1. Separate narrow performance, AGI speculation and effects on affected people.

2. Open README.md and your evidence log from the practice pack; keep an unmodified original.

3. Record the human decision owner, limitations and any untested service access.

4. Perform one small change and predict its effect before rerunning.

5. Keep the result and your reasoning in the lesson notes; do not mark a simulated run as live.

6. Classify three claims as observed, inferred or speculative; attach evidence and a disconfirming test.

### Expected evidence

- Audit capability and impact claims — a saved, inspectable artefact tied to the supplied rule.

- A baseline or change-test record with expected/observed results and a limitation.

- Classify three claims as observed, inferred or speculative; attach evidence and a disconfirming test.

### Common mistakes

- Add five minutes of rework: the assisted workflow is slower.

- Treating a supplied answer key, an authored example or self-review as independent field validation.

### Check your understanding

Which exact input, rule and expected value would let another learner falsify your conclusion in this activity, and what remains untested?

### Offline route

Use the supplied fictional JSON, expected results and paper/text evidence log without a provider account. Manual or constructed completion is labelled; it is not a live cloud integration or trained-model run.

## Activity 6: Keep an evidence-based verdict

Estimated time: 65 minutes.

### Outcomes

- A negative result is a valid completed experiment, not a personal failure.

- Explain and retain a testable result and its limits.

A useful introduction to AI starts with a bounded task and an observable failure. Measure checking and rework as well as first-draft speed. One small successful example does not establish general reasoning, reliability across languages or suitability for consequential decisions.

A negative result is a valid completed experiment, not a personal failure. Deliver a reproducible bundle rather than a screenshot alone. Include inputs, rules, output, failure tests, a short README and residual limitations. Ask another person to follow the instructions if possible; self-review and actual external review must be labelled separately.

Policy for this project: Count full workflow time. Claims must carry evidence and uncertainty. Simulated customers and constructed outputs are not real validation.

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

1. A negative result is a valid completed experiment, not a personal failure.

2. Open README.md and your evidence log from the practice pack; keep an unmodified original.

3. Record the human decision owner, limitations and any untested service access.

4. Perform one small change and predict its effect before rerunning.

5. Keep the result and your reasoning in the lesson notes; do not mark a simulated run as live.

### Expected evidence

- Keep an evidence-based verdict — a saved, inspectable artefact tied to the supplied rule.

- A baseline or change-test record with expected/observed results and a limitation.

### Common mistakes

- Change the language or context: repeat the evaluation rather than transferring the result blindly.

- Treating a supplied answer key, an authored example or self-review as independent field validation.

### Check your understanding

Which exact input, rule and expected value would let another learner falsify your conclusion in this activity, and what remains untested?

### Offline route

Use the supplied fictional JSON, expected results and paper/text evidence log without a provider account. Manual or constructed completion is labelled; it is not a live cloud integration or trained-model run.

## End-of-path review

These are self-check questions, not verified examinations.

### Question 1

For the supplied fixture, what is the expected manual_total?

1. 24

2. It cannot be checked against the supplied input.

3. Whatever value the model reports most confidently.

Review answer: 1. The independent answer key only validates this constructed fixture. Preserve the source, rerun counterexamples, and disclose what was not tested.

### Question 2

How should you handle the project rule: Count full workflow time. Claims must carry evidence and uncertainty. Simulated customers and constructed outputs are not real validation.

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

Count full workflow time. Claims must carry evidence and uncertainty. Simulated customers and constructed outputs are not real validation. Regional access route is legitimate; credentials and private data are absent; manual/constructed work is clearly labelled.

## References

- [NIST AI risk framework](https://www.nist.gov/itl/ai-risk-management-framework)

## Editorial boundary

Original authored practice material; deterministic fixtures build-tested. Not independently expert-reviewed or learner-validated. Time estimates unvalidated.

Use fictional/redacted data and your own authorised provider credentials. Never include credentials in this pack or public work.
