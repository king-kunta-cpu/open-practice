# 43. From book notes to validated JSON

Open Practice / Data & structures

Estimated time: 40 minutes. Not learner-validated.

Original material: CC BY 4.0. Independent, non-degree and non-accredited.

Distinguish valid JSON syntax, a data shape and a formal JSON Schema.

## Why this matters

Valid JSON can still contain wrong values or inconsistent records. First parse the text, then check the agreed keys and types, then compare facts with the source. This exercise converts records and describes a shape; a formal JSON Schema is a separate optional extension, not something every JSON array automatically contains.

## Before you start

Materials are free. External tools may require an adult account, credits, regional eligibility or a paid plan. Check current terms before using them. Do not paste passwords, API keys, private messages or other people’s personal data. No model runs locally or downloads automatically on this platform.

## Practice input

```text

Fictional books: Paper Signals — A. Dube — 2021 — rating 4; Quiet Circuits — T. Moyo — 2023 — rating 5; Small Useful Things — N. Rao — year unknown — rating 3. Ratings are integers from 1 to 5. No additional books or authors are supplied.

```

## Copy-and-adapt prompt

```text

Convert these three records to a JSON array using only lowercase keys: title, author, year, rating. Use an integer year or null when unknown; rating must be an integer from 1 to 5. Return JSON only, without comments, code fences, trailing commas or invented facts. Then, in a separate response if requested, describe the field rules.

```

## Worked reference

One record: {"title":"Small Useful Things","author":"N. Rao","year":null,"rating":3}. A year of "unknown" is the wrong type for this contract, and a fabricated year such as 2020 is a factual error even if parsing succeeds.

## Guided activity

1. **Define the shape.** Write exact keys, types, null policy and rating range before generating.

2. **Request the array.** Use the fixture and preserve missing years rather than filling them.

3. **Parse the output.** Use the activity checker; remove Markdown fences only if you understand they are wrappers, not JSON.

4. **Validate the contract.** Check array length, exact key set, types, null and rating range independently of parsing.

5. **Check facts and break it.** Compare titles/authors with the fixture, then try rating 9 or a trailing comma and note which check catches it.

## Test your result

- [ ] JSON parsing succeeds and there are exactly three records with the agreed lowercase keys.

- [ ] Unknown year is null; ratings satisfy the integer 1–5 rule.

- [ ] Every title/author/value matches the fixture; syntax success is not mistaken for factual validity.

## Common mistakes

- Calling any valid JSON array a JSON Schema.

- Filling missing data to make the output look complete.

## Evidence to keep

- **Keep the build**: Save your original input, exact prompt and resulting artifact. JSON parsing succeeds and there are exactly three records with the agreed lowercase keys.

- **Show what you tested**: Record a pass/fail result and evidence for every check below. Unknown year is null; ratings satisfy the integer 1–5 rule.

- **Explain a limitation**: Write what changed after one deliberate revision and name a remaining failure mode. Calling any valid JSON array a JSON Schema.

## No-account / offline route

Write the three structured records as a table and apply the same key/type/fact checklist.

## Reflection

Which error can pass a JSON parser but still violate your requirements?

## Honest completion

Completion is a learner self-report based on saved evidence, not verified assessment or an accredited credential.

Original authored activity; independent subject-matter review and learner timing remain pending.
