# Plan a timetable that obeys its constraints

Open Practice / Planning & uncertainty / curriculum 1.0

Estimated guided practice: 4h estimated. This estimate has not been learner-tested.

Original practice material · CC BY 4.0 · Non-degree and non-accredited.

## What you will build

Deliver a verified planning sandbox with inputs, tests and a reproducible handoff.

## Before you start

- Logic onramp; inspect the worked fixture before beginning.

- A text editor/spreadsheet for the manual route. Hosted Python/Jupyter for code exercises; applicable dependencies are in requirements.txt.

- For actual AI calls, a legitimate available cloud service and authorised learner credentials; no particular provider or country is mandatory.

## Learning outcomes

- Write resource limits and precedence in testable form.

- Use permutations to find all valid assignments.

- Choose a deterministic order only after rejecting invalid plans.

- Return infeasible instead of breaking a hard rule.

- Keep a reproducible result and disclose safety, rights and regional access limits.

## Activity 1: Translate prose into constraints

Estimated time: 35 minutes.

### Outcomes

- Write resource limits and precedence in testable form.

- Explain and retain a testable result and its limits.

A planner needs a representation of resources, allowed actions and hard constraints. A readable plan can still double-book a room. Check feasibility separately from preference scores; a cheaper invalid schedule is not a better solution.

Write resource limits and precedence in testable form. Inspect the supplied input before using any tool. Write the decision rules in your own words and calculate one small result independently. The reference output is an answer key for this deliberately bounded fixture, not proof of general capability.

Policy for this project: One room, at most one task per slot. Task B must follow A. C cannot use slot 1. Enumerate valid schedules before selecting the first deterministic result.

For learners across regions underserved or excluded by mainstream providers: verify country eligibility, language, account/identity requirements, data terms, cost, quota and connectivity before choosing a cloud service. Use only legitimate available alternatives; never bypass restrictions or invent a country/account. No service access? Complete the labelled manual/fixture route without claiming a live AI run.

### Worked example

```text

SOURCE (authored fixture):
{
  "tasks": [
    "A",
    "B",
    "C"
  ],
  "slots": [
    1,
    2,
    3
  ]
}
INDEPENDENT FIXTURE TARGET:
{
  "valid_schedules": 2,
  "selected": {
    "A": 1,
    "B": 2,
    "C": 3
  }
}

```

### Guided activity

1. Write resource limits and precedence in testable form.

2. Open input.json and expected.json from the practice pack; keep an unmodified original.

3. Record a manual prediction and the relevant rule before consulting the answer key.

4. Perform one small change and predict its effect before rerunning.

5. Keep the result and your reasoning in the lesson notes; do not mark a simulated run as live.

### Expected evidence

- Translate prose into constraints — a saved, inspectable artefact tied to the supplied rule.

- A baseline or change-test record with expected/observed results and a limitation.

### Common mistakes

- Force B into slot 1: no feasible schedule exists.

- Treating a supplied answer key, an authored example or self-review as independent field validation.

### Check your understanding

Which exact input, rule and expected value would let another learner falsify your conclusion in this activity, and what remains untested?

### Offline route

Use the supplied fictional JSON, expected results and paper/text evidence log without a provider account. Manual or constructed completion is labelled; it is not a live cloud integration or trained-model run.

## Activity 2: Enumerate the small search space

Estimated time: 35 minutes.

### Outcomes

- Use permutations to find all valid assignments.

- Explain and retain a testable result and its limits.

A planner needs a representation of resources, allowed actions and hard constraints. A readable plan can still double-book a room. Check feasibility separately from preference scores; a cheaper invalid schedule is not a better solution.

Use permutations to find all valid assignments. Establish a baseline before changing prompts or code. Keep the original input immutable. Record expected values, observed values and whether each comparison passed. If the expected file conflicts with a justified policy, investigate rather than forcing a convenient match.

Policy for this project: One room, at most one task per slot. Task B must follow A. C cannot use slot 1. Enumerate valid schedules before selecting the first deterministic result.

### Worked example

```text

MANUAL BASELINE / compare every named field
{
  "valid_schedules": 2,
  "selected": {
    "A": 1,
    "B": 2,
    "C": 3
  }
}
Keep a separate observed-result column; the answer key is not a model response.

```

### Guided activity

1. Use permutations to find all valid assignments.

2. Open input.json and expected.json from the practice pack; keep an unmodified original.

3. Record expected and observed values separately; explain every mismatch.

4. Perform one small change and predict its effect before rerunning.

5. Keep the result and your reasoning in the lesson notes; do not mark a simulated run as live.

### Expected evidence

- Enumerate the small search space — a saved, inspectable artefact tied to the supplied rule.

- A baseline or change-test record with expected/observed results and a limitation.

### Common mistakes

- Allow only two slots: three distinct tasks cannot all fit.

- Treating a supplied answer key, an authored example or self-review as independent field validation.

### Check your understanding

Which exact input, rule and expected value would let another learner falsify your conclusion in this activity, and what remains untested?

### Offline route

Use the supplied fictional JSON, expected results and paper/text evidence log without a provider account. Manual or constructed completion is labelled; it is not a live cloud integration or trained-model run.

## Activity 3: Separate feasibility from preference

Estimated time: 35 minutes.

### Outcomes

- Choose a deterministic order only after rejecting invalid plans.

- Explain and retain a testable result and its limits.

A planner needs a representation of resources, allowed actions and hard constraints. A readable plan can still double-book a room. Check feasibility separately from preference scores; a cheaper invalid schedule is not a better solution.

Choose a deterministic order only after rejecting invalid plans. Build one inspectable transformation or bounded AI prompt. Keep calculation and validation deterministic where possible. If you make a permitted hosted call, save the actual response separately from the authored examples and verify its material claims; the supplied reference never simulates a live model.

Policy for this project: One room, at most one task per slot. Task B must follow A. C cannot use slot 1. Enumerate valid schedules before selecting the first deterministic result.

### Worked example

```text

PROJECT CONTRACT:
One room, at most one task per slot. Task B must follow A. C cannot use slot 1. Enumerate valid schedules before selecting the first deterministic result.
HOSTED REFERENCE: open hosted-lab.ipynb or run reference.py with all fixture files together.
EXPECTED CONSTRUCTED RESULT:
{
  "valid_schedules": 2,
  "selected": {
    "A": 1,
    "B": 2,
    "C": 3
  }
}

```

### Guided activity

1. Choose a deterministic order only after rejecting invalid plans.

2. Open hosted-lab.ipynb and the reference code from the practice pack; keep an unmodified original.

3. Record expected and observed values separately; explain every mismatch.

4. Perform Relax C restriction: count changes; do not silently change the original rules.

5. Keep the result and your reasoning in the lesson notes; do not mark a simulated run as live.

### Expected evidence

- Separate feasibility from preference — a saved, inspectable artefact tied to the supplied rule.

- A baseline or change-test record with expected/observed results and a limitation.

### Common mistakes

- Relax C restriction: count changes; do not silently change the original rules.

- Treating a supplied answer key, an authored example or self-review as independent field validation.

### Check your understanding

Which exact input, rule and expected value would let another learner falsify your conclusion in this activity, and what remains untested?

### Offline route

Use the supplied fictional JSON, expected results and paper/text evidence log without a provider account. Manual or constructed completion is labelled; it is not a live cloud integration or trained-model run.

## Activity 4: Test an impossible request

Estimated time: 35 minutes.

### Outcomes

- Return infeasible instead of breaking a hard rule.

- Explain and retain a testable result and its limits.

A planner needs a representation of resources, allowed actions and hard constraints. A readable plan can still double-book a room. Check feasibility separately from preference scores; a cheaper invalid schedule is not a better solution.

Return infeasible instead of breaking a hard rule. Change one assumption at a time and predict the result first. Retain the failure, the revision and the rerun evidence. A failure is useful information: hiding a bad output or editing a test target after seeing the answer destroys the value of the experiment.

Policy for this project: One room, at most one task per slot. Task B must follow A. C cannot use slot 1. Enumerate valid schedules before selecting the first deterministic result.

### Worked example

```text

CHANGE TESTS — predict before running:
1. Force B into slot 1: no feasible schedule exists.
2. Allow only two slots: three distinct tasks cannot all fit.
3. Relax C restriction: count changes; do not silently change the original rules.
Keep the original expected.json unchanged.

```

### Guided activity

1. Return infeasible instead of breaking a hard rule.

2. Open failure-tests.md from the practice pack; keep an unmodified original.

3. Record expected and observed values separately; explain every mismatch.

4. Perform Force B into slot 1: no feasible schedule exists.

5. Keep the result and your reasoning in the lesson notes; do not mark a simulated run as live.

### Expected evidence

- Test an impossible request — a saved, inspectable artefact tied to the supplied rule.

- A baseline or change-test record with expected/observed results and a limitation.

### Common mistakes

- Force B into slot 1: no feasible schedule exists.

- Treating a supplied answer key, an authored example or self-review as independent field validation.

### Check your understanding

Which exact input, rule and expected value would let another learner falsify your conclusion in this activity, and what remains untested?

### Offline route

Use the supplied fictional JSON, expected results and paper/text evidence log without a provider account. Manual or constructed completion is labelled; it is not a live cloud integration or trained-model run.

## Activity 5: Explain heuristics honestly

Estimated time: 35 minutes.

### Outcomes

- A heuristic can speed search without proving a globally best answer.

- Explain and retain a testable result and its limits.

A planner needs a representation of resources, allowed actions and hard constraints. A readable plan can still double-book a room. Check feasibility separately from preference scores; a cheaper invalid schedule is not a better solution.

A heuristic can speed search without proving a globally best answer. Review what the fixture cannot establish. Explain who owns the decision, where human approval is needed and which access or professional constraints remain. Do not describe a small educational success as production readiness, certification, legal compliance or a guarantee.

Policy for this project: One room, at most one task per slot. Task B must follow A. C cannot use slot 1. Enumerate valid schedules before selecting the first deterministic result.

For learners across regions underserved or excluded by mainstream providers: verify country eligibility, language, account/identity requirements, data terms, cost, quota and connectivity before choosing a cloud service. Use only legitimate available alternatives; never bypass restrictions or invent a country/account. No service access? Complete the labelled manual/fixture route without claiming a live AI run.

### Worked example

```text

REVIEW BOUNDARY:
One room, at most one task per slot. Task B must follow A. C cannot use slot 1. Enumerate valid schedules before selecting the first deterministic result.

ACCESS / NOT TESTED: unavailable provider, unsupported language and absent external feedback must remain explicit.

```

### Guided activity

1. A heuristic can speed search without proving a globally best answer.

2. Open README.md and your evidence log from the practice pack; keep an unmodified original.

3. Record the human decision owner, limitations and any untested service access.

4. Perform one small change and predict its effect before rerunning.

5. Keep the result and your reasoning in the lesson notes; do not mark a simulated run as live.

### Expected evidence

- Explain heuristics honestly — a saved, inspectable artefact tied to the supplied rule.

- A baseline or change-test record with expected/observed results and a limitation.

### Common mistakes

- Allow only two slots: three distinct tasks cannot all fit.

- Treating a supplied answer key, an authored example or self-review as independent field validation.

### Check your understanding

Which exact input, rule and expected value would let another learner falsify your conclusion in this activity, and what remains untested?

### Offline route

Use the supplied fictional JSON, expected results and paper/text evidence log without a provider account. Manual or constructed completion is labelled; it is not a live cloud integration or trained-model run.

## Activity 6: Deliver a verified planning sandbox

Estimated time: 65 minutes.

### Outcomes

- Attach a validator and the rules beside every proposed plan.

- Explain and retain a testable result and its limits.

A planner needs a representation of resources, allowed actions and hard constraints. A readable plan can still double-book a room. Check feasibility separately from preference scores; a cheaper invalid schedule is not a better solution.

Attach a validator and the rules beside every proposed plan. Deliver a reproducible bundle rather than a screenshot alone. Include inputs, rules, output, failure tests, a short README and residual limitations. Ask another person to follow the instructions if possible; self-review and actual external review must be labelled separately.

Policy for this project: One room, at most one task per slot. Task B must follow A. C cannot use slot 1. Enumerate valid schedules before selecting the first deterministic result.

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

1. Attach a validator and the rules beside every proposed plan.

2. Open README.md and your evidence log from the practice pack; keep an unmodified original.

3. Record the human decision owner, limitations and any untested service access.

4. Perform one small change and predict its effect before rerunning.

5. Keep the result and your reasoning in the lesson notes; do not mark a simulated run as live.

### Expected evidence

- Deliver a verified planning sandbox — a saved, inspectable artefact tied to the supplied rule.

- A baseline or change-test record with expected/observed results and a limitation.

### Common mistakes

- Relax C restriction: count changes; do not silently change the original rules.

- Treating a supplied answer key, an authored example or self-review as independent field validation.

### Check your understanding

Which exact input, rule and expected value would let another learner falsify your conclusion in this activity, and what remains untested?

### Offline route

Use the supplied fictional JSON, expected results and paper/text evidence log without a provider account. Manual or constructed completion is labelled; it is not a live cloud integration or trained-model run.

## End-of-path review

These are self-check questions, not verified examinations.

### Question 1

For the supplied fixture, what is the expected valid_schedules?

1. 2

2. It cannot be checked against the supplied input.

3. Whatever value the model reports most confidently.

Review answer: 1. The independent answer key only validates this constructed fixture. Preserve the source, rerun counterexamples, and disclose what was not tested.

### Question 2

How should you handle the project rule: One room, at most one task per slot. Task B must follow A. C cannot use slot 1. Enumerate valid schedules before selecting the first deterministic result.

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

One room, at most one task per slot. Task B must follow A. C cannot use slot 1. Enumerate valid schedules before selecting the first deterministic result. Regional access route is legitimate; credentials and private data are absent; manual/constructed work is clearly labelled.

## References

- [Python itertools documentation](https://docs.python.org/3/library/itertools.html)

## Editorial boundary

Original authored practice material; deterministic fixtures build-tested. Not independently expert-reviewed or learner-validated. Time estimates unvalidated.

Use fictional/redacted data and your own authorised provider credentials. Never include credentials in this pack or public work.
