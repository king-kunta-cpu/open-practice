# Make charts that tell the checked truth

Open Practice / Data & evidence / curriculum 1.0

Estimated guided practice: 4h estimated. This estimate has not been learner-tested.

Original practice material · CC BY 4.0 · Non-degree and non-accredited.

## What you will build

Deliver a chart and decision brief with inputs, tests and a reproducible handoff.

## Before you start

- Python onramp; inspect the worked fixture before beginning.

- A text editor/spreadsheet for the manual route. Hosted Python/Jupyter for code exercises; applicable dependencies are in requirements.txt.

- For actual AI calls, a legitimate available cloud service and authorised learner credentials; no particular provider or country is mandatory.

## Learning outcomes

- Match the encoding to comparison, distribution or change.

- Identify what a truncated baseline exaggerates.

- Use clear units, labels and a checked table alongside the image.

- Try swapped labels, omitted rows and changed scales.

- Keep a reproducible result and disclose safety, rights and regional access limits.

## Activity 1: Choose a question and chart type

Estimated time: 35 minutes.

### Outcomes

- Match the encoding to comparison, distribution or change.

- Explain and retain a testable result and its limits.

A chart is an argument about data. Bar lengths need a meaningful baseline, units and readable labels. Accessibility also needs a text alternative, not simply a contrast check. Inspect a deliberately truncated-axis specification before rendering a corrected chart.

Match the encoding to comparison, distribution or change. Inspect the supplied input before using any tool. Write the decision rules in your own words and calculate one small result independently. The reference output is an answer key for this deliberately bounded fixture, not proof of general capability.

Policy for this project: Values are fictional counts. A bar chart must start at zero for this exercise and include units and a text alternative. Metadata checks cannot prove the rendered chart is visually honest.

For learners across regions underserved or excluded by mainstream providers: verify country eligibility, language, account/identity requirements, data terms, cost, quota and connectivity before choosing a cloud service. Use only legitimate available alternatives; never bypass restrictions or invent a country/account. No service access? Complete the labelled manual/fixture route without claiming a live AI run.

### Worked example

```text

SOURCE (authored fixture):
{
  "values": {
    "A": 8,
    "B": 10
  },
  "chart": {
    "axis_min": 7,
    "units": "items",
    "alt": ""
  }
}
INDEPENDENT FIXTURE TARGET:
{
  "total": 18,
  "failed_checks": [
    "axis_baseline",
    "text_alternative"
  ],
  "release": "revise"
}

```

### Guided activity

1. Match the encoding to comparison, distribution or change.

2. Open input.json and expected.json from the practice pack; keep an unmodified original.

3. Record a manual prediction and the relevant rule before consulting the answer key.

4. Perform one small change and predict its effect before rerunning.

5. Keep the result and your reasoning in the lesson notes; do not mark a simulated run as live.

### Expected evidence

- Choose a question and chart type — a saved, inspectable artefact tied to the supplied rule.

- A baseline or change-test record with expected/observed results and a limitation.

### Common mistakes

- Set baseline to 0 and add a descriptive text alternative: specification checks pass.

- Treating a supplied answer key, an authored example or self-review as independent field validation.

### Check your understanding

Which exact input, rule and expected value would let another learner falsify your conclusion in this activity, and what remains untested?

### Offline route

Use the supplied fictional JSON, expected results and paper/text evidence log without a provider account. Manual or constructed completion is labelled; it is not a live cloud integration or trained-model run.

## Activity 2: Audit the supplied misleading spec

Estimated time: 35 minutes.

### Outcomes

- Identify what a truncated baseline exaggerates.

- Explain and retain a testable result and its limits.

A chart is an argument about data. Bar lengths need a meaningful baseline, units and readable labels. Accessibility also needs a text alternative, not simply a contrast check. Inspect a deliberately truncated-axis specification before rendering a corrected chart.

Identify what a truncated baseline exaggerates. Establish a baseline before changing prompts or code. Keep the original input immutable. Record expected values, observed values and whether each comparison passed. If the expected file conflicts with a justified policy, investigate rather than forcing a convenient match.

Policy for this project: Values are fictional counts. A bar chart must start at zero for this exercise and include units and a text alternative. Metadata checks cannot prove the rendered chart is visually honest.

### Worked example

```text

MANUAL BASELINE / compare every named field
{
  "total": 18,
  "failed_checks": [
    "axis_baseline",
    "text_alternative"
  ],
  "release": "revise"
}
Keep a separate observed-result column; the answer key is not a model response.

```

### Guided activity

1. Identify what a truncated baseline exaggerates.

2. Open input.json and expected.json from the practice pack; keep an unmodified original.

3. Record expected and observed values separately; explain every mismatch.

4. Perform one small change and predict its effect before rerunning.

5. Keep the result and your reasoning in the lesson notes; do not mark a simulated run as live.

### Expected evidence

- Audit the supplied misleading spec — a saved, inspectable artefact tied to the supplied rule.

- A baseline or change-test record with expected/observed results and a limitation.

### Common mistakes

- Swap category labels: values may total correctly while the chart is still wrong.

- Treating a supplied answer key, an authored example or self-review as independent field validation.

### Check your understanding

Which exact input, rule and expected value would let another learner falsify your conclusion in this activity, and what remains untested?

### Offline route

Use the supplied fictional JSON, expected results and paper/text evidence log without a provider account. Manual or constructed completion is labelled; it is not a live cloud integration or trained-model run.

## Activity 3: Render an accessible chart

Estimated time: 35 minutes.

### Outcomes

- Use clear units, labels and a checked table alongside the image.

- Explain and retain a testable result and its limits.

A chart is an argument about data. Bar lengths need a meaningful baseline, units and readable labels. Accessibility also needs a text alternative, not simply a contrast check. Inspect a deliberately truncated-axis specification before rendering a corrected chart.

Use clear units, labels and a checked table alongside the image. Build one inspectable transformation or bounded AI prompt. Keep calculation and validation deterministic where possible. If you make a permitted hosted call, save the actual response separately from the authored examples and verify its material claims; the supplied reference never simulates a live model.

Policy for this project: Values are fictional counts. A bar chart must start at zero for this exercise and include units and a text alternative. Metadata checks cannot prove the rendered chart is visually honest.

### Worked example

```text

PROJECT CONTRACT:
Values are fictional counts. A bar chart must start at zero for this exercise and include units and a text alternative. Metadata checks cannot prove the rendered chart is visually honest.
HOSTED REFERENCE: open hosted-lab.ipynb or run reference.py with all fixture files together.
EXPECTED CONSTRUCTED RESULT:
{
  "total": 18,
  "failed_checks": [
    "axis_baseline",
    "text_alternative"
  ],
  "release": "revise"
}

```

### Guided activity

1. Use clear units, labels and a checked table alongside the image.

2. Open hosted-lab.ipynb and the reference code from the practice pack; keep an unmodified original.

3. Record expected and observed values separately; explain every mismatch.

4. Perform Colour alone must not distinguish categories.

5. Keep the result and your reasoning in the lesson notes; do not mark a simulated run as live.

### Expected evidence

- Render an accessible chart — a saved, inspectable artefact tied to the supplied rule.

- A baseline or change-test record with expected/observed results and a limitation.

### Common mistakes

- Colour alone must not distinguish categories.

- Treating a supplied answer key, an authored example or self-review as independent field validation.

### Check your understanding

Which exact input, rule and expected value would let another learner falsify your conclusion in this activity, and what remains untested?

### Offline route

Use the supplied fictional JSON, expected results and paper/text evidence log without a provider account. Manual or constructed completion is labelled; it is not a live cloud integration or trained-model run.

## Activity 4: Test misleading transformations

Estimated time: 35 minutes.

### Outcomes

- Try swapped labels, omitted rows and changed scales.

- Explain and retain a testable result and its limits.

A chart is an argument about data. Bar lengths need a meaningful baseline, units and readable labels. Accessibility also needs a text alternative, not simply a contrast check. Inspect a deliberately truncated-axis specification before rendering a corrected chart.

Try swapped labels, omitted rows and changed scales. Change one assumption at a time and predict the result first. Retain the failure, the revision and the rerun evidence. A failure is useful information: hiding a bad output or editing a test target after seeing the answer destroys the value of the experiment.

Policy for this project: Values are fictional counts. A bar chart must start at zero for this exercise and include units and a text alternative. Metadata checks cannot prove the rendered chart is visually honest.

### Worked example

```text

CHANGE TESTS — predict before running:
1. Set baseline to 0 and add a descriptive text alternative: specification checks pass.
2. Swap category labels: values may total correctly while the chart is still wrong.
3. Colour alone must not distinguish categories.
Keep the original expected.json unchanged.

```

### Guided activity

1. Try swapped labels, omitted rows and changed scales.

2. Open failure-tests.md from the practice pack; keep an unmodified original.

3. Record expected and observed values separately; explain every mismatch.

4. Perform Set baseline to 0 and add a descriptive text alternative: specification checks pass.

5. Keep the result and your reasoning in the lesson notes; do not mark a simulated run as live.

### Expected evidence

- Test misleading transformations — a saved, inspectable artefact tied to the supplied rule.

- A baseline or change-test record with expected/observed results and a limitation.

### Common mistakes

- Set baseline to 0 and add a descriptive text alternative: specification checks pass.

- Treating a supplied answer key, an authored example or self-review as independent field validation.

### Check your understanding

Which exact input, rule and expected value would let another learner falsify your conclusion in this activity, and what remains untested?

### Offline route

Use the supplied fictional JSON, expected results and paper/text evidence log without a provider account. Manual or constructed completion is labelled; it is not a live cloud integration or trained-model run.

## Activity 5: Write a factual text alternative

Estimated time: 35 minutes.

### Outcomes

- Describe the observed values without inventing an explanation.

- Explain and retain a testable result and its limits.

A chart is an argument about data. Bar lengths need a meaningful baseline, units and readable labels. Accessibility also needs a text alternative, not simply a contrast check. Inspect a deliberately truncated-axis specification before rendering a corrected chart.

Describe the observed values without inventing an explanation. Review what the fixture cannot establish. Explain who owns the decision, where human approval is needed and which access or professional constraints remain. Do not describe a small educational success as production readiness, certification, legal compliance or a guarantee.

Policy for this project: Values are fictional counts. A bar chart must start at zero for this exercise and include units and a text alternative. Metadata checks cannot prove the rendered chart is visually honest.

For learners across regions underserved or excluded by mainstream providers: verify country eligibility, language, account/identity requirements, data terms, cost, quota and connectivity before choosing a cloud service. Use only legitimate available alternatives; never bypass restrictions or invent a country/account. No service access? Complete the labelled manual/fixture route without claiming a live AI run.

### Worked example

```text

REVIEW BOUNDARY:
Values are fictional counts. A bar chart must start at zero for this exercise and include units and a text alternative. Metadata checks cannot prove the rendered chart is visually honest.

ACCESS / NOT TESTED: unavailable provider, unsupported language and absent external feedback must remain explicit.

```

### Guided activity

1. Describe the observed values without inventing an explanation.

2. Open README.md and your evidence log from the practice pack; keep an unmodified original.

3. Record the human decision owner, limitations and any untested service access.

4. Perform one small change and predict its effect before rerunning.

5. Keep the result and your reasoning in the lesson notes; do not mark a simulated run as live.

### Expected evidence

- Write a factual text alternative — a saved, inspectable artefact tied to the supplied rule.

- A baseline or change-test record with expected/observed results and a limitation.

### Common mistakes

- Swap category labels: values may total correctly while the chart is still wrong.

- Treating a supplied answer key, an authored example or self-review as independent field validation.

### Check your understanding

Which exact input, rule and expected value would let another learner falsify your conclusion in this activity, and what remains untested?

### Offline route

Use the supplied fictional JSON, expected results and paper/text evidence log without a provider account. Manual or constructed completion is labelled; it is not a live cloud integration or trained-model run.

## Activity 6: Deliver a chart and decision brief

Estimated time: 65 minutes.

### Outcomes

- Include source, code, accessible description and limitations.

- Explain and retain a testable result and its limits.

A chart is an argument about data. Bar lengths need a meaningful baseline, units and readable labels. Accessibility also needs a text alternative, not simply a contrast check. Inspect a deliberately truncated-axis specification before rendering a corrected chart.

Include source, code, accessible description and limitations. Deliver a reproducible bundle rather than a screenshot alone. Include inputs, rules, output, failure tests, a short README and residual limitations. Ask another person to follow the instructions if possible; self-review and actual external review must be labelled separately.

Policy for this project: Values are fictional counts. A bar chart must start at zero for this exercise and include units and a text alternative. Metadata checks cannot prove the rendered chart is visually honest.

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

1. Include source, code, accessible description and limitations.

2. Open README.md and your evidence log from the practice pack; keep an unmodified original.

3. Record the human decision owner, limitations and any untested service access.

4. Perform one small change and predict its effect before rerunning.

5. Keep the result and your reasoning in the lesson notes; do not mark a simulated run as live.

### Expected evidence

- Deliver a chart and decision brief — a saved, inspectable artefact tied to the supplied rule.

- A baseline or change-test record with expected/observed results and a limitation.

### Common mistakes

- Colour alone must not distinguish categories.

- Treating a supplied answer key, an authored example or self-review as independent field validation.

### Check your understanding

Which exact input, rule and expected value would let another learner falsify your conclusion in this activity, and what remains untested?

### Offline route

Use the supplied fictional JSON, expected results and paper/text evidence log without a provider account. Manual or constructed completion is labelled; it is not a live cloud integration or trained-model run.

## End-of-path review

These are self-check questions, not verified examinations.

### Question 1

For the supplied fixture, what is the expected total?

1. 18

2. It cannot be checked against the supplied input.

3. Whatever value the model reports most confidently.

Review answer: 1. The independent answer key only validates this constructed fixture. Preserve the source, rerun counterexamples, and disclose what was not tested.

### Question 2

How should you handle the project rule: Values are fictional counts. A bar chart must start at zero for this exercise and include units and a text alternative. Metadata checks cannot prove the rendered chart is visually honest.

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

Values are fictional counts. A bar chart must start at zero for this exercise and include units and a text alternative. Metadata checks cannot prove the rendered chart is visually honest. Regional access route is legitimate; credentials and private data are absent; manual/constructed work is clearly labelled.

## References

- [Matplotlib accessibility guidance](https://matplotlib.org/stable/users/explain/colors/index.html)

## Editorial boundary

Original authored practice material; deterministic fixtures build-tested. Not independently expert-reviewed or learner-validated. Time estimates unvalidated.

Use fictional/redacted data and your own authorised provider credentials. Never include credentials in this pack or public work.
