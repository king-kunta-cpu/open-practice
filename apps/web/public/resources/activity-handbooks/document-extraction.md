# 14. Extract figures with page evidence

Open Practice / Research & evidence

Estimated time: 45 minutes. Not learner-validated.

Original material: CC BY 4.0. Independent, non-degree and non-accredited.

Extract numerical facts without losing units, scope or page references.

## Why this matters

PDF text can be rearranged, OCR can misread digits, and annual and quarterly totals are not directly comparable. This fixture is a short original report; use it first, then optionally test a public document you are allowed to upload. Every number needs a source location and an uncertainty label.

## Before you start

Materials are free. External tools may require an adult account, credits, regional eligibility or a paid plan. Check current terms before using them. Do not paste passwords, API keys, private messages or other people’s personal data. No model runs locally or downloads automatically on this platform.

## Practice input

```text

Fictional report, page 1: “Technology investment, FY2025: $120,000; FY2024: $95,000.” Page 2: “Marketing spend, Q1 2025: $18,000. Marketing spend, Q2 2025: not disclosed.” Page 3 note: “Figures are USD, before tax; investment excludes recurring software subscriptions.”

```

## Copy-and-adapt prompt

```text

Extract technology investment and marketing spend into a table: metric, period, value, unit, page, exact supporting quote, exclusions/uncertainty. Keep not-disclosed values as null/not disclosed. Do not estimate missing quarters, combine periods or convert currencies.

```

## Worked reference

Technology investment | FY2025 | 120000 | USD before tax | p1. Marketing spend | Q2 2025 | not disclosed | USD | p2. A yearly marketing total cannot be calculated from a single disclosed quarter.

## Guided activity

1. **Read the fixture first.** Build a manual reference table, including the scope note and missing value.

2. **Run extraction.** Paste the page-labelled text or upload the original fixture report from the pack where supported.

3. **Verify each cell.** Trace every figure to the exact page and quote; compare zeros, commas and period labels.

4. **Introduce an OCR trap.** Replace 120,000 with 12O,000 using the letter O. Check whether it flags ambiguity instead of silently asserting a value.

5. **Extend carefully.** Try a permitted public report and record the document version, page numbering and extraction limits.

## Test your result

- [ ] Every numeric row has the correct period, USD unit and page/quote evidence.

- [ ] Not disclosed remains missing; no annual marketing total is invented.

- [ ] The OCR ambiguity and subscription exclusion are visible in the final notes.

## Common mistakes

- Comparing a quarter with a full year as though they share a denominator.

- Confusing the PDF viewer’s page number with the printed page label.

## Evidence to keep

- **Keep the build**: Save your original input, exact prompt and resulting artifact. Every numeric row has the correct period, USD unit and page/quote evidence.

- **Show what you tested**: Record a pass/fail result and evidence for every check below. Not disclosed remains missing; no annual marketing total is invented.

- **Explain a limitation**: Write what changed after one deliberate revision and name a remaining failure mode. Comparing a quarter with a full year as though they share a denominator.

## No-account / offline route

Complete the reference table manually from the supplied page-labelled text; OCR and upload features remain untested.

## Reflection

Which number would be most misleading if its period label disappeared?

## Honest completion

Completion is a learner self-report based on saved evidence, not verified assessment or an accredited credential.

Original authored activity; independent subject-matter review and learner timing remain pending.
