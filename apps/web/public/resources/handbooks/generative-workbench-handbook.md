# Compare generations without moving the goalposts

Open Practice / Creative production / curriculum 1.0

Estimated guided practice: 4h estimated. This estimate has not been learner-tested.

Original practice material · CC BY 4.0 · Non-degree and non-accredited.

## What you will build

Publish a comparison with limits with inputs, tests and a reproducible handoff.

## Before you start

- Open entry; inspect the worked fixture before beginning.

- A text editor/spreadsheet for the manual route. Hosted Python/Jupyter for code exercises; applicable dependencies are in requirements.txt.

- For actual AI calls, a legitimate available cloud service and authorised learner credentials; no particular provider or country is mandatory.

## Learning outcomes

- Choose the factual boundary and scoring rule before comparing prompts.

- The attractive but invented offer loses on grounding.

- Change one prompt variable; save original responses if a service is available.

- Try missing facts, contradictory instructions and an invented discount.

- Keep a reproducible result and disclose safety, rights and regional access limits.

## Activity 1: Freeze the source and rubric

Estimated time: 35 minutes.

### Outcomes

- Choose the factual boundary and scoring rule before comparing prompts.

- Explain and retain a testable result and its limits.

Generation is a candidate-making step, not verification. Fix a brief and factual source before changing prompts. A more vivid sentence can score worse if it adds an unsupported price or guarantee. The supplied candidates are authored examples, not claimed model runs.

Choose the factual boundary and scoring rule before comparing prompts. Inspect the supplied input before using any tool. Write the decision rules in your own words and calculate one small result independently. The reference output is an answer key for this deliberately bounded fixture, not proof of general capability.

Policy for this project: Score factual grounding, required structure and prohibited claims independently. Real provider results must be labelled with date and model; no-service examples stay labelled constructed.

For learners across regions underserved or excluded by mainstream providers: verify country eligibility, language, account/identity requirements, data terms, cost, quota and connectivity before choosing a cloud service. Use only legitimate available alternatives; never bypass restrictions or invent a country/account. No service access? Complete the labelled manual/fixture route without claiming a live AI run.

### Worked example

```text

SOURCE (authored fixture):
{
  "required": [
    "two sentences",
    "no invented discount"
  ],
  "candidates": [
    {
      "id": "A",
      "facts": true,
      "format": true,
      "invented_discount": false
    },
    {
      "id": "B",
      "facts": false,
      "format": true,
      "invented_discount": true
    }
  ]
}
INDEPENDENT FIXTURE TARGET:
{
  "scores": {
    "A": 3,
    "B": 1
  },
  "selected": "A"
}

```

### Guided activity

1. Choose the factual boundary and scoring rule before comparing prompts.

2. Open input.json and expected.json from the practice pack; keep an unmodified original.

3. Record a manual prediction and the relevant rule before consulting the answer key.

4. Perform one small change and predict its effect before rerunning.

5. Keep the result and your reasoning in the lesson notes; do not mark a simulated run as live.

### Expected evidence

- Freeze the source and rubric — a saved, inspectable artefact tied to the supplied rule.

- A baseline or change-test record with expected/observed results and a limitation.

### Common mistakes

- Give B a convincing style: its factual failure still remains.

- Treating a supplied answer key, an authored example or self-review as independent field validation.

### Check your understanding

Which exact input, rule and expected value would let another learner falsify your conclusion in this activity, and what remains untested?

### Offline route

Use the supplied fictional JSON, expected results and paper/text evidence log without a provider account. Manual or constructed completion is labelled; it is not a live cloud integration or trained-model run.

## Activity 2: Score two constructed candidates

Estimated time: 35 minutes.

### Outcomes

- The attractive but invented offer loses on grounding.

- Explain and retain a testable result and its limits.

Generation is a candidate-making step, not verification. Fix a brief and factual source before changing prompts. A more vivid sentence can score worse if it adds an unsupported price or guarantee. The supplied candidates are authored examples, not claimed model runs.

The attractive but invented offer loses on grounding. Establish a baseline before changing prompts or code. Keep the original input immutable. Record expected values, observed values and whether each comparison passed. If the expected file conflicts with a justified policy, investigate rather than forcing a convenient match.

Policy for this project: Score factual grounding, required structure and prohibited claims independently. Real provider results must be labelled with date and model; no-service examples stay labelled constructed.

### Worked example

```text

MANUAL BASELINE / compare every named field
{
  "scores": {
    "A": 3,
    "B": 1
  },
  "selected": "A"
}
Keep a separate observed-result column; the answer key is not a model response.

```

### Guided activity

1. The attractive but invented offer loses on grounding.

2. Open input.json and expected.json from the practice pack; keep an unmodified original.

3. Record expected and observed values separately; explain every mismatch.

4. Perform one small change and predict its effect before rerunning.

5. Keep the result and your reasoning in the lesson notes; do not mark a simulated run as live.

### Expected evidence

- Score two constructed candidates — a saved, inspectable artefact tied to the supplied rule.

- A baseline or change-test record with expected/observed results and a limitation.

### Common mistakes

- Remove the source price: do not fill it from general knowledge.

- Treating a supplied answer key, an authored example or self-review as independent field validation.

### Check your understanding

Which exact input, rule and expected value would let another learner falsify your conclusion in this activity, and what remains untested?

### Offline route

Use the supplied fictional JSON, expected results and paper/text evidence log without a provider account. Manual or constructed completion is labelled; it is not a live cloud integration or trained-model run.

## Activity 3: Run a controlled generation

Estimated time: 35 minutes.

### Outcomes

- Change one prompt variable; save original responses if a service is available.

- Explain and retain a testable result and its limits.

Generation is a candidate-making step, not verification. Fix a brief and factual source before changing prompts. A more vivid sentence can score worse if it adds an unsupported price or guarantee. The supplied candidates are authored examples, not claimed model runs.

Change one prompt variable; save original responses if a service is available. Build one inspectable transformation or bounded AI prompt. Keep calculation and validation deterministic where possible. If you make a permitted hosted call, save the actual response separately from the authored examples and verify its material claims; the supplied reference never simulates a live model.

Policy for this project: Score factual grounding, required structure and prohibited claims independently. Real provider results must be labelled with date and model; no-service examples stay labelled constructed.

### Worked example

```text

PROJECT CONTRACT:
Score factual grounding, required structure and prohibited claims independently. Real provider results must be labelled with date and model; no-service examples stay labelled constructed.
HOSTED REFERENCE: open hosted-lab.ipynb or run reference.py with all fixture files together.
EXPECTED CONSTRUCTED RESULT:
{
  "scores": {
    "A": 3,
    "B": 1
  },
  "selected": "A"
}

```

### Guided activity

1. Change one prompt variable; save original responses if a service is available.

2. Open hosted-lab.ipynb and the reference code from the practice pack; keep an unmodified original.

3. Record expected and observed values separately; explain every mismatch.

4. Perform Repeat a live prompt if access permits; keep every result rather than only the favourite.

5. Keep the result and your reasoning in the lesson notes; do not mark a simulated run as live.

### Expected evidence

- Run a controlled generation — a saved, inspectable artefact tied to the supplied rule.

- A baseline or change-test record with expected/observed results and a limitation.

### Common mistakes

- Repeat a live prompt if access permits; keep every result rather than only the favourite.

- Treating a supplied answer key, an authored example or self-review as independent field validation.

### Check your understanding

Which exact input, rule and expected value would let another learner falsify your conclusion in this activity, and what remains untested?

### Offline route

Use the supplied fictional JSON, expected results and paper/text evidence log without a provider account. Manual or constructed completion is labelled; it is not a live cloud integration or trained-model run.

## Activity 4: Test unsupported additions

Estimated time: 35 minutes.

### Outcomes

- Try missing facts, contradictory instructions and an invented discount.

- Explain and retain a testable result and its limits.

Generation is a candidate-making step, not verification. Fix a brief and factual source before changing prompts. A more vivid sentence can score worse if it adds an unsupported price or guarantee. The supplied candidates are authored examples, not claimed model runs.

Try missing facts, contradictory instructions and an invented discount. Change one assumption at a time and predict the result first. Retain the failure, the revision and the rerun evidence. A failure is useful information: hiding a bad output or editing a test target after seeing the answer destroys the value of the experiment.

Policy for this project: Score factual grounding, required structure and prohibited claims independently. Real provider results must be labelled with date and model; no-service examples stay labelled constructed.

### Worked example

```text

CHANGE TESTS — predict before running:
1. Give B a convincing style: its factual failure still remains.
2. Remove the source price: do not fill it from general knowledge.
3. Repeat a live prompt if access permits; keep every result rather than only the favourite.
Keep the original expected.json unchanged.

```

### Guided activity

1. Try missing facts, contradictory instructions and an invented discount.

2. Open failure-tests.md from the practice pack; keep an unmodified original.

3. Record expected and observed values separately; explain every mismatch.

4. Perform Give B a convincing style: its factual failure still remains.

5. Keep the result and your reasoning in the lesson notes; do not mark a simulated run as live.

### Expected evidence

- Test unsupported additions — a saved, inspectable artefact tied to the supplied rule.

- A baseline or change-test record with expected/observed results and a limitation.

### Common mistakes

- Give B a convincing style: its factual failure still remains.

- Treating a supplied answer key, an authored example or self-review as independent field validation.

### Check your understanding

Which exact input, rule and expected value would let another learner falsify your conclusion in this activity, and what remains untested?

### Offline route

Use the supplied fictional JSON, expected results and paper/text evidence log without a provider account. Manual or constructed completion is labelled; it is not a live cloud integration or trained-model run.

## Activity 5: Separate mechanism from capability

Estimated time: 35 minutes.

### Outcomes

- Using a generation API is not training a GAN or proving general intelligence.

- Explain and retain a testable result and its limits.

Generation is a candidate-making step, not verification. Fix a brief and factual source before changing prompts. A more vivid sentence can score worse if it adds an unsupported price or guarantee. The supplied candidates are authored examples, not claimed model runs.

Using a generation API is not training a GAN or proving general intelligence. Review what the fixture cannot establish. Explain who owns the decision, where human approval is needed and which access or professional constraints remain. Do not describe a small educational success as production readiness, certification, legal compliance or a guarantee.

Policy for this project: Score factual grounding, required structure and prohibited claims independently. Real provider results must be labelled with date and model; no-service examples stay labelled constructed.

For learners across regions underserved or excluded by mainstream providers: verify country eligibility, language, account/identity requirements, data terms, cost, quota and connectivity before choosing a cloud service. Use only legitimate available alternatives; never bypass restrictions or invent a country/account. No service access? Complete the labelled manual/fixture route without claiming a live AI run.

### Worked example

```text

REVIEW BOUNDARY:
Score factual grounding, required structure and prohibited claims independently. Real provider results must be labelled with date and model; no-service examples stay labelled constructed.

ACCESS / NOT TESTED: unavailable provider, unsupported language and absent external feedback must remain explicit.

```

### Guided activity

1. Using a generation API is not training a GAN or proving general intelligence.

2. Open README.md and your evidence log from the practice pack; keep an unmodified original.

3. Record the human decision owner, limitations and any untested service access.

4. Perform one small change and predict its effect before rerunning.

5. Keep the result and your reasoning in the lesson notes; do not mark a simulated run as live.

### Expected evidence

- Separate mechanism from capability — a saved, inspectable artefact tied to the supplied rule.

- A baseline or change-test record with expected/observed results and a limitation.

### Common mistakes

- Remove the source price: do not fill it from general knowledge.

- Treating a supplied answer key, an authored example or self-review as independent field validation.

### Check your understanding

Which exact input, rule and expected value would let another learner falsify your conclusion in this activity, and what remains untested?

### Offline route

Use the supplied fictional JSON, expected results and paper/text evidence log without a provider account. Manual or constructed completion is labelled; it is not a live cloud integration or trained-model run.

## Activity 6: Publish a comparison with limits

Estimated time: 65 minutes.

### Outcomes

- Keep the full candidate set and explain why the chosen draft still needs approval.

- Explain and retain a testable result and its limits.

Generation is a candidate-making step, not verification. Fix a brief and factual source before changing prompts. A more vivid sentence can score worse if it adds an unsupported price or guarantee. The supplied candidates are authored examples, not claimed model runs.

Keep the full candidate set and explain why the chosen draft still needs approval. Deliver a reproducible bundle rather than a screenshot alone. Include inputs, rules, output, failure tests, a short README and residual limitations. Ask another person to follow the instructions if possible; self-review and actual external review must be labelled separately.

Policy for this project: Score factual grounding, required structure and prohibited claims independently. Real provider results must be labelled with date and model; no-service examples stay labelled constructed.

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

1. Keep the full candidate set and explain why the chosen draft still needs approval.

2. Open README.md and your evidence log from the practice pack; keep an unmodified original.

3. Record the human decision owner, limitations and any untested service access.

4. Perform one small change and predict its effect before rerunning.

5. Keep the result and your reasoning in the lesson notes; do not mark a simulated run as live.

### Expected evidence

- Publish a comparison with limits — a saved, inspectable artefact tied to the supplied rule.

- A baseline or change-test record with expected/observed results and a limitation.

### Common mistakes

- Repeat a live prompt if access permits; keep every result rather than only the favourite.

- Treating a supplied answer key, an authored example or self-review as independent field validation.

### Check your understanding

Which exact input, rule and expected value would let another learner falsify your conclusion in this activity, and what remains untested?

### Offline route

Use the supplied fictional JSON, expected results and paper/text evidence log without a provider account. Manual or constructed completion is labelled; it is not a live cloud integration or trained-model run.

## End-of-path review

These are self-check questions, not verified examinations.

### Question 1

For the supplied fixture, what is the expected scores?

1. {"A": 3, "B": 1}

2. It cannot be checked against the supplied input.

3. Whatever value the model reports most confidently.

Review answer: 1. The independent answer key only validates this constructed fixture. Preserve the source, rerun counterexamples, and disclose what was not tested.

### Question 2

How should you handle the project rule: Score factual grounding, required structure and prohibited claims independently. Real provider results must be labelled with date and model; no-service examples stay labelled constructed.

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

Score factual grounding, required structure and prohibited claims independently. Real provider results must be labelled with date and model; no-service examples stay labelled constructed. Regional access route is legitimate; credentials and private data are absent; manual/constructed work is clearly labelled.

## References

- [NIST generative AI profile](https://www.nist.gov/itl/ai-risk-management-framework)

## Editorial boundary

Original authored practice material; deterministic fixtures build-tested. Not independently expert-reviewed or learner-validated. Time estimates unvalidated.

Use fictional/redacted data and your own authorised provider credentials. Never include credentials in this pack or public work.
