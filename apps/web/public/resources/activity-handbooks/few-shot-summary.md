# 02. Examples that teach the format

Open Practice / Prompt craft

Estimated time: 35 minutes. Not learner-validated.

Original material: CC BY 4.0. Independent, non-degree and non-accredited.

Use labelled demonstrations to obtain consistent complaint summaries.

## Why this matters

Three demonstrations make this a few-shot exercise, not a one-shot exercise. A model can imitate their punctuation while still misunderstanding a complaint. Hold back one email until you have written the format rules, then test an ambiguous case as well as the easy one.

## Before you start

Materials are free. External tools may require an adult account, credits, regional eligibility or a paid plan. Check current terms before using them. Do not paste passwords, API keys, private messages or other people’s personal data. No model runs locally or downloads automatically on this platform.

## Practice input

```text

Email 1: My parcel was due Monday. It is Wednesday and nothing arrived. → Summary: Delivery — parcel two days late.
Email 2: The receipt shows $18 but my card was charged $23. → Summary: Billing — charged $5 above receipt.
Email 3: The lid cracked on first use. → Summary: Product — lid cracked on first use.
Held-out email: I paid for two notebooks; the parcel contained one.

```

## Copy-and-adapt prompt

```text

Learn the summary format from the three labelled examples. Summarize only the held-out email as “Summary: Category — one factual issue.” Use Delivery, Billing, Product or Needs review. Do not invent a cause, remedy or refund.
[Paste examples and held-out email.]

```

## Worked reference

Acceptable held-out result: Summary: Delivery — one of two paid notebooks missing. “Billing — customer charged twice” is not supported: the complaint concerns a missing item, not two payments.

## Guided activity

1. **Prepare the demonstrations.** Copy the first three input/output pairs and name the allowed categories.

2. **Hold one case back.** Keep the notebook email out of the demonstrations; write your own expected summary before querying.

3. **Run the few-shot prompt.** Compare its output with your reference on category, issue, prefix and invented facts.

4. **Try ambiguity.** Replace the held-out email with “It happened again.” A safe result asks for review rather than inventing a specific issue.

5. **Refine one example.** If the notebook case fails, add a missing-item example and test a new held-out email, not the same one only.

## Test your result

- [ ] The held-out summary captures one missing notebook without claiming a duplicate payment.

- [ ] The ambiguous email receives Needs review or a clarification, not invented details.

- [ ] The exact prefix, category separator and one-issue rule remain consistent across three new tests.

## Common mistakes

- Evaluating only on examples already shown to the model.

- Calling formatting consistency evidence of factual accuracy.

## Evidence to keep

- **Keep the build**: Save your original input, exact prompt and resulting artifact. The held-out summary captures one missing notebook without claiming a duplicate payment.

- **Show what you tested**: Record a pass/fail result and evidence for every check below. The ambiguous email receives Needs review or a clarification, not invented details.

- **Explain a limitation**: Write what changed after one deliberate revision and name a remaining failure mode. Evaluating only on examples already shown to the model.

## No-account / offline route

Classify the four emails on paper, then ask a partner to infer your formatting rule from the first three.

## Reflection

What changed when you improved the examples: the category decision, the formatting, or both?

## Honest completion

Completion is a learner self-report based on saved evidence, not verified assessment or an accredited credential.

Original authored activity; independent subject-matter review and learner timing remain pending.
