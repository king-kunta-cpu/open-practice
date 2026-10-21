# 23. Make a concept map you can correct

Open Practice / Learning & reasoning

Estimated time: 35 minutes. Not learner-validated.

Original material: CC BY 4.0. Independent, non-degree and non-accredited.

Turn a technical description into a labelled flow without confusing order and causation.

## Why this matters

A hierarchy and a process flow are different diagrams. Ask which relationship each arrow represents, and include alternate or failed paths. Start with a small verified account instead of asking a model to draw the entire internet from memory. A neat diagram can still have the wrong order.

## Before you start

Materials are free. External tools may require an adult account, credits, regional eligibility or a paid plan. Check current terms before using them. Do not paste passwords, API keys, private messages or other people’s personal data. No model runs locally or downloads automatically on this platform.

## Practice input

```text

Source sketch: A browser may use a cached address or ask DNS for a server address. It then establishes the needed connection and sends an HTTPS request. A server returns a response. The browser renders content and may request more resources. DNS failure can stop the normal path.

```

## Copy-and-adapt prompt

```text

Turn the sketch into a text flow with labelled arrows. Include the cached-address branch and DNS-failure branch. Distinguish “next step” from “part of.” Do not imply DNS downloads the webpage or that one response always completes rendering.

```

## Worked reference

Browser → cached address? yes → connect/request; no → DNS lookup → address found? yes → connect/request; no → show error/retry. Response → render → possibly request images/styles. DNS resolves names; it does not serve the page content.

## Guided activity

1. **Identify entities and actions.** Make separate lists for browser, DNS, server and response steps.

2. **Generate the text map.** Request labelled arrows and both alternate/failure paths.

3. **Trace one success.** Walk from typing an address to first rendering; point to every required stage.

4. **Trace one failure.** Follow DNS failure without pretending a response was received.

5. **Redraw and explain.** Use the visual guide as a model and write a plain-language description of one arrow’s exact meaning.

## Test your result

- [ ] DNS resolution is distinguished from sending or receiving webpage content.

- [ ] The cache and failure branches are present.

- [ ] Each arrow has a stated relationship rather than an unexplained decorative connector.

## Common mistakes

- Confusing a list of components with an ordered process.

- Removing error branches to make the diagram look simpler.

## Evidence to keep

- **Keep the build**: Save your original input, exact prompt and resulting artifact. DNS resolution is distinguished from sending or receiving webpage content.

- **Show what you tested**: Record a pass/fail result and evidence for every check below. The cache and failure branches are present.

- **Explain a limitation**: Write what changed after one deliberate revision and name a remaining failure mode. Confusing a list of components with an ordered process.

## No-account / offline route

Write steps on cards and arrange a flow with a cache branch and failure branch.

## Reflection

Which arrow would mislead a beginner if it had no label?

## Honest completion

Completion is a learner self-report based on saved evidence, not verified assessment or an accredited credential.

Original authored activity; independent subject-matter review and learner timing remain pending.
