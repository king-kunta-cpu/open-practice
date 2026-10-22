# Audit a tool with evidence, not an ethics slogan

Open Practice / AI foundations / curriculum 1.0

Estimated guided practice: 4h estimated. This estimate has not been learner-tested.

Original practice material · CC BY 4.0 · Non-degree and non-accredited.

## What you will build

Deliver a reviewable risk record with inputs, tests and a reproducible handoff.

## Before you start

- Open entry; inspect the worked fixture before beginning.

- A text editor/spreadsheet for the manual route. Hosted Python/Jupyter for code exercises; applicable dependencies are in requirements.txt.

- For actual AI calls, a legitimate available cloud service and authorised learner credentials; no particular provider or country is mandatory.

## Learning outcomes

- Name who can be harmed and which inputs are sensitive.

- Include differing language and access conditions without inferring identities.

- Report denominators and avoid hiding disparities behind an average.

- A critical privacy failure blocks release even if other scores are high.

- Keep a reproducible result and disclose safety, rights and regional access limits.

## Activity 1: Map affected people and data

Estimated time: 35 minutes.

### Outcomes

- Name who can be harmed and which inputs are sensitive.

- Explain and retain a testable result and its limits.

Responsible use is visible in test cases, approval boundaries and residual risks. A model can perform differently across languages, bandwidth conditions or data categories. Small samples reveal questions; they cannot certify fairness or legal compliance.

Name who can be harmed and which inputs are sensitive. Inspect the supplied input before using any tool. Write the decision rules in your own words and calculate one small result independently. The reference output is an answer key for this deliberately bounded fixture, not proof of general capability.

Policy for this project: Report error rates by explicitly supplied scenario group, disclose sample sizes and block release for unresolved critical privacy failures. These groups are test scenarios, not inferred sensitive identities.

For learners across regions underserved or excluded by mainstream providers: verify country eligibility, language, account/identity requirements, data terms, cost, quota and connectivity before choosing a cloud service. Use only legitimate available alternatives; never bypass restrictions or invent a country/account. No service access? Complete the labelled manual/fixture route without claiming a live AI run.

Supporting practice — Institutions and affected communities: A tool can shift work onto people who have less connectivity, fewer language resources or no supported payment route. Draw a stakeholder map before deciding which benefits count. Include exclusion, consent, environmental/resource costs and recourse rather than assuming all users have the same access. Add a stakeholder impact memo with affected groups, uncertainties, mitigation and a complaint route.

### Worked example

```text

SOURCE (authored fixture):
{
  "cases": [
    {
      "group": "A",
      "correct": true
    },
    {
      "group": "A",
      "correct": true
    },
    {
      "group": "B",
      "correct": false
    },
    {
      "group": "B",
      "correct": true
    }
  ],
  "privacy_failure": true
}
INDEPENDENT FIXTURE TARGET:
{
  "group_accuracy": {
    "A": 1,
    "B": 0.5
  },
  "release": "hold"
}

```

### Guided activity

1. Name who can be harmed and which inputs are sensitive.

2. Open input.json and expected.json from the practice pack; keep an unmodified original.

3. Record a manual prediction and the relevant rule before consulting the answer key.

4. Perform one small change and predict its effect before rerunning.

5. Keep the result and your reasoning in the lesson notes; do not mark a simulated run as live.

6. Add a stakeholder impact memo with affected groups, uncertainties, mitigation and a complaint route.

### Expected evidence

- Map affected people and data — a saved, inspectable artefact tied to the supplied rule.

- A baseline or change-test record with expected/observed results and a limitation.

- Add a stakeholder impact memo with affected groups, uncertainties, mitigation and a complaint route.

### Common mistakes

- Remove the privacy failure: do not claim fairness from only two examples per group.

- Treating a supplied answer key, an authored example or self-review as independent field validation.

### Check your understanding

Which exact input, rule and expected value would let another learner falsify your conclusion in this activity, and what remains untested?

### Offline route

Use the supplied fictional JSON, expected results and paper/text evidence log without a provider account. Manual or constructed completion is labelled; it is not a live cloud integration or trained-model run.

## Activity 2: Design scenario-based checks

Estimated time: 35 minutes.

### Outcomes

- Include differing language and access conditions without inferring identities.

- Explain and retain a testable result and its limits.

Responsible use is visible in test cases, approval boundaries and residual risks. A model can perform differently across languages, bandwidth conditions or data categories. Small samples reveal questions; they cannot certify fairness or legal compliance.

Include differing language and access conditions without inferring identities. Establish a baseline before changing prompts or code. Keep the original input immutable. Record expected values, observed values and whether each comparison passed. If the expected file conflicts with a justified policy, investigate rather than forcing a convenient match.

Policy for this project: Report error rates by explicitly supplied scenario group, disclose sample sizes and block release for unresolved critical privacy failures. These groups are test scenarios, not inferred sensitive identities.

### Worked example

```text

MANUAL BASELINE / compare every named field
{
  "group_accuracy": {
    "A": 1,
    "B": 0.5
  },
  "release": "hold"
}
Keep a separate observed-result column; the answer key is not a model response.

```

### Guided activity

1. Include differing language and access conditions without inferring identities.

2. Open input.json and expected.json from the practice pack; keep an unmodified original.

3. Record expected and observed values separately; explain every mismatch.

4. Perform one small change and predict its effect before rerunning.

5. Keep the result and your reasoning in the lesson notes; do not mark a simulated run as live.

### Expected evidence

- Design scenario-based checks — a saved, inspectable artefact tied to the supplied rule.

- A baseline or change-test record with expected/observed results and a limitation.

### Common mistakes

- A missing group must be reported as untested, not assigned perfect accuracy.

- Treating a supplied answer key, an authored example or self-review as independent field validation.

### Check your understanding

Which exact input, rule and expected value would let another learner falsify your conclusion in this activity, and what remains untested?

### Offline route

Use the supplied fictional JSON, expected results and paper/text evidence log without a provider account. Manual or constructed completion is labelled; it is not a live cloud integration or trained-model run.

## Activity 3: Measure failures transparently

Estimated time: 35 minutes.

### Outcomes

- Report denominators and avoid hiding disparities behind an average.

- Explain and retain a testable result and its limits.

Responsible use is visible in test cases, approval boundaries and residual risks. A model can perform differently across languages, bandwidth conditions or data categories. Small samples reveal questions; they cannot certify fairness or legal compliance.

Report denominators and avoid hiding disparities behind an average. Build one inspectable transformation or bounded AI prompt. Keep calculation and validation deterministic where possible. If you make a permitted hosted call, save the actual response separately from the authored examples and verify its material claims; the supplied reference never simulates a live model.

Policy for this project: Report error rates by explicitly supplied scenario group, disclose sample sizes and block release for unresolved critical privacy failures. These groups are test scenarios, not inferred sensitive identities.

### Worked example

```text

PROJECT CONTRACT:
Report error rates by explicitly supplied scenario group, disclose sample sizes and block release for unresolved critical privacy failures. These groups are test scenarios, not inferred sensitive identities.
HOSTED REFERENCE: open hosted-lab.ipynb or run reference.py with all fixture files together.
EXPECTED CONSTRUCTED RESULT:
{
  "group_accuracy": {
    "A": 1,
    "B": 0.5
  },
  "release": "hold"
}

```

### Guided activity

1. Report denominators and avoid hiding disparities behind an average.

2. Open hosted-lab.ipynb and the reference code from the practice pack; keep an unmodified original.

3. Record expected and observed values separately; explain every mismatch.

4. Perform A provider says safe: keep independent tests and a named human owner.

5. Keep the result and your reasoning in the lesson notes; do not mark a simulated run as live.

### Expected evidence

- Measure failures transparently — a saved, inspectable artefact tied to the supplied rule.

- A baseline or change-test record with expected/observed results and a limitation.

### Common mistakes

- A provider says safe: keep independent tests and a named human owner.

- Treating a supplied answer key, an authored example or self-review as independent field validation.

### Check your understanding

Which exact input, rule and expected value would let another learner falsify your conclusion in this activity, and what remains untested?

### Offline route

Use the supplied fictional JSON, expected results and paper/text evidence log without a provider account. Manual or constructed completion is labelled; it is not a live cloud integration or trained-model run.

## Activity 4: Apply an approval gate

Estimated time: 35 minutes.

### Outcomes

- A critical privacy failure blocks release even if other scores are high.

- Explain and retain a testable result and its limits.

Responsible use is visible in test cases, approval boundaries and residual risks. A model can perform differently across languages, bandwidth conditions or data categories. Small samples reveal questions; they cannot certify fairness or legal compliance.

A critical privacy failure blocks release even if other scores are high. Change one assumption at a time and predict the result first. Retain the failure, the revision and the rerun evidence. A failure is useful information: hiding a bad output or editing a test target after seeing the answer destroys the value of the experiment.

Policy for this project: Report error rates by explicitly supplied scenario group, disclose sample sizes and block release for unresolved critical privacy failures. These groups are test scenarios, not inferred sensitive identities.

### Worked example

```text

CHANGE TESTS — predict before running:
1. Remove the privacy failure: do not claim fairness from only two examples per group.
2. A missing group must be reported as untested, not assigned perfect accuracy.
3. A provider says safe: keep independent tests and a named human owner.
Keep the original expected.json unchanged.

```

### Guided activity

1. A critical privacy failure blocks release even if other scores are high.

2. Open failure-tests.md from the practice pack; keep an unmodified original.

3. Record expected and observed values separately; explain every mismatch.

4. Perform Remove the privacy failure: do not claim fairness from only two examples per group.

5. Keep the result and your reasoning in the lesson notes; do not mark a simulated run as live.

### Expected evidence

- Apply an approval gate — a saved, inspectable artefact tied to the supplied rule.

- A baseline or change-test record with expected/observed results and a limitation.

### Common mistakes

- Remove the privacy failure: do not claim fairness from only two examples per group.

- Treating a supplied answer key, an authored example or self-review as independent field validation.

### Check your understanding

Which exact input, rule and expected value would let another learner falsify your conclusion in this activity, and what remains untested?

### Offline route

Use the supplied fictional JSON, expected results and paper/text evidence log without a provider account. Manual or constructed completion is labelled; it is not a live cloud integration or trained-model run.

## Activity 5: Write residual risks and accountability

Estimated time: 35 minutes.

### Outcomes

- Keep responsibility with people; a model output is not a compliance opinion.

- Explain and retain a testable result and its limits.

Responsible use is visible in test cases, approval boundaries and residual risks. A model can perform differently across languages, bandwidth conditions or data categories. Small samples reveal questions; they cannot certify fairness or legal compliance.

Keep responsibility with people; a model output is not a compliance opinion. Review what the fixture cannot establish. Explain who owns the decision, where human approval is needed and which access or professional constraints remain. Do not describe a small educational success as production readiness, certification, legal compliance or a guarantee.

Policy for this project: Report error rates by explicitly supplied scenario group, disclose sample sizes and block release for unresolved critical privacy failures. These groups are test scenarios, not inferred sensitive identities.

For learners across regions underserved or excluded by mainstream providers: verify country eligibility, language, account/identity requirements, data terms, cost, quota and connectivity before choosing a cloud service. Use only legitimate available alternatives; never bypass restrictions or invent a country/account. No service access? Complete the labelled manual/fixture route without claiming a live AI run.

### Worked example

```text

REVIEW BOUNDARY:
Report error rates by explicitly supplied scenario group, disclose sample sizes and block release for unresolved critical privacy failures. These groups are test scenarios, not inferred sensitive identities.

ACCESS / NOT TESTED: unavailable provider, unsupported language and absent external feedback must remain explicit.

```

### Guided activity

1. Keep responsibility with people; a model output is not a compliance opinion.

2. Open README.md and your evidence log from the practice pack; keep an unmodified original.

3. Record the human decision owner, limitations and any untested service access.

4. Perform one small change and predict its effect before rerunning.

5. Keep the result and your reasoning in the lesson notes; do not mark a simulated run as live.

### Expected evidence

- Write residual risks and accountability — a saved, inspectable artefact tied to the supplied rule.

- A baseline or change-test record with expected/observed results and a limitation.

### Common mistakes

- A missing group must be reported as untested, not assigned perfect accuracy.

- Treating a supplied answer key, an authored example or self-review as independent field validation.

### Check your understanding

Which exact input, rule and expected value would let another learner falsify your conclusion in this activity, and what remains untested?

### Offline route

Use the supplied fictional JSON, expected results and paper/text evidence log without a provider account. Manual or constructed completion is labelled; it is not a live cloud integration or trained-model run.

## Activity 6: Deliver a reviewable risk record

Estimated time: 65 minutes.

### Outcomes

- Include mitigations, owners, unresolved limits and review date.

- Explain and retain a testable result and its limits.

Responsible use is visible in test cases, approval boundaries and residual risks. A model can perform differently across languages, bandwidth conditions or data categories. Small samples reveal questions; they cannot certify fairness or legal compliance.

Include mitigations, owners, unresolved limits and review date. Deliver a reproducible bundle rather than a screenshot alone. Include inputs, rules, output, failure tests, a short README and residual limitations. Ask another person to follow the instructions if possible; self-review and actual external review must be labelled separately.

Policy for this project: Report error rates by explicitly supplied scenario group, disclose sample sizes and block release for unresolved critical privacy failures. These groups are test scenarios, not inferred sensitive identities.

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

1. Include mitigations, owners, unresolved limits and review date.

2. Open README.md and your evidence log from the practice pack; keep an unmodified original.

3. Record the human decision owner, limitations and any untested service access.

4. Perform one small change and predict its effect before rerunning.

5. Keep the result and your reasoning in the lesson notes; do not mark a simulated run as live.

### Expected evidence

- Deliver a reviewable risk record — a saved, inspectable artefact tied to the supplied rule.

- A baseline or change-test record with expected/observed results and a limitation.

### Common mistakes

- A provider says safe: keep independent tests and a named human owner.

- Treating a supplied answer key, an authored example or self-review as independent field validation.

### Check your understanding

Which exact input, rule and expected value would let another learner falsify your conclusion in this activity, and what remains untested?

### Offline route

Use the supplied fictional JSON, expected results and paper/text evidence log without a provider account. Manual or constructed completion is labelled; it is not a live cloud integration or trained-model run.

## End-of-path review

These are self-check questions, not verified examinations.

### Question 1

For the supplied fixture, what is the expected group_accuracy?

1. {"A": 1, "B": 0.5}

2. It cannot be checked against the supplied input.

3. Whatever value the model reports most confidently.

Review answer: 1. The independent answer key only validates this constructed fixture. Preserve the source, rerun counterexamples, and disclose what was not tested.

### Question 2

How should you handle the project rule: Report error rates by explicitly supplied scenario group, disclose sample sizes and block release for unresolved critical privacy failures. These groups are test scenarios, not inferred sensitive identities.

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

Report error rates by explicitly supplied scenario group, disclose sample sizes and block release for unresolved critical privacy failures. These groups are test scenarios, not inferred sensitive identities. Regional access route is legitimate; credentials and private data are absent; manual/constructed work is clearly labelled.

## References

- [NIST AI risk management framework](https://www.nist.gov/itl/ai-risk-management-framework)

## Editorial boundary

Original authored practice material; deterministic fixtures build-tested. Not independently expert-reviewed or learner-validated. Time estimates unvalidated.

Use fictional/redacted data and your own authorised provider credentials. Never include credentials in this pack or public work.
