# 42. Ask for a regex, then attack its assumptions

Open Practice / Data & structures

Estimated time: 45 minutes. Not learner-validated.

Original material: CC BY 4.0. Independent, non-degree and non-accredited.

Turn a fuzzy matching request into explicit positive and negative test cases.

## Why this matters

A regex for a limited filter is not a complete email validator. Decide whether a hyphen must occur in the local part or anywhere in the address, whether subdomains count and whether matching is case-insensitive. The activity test runner uses a short-lived worker and synthetic strings, not a production data scan.

## Before you start

Materials are free. External tools may require an adult account, credits, regional eligibility or a paid plan. Check current terms before using them. Do not paste passwords, API keys, private messages or other people’s personal data. No model runs locally or downloads automatically on this platform.

## Practice input

```text

Specification: local part must contain a hyphen; domain is one simple label followed by .edu; no spaces; case-insensitive. Match: first-last@example.edu; A-B@COLLEGE.EDU. Reject: firstlast@example.edu; first-last@example.com; firstlast@my-college.edu; first-last@dept.example.edu.

```

## Copy-and-adapt prompt

```text

Propose a bounded JavaScript regex for exactly the stated simplified filter, not RFC-complete email validation. Explain the anchors, local-part hyphen rule, simple domain and case-insensitive flag. Provide results for all supplied tests and at least two edge cases. Do not claim it verifies delivery or institutional status.

```

## Worked reference

One limited pattern: ^[A-Z0-9._+]*-[A-Z0-9._+-]*@[A-Z0-9]+(?:-[A-Z0-9]+)*\.edu$ with i flag. Check its actual behaviour; “a-b@example.edu” is a match, while a hyphen only in the domain is insufficient. The simplified grammar intentionally excludes some valid real addresses.

## Guided activity

1. **Define the policy.** Write the exact location of the hyphen and domain/subdomain rules before asking for syntax.

2. **Get a draft pattern.** Request the target engine and flags; do not copy syntax intended for a different language.

3. **Run the fixture.** Use the bounded test tool and compare actual results with the reference list.

4. **Try edge cases.** Add spaces, an empty local part and uppercase letters; keep false positives and negatives visible.

5. **State the scope.** Label the filter as a toy policy check, not email validation or proof of eligibility.

## Test your result

- [ ] All six supplied strings have recorded expected and observed results.

- [ ] A hyphen only in the domain does not satisfy the local-part requirement.

- [ ] The report names JavaScript/flags and clearly limits the simplified grammar.

## Common mistakes

- Calling a matching string a deliverable or institution-verified email address.

- Using an unbounded pattern or huge input without a timeout.

## Evidence to keep

- **Keep the build**: Save your original input, exact prompt and resulting artifact. All six supplied strings have recorded expected and observed results.

- **Show what you tested**: Record a pass/fail result and evidence for every check below. A hyphen only in the domain does not satisfy the local-part requirement.

- **Explain a limitation**: Write what changed after one deliberate revision and name a remaining failure mode. Calling a matching string a deliverable or institution-verified email address.

## No-account / offline route

Mark expected matches by hand and explain the policy without executing a pattern.

## Reflection

Which valid real-world address might your deliberately simplified filter reject?

## Honest completion

Completion is a learner self-report based on saved evidence, not verified assessment or an accredited credential.

Original authored activity; independent subject-matter review and learner timing remain pending.
