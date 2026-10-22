# Find clusters—and show why they are not facts

Open Practice / Measured machine learning / curriculum 1.0

Estimated guided practice: 4h estimated. This estimate has not been learner-tested.

Original practice material · CC BY 4.0 · Non-degree and non-accredited.

## What you will build

Ship a clustering exploration note with inputs, tests and a reproducible handoff.

## Before you start

- Python + statistics; inspect the worked fixture before beginning.

- A text editor/spreadsheet for the manual route. Hosted Python/Jupyter for code exercises; applicable dependencies are in requirements.txt.

- For actual AI calls, a legitimate available cloud service and authorised learner credentials; no particular provider or country is mandatory.

## Learning outcomes

- Define the toy item coordinates and their units.

- Predict which points are near before fitting.

- Keep parameters and compare membership instead of label IDs.

- Change scale, seed and k; retain disagreeing results.

- Keep a reproducible result and disclose safety, rights and regional access limits.

## Activity 1: Describe features without human profiling

Estimated time: 35 minutes.

### Outcomes

- Define the toy item coordinates and their units.

- Explain and retain a testable result and its limits.

Clustering groups points according to representation, scale and algorithm settings. The labels are arbitrary and do not establish natural categories, personality types or fair treatment of people. Use synthetic item coordinates to inspect stability without profiling anyone.

Define the toy item coordinates and their units. Inspect the supplied input before using any tool. Write the decision rules in your own words and calculate one small result independently. The reference output is an answer key for this deliberately bounded fixture, not proof of general capability.

Policy for this project: Fit two KMeans clusters on six synthetic points with random_state=7 and n_init=10. Compare groups by member IDs, not arbitrary numeric label names.

For learners across regions underserved or excluded by mainstream providers: verify country eligibility, language, account/identity requirements, data terms, cost, quota and connectivity before choosing a cloud service. Use only legitimate available alternatives; never bypass restrictions or invent a country/account. No service access? Complete the labelled manual/fixture route without claiming a live AI run.

### Worked example

```text

SOURCE (authored fixture):
{
  "ids": [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f"
  ],
  "points": [
    [
      0,
      0
    ],
    [
      0,
      1
    ],
    [
      1,
      0
    ],
    [
      9,
      9
    ],
    [
      9,
      10
    ],
    [
      10,
      9
    ]
  ]
}
INDEPENDENT FIXTURE TARGET:
{
  "groups": [
    [
      "a",
      "b",
      "c"
    ],
    [
      "d",
      "e",
      "f"
    ]
  ],
  "sizes": [
    3,
    3
  ]
}

```

### Guided activity

1. Define the toy item coordinates and their units.

2. Open input.json and expected.json from the practice pack; keep an unmodified original.

3. Record a manual prediction and the relevant rule before consulting the answer key.

4. Perform one small change and predict its effect before rerunning.

5. Keep the result and your reasoning in the lesson notes; do not mark a simulated run as live.

### Expected evidence

- Describe features without human profiling — a saved, inspectable artefact tied to the supplied rule.

- A baseline or change-test record with expected/observed results and a limitation.

### Common mistakes

- Change k to 3: the partition changes without revealing a newly discovered truth.

- Treating a supplied answer key, an authored example or self-review as independent field validation.

### Check your understanding

Which exact input, rule and expected value would let another learner falsify your conclusion in this activity, and what remains untested?

### Offline route

Use the supplied fictional JSON, expected results and paper/text evidence log without a provider account. Manual or constructed completion is labelled; it is not a live cloud integration or trained-model run.

## Activity 2: Inspect distance and scaling

Estimated time: 35 minutes.

### Outcomes

- Predict which points are near before fitting.

- Explain and retain a testable result and its limits.

Clustering groups points according to representation, scale and algorithm settings. The labels are arbitrary and do not establish natural categories, personality types or fair treatment of people. Use synthetic item coordinates to inspect stability without profiling anyone.

Predict which points are near before fitting. Establish a baseline before changing prompts or code. Keep the original input immutable. Record expected values, observed values and whether each comparison passed. If the expected file conflicts with a justified policy, investigate rather than forcing a convenient match.

Policy for this project: Fit two KMeans clusters on six synthetic points with random_state=7 and n_init=10. Compare groups by member IDs, not arbitrary numeric label names.

### Worked example

```text

MANUAL BASELINE / compare every named field
{
  "groups": [
    [
      "a",
      "b",
      "c"
    ],
    [
      "d",
      "e",
      "f"
    ]
  ],
  "sizes": [
    3,
    3
  ]
}
Keep a separate observed-result column; the answer key is not a model response.

```

### Guided activity

1. Predict which points are near before fitting.

2. Open input.json and expected.json from the practice pack; keep an unmodified original.

3. Record expected and observed values separately; explain every mismatch.

4. Perform one small change and predict its effect before rerunning.

5. Keep the result and your reasoning in the lesson notes; do not mark a simulated run as live.

### Expected evidence

- Inspect distance and scaling — a saved, inspectable artefact tied to the supplied rule.

- A baseline or change-test record with expected/observed results and a limitation.

### Common mistakes

- Rescale one coordinate by 100: repeat the experiment and explain representation sensitivity.

- Treating a supplied answer key, an authored example or self-review as independent field validation.

### Check your understanding

Which exact input, rule and expected value would let another learner falsify your conclusion in this activity, and what remains untested?

### Offline route

Use the supplied fictional JSON, expected results and paper/text evidence log without a provider account. Manual or constructed completion is labelled; it is not a live cloud integration or trained-model run.

## Activity 3: Fit a reproducible clustering baseline

Estimated time: 35 minutes.

### Outcomes

- Keep parameters and compare membership instead of label IDs.

- Explain and retain a testable result and its limits.

Clustering groups points according to representation, scale and algorithm settings. The labels are arbitrary and do not establish natural categories, personality types or fair treatment of people. Use synthetic item coordinates to inspect stability without profiling anyone.

Keep parameters and compare membership instead of label IDs. Build one inspectable transformation or bounded AI prompt. Keep calculation and validation deterministic where possible. If you make a permitted hosted call, save the actual response separately from the authored examples and verify its material claims; the supplied reference never simulates a live model.

Policy for this project: Fit two KMeans clusters on six synthetic points with random_state=7 and n_init=10. Compare groups by member IDs, not arbitrary numeric label names.

### Worked example

```text

PROJECT CONTRACT:
Fit two KMeans clusters on six synthetic points with random_state=7 and n_init=10. Compare groups by member IDs, not arbitrary numeric label names.
HOSTED REFERENCE: open hosted-lab.ipynb or run reference.py with all fixture files together.
EXPECTED CONSTRUCTED RESULT:
{
  "groups": [
    [
      "a",
      "b",
      "c"
    ],
    [
      "d",
      "e",
      "f"
    ]
  ],
  "sizes": [
    3,
    3
  ]
}

```

### Guided activity

1. Keep parameters and compare membership instead of label IDs.

2. Open hosted-lab.ipynb and the reference code from the practice pack; keep an unmodified original.

3. Record expected and observed values separately; explain every mismatch.

4. Perform Do not label clusters as high-value people or employee risk.

5. Keep the result and your reasoning in the lesson notes; do not mark a simulated run as live.

### Expected evidence

- Fit a reproducible clustering baseline — a saved, inspectable artefact tied to the supplied rule.

- A baseline or change-test record with expected/observed results and a limitation.

### Common mistakes

- Do not label clusters as high-value people or employee risk.

- Treating a supplied answer key, an authored example or self-review as independent field validation.

### Check your understanding

Which exact input, rule and expected value would let another learner falsify your conclusion in this activity, and what remains untested?

### Offline route

Use the supplied fictional JSON, expected results and paper/text evidence log without a provider account. Manual or constructed completion is labelled; it is not a live cloud integration or trained-model run.

## Activity 4: Stress-test stability

Estimated time: 35 minutes.

### Outcomes

- Change scale, seed and k; retain disagreeing results.

- Explain and retain a testable result and its limits.

Clustering groups points according to representation, scale and algorithm settings. The labels are arbitrary and do not establish natural categories, personality types or fair treatment of people. Use synthetic item coordinates to inspect stability without profiling anyone.

Change scale, seed and k; retain disagreeing results. Change one assumption at a time and predict the result first. Retain the failure, the revision and the rerun evidence. A failure is useful information: hiding a bad output or editing a test target after seeing the answer destroys the value of the experiment.

Policy for this project: Fit two KMeans clusters on six synthetic points with random_state=7 and n_init=10. Compare groups by member IDs, not arbitrary numeric label names.

### Worked example

```text

CHANGE TESTS — predict before running:
1. Change k to 3: the partition changes without revealing a newly discovered truth.
2. Rescale one coordinate by 100: repeat the experiment and explain representation sensitivity.
3. Do not label clusters as high-value people or employee risk.
Keep the original expected.json unchanged.

```

### Guided activity

1. Change scale, seed and k; retain disagreeing results.

2. Open failure-tests.md from the practice pack; keep an unmodified original.

3. Record expected and observed values separately; explain every mismatch.

4. Perform Change k to 3: the partition changes without revealing a newly discovered truth.

5. Keep the result and your reasoning in the lesson notes; do not mark a simulated run as live.

### Expected evidence

- Stress-test stability — a saved, inspectable artefact tied to the supplied rule.

- A baseline or change-test record with expected/observed results and a limitation.

### Common mistakes

- Change k to 3: the partition changes without revealing a newly discovered truth.

- Treating a supplied answer key, an authored example or self-review as independent field validation.

### Check your understanding

Which exact input, rule and expected value would let another learner falsify your conclusion in this activity, and what remains untested?

### Offline route

Use the supplied fictional JSON, expected results and paper/text evidence log without a provider account. Manual or constructed completion is labelled; it is not a live cloud integration or trained-model run.

## Activity 5: Distinguish discovery from validation

Estimated time: 35 minutes.

### Outcomes

- A visually neat plot does not establish objective categories.

- Explain and retain a testable result and its limits.

Clustering groups points according to representation, scale and algorithm settings. The labels are arbitrary and do not establish natural categories, personality types or fair treatment of people. Use synthetic item coordinates to inspect stability without profiling anyone.

A visually neat plot does not establish objective categories. Review what the fixture cannot establish. Explain who owns the decision, where human approval is needed and which access or professional constraints remain. Do not describe a small educational success as production readiness, certification, legal compliance or a guarantee.

Policy for this project: Fit two KMeans clusters on six synthetic points with random_state=7 and n_init=10. Compare groups by member IDs, not arbitrary numeric label names.

For learners across regions underserved or excluded by mainstream providers: verify country eligibility, language, account/identity requirements, data terms, cost, quota and connectivity before choosing a cloud service. Use only legitimate available alternatives; never bypass restrictions or invent a country/account. No service access? Complete the labelled manual/fixture route without claiming a live AI run.

### Worked example

```text

REVIEW BOUNDARY:
Fit two KMeans clusters on six synthetic points with random_state=7 and n_init=10. Compare groups by member IDs, not arbitrary numeric label names.

ACCESS / NOT TESTED: unavailable provider, unsupported language and absent external feedback must remain explicit.

```

### Guided activity

1. A visually neat plot does not establish objective categories.

2. Open README.md and your evidence log from the practice pack; keep an unmodified original.

3. Record the human decision owner, limitations and any untested service access.

4. Perform one small change and predict its effect before rerunning.

5. Keep the result and your reasoning in the lesson notes; do not mark a simulated run as live.

### Expected evidence

- Distinguish discovery from validation — a saved, inspectable artefact tied to the supplied rule.

- A baseline or change-test record with expected/observed results and a limitation.

### Common mistakes

- Rescale one coordinate by 100: repeat the experiment and explain representation sensitivity.

- Treating a supplied answer key, an authored example or self-review as independent field validation.

### Check your understanding

Which exact input, rule and expected value would let another learner falsify your conclusion in this activity, and what remains untested?

### Offline route

Use the supplied fictional JSON, expected results and paper/text evidence log without a provider account. Manual or constructed completion is labelled; it is not a live cloud integration or trained-model run.

## Activity 6: Ship a clustering exploration note

Estimated time: 65 minutes.

### Outcomes

- Describe alternatives and prohibit consequential profiling.

- Explain and retain a testable result and its limits.

Clustering groups points according to representation, scale and algorithm settings. The labels are arbitrary and do not establish natural categories, personality types or fair treatment of people. Use synthetic item coordinates to inspect stability without profiling anyone.

Describe alternatives and prohibit consequential profiling. Deliver a reproducible bundle rather than a screenshot alone. Include inputs, rules, output, failure tests, a short README and residual limitations. Ask another person to follow the instructions if possible; self-review and actual external review must be labelled separately.

Policy for this project: Fit two KMeans clusters on six synthetic points with random_state=7 and n_init=10. Compare groups by member IDs, not arbitrary numeric label names.

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

1. Describe alternatives and prohibit consequential profiling.

2. Open README.md and your evidence log from the practice pack; keep an unmodified original.

3. Record the human decision owner, limitations and any untested service access.

4. Perform one small change and predict its effect before rerunning.

5. Keep the result and your reasoning in the lesson notes; do not mark a simulated run as live.

### Expected evidence

- Ship a clustering exploration note — a saved, inspectable artefact tied to the supplied rule.

- A baseline or change-test record with expected/observed results and a limitation.

### Common mistakes

- Do not label clusters as high-value people or employee risk.

- Treating a supplied answer key, an authored example or self-review as independent field validation.

### Check your understanding

Which exact input, rule and expected value would let another learner falsify your conclusion in this activity, and what remains untested?

### Offline route

Use the supplied fictional JSON, expected results and paper/text evidence log without a provider account. Manual or constructed completion is labelled; it is not a live cloud integration or trained-model run.

## End-of-path review

These are self-check questions, not verified examinations.

### Question 1

For the supplied fixture, what is the expected groups?

1. [["a", "b", "c"], ["d", "e", "f"]]

2. It cannot be checked against the supplied input.

3. Whatever value the model reports most confidently.

Review answer: 1. The independent answer key only validates this constructed fixture. Preserve the source, rerun counterexamples, and disclose what was not tested.

### Question 2

How should you handle the project rule: Fit two KMeans clusters on six synthetic points with random_state=7 and n_init=10. Compare groups by member IDs, not arbitrary numeric label names.

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

Fit two KMeans clusters on six synthetic points with random_state=7 and n_init=10. Compare groups by member IDs, not arbitrary numeric label names. Regional access route is legitimate; credentials and private data are absent; manual/constructed work is clearly labelled.

## References

- [Scikit-learn clustering guide](https://scikit-learn.org/stable/modules/clustering.html)

## Editorial boundary

Original authored practice material; deterministic fixtures build-tested. Not independently expert-reviewed or learner-validated. Time estimates unvalidated.

Use fictional/redacted data and your own authorised provider credentials. Never include credentials in this pack or public work.
