# Verification — 0.6.0 / 2026-10-21

## Current release: local, not production
38 automated tests pass under Node 22 with no skips. Chromium checks use the local Node preview, not the production Worker. External namespace transfer, remote repository rename/push and production deployment have **not** been executed for this release.

## Automated checks
- Six canonical paths, 36 complete activities, 18 review questions, six capstones, 30 rubric criteria; guided-time totals reconcile to 1,440 estimated minutes.
- Every activity includes outcomes, explanation, example, guided steps, evidence, common mistakes, understanding check and offline alternative.
- Legacy first-three-activity indices and notes survive; prior knowledge checks do not silently pass the expanded review.
- A 9/10 capstone fails its threshold if the critical safety criterion is only 1/2.
- Eight calculator reference cases plus multiplication overflow; cleaned expense fixture reconciles to its documented category totals.
- Tutor context contains the selected activity rather than the full path.
- Six practice ZIPs rebuild deterministically, open without archive errors and include workbook, metadata and fixtures.
- Worker-packaged ZIP/image/font bytes equal the source bytes, with correct MIME types.
- Active authored text uses current identity; historical Git records and third-party licence files are excluded from rewriting.
- Native SQLite registration, persistence, recovery rotation, export/deletion behaviour and the existing security/provider/router suite remain passing.

## Chromium local browser
- Curriculum page renders six paths and accurate 36-activity/21-resource counts.
- A path shows six activity selectors, structured examples/evidence, three review questions and five rubric controls.
- Selecting the correct review responses updates progress; critical rubric scoring changes the displayed threshold status.
- Native HTML export contains all six activities, review questions and rubric. Notes containing script-like text remain text and never execute.
- Download → open from disk → edit final-activity note → download updated copy → reopen preserves both old and new notes.
- Offline JSON reimport restores the final-activity note to the online path.
- Library renders 21 downloads; dashboard uses eight completion units and a 36-activity denominator.
- Homepage, curriculum, active cloud-AI path, dashboard, library, News Drops and privacy have no horizontal overflow at 390px.
- Offline quote fixture calculates a fractional case; lexical-retrieval fixture renders sources and explicitly reports a no-overlap query.
- A temporary account saves and retrieves the final expanded activity through the local HTTP API, then is deleted.
- No uncaught browser JavaScript errors in the successful run.

The browser suite exercises one path's full review/export round trip; structural/unit checks cover all six. Mocked provider tests do not establish live provider availability. Earlier production Groq/account tests belong to the preceding release and are not proof that 0.6.0 is live.

## Remaining gates
Independent subject-matter review, learner-tested timing, full backup/restore rehearsal, namespace-transfer rehearsal, production account-preservation verification, external rename/push/deployment, authenticated Gemini/learner Cloudflare tests, abuse/load/security review and provider budget enforcement. No email-link sender is configured. Self-review scores are not independently verified assessment.

## Optional browser runner
Start the Node server, install Playwright in a separate QA environment, then run `PREVIEW_URL=http://127.0.0.1:3001 node scripts/browser-check.mjs`. If Playwright is not installed in the repository, set `PLAYWRIGHT_MODULE` to its module path. `QA_DIR` selects an output directory; otherwise temporary OS storage is used. Playwright is test tooling, not a runtime dependency.

## Editorial Collection / 0.7.0
44 automated tests pass. The reference page’s actual CSS was inspected for its cream, burgundy, terracotta and gold palette, serif headings, rounded cards and cover/detail layout. Public and learner pages were rebuilt locally in that format. Additional Chromium checks verify public collection arrows, six selectors, Home/End keyboard navigation, course entry, cream background, native serif heading, account-dialog theme, and seven public/learner routes at 360, 390, 768 and 1024px without horizontal overflow. Existing offline download/edit/reopen/import and final-activity account save/delete checks pass under the new theme. Screenshots were visually inspected; a collapsed catalogue-card column found during inspection was fixed before the final run.

No external push, hostname transfer, account-store migration or production deployment was performed. The running preview is the current verified build.
