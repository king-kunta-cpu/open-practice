# 07. A spreadsheet formula you actually test

Open Practice / Data & structures

Estimated time: 45 minutes. Not learner-validated.

Original material: CC BY 4.0. Independent, non-degree and non-accredited.

Turn a plain-language lookup requirement into a formula and test missing and duplicate IDs.

## Why this matters

An apparently correct formula may fail in a different spreadsheet locale or quietly select the first duplicate. Define the expected behaviour before asking for syntax. Use a small fictional table, and verify each result manually. Generated formulas are drafts, not evidence that the data is clean.

## Before you start

Materials are free. External tools may require an adult account, credits, regional eligibility or a paid plan. Check current terms before using them. Do not paste passwords, API keys, private messages or other people’s personal data. No model runs locally or downloads automatically on this platform.

## Practice input

```text

Create columns A:C: ID, Name, Email. Rows: u01, Nia, nia@example.test; u02, Tari, tari@example.test; u02, Tari old, old@example.test. Lookup cell E2. Test u01, u99 and u02. Desired rule: return the email for exactly one match; blank for no match; FLAG DUPLICATE for multiple matches.

```

## Copy-and-adapt prompt

```text

For my spreadsheet, propose a formula using COUNTIF and a lookup to implement: exactly one matching ID in A2:A4 returns C2:C4; zero matches returns an empty string; more than one match returns FLAG DUPLICATE. Ask which spreadsheet and locale if necessary. Explain the tested ranges. Do not hide every error with IFERROR.

```

## Worked reference

One Excel/Sheets-style draft: =IF(COUNTIF(A2:A4,E2)=0,"",IF(COUNTIF(A2:A4,E2)>1,"FLAG DUPLICATE",XLOOKUP(E2,A2:A4,C2:C4,""))). Some versions/locales need different functions or separators; test in the actual sheet. Expected: u01 → nia@example.test; u99 → blank; u02 → FLAG DUPLICATE.

## Guided activity

1. **Build the tiny sheet.** Type the fictional rows and lookup cell exactly; manually write expected outcomes for the three IDs.

2. **Describe the rule.** Include duplicate handling, no-match behaviour and your actual spreadsheet product/locale.

3. **Test the draft.** Paste the formula into a spare result cell, not into original data. Try each ID and record the displayed value.

4. **Change a boundary.** Add a new row outside A2:A4. Check whether the range updates or silently misses it.

5. **Explain the revision.** Adjust to a table/range appropriate to your tool and retest. Keep the formula text and results.

## Test your result

- [ ] The three original cases match the documented unique, missing and duplicate rules.

- [ ] You have tested the formula in the named spreadsheet, not just read the AI explanation.

- [ ] An added row produces a documented range update or an explicit limitation.

## Common mistakes

- Accepting a first-match lookup when duplicates need review.

- Masking a syntax error or data-quality problem with blanket IFERROR.

## Evidence to keep

- **Keep the build**: Save your original input, exact prompt and resulting artifact. The three original cases match the documented unique, missing and duplicate rules.

- **Show what you tested**: Record a pass/fail result and evidence for every check below. You have tested the formula in the named spreadsheet, not just read the AI explanation.

- **Explain a limitation**: Write what changed after one deliberate revision and name a remaining failure mode. Accepting a first-match lookup when duplicates need review.

## No-account / offline route

Match the ID cards to the rows by hand and document the three expected results; mark formula execution untested until you have a spreadsheet.

## Reflection

Which failure would an empty-string fallback have hidden?

## Honest completion

Completion is a learner self-report based on saved evidence, not verified assessment or an accredited credential.

Original authored activity; independent subject-matter review and learner timing remain pending.
