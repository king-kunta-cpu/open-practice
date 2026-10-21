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
