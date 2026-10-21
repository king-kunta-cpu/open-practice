# 04. Test visible-expression labels

Open Practice / Vision & image editing

Estimated time: 45 minutes. Not learner-validated.

Original material: CC BY 4.0. Independent, non-degree and non-accredited.

Build a labelled image test and distinguish an expression from a person’s emotion or identity.

## Why this matters

A smile is an observable expression, not proof that someone is happy. This activity defaults to a hosted vision model classifying a small test set; that does not train a new model. If you have a supported hosted no-code trainer, record that separate route explicitly. Faces are optional: use simple expression cards instead.

## Before you start

Materials are free. External tools may require an adult account, credits, regional eligibility or a paid plan. Check current terms before using them. Do not paste passwords, API keys, private messages or other people’s personal data. No model runs locally or downloads automatically on this platform.

## Practice input

```text

Make six original drawing cards: two with an upward-curved mouth, two with a straight mouth and two ambiguous/partly covered. Use labels Smile visible, Straight mouth visible, and Unclear. Reserve one of each for testing. Do not photograph another person.

```

## Copy-and-adapt prompt

```text

Classify the visible mouth shape in this original card as Smile visible, Straight mouth visible or Unclear. Give one short observation about the visible marks. Do not infer identity, feelings, health, personality or protected characteristics. If hidden or ambiguous, choose Unclear.

```

## Worked reference

An upward curve may support “Smile visible; the mouth curves upward.” A covered mouth should produce Unclear. “This person is happy and trustworthy” fails the task, even if the picture is smiling.

## Guided activity

1. **Build the cards.** Create balanced labels and include ambiguity; keep the held-out cards separate from any examples.

2. **Choose your route.** Use a hosted vision tool with upload permission. If using a hosted trainer, record training settings; otherwise label the run pretrained classification.

3. **Test new views.** Upload held-out cards one at a time. Record expected label, actual label and visible evidence.

4. **Stress the boundary.** Rotate or partly cover a card. Observe whether the tool overclaims or admits uncertainty.

5. **Document limitations.** Report the number correct out of the number tested. Do not generalize a tiny drawing-card test to real people.

## Test your result

- [ ] The run log states whether custom training happened or only pretrained classification.

- [ ] All three held-out labels are recorded, including unclear cases; errors remain visible.

- [ ] No output is accepted as evidence of a person’s emotion, identity or trustworthiness.

## Common mistakes

- Uploading faces without consent or using expression labels for surveillance.

- Calling the result a trained emotion detector.

## Evidence to keep

- **Keep the build**: Save your original input, exact prompt and resulting artifact. The run log states whether custom training happened or only pretrained classification.

- **Show what you tested**: Record a pass/fail result and evidence for every check below. All three held-out labels are recorded, including unclear cases; errors remain visible.

- **Explain a limitation**: Write what changed after one deliberate revision and name a remaining failure mode. Uploading faces without consent or using expression labels for surveillance.

## No-account / offline route

Use the supplied label sheet and ask a human to classify held-out drawing cards. Save a dataset/test plan and mark it “not model-tested.”

## Reflection

What can your labels establish, and what can they never establish about a real person?

## Honest completion

Completion is a learner self-report based on saved evidence, not verified assessment or an accredited credential.

Original authored activity; independent subject-matter review and learner timing remain pending.
