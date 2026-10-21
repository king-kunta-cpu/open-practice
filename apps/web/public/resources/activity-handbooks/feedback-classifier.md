# 24. Classify feedback with an uncertainty bucket

Open Practice / Data & structures

Estimated time: 35 minutes. Not learner-validated.

Original material: CC BY 4.0. Independent, non-degree and non-accredited.

Create a small labelled feedback set and inspect false positives.

## Why this matters

Sentiment is not the same as topic or urgency. A short review can contain praise and criticism at once; forcing it into a single emotional label hides information. Define an explicit Mixed/Unclear route and quote the relevant text instead of guessing a customer’s feelings.

## Before you start

Materials are free. External tools may require an adult account, credits, regional eligibility or a paid plan. Check current terms before using them. Do not paste passwords, API keys, private messages or other people’s personal data. No model runs locally or downloads automatically on this platform.

## Practice input

```text

r1: “Arrived early. Excellent.” r2: “It is a mug.” r3: “The handle broke immediately.” r4: “Looks lovely, but the lid leaks.” r5: “Great, another week waiting.” Labels: Positive, Neutral, Negative, Mixed/Unclear.

```

## Copy-and-adapt prompt

```text

Classify each review by ID using the defined labels. Give an exact evidence span and a separate issue/topic field. Use Mixed/Unclear when praise and criticism coexist or sarcasm is uncertain. Do not infer a person’s mood or intent beyond the text.

```

## Worked reference

r1 → Positive; r2 → Neutral; r3 → Negative, issue handle durability; r4 → Mixed/Unclear, leak plus visual praise; r5 may be Negative with an explicit sarcasm note or Mixed/Unclear if uncertain. Either needs evidence, not an invented emotion.

## Guided activity

1. **Define labels.** Write decision rules and an uncertainty route before testing.

2. **Make reference labels.** Label the five reviews yourself and note where a reasonable reviewer might disagree.

3. **Run the classifier.** Keep review IDs and exact quoted evidence for each output.

4. **Compare mistakes.** Count clear matches separately from ambiguous cases. Inspect r4 and r5 rather than hiding them.

5. **Test a new case.** Use “Fast delivery, broken item.” Decide whether the revised rules preserve both pieces of feedback.

## Test your result

- [ ] Every output preserves the review ID and quotes an actual evidence span.

- [ ] Topic/issue is separate from sentiment, and the mixed review is not flattened into only praise.

- [ ] Ambiguous labels and disagreements remain visible in the score table.

## Common mistakes

- Treating sarcasm detection as certain.

- Inferring a customer’s personality from a short comment.

## Evidence to keep

- **Keep the build**: Save your original input, exact prompt and resulting artifact. Every output preserves the review ID and quotes an actual evidence span.

- **Show what you tested**: Record a pass/fail result and evidence for every check below. Topic/issue is separate from sentiment, and the mixed review is not flattened into only praise.

- **Explain a limitation**: Write what changed after one deliberate revision and name a remaining failure mode. Treating sarcasm detection as certain.

## No-account / offline route

Use a manual sorting table and compare two readers’ labels before agreeing the policy.

## Reflection

Which review made a three-bucket classification inadequate?

## Honest completion

Completion is a learner self-report based on saved evidence, not verified assessment or an accredited credential.

Original authored activity; independent subject-matter review and learner timing remain pending.
