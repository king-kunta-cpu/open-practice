# Measure an algorithm instead of guessing

Open Practice / Cloud & code / curriculum 1.0

Estimated guided practice: 4h estimated. This estimate has not been learner-tested.

Original practice material · CC BY 4.0 · Non-degree and non-accredited.

## What you will build

Ship a correctness and complexity note with inputs, tests and a reproducible handoff.

## Before you start

- Python prerequisite; inspect the worked fixture before beginning.

- A text editor/spreadsheet for the manual route. Hosted Python/Jupyter for code exercises; applicable dependencies are in requirements.txt.

- For actual AI calls, a legitimate available cloud service and authorised learner credentials; no particular provider or country is mandatory.

## Learning outcomes

- Specify sortedness, duplicate handling and the meaning of not found.

- Count inspected values by hand to establish a baseline.

- Track low and high bounds; do not lose the termination condition.

- Vary input size and target position, not just processor timing.

- Keep a reproducible result and disclose safety, rights and regional access limits.

## Activity 1: State the preconditions

Estimated time: 35 minutes.

### Outcomes

- Specify sortedness, duplicate handling and the meaning of not found.

- Explain and retain a testable result and its limits.

Correctness and efficiency are different questions. A linear search can be correct yet costly as data grows. Binary search requires sorted data; applying it to arbitrary input can produce a plausible failure. Count comparisons on a deliberately small fixture before discussing asymptotic growth.

Specify sortedness, duplicate handling and the meaning of not found. Inspect the supplied input before using any tool. Write the decision rules in your own words and calculate one small result independently. The reference output is an answer key for this deliberately bounded fixture, not proof of general capability.

Policy for this project: Search returns an index or -1. Count each inspected value once. Sortedness is an explicit precondition for binary search.

For learners across regions underserved or excluded by mainstream providers: verify country eligibility, language, account/identity requirements, data terms, cost, quota and connectivity before choosing a cloud service. Use only legitimate available alternatives; never bypass restrictions or invent a country/account. No service access? Complete the labelled manual/fixture route without claiming a live AI run.

### Worked example

```text

SOURCE (authored fixture):
{
  "values": [
    2,
    4,
    6,
    8,
    10
  ],
  "target": 8
}
INDEPENDENT FIXTURE TARGET:
{
  "index": 3,
  "linear_comparisons": 4,
  "binary_comparisons": 2
}

```

### Guided activity

1. Specify sortedness, duplicate handling and the meaning of not found.

2. Open input.json and expected.json from the practice pack; keep an unmodified original.

3. Record a manual prediction and the relevant rule before consulting the answer key.

4. Perform one small change and predict its effect before rerunning.

5. Keep the result and your reasoning in the lesson notes; do not mark a simulated run as live.

### Expected evidence

- State the preconditions — a saved, inspectable artefact tied to the supplied rule.

- A baseline or change-test record with expected/observed results and a limitation.

### Common mistakes

- Target 11: return -1, not the nearest item.

- Treating a supplied answer key, an authored example or self-review as independent field validation.

### Check your understanding

Which exact input, rule and expected value would let another learner falsify your conclusion in this activity, and what remains untested?

### Offline route

Use the supplied fictional JSON, expected results and paper/text evidence log without a provider account. Manual or constructed completion is labelled; it is not a live cloud integration or trained-model run.

## Activity 2: Trace a linear search

Estimated time: 35 minutes.

### Outcomes

- Count inspected values by hand to establish a baseline.

- Explain and retain a testable result and its limits.

Correctness and efficiency are different questions. A linear search can be correct yet costly as data grows. Binary search requires sorted data; applying it to arbitrary input can produce a plausible failure. Count comparisons on a deliberately small fixture before discussing asymptotic growth.

Count inspected values by hand to establish a baseline. Establish a baseline before changing prompts or code. Keep the original input immutable. Record expected values, observed values and whether each comparison passed. If the expected file conflicts with a justified policy, investigate rather than forcing a convenient match.

Policy for this project: Search returns an index or -1. Count each inspected value once. Sortedness is an explicit precondition for binary search.

### Worked example

```text

MANUAL BASELINE / compare every named field
{
  "index": 3,
  "linear_comparisons": 4,
  "binary_comparisons": 2
}
Keep a separate observed-result column; the answer key is not a model response.

```

### Guided activity

1. Count inspected values by hand to establish a baseline.

2. Open input.json and expected.json from the practice pack; keep an unmodified original.

3. Record expected and observed values separately; explain every mismatch.

4. Perform one small change and predict its effect before rerunning.

5. Keep the result and your reasoning in the lesson notes; do not mark a simulated run as live.

### Expected evidence

- Trace a linear search — a saved, inspectable artefact tied to the supplied rule.

- A baseline or change-test record with expected/observed results and a limitation.

### Common mistakes

- Empty list: return -1 with zero linear comparisons.

- Treating a supplied answer key, an authored example or self-review as independent field validation.

### Check your understanding

Which exact input, rule and expected value would let another learner falsify your conclusion in this activity, and what remains untested?

### Offline route

Use the supplied fictional JSON, expected results and paper/text evidence log without a provider account. Manual or constructed completion is labelled; it is not a live cloud integration or trained-model run.

## Activity 3: Implement binary search

Estimated time: 35 minutes.

### Outcomes

- Track low and high bounds; do not lose the termination condition.

- Explain and retain a testable result and its limits.

Correctness and efficiency are different questions. A linear search can be correct yet costly as data grows. Binary search requires sorted data; applying it to arbitrary input can produce a plausible failure. Count comparisons on a deliberately small fixture before discussing asymptotic growth.

Track low and high bounds; do not lose the termination condition. Build one inspectable transformation or bounded AI prompt. Keep calculation and validation deterministic where possible. If you make a permitted hosted call, save the actual response separately from the authored examples and verify its material claims; the supplied reference never simulates a live model.

Policy for this project: Search returns an index or -1. Count each inspected value once. Sortedness is an explicit precondition for binary search.

### Worked example

```text

PROJECT CONTRACT:
Search returns an index or -1. Count each inspected value once. Sortedness is an explicit precondition for binary search.
HOSTED REFERENCE: open hosted-lab.ipynb or run reference.py with all fixture files together.
EXPECTED CONSTRUCTED RESULT:
{
  "index": 3,
  "linear_comparisons": 4,
  "binary_comparisons": 2
}

```

### Guided activity

1. Track low and high bounds; do not lose the termination condition.

2. Open hosted-lab.ipynb and the reference code from the practice pack; keep an unmodified original.

3. Record expected and observed values separately; explain every mismatch.

4. Perform Unsorted values: reject binary-search use or sort with an explicit index mapping.

5. Keep the result and your reasoning in the lesson notes; do not mark a simulated run as live.

### Expected evidence

- Implement binary search — a saved, inspectable artefact tied to the supplied rule.

- A baseline or change-test record with expected/observed results and a limitation.

### Common mistakes

- Unsorted values: reject binary-search use or sort with an explicit index mapping.

- Treating a supplied answer key, an authored example or self-review as independent field validation.

### Check your understanding

Which exact input, rule and expected value would let another learner falsify your conclusion in this activity, and what remains untested?

### Offline route

Use the supplied fictional JSON, expected results and paper/text evidence log without a provider account. Manual or constructed completion is labelled; it is not a live cloud integration or trained-model run.

## Activity 4: Benchmark growth and edge cases

Estimated time: 35 minutes.

### Outcomes

- Vary input size and target position, not just processor timing.

- Explain and retain a testable result and its limits.

Correctness and efficiency are different questions. A linear search can be correct yet costly as data grows. Binary search requires sorted data; applying it to arbitrary input can produce a plausible failure. Count comparisons on a deliberately small fixture before discussing asymptotic growth.

Vary input size and target position, not just processor timing. Change one assumption at a time and predict the result first. Retain the failure, the revision and the rerun evidence. A failure is useful information: hiding a bad output or editing a test target after seeing the answer destroys the value of the experiment.

Policy for this project: Search returns an index or -1. Count each inspected value once. Sortedness is an explicit precondition for binary search.

### Worked example

```text

CHANGE TESTS — predict before running:
1. Target 11: return -1, not the nearest item.
2. Empty list: return -1 with zero linear comparisons.
3. Unsorted values: reject binary-search use or sort with an explicit index mapping.
Keep the original expected.json unchanged.

```

### Guided activity

1. Vary input size and target position, not just processor timing.

2. Open failure-tests.md from the practice pack; keep an unmodified original.

3. Record expected and observed values separately; explain every mismatch.

4. Perform Target 11: return -1, not the nearest item.

5. Keep the result and your reasoning in the lesson notes; do not mark a simulated run as live.

### Expected evidence

- Benchmark growth and edge cases — a saved, inspectable artefact tied to the supplied rule.

- A baseline or change-test record with expected/observed results and a limitation.

### Common mistakes

- Target 11: return -1, not the nearest item.

- Treating a supplied answer key, an authored example or self-review as independent field validation.

### Check your understanding

Which exact input, rule and expected value would let another learner falsify your conclusion in this activity, and what remains untested?

### Offline route

Use the supplied fictional JSON, expected results and paper/text evidence log without a provider account. Manual or constructed completion is labelled; it is not a live cloud integration or trained-model run.

## Activity 5: Choose a structure for a task

Estimated time: 35 minutes.

### Outcomes

- Compare repeated lookups with the cost of sorting or building a map.

- Explain and retain a testable result and its limits.

Correctness and efficiency are different questions. A linear search can be correct yet costly as data grows. Binary search requires sorted data; applying it to arbitrary input can produce a plausible failure. Count comparisons on a deliberately small fixture before discussing asymptotic growth.

Compare repeated lookups with the cost of sorting or building a map. Review what the fixture cannot establish. Explain who owns the decision, where human approval is needed and which access or professional constraints remain. Do not describe a small educational success as production readiness, certification, legal compliance or a guarantee.

Policy for this project: Search returns an index or -1. Count each inspected value once. Sortedness is an explicit precondition for binary search.

For learners across regions underserved or excluded by mainstream providers: verify country eligibility, language, account/identity requirements, data terms, cost, quota and connectivity before choosing a cloud service. Use only legitimate available alternatives; never bypass restrictions or invent a country/account. No service access? Complete the labelled manual/fixture route without claiming a live AI run.

### Worked example

```text

REVIEW BOUNDARY:
Search returns an index or -1. Count each inspected value once. Sortedness is an explicit precondition for binary search.

ACCESS / NOT TESTED: unavailable provider, unsupported language and absent external feedback must remain explicit.

```

### Guided activity

1. Compare repeated lookups with the cost of sorting or building a map.

2. Open README.md and your evidence log from the practice pack; keep an unmodified original.

3. Record the human decision owner, limitations and any untested service access.

4. Perform one small change and predict its effect before rerunning.

5. Keep the result and your reasoning in the lesson notes; do not mark a simulated run as live.

### Expected evidence

- Choose a structure for a task — a saved, inspectable artefact tied to the supplied rule.

- A baseline or change-test record with expected/observed results and a limitation.

### Common mistakes

- Empty list: return -1 with zero linear comparisons.

- Treating a supplied answer key, an authored example or self-review as independent field validation.

### Check your understanding

Which exact input, rule and expected value would let another learner falsify your conclusion in this activity, and what remains untested?

### Offline route

Use the supplied fictional JSON, expected results and paper/text evidence log without a provider account. Manual or constructed completion is labelled; it is not a live cloud integration or trained-model run.

## Activity 6: Ship a correctness and complexity note

Estimated time: 65 minutes.

### Outcomes

- Include traces, tests and the assumptions behind the recommendation.

- Explain and retain a testable result and its limits.

Correctness and efficiency are different questions. A linear search can be correct yet costly as data grows. Binary search requires sorted data; applying it to arbitrary input can produce a plausible failure. Count comparisons on a deliberately small fixture before discussing asymptotic growth.

Include traces, tests and the assumptions behind the recommendation. Deliver a reproducible bundle rather than a screenshot alone. Include inputs, rules, output, failure tests, a short README and residual limitations. Ask another person to follow the instructions if possible; self-review and actual external review must be labelled separately.

Policy for this project: Search returns an index or -1. Count each inspected value once. Sortedness is an explicit precondition for binary search.

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

1. Include traces, tests and the assumptions behind the recommendation.

2. Open README.md and your evidence log from the practice pack; keep an unmodified original.

3. Record the human decision owner, limitations and any untested service access.

4. Perform one small change and predict its effect before rerunning.

5. Keep the result and your reasoning in the lesson notes; do not mark a simulated run as live.

### Expected evidence

- Ship a correctness and complexity note — a saved, inspectable artefact tied to the supplied rule.

- A baseline or change-test record with expected/observed results and a limitation.

### Common mistakes

- Unsorted values: reject binary-search use or sort with an explicit index mapping.

- Treating a supplied answer key, an authored example or self-review as independent field validation.

### Check your understanding

Which exact input, rule and expected value would let another learner falsify your conclusion in this activity, and what remains untested?

### Offline route

Use the supplied fictional JSON, expected results and paper/text evidence log without a provider account. Manual or constructed completion is labelled; it is not a live cloud integration or trained-model run.

## End-of-path review

These are self-check questions, not verified examinations.

### Question 1

For the supplied fixture, what is the expected index?

1. 3

2. It cannot be checked against the supplied input.

3. Whatever value the model reports most confidently.

Review answer: 1. The independent answer key only validates this constructed fixture. Preserve the source, rerun counterexamples, and disclose what was not tested.

### Question 2

How should you handle the project rule: Search returns an index or -1. Count each inspected value once. Sortedness is an explicit precondition for binary search.

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

Search returns an index or -1. Count each inspected value once. Sortedness is an explicit precondition for binary search. Regional access route is legitimate; credentials and private data are absent; manual/constructed work is clearly labelled.

## References

- [Python bisect documentation](https://docs.python.org/3/library/bisect.html)

## Editorial boundary

Original authored practice material; deterministic fixtures build-tested. Not independently expert-reviewed or learner-validated. Time estimates unvalidated.

Use fictional/redacted data and your own authorised provider credentials. Never include credentials in this pack or public work.
