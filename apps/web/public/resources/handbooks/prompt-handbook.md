# AI, without the guesswork

Open Practice / Foundations / curriculum 2.0

Estimated guided practice: 3h 30m estimated. This estimate has not been learner-tested.

Original practice material · CC BY 4.0 · Non-degree and non-accredited.

## What you will build

Write a reliable research brief

## Before you start

- Comfortable editing a text file.

- No coding or paid AI account required.

## Learning outcomes

- Turn a vague request into an acceptance-tested task.

- Verify claims with a reproducible evidence ledger.

- Design reusable prompt contracts and compare outputs fairly.

- Deliver a bounded research recommendation with limitations.

## Activity 1: Define the job

Estimated time: 25 minutes.

### Outcomes

- Translate a vague request into a testable task.

- Separate fictional constraints, facts, and assumptions.

A prompt is a task specification, not a magic phrase. Before asking for an answer, decide who will use it, what decision it supports, and what evidence would make it useful. Separate instructions from background material and specify the output shape.

Work with a fictional neighbourhood shop: 500 stock items, one operator, unreliable internet, and a monthly tool budget of $12. These are exercise assumptions, not research findings. An answer that recommends an expensive always-online system fails even if it sounds impressive. A useful first experiment is small enough that you can judge the output yourself.

### Worked example

```text

TASK: Compare paper stock cards, a spreadsheet, and a small local database for the fictional shop.
CONSTRAINTS: One operator; intermittent internet; $12/month maximum.
OUTPUT: A table with setup effort, offline suitability, maintenance, and unknowns.
EVIDENCE RULE: Separate provided facts from assumptions. Do not invent vendor prices or citations.

```

### Guided activity

1. Write the decision the owner needs to make in one sentence.

2. List the four supplied constraints and mark each as an exercise assumption.

3. Write one prompt containing task, audience, context, constraints, and output format.

4. Test it with your chosen AI, or write a plausible sample answer manually.

5. Highlight one sentence that is useful and one that needs evidence.

### Expected evidence

- A reusable task brief with all five fields.

- A sample comparison that respects the budget and connectivity constraints.

- A list of unanswered questions instead of invented facts.

### Common mistakes

- Asking for the best tool without defining best.

- Treating a confident vendor-price claim as evidence.

### Check your understanding

If the model recommends a $30/month online-only system, which acceptance conditions did it fail?

### Offline route

Use the fictional shop brief and manually draft the comparison. The specification and evaluation work do not require inference.

## Activity 2: Build a verification loop

Estimated time: 35 minutes.

### Outcomes

- Build an auditable claim ledger.

- Narrow conclusions to the evidence available.

Generated text is a candidate answer, not a source. Verification means identifying a specific claim and checking whether an accessible original source supports that exact claim, under the conditions you care about. A real URL can still be irrelevant or outdated. Two models agreeing does not create independent evidence.

Use a claim ledger: claim, source, supporting passage, checked date, verdict, and remaining uncertainty. For this exercise, distinguish claims about the fictional shop from real-world statements about software. The shop brief can support the former; current product documentation or a reproducible test is needed for the latter.

### Worked example

```text

Candidate claim: "The proposed workflow works with no internet."
Test: Disconnect the device and perform the required stock-edit and export actions.
Verdict: Supported only for the actions actually tested.
Remaining uncertainty: Multi-device synchronisation was not tested.

```

### Guided activity

1. Extract three factual claims from your comparison.

2. Identify which are supported by the supplied brief and which require external evidence.

3. Open the original documentation or perform a small reproducible test.

4. Record the exact passage or test result, not just the homepage URL.

5. Revise unsupported claims to explicit uncertainty.

### Expected evidence

- Three completed rows in the claim ledger.

- At least one rejected or narrowed claim.

- A revised answer that distinguishes evidence from inference.

### Common mistakes

- Citing a search snippet instead of the source.

- Writing verified when only one narrow behaviour was tested.

### Check your understanding

What is the difference between a source existing and a source supporting your precise claim?

### Offline route

Use the supplied fictional source pack and identify contradictions. Mark live product claims as not checked rather than inventing verification.

## Activity 3: Ship your research brief

Estimated time: 30 minutes.

### Outcomes

- Communicate a bounded recommendation.

- Publish reproducible evidence without exposing secrets.

A useful brief lets another person understand your recommendation without reconstructing your entire chat. Include the decision, constraints, options, evidence, limitations, and a small next action. Keep a change log so readers can see which claims were revised and why.

The first brief is a baseline, not a final verdict. A one-page result is easier to test than a long essay filled with unsupported detail. If you used an AI, record the provider, exact model if available, date, prompt version, and what you checked yourself. Do not include credentials or private conversations in the published artefact.

### Worked example

```text

RECOMMENDATION: Pilot a spreadsheet using fictional stock data for one week.
WHY: It fits the stated budget and can be tested with the existing device.
NOT PROVEN: Backup reliability and ease of use for the owner.
NEXT TEST: Enter ten sample items, export them, restore them, and ask the owner to explain the process.

```

### Guided activity

1. Write a one-page brief with a recommendation and two alternatives.

2. Attach your prompt and three-row evidence ledger.

3. State at least two limitations in plain language.

4. Define a low-risk next test with an observable pass condition.

5. Remove private data and package the files so another person can inspect them.

### Expected evidence

- Brief v1, prompt v1, evidence ledger, and limitations.

- A next-step test with a clear pass/fail condition.

- A dated change log recording at least one correction.

### Common mistakes

- Hiding limitations in an appendix nobody reads.

- Confusing an attractive document with a tested recommendation.

### Check your understanding

Could another person tell which conclusion you personally checked and which remains provisional?

### Offline route

Write and package the brief in a text editor using only the supplied fictional evidence.

## Activity 4: Design reusable task contracts

Estimated time: 35 minutes.

### Outcomes

- Design output contracts and failure paths.

- Test prompt reuse rather than relying on wording tricks.

A reusable prompt needs variables, a stable output contract, and an explicit refusal or uncertainty path. Reuse should preserve the task logic while making the changing inputs visible. Treat inserted documents as data, not as new instructions. Delimiters help people read boundaries, but they do not eliminate prompt injection.

Create two versions: a human-readable brief and a structured contract. For the latter, name required fields and acceptable values. If a system needs JSON, check it with a parser and then validate its schema. Correct JSON syntax does not mean the facts or field values are correct.

### Worked example

```text

INPUT VARIABLES: business_type, available_tools, monthly_budget, connectivity.
OUTPUT FIELDS: recommendation, reasons[], assumptions[], missing_information[], next_test.
FAILURE PATH: If a required input is absent, ask a focused question instead of inventing it.
TEST INPUT: monthly_budget is missing.

```

### Guided activity

1. Extract the changing values from your original prompt into named variables.

2. Define required output fields and one example of a valid result.

3. Create a test with a missing budget and one with contradictory constraints.

4. Check whether the output asks a question or exposes the contradiction.

5. Version the template and record what changed from v1.

### Expected evidence

- A reusable prompt contract with named variables.

- A valid-output example and two failure-case examples.

- A short validation checklist for syntax, meaning, and evidence.

### Common mistakes

- Assuming delimiters make untrusted text harmless.

- Accepting structurally valid JSON with invented values.

### Check your understanding

How would your downstream process respond if the output is valid JSON but its recommendation violates the budget?

### Offline route

Fill the contract manually for two fictional organisations and validate the fields without using AI.

## Activity 5: Compare models with evidence

Estimated time: 35 minutes.

### Outcomes

- Compare outputs against a fixed rubric.

- Avoid overclaiming from small evaluations.

A fair comparison holds the task and evaluation criteria steady. Comparing unrelated prompts, different evidence, or different output lengths can make a weak system look stronger. Choose a small fixed test set and judge outputs against a rubric before looking at the model names.

Use quality, faithfulness to constraints, transparency about uncertainty, and practical usefulness as separate criteria. Record latency and usage information only if your tool exposes them; do not invent token counts or prices. One run is not a reliability study. If you can, repeat a difficult case and record variation.

### Worked example

```text

FIXED TESTS: complete shop brief; missing budget; contradictory connectivity requirement.
RUBRIC: constraint adherence 0–2; evidence discipline 0–2; usable next step 0–2.
COMPARISON: Output A scores 5/6, Output B scores 3/6.
LIMITATION: Three examples are a small diagnostic set, not a general benchmark.

```

### Guided activity

1. Freeze three test inputs and your scoring rubric before generating outputs.

2. Compare two providers/models, or compare two saved sample answers if you have no keys.

3. Label outputs A and B while scoring.

4. Record concrete reasons for every non-zero or zero score.

5. Write a conclusion limited to the tested task and sample size.

### Expected evidence

- A three-case evaluation table.

- Scores with evidence rather than a preferred brand name.

- A limitations statement about sample size and repeatability.

### Common mistakes

- Changing the rubric after seeing the preferred model.

- Declaring a universal winner from one attractive answer.

### Check your understanding

Which variable would make your comparison unfair if changed between runs?

### Offline route

Use two manually written candidate answers and score them blind. The evaluation method is the learning objective.

## Activity 6: Capstone: deliver an evidence-backed decision pack

Estimated time: 50 minutes.

### Outcomes

- Deliver a reproducible practical research artefact.

- Explain limitations and revise after review.

Combine the brief, prompt contract, evidence ledger, and evaluation into a small decision pack. The pack should make a proposed action safer and easier to inspect; it should not pretend that AI removed the need for judgement.

Before release, ask a second person—or perform a separate review yourself—to find one unsupported claim, one unclear assumption, and one instruction that cannot be reproduced. Fix those issues and keep the earlier version. Your final deliverable is the trail of reasoning and testing, not a statement that a model is trustworthy in every setting.

### Worked example

```text

PACK CONTENTS: README.md, brief.md, prompt-contract.md, claims.csv, evaluation.csv, CHANGELOG.md.
ACCEPTANCE: Every material factual claim has support or an uncertainty label; every recommendation respects the fictional constraints; another person can repeat the next test.

```

### Guided activity

1. Choose the best bounded recommendation from your previous work.

2. Assemble all six artefacts listed in the example.

3. Score the pack against the five capstone criteria.

4. Ask for one challenge to your recommendation and write a response.

5. Publish or privately archive a redacted final copy with a clear reuse licence.

### Expected evidence

- A complete, navigable decision pack.

- A scored self-review with evidence for each criterion.

- One documented improvement made after challenge or review.

### Common mistakes

- Replacing the evidence trail with a polished AI summary.

- Publishing real business details or keys inside screenshots.

### Check your understanding

What evidence would make you change your recommendation, and is that written in your pack?

### Offline route

Complete the pack from fictional documents and saved sample outputs. Inference is optional for this capstone.

## End-of-path review

These are self-check questions, not verified examinations.

### Question 1

What makes an AI-generated citation trustworthy?

1. It looks professional

2. You opened the source and checked that it supports the claim

3. Two models repeated it

Review answer: 2. Check the relevant worked example and its evidence/authority boundary.

### Question 2

What makes an output comparison fair?

1. Use the same inputs and a rubric defined before seeing outputs.

2. Pick the longest answer.

3. Change the task until a favourite model wins.

Review answer: 1. A fixed task and predeclared rubric reduce cherry-picking; small samples still limit conclusions.

### Question 3

What should a prompt contract do when required information is missing?

1. Invent a likely value.

2. Ask a focused question or state the missing information.

3. Ignore the constraint.

Review answer: 2. A missing field should trigger an explicit uncertainty/failure path, not a fabricated fact.

## Capstone review rubric

Score each criterion 0 (missing), 1 (partial), or 2 (demonstrated). A self-review pass needs at least 8/10 and 2/2 on the final safety/limits criterion. This is practice feedback, not verified assessment.

### Task contract

The task, audience, constraints, output shape and unknowns are explicit.

### Evidence trail

Three material claims have exact support or an uncertainty label.

### Fair comparison

Three fixed cases are scored against a rubric chosen in advance.

### Reproducibility

Another person can follow the next test and inspect the change log.

### Privacy and honesty [critical]

No secrets/private data; fictional facts and limits are clearly labelled.

## References

- [Evidence and source evaluation](https://www.lib.berkeley.edu/research-support/evaluate)

## Editorial boundary

Original authored practice material; not independently expert-reviewed.

Use fictional/redacted data and your own authorised provider credentials. Never include credentials in this pack or public work.
