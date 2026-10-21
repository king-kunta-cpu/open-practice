# Research & evidence

Find, attribute and verify information.

---

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


---

# 16. Reconcile two accounts without inventing consensus

Open Practice / Research & evidence

Estimated time: 35 minutes. Not learner-validated.

Original material: CC BY 4.0. Independent, non-degree and non-accredited.

Separate shared facts, real contradictions and unmentioned details.

## Why this matters

Two sources can differ because they cover different times or quote different people, not because one is necessarily false. Preserve attribution and compare like with like. Agreement is not proof of truth when sources may repeat the same origin. The fictional source pair includes a deliberate time distinction.

## Before you start

Materials are free. External tools may require an adult account, credits, regional eligibility or a paid plan. Check current terms before using them. Do not paste passwords, API keys, private messages or other people’s personal data. No model runs locally or downloads automatically on this platform.

## Practice input

```text

Source A, 09:00: “The repair event has 30 registrations. Organizers plan two tables. The venue is the East Hall.” Source B, 17:00: “Registrations reached 42 after lunch. Organizers confirmed East Hall and said a third table may be added.”

```

## Copy-and-adapt prompt

```text

Create three sections: shared supported facts; differences with source/time attribution; unresolved questions. Distinguish a later update from a contradiction and a proposal from confirmation. Quote the relevant words. Do not average counts or invent a final decision.

```

## Worked reference

Shared: East Hall. Updated count: 30 at 09:00 versus 42 by 17:00, not necessarily a conflict. Two planned tables versus a possible third is an unresolved plan, not confirmation that three exist.

## Guided activity

1. **Annotate each source.** Mark timestamp, confirmed facts, plans and tentative language independently.

2. **Run the synthesis.** Require source labels and quotes for every comparison.

3. **Check alleged conflicts.** Ask whether each difference concerns the same time, definition and scope.

4. **Investigate dependence.** Note that the texts may share an organizer as their original source; do not call them independent verification.

5. **Draft a cautious update.** State the most recent attributed facts and one question that needs confirmation.

## Test your result

- [ ] The count change is identified as a time update rather than an automatic contradiction.

- [ ] The third table remains tentative.

- [ ] Every comparison has source/time attribution and no invented average or consensus.

## Common mistakes

- Treating omission as disagreement.

- Counting two articles that repeat one press release as two independent confirmations.

## Evidence to keep

- **Keep the build**: Save your original input, exact prompt and resulting artifact. The count change is identified as a time update rather than an automatic contradiction.

- **Show what you tested**: Record a pass/fail result and evidence for every check below. The third table remains tentative.

- **Explain a limitation**: Write what changed after one deliberate revision and name a remaining failure mode. Treating omission as disagreement.

## No-account / offline route

Use a two-column evidence ledger and write the shared/different/unresolved sections by hand.

## Reflection

Which apparent contradiction disappeared once you compared timestamps?

## Honest completion

Completion is a learner self-report based on saved evidence, not verified assessment or an accredited credential.

Original authored activity; independent subject-matter review and learner timing remain pending.


---

# 32. Stress-test a source-backed summary

Open Practice / Research & evidence

Estimated time: 45 minutes. Not learner-validated.

Original material: CC BY 4.0. Independent, non-degree and non-accredited.

Check whether a citation really supports the claim beside it.

## Why this matters

A URL can exist and still fail to support a statement. For current/local news, use an actual web-search-capable tool and verify every link yourself. Publication time is not always event time. Without live sources, use the fictional fixture and clearly label it; do not pretend a model searched.

## Before you start

Materials are free. External tools may require an adult account, credits, regional eligibility or a paid plan. Check current terms before using them. Do not paste passwords, API keys, private messages or other people’s personal data. No model runs locally or downloads automatically on this platform.

## Practice input

```text

Fictional notice A, issued 20 October: “The community hall repair event is scheduled for 28 October, 10:00–13:00. Registration is required. Capacity is 40.” Notice B: “An earlier draft listed 27 October; that date is superseded.” These are fixtures, not real news.

```

## Copy-and-adapt prompt

```text

Using only supplied sources, write three factual sentences with source labels and exact supporting quotations. Separate event date from publication date. State contradictions or corrections. If using live web sources instead, give a direct primary-source URL per claim and mark anything you could not open or verify.

```

## Worked reference

Supported: the fictional event is on 28 October, not 27 October. Capacity is 40. Registration is required. Unsupported: “40 people have already registered.” Capacity and actual attendance are different claims.

## Guided activity

1. **Choose live or fixture mode.** Record which route you are using. Live mode needs current primary-source pages you can open.

2. **Extract atomic claims.** Split date, time, capacity and registration into separate claims.

3. **Request the summary.** Require source labels/links and short supporting quotes.

4. **Open and inspect.** For each live citation, check source ownership, publication/update date and the exact supporting passage.

5. **Record unresolved items.** Remove claims whose sources fail, or label them unverified; do not silently replace them with guesses.

## Test your result

- [ ] Every retained claim has directly supporting evidence, not merely a related link.

- [ ] Publication date, event date, capacity and attendance are not conflated.

- [ ] Fixture mode never claims to be live reporting or web verification.

## Common mistakes

- Treating a real-looking link as proof of the adjacent claim.

- Inventing last-week news when the tool has no current search capability.

## Evidence to keep

- **Keep the build**: Save your original input, exact prompt and resulting artifact. Every retained claim has directly supporting evidence, not merely a related link.

- **Show what you tested**: Record a pass/fail result and evidence for every check below. Publication date, event date, capacity and attendance are not conflated.

- **Explain a limitation**: Write what changed after one deliberate revision and name a remaining failure mode. Treating a real-looking link as proof of the adjacent claim.

## No-account / offline route

Use the supplied labelled notices and build the same claim-evidence ledger; it is not a live-news exercise.

## Reflection

Which sentence looked cited but was not actually supported?

## Honest completion

Completion is a learner self-report based on saved evidence, not verified assessment or an accredited credential.

Original authored activity; independent subject-matter review and learner timing remain pending.


---

# 33. Audit framing without declaring perfect neutrality

Open Practice / Research & evidence

Estimated time: 35 minutes. Not learner-validated.

Original material: CC BY 4.0. Independent, non-degree and non-accredited.

Separate verifiable claims, opinions and rhetorical framing.

## Why this matters

Removing adjectives does not produce an unbiased account: selection and omission can still shape a story. Preserve who said what, the scope of numbers and uncertainty. This exercise produces a transparent evidence ledger and a cautious rewrite, not an authoritative neutral version of reality.

## Before you start

Materials are free. External tools may require an adult account, credits, regional eligibility or a paid plan. Check current terms before using them. Do not paste passwords, API keys, private messages or other people’s personal data. No model runs locally or downloads automatically on this platform.

## Practice input

```text

Fictional opinion: “The disastrous queue system wasted everyone’s day. The office says 80 visitors attended on Tuesday and the median wait was 35 minutes. One visitor called the experience unbearable. Clearly the entire service is beyond repair.”

```

## Copy-and-adapt prompt

```text

Split the text into checkable claims, attributed opinions and unsupported inferences. Preserve attribution. Then write a restrained summary using only supported statements and indicate what is missing. Do not turn “the office says” into independent verification or “median” into “everyone.”

```

## Worked reference

Checkable attributed claim: office reports 80 Tuesday visitors and a 35-minute median wait. Attributed opinion: one visitor found it unbearable. Unsupported inference: the whole service is beyond repair. Needed: measurement method, comparison period and broader visitor evidence.

## Guided activity

1. **Mark claim types.** Use three colours for factual assertions, attributed opinions and rhetorical conclusions.

2. **Request the ledger.** Require source wording and explicit attribution for each retained item.

3. **Rewrite cautiously.** Keep the reported numbers and opinion source, removing the sweeping conclusion.

4. **Check selection bias.** List whose experience and which time periods are absent.

5. **Compare versions.** Explain how omission or source choice can still frame the rewritten paragraph.

## Test your result

- [ ] The office’s claim stays attributed and the median is not generalized to all visitors.

- [ ] One person’s opinion is not presented as a population finding.

- [ ] The final note names missing context and avoids claiming perfect neutrality.

## Common mistakes

- Assuming adjective removal eliminates bias.

- Dropping attribution because the remaining sentence sounds cleaner.

## Evidence to keep

- **Keep the build**: Save your original input, exact prompt and resulting artifact. The office’s claim stays attributed and the median is not generalized to all visitors.

- **Show what you tested**: Record a pass/fail result and evidence for every check below. One person’s opinion is not presented as a population finding.

- **Explain a limitation**: Write what changed after one deliberate revision and name a remaining failure mode. Assuming adjective removal eliminates bias.

## No-account / offline route

Annotate and rewrite the supplied opinion manually, keeping the same evidence categories.

## Reflection

Which choice in your own rewrite still influenced the reader’s interpretation?

## Honest completion

Completion is a learner self-report based on saved evidence, not verified assessment or an accredited credential.

Original authored activity; independent subject-matter review and learner timing remain pending.


---

# 35. Read a paper without overselling it

Open Practice / Research & evidence

Estimated time: 45 minutes. Not learner-validated.

Original material: CC BY 4.0. Independent, non-degree and non-accredited.

Separate research question, method, result and real-world applicability.

## Why this matters

A paper’s abstract is not enough to establish a practical business benefit. Check the population, sample, comparison, outcome and stated limitations. Use the original fictional abstract first; when trying an actual paper, access a legitimate copy and keep its title/version. AI summaries are reading aids, not peer review.

## Before you start

Materials are free. External tools may require an adult account, credits, regional eligibility or a paid plan. Check current terms before using them. Do not paste passwords, API keys, private messages or other people’s personal data. No model runs locally or downloads automatically on this platform.

## Practice input

```text

Fictional abstract: “Twenty volunteers were randomly assigned to checklist or no-checklist groups for a simulated packing task. Median omissions were 1 versus 3. The task lasted one afternoon. No long-term retention, business revenue or safety outcome was measured.”

```

## Copy-and-adapt prompt

```text

Explain the question, sample, comparison, measured outcome and limitations in plain language. Separate the reported result from three possible follow-up applications, each labelled a hypothesis. Do not invent statistical significance, causal mechanisms, long-term effects or revenue gains.

```

## Worked reference

Reported: lower median omissions in the checklist group in this small simulated task. Hypothesis: test a checklist in a different packing workflow. Unsupported: “checklists triple business productivity” or “the study proves permanent safety improvements.”

## Guided activity

1. **Read the supplied abstract.** Highlight population, comparison, outcome, duration and limitations.

2. **Generate a structured summary.** Ask for separate method, result and applicability sections.

3. **Check each claim.** Trace the summary to exact abstract words; mark missing statistics as missing.

4. **Design a follow-up.** Choose one setting and define a measurable outcome plus a risk/limitation.

5. **Try a real paper optionally.** Read methods and limitations, not just the generated summary, before proposing any application.

## Test your result

- [ ] Sample size, simulated context and one-afternoon duration remain visible.

- [ ] No significance level, revenue result or long-term benefit is invented.

- [ ] Suggested applications are hypotheses with a proposed test, not established findings.

## Common mistakes

- Turning a small simulated result into a universal business claim.

- Accepting citations or statistics that do not occur in the paper.

## Evidence to keep

- **Keep the build**: Save your original input, exact prompt and resulting artifact. Sample size, simulated context and one-afternoon duration remain visible.

- **Show what you tested**: Record a pass/fail result and evidence for every check below. No significance level, revenue result or long-term benefit is invented.

- **Explain a limitation**: Write what changed after one deliberate revision and name a remaining failure mode. Turning a small simulated result into a universal business claim.

## No-account / offline route

Complete the question/method/result/limit table by hand from the fictional abstract.

## Reflection

Which business use would require the biggest leap beyond the reported evidence?

## Honest completion

Completion is a learner self-report based on saved evidence, not verified assessment or an accredited credential.

Original authored activity; independent subject-matter review and learner timing remain pending.
