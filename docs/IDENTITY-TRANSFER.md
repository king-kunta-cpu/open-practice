# Preserve accounts during the identity transfer

**Not executed for 0.6.0.** These are operator steps, not evidence of a completed migration. Do not point production at a fresh database and assume existing learners have moved.

1. Authenticate with narrowly scoped, rotated deployment credentials. Confirm the actual current source Worker name in the account; supply it as `SOURCE_WORKER` through the environment rather than hardcoding it in current source.
2. Obtain the source settings and its `LEARNER_DB` namespace. List the namespace objects and confirm the original object ID. Earlier inspection found one object; recheck immediately before deployment. Preserve the namespace and original object ID in private operational records. Do not call `idFromName` with a new name for existing data.
3. Arrange a maintenance window and a recoverable backup/restore plan. Learner account export is available; a full operator backup/restore tool is not implemented. Namespace transfer alone is not a backup. Rehearse on a separate disposable deployment before changing real account storage.
4. Export `SOURCE_WORKER` and `DB_OBJECT_ID` locally, then run `node scripts/prepare-worker-transfer.mjs`. This produces ignored `.wrangler/transfer.jsonc` using Cloudflare's `transferred_classes` migration and the original object selector. It does not deploy anything. Inspect the file and current Cloudflare documentation. Never substitute the normal fresh-install migration for this transfer.
5. Build with `npm run build:assets`. After backup and rehearsal, deploy the inspected transfer configuration with Wrangler. Use a reviewed/pinned CLI version. The transfer configuration keeps company AI off initially.
6. Verify that the destination binding has the **same namespace ID**, the original object ID still resolves, and an existing learner can sign in and retrieve the same workspace. Test stale-write rejection and save/reload. Do not create replacement accounts as a substitute for this verification.
7. Copy approved non-secret model configuration and create new destination secrets in the secret manager; never assume secrets migrate with source. Enable the tutor only after an authenticated test and budget review. Verify scheduled retention cleanup and rate-limit bindings.
8. Keep the source available for rollback until verification is complete. Only then replace its public GET/HEAD handling with a redirect to the new host; do not forward credentials or API writes across origins. Preserve the transferred namespace. Do not delete a namespace as a naming cleanup.
9. Rename the remote repository through its authenticated settings/API, update the local remote, push this commit, verify CI, and update public links. Historical commits and third-party licence texts are retained rather than rewritten.
10. Replace this pending status with dated evidence only after successful verification. Retire temporary transfer configuration according to the migration history required by Wrangler; do not revert the original object selector.

Cloudflare reference: https://developers.cloudflare.com/durable-objects/reference/durable-object-class-migrations-legacy/

The standard committed Wrangler configuration is for **fresh installations only**. It deliberately contains no deployment token or production object ID.
