# Prompt craft

Turn a vague request into a testable instruction.

---

# 01. The persona swap

Open Practice / Prompt craft

Estimated time: 35 minutes. Not learner-validated.

Original material: CC BY 4.0. Independent, non-degree and non-accredited.

Separate a useful task from the role, voice and formatting you give an AI.

## Why this matters

A persona changes presentation, not the model’s qualifications. Keep the factual task constant while varying one instruction. You are measuring whether constraints survive the change, not whether a confident character becomes an expert. Use a fictional savings example rather than personal financial information.

## Before you start

Materials are free. External tools may require an adult account, credits, regional eligibility or a paid plan. Check current terms before using them. Do not paste passwords, API keys, private messages or other people’s personal data. No model runs locally or downloads automatically on this platform.

## Practice input

```text

Fictional learner Nia wants to compare two savings accounts. Account A: no monthly fee, minimum balance $10. Account B: $2 monthly fee, minimum balance $0. No interest rates or other terms are provided.

```

## Copy-and-adapt prompt

```text

Using only the account facts below, explain two differences and ask one question about missing information. First answer as a plain-language educator in three sentences. Then repeat as a friendly pirate, still exactly three sentences. Do not recommend an account or invent rates.
[Paste the fictional facts.]

```

## Worked reference

Plain version: A has no stated monthly fee but needs $10. B has no minimum balance but costs $2 monthly. What interest rate and withdrawal rules does each account have? A pirate version may change the wording, but must preserve these facts.

## Guided activity

1. **Set a baseline.** Paste the fixture into a fresh hosted text chat and request the plain version. Save the complete answer.

2. **Change only the voice.** Use the same facts in a fresh chat and request the pirate version. Do not add new account details.

3. **Mark the constraints.** Count sentences; underline the two comparisons and the missing-information question.

4. **Introduce a trap.** Ask for the “best account with the highest interest.” Check whether it admits the rates are missing.

5. **Revise and compare.** Add an explicit no-recommendation rule if needed. Keep the failed output beside the corrected one.

## Test your result

- [ ] Both versions preserve the $10 minimum and $2 fee without adding an interest rate.

- [ ] Each response has exactly three sentences and one question about genuinely missing information.

- [ ] The trap request does not produce an unsupported recommendation.

## Common mistakes

- Treating the financial-advisor persona as a real qualification.

- Changing the facts and voice together, which makes the comparison uninterpretable.

## Evidence to keep

- **Keep the build**: Save your original input, exact prompt and resulting artifact. Both versions preserve the $10 minimum and $2 fee without adding an interest rate.

- **Show what you tested**: Record a pass/fail result and evidence for every check below. Each response has exactly three sentences and one question about genuinely missing information.

- **Explain a limitation**: Write what changed after one deliberate revision and name a remaining failure mode. Treating the financial-advisor persona as a real qualification.

## No-account / offline route

Write two three-sentence versions yourself, exchange them with a reader, and mark factual changes. This tests the rubric without claiming an AI run.

## Reflection

Which instruction changed the style, and which instruction protected the facts?

## Honest completion

Completion is a learner self-report based on saved evidence, not verified assessment or an accredited credential.

Original authored activity; independent subject-matter review and learner timing remain pending.


---

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


---

# 03. Reverse-engineer a writing blueprint

Open Practice / Prompt craft

Estimated time: 35 minutes. Not learner-validated.

Original material: CC BY 4.0. Independent, non-degree and non-accredited.

Describe the structure of a text and use it to write an original piece.

## Why this matters

A model cannot recover the exact hidden prompt that created an article. It can propose a plausible blueprint: audience, structure, tone, evidence and length. Analyse a text you own or have permission to use, then apply its abstract structure to a different topic rather than copying its expression.

## Before you start

Materials are free. External tools may require an adult account, credits, regional eligibility or a paid plan. Check current terms before using them. Do not paste passwords, API keys, private messages or other people’s personal data. No model runs locally or downloads automatically on this platform.

## Practice input

```text

Original sample: “Start small. Our weekend repair table began with three broken lamps and a borrowed screwdriver. By Sunday, neighbours had fixed two lamps and learned when to call an electrician. Bring a simple item next month; leave dangerous wiring to a professional.”

```

## Copy-and-adapt prompt

```text

Analyse this original sample. List its audience, hook, paragraph structure, sentence rhythm, evidence and closing action. Then write a reusable prompt for a NEW article on a different subject. Do not claim to know the original prompt, copy distinctive sentences or imitate a living writer by name.

```

## Worked reference

Blueprint: short imperative hook → concrete small-scale story → modest outcome with a limitation → safe invitation. New topic: a neighbourhood seed exchange. The new article should not reuse lamps, screwdrivers or the original opening phrase.

## Guided activity

1. **Annotate the sample.** Highlight the hook, concrete evidence, safety boundary and closing invitation in different colours.

2. **Ask for a blueprint.** Use the prompt and mark which observations are actually visible in the source.

3. **Choose a new topic.** Use a seed exchange or book swap, supplying your own fictional facts rather than asking for invented statistics.

4. **Generate a fresh draft.** Give the blueprint and new facts in a separate request. Compare structure, not matching phrases.

5. **Audit originality.** Flag repeated distinctive phrases and unsupported claims. Rewrite one paragraph yourself.

## Test your result

- [ ] Every structural observation can be pointed to in the sample.

- [ ] The new draft uses different subject matter and does not recycle distinctive sentences.

- [ ] The answer describes a plausible blueprint, not “the exact original prompt.”

## Common mistakes

- Requesting a near-identical copyrighted article.

- Assuming the model’s explanation reveals its internal thought process.

## Evidence to keep

- **Keep the build**: Save your original input, exact prompt and resulting artifact. Every structural observation can be pointed to in the sample.

- **Show what you tested**: Record a pass/fail result and evidence for every check below. The new draft uses different subject matter and does not recycle distinctive sentences.

- **Explain a limitation**: Write what changed after one deliberate revision and name a remaining failure mode. Requesting a near-identical copyrighted article.

## No-account / offline route

Make a five-box outline by hand and write a new piece from it; this is a structure exercise, not proof of AI provenance.

## Reflection

Which structural feature was transferable without copying the original wording?

## Honest completion

Completion is a learner self-report based on saved evidence, not verified assessment or an accredited credential.

Original authored activity; independent subject-matter review and learner timing remain pending.


---

# 21. Check reasoning with an external answer

Open Practice / Prompt craft

Estimated time: 35 minutes. Not learner-validated.

Original material: CC BY 4.0. Independent, non-degree and non-accredited.

Compare answer-only and concise-explanation prompts against a known reference.

## Why this matters

A request for hidden chain-of-thought does not guarantee accuracy and is not needed. Ask instead for a short calculation, stated assumptions and a checkable result. A polished explanation can rationalize a wrong answer. Use a puzzle with an external solution and keep the input identical across conditions.

## Before you start

Materials are free. External tools may require an adult account, credits, regional eligibility or a paid plan. Check current terms before using them. Do not paste passwords, API keys, private messages or other people’s personal data. No model runs locally or downloads automatically on this platform.

## Practice input

```text

Puzzle: A notebook and a pen cost $1.10 together. The notebook costs $1.00 more than the pen. What does the pen cost? Reference: pen $0.05; notebook $1.05; total $1.10 and difference $1.00.

```

## Copy-and-adapt prompt

```text

Solve the notebook-and-pen puzzle. State the answer, one short equation and a substitution check. Do not provide a private internal reasoning transcript. If you make an assumption, state it.
[Paste puzzle without the reference answer.]

```

## Worked reference

Let pen cost p. Then notebook costs p + 1.00, so 2p + 1.00 = 1.10 and p = 0.05. A $0.10 pen would imply a $1.10 notebook, totaling $1.20, so the tempting answer fails.

## Guided activity

1. **Record the reference.** Hide the answer from the model and verify both total and difference yourself.

2. **Run answer-only.** Ask for just the price in a fresh hosted chat and save the unedited answer.

3. **Run a concise-check version.** Use the supplied prompt in a fresh context with the same puzzle.

4. **Evaluate both externally.** Substitute each answer into the original constraints; do not score by explanation length.

5. **Transfer the test.** Change the total to $1.30 with a $1.00 difference; the pen should be $0.15.

## Test your result

- [ ] Both responses are checked against the total and difference, not judged on fluency.

- [ ] The report includes the $0.15 transfer case and its substitution check.

- [ ] You do not claim that longer explanations prevent errors or reveal hidden internal reasoning.

## Common mistakes

- Rewarding a long explanation even when its arithmetic is wrong.

- Leaking the reference answer into only one experimental condition.

## Evidence to keep

- **Keep the build**: Save your original input, exact prompt and resulting artifact. Both responses are checked against the total and difference, not judged on fluency.

- **Show what you tested**: Record a pass/fail result and evidence for every check below. The report includes the $0.15 transfer case and its substitution check.

- **Explain a limitation**: Write what changed after one deliberate revision and name a remaining failure mode. Rewarding a long explanation even when its arithmetic is wrong.

## No-account / offline route

Solve the equation manually and compare the tempting wrong answer with the two original constraints.

## Reflection

Did the explanation improve the result, or only make it sound more convincing?

## Honest completion

Completion is a learner self-report based on saved evidence, not verified assessment or an accredited credential.

Original authored activity; independent subject-matter review and learner timing remain pending.


---

# 22. Build a prompt contract, not a mega-prompt

Open Practice / Prompt craft

Estimated time: 35 minutes. Not learner-validated.

Original material: CC BY 4.0. Independent, non-degree and non-accredited.

Combine role, context, constraints and format without burying the actual task.

## Why this matters

Long prompts are not automatically better. A useful contract includes a goal, available facts, restrictions and a checkable output shape. Conflicting requirements should trigger clarification rather than confident invention. This fictional recipe task is about instruction-following, not dietary or medical advice.

## Before you start

Materials are free. External tools may require an adult account, credits, regional eligibility or a paid plan. Check current terms before using them. Do not paste passwords, API keys, private messages or other people’s personal data. No model runs locally or downloads automatically on this platform.

## Practice input

```text

Available: 2 eggs, a handful of spinach, hot sauce, a bowl and a microwave-safe cooking container. No oil. Time budget 10 minutes. Appliance power and safe cooking guidance are not provided.

```

## Copy-and-adapt prompt

```text

Role: practical recipe drafter. Context: use only the listed ingredients and equipment. Constraints: no oil; under 10 minutes if feasible; do not invent appliance settings or guarantee food safety. Format: ingredients, proposed steps, missing safety information, feasibility note. Ask for clarification when a safe procedure needs facts not supplied.

```

## Worked reference

A good response notices that appliance details and safe cooking guidance are missing. It may draft a plan with review notes, but should not invent a universal microwave time or guarantee that a fixed duration makes eggs safe.

## Guided activity

1. **Write the four parts.** Separate role, context, constraints and output format into short labelled blocks.

2. **Test the first prompt.** Check every ingredient, equipment item and claimed cooking instruction.

3. **Add a contradiction.** Demand a five-course meal from the same two ingredients in two minutes. Observe whether it flags infeasibility.

4. **Remove unnecessary text.** Shorten the prompt while keeping all essential conditions; compare compliance.

5. **Save a reusable template.** Replace the recipe details with placeholders and include an explicit clarification rule.

## Test your result

- [ ] The response adds no unlisted ingredients or equipment.

- [ ] Missing safety information is flagged rather than replaced with invented appliance settings.

- [ ] The contradictory case produces a feasibility warning or question, not a guaranteed result.

## Common mistakes

- Assuming more instructions always improve a prompt.

- Treating a generated recipe as food-safety advice.

## Evidence to keep

- **Keep the build**: Save your original input, exact prompt and resulting artifact. The response adds no unlisted ingredients or equipment.

- **Show what you tested**: Record a pass/fail result and evidence for every check below. Missing safety information is flagged rather than replaced with invented appliance settings.

- **Explain a limitation**: Write what changed after one deliberate revision and name a remaining failure mode. Assuming more instructions always improve a prompt.

## No-account / offline route

Use the four-part contract to ask a person for a plan, then score compliance with the same checklist.

## Reflection

Which sentence was essential, and which extra detail merely made the prompt longer?

## Honest completion

Completion is a learner self-report based on saved evidence, not verified assessment or an accredited credential.

Original authored activity; independent subject-matter review and learner timing remain pending.
