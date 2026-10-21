CREATE TABLE IF NOT EXISTS learners (id TEXT PRIMARY KEY, username TEXT NOT NULL UNIQUE, salt TEXT NOT NULL, password_hash TEXT NOT NULL, recovery_hash TEXT NOT NULL, created_at INTEGER NOT NULL);
CREATE TABLE IF NOT EXISTS sessions (token_hash TEXT PRIMARY KEY, learner_id TEXT NOT NULL REFERENCES learners(id) ON DELETE CASCADE, expires_at INTEGER NOT NULL);
CREATE INDEX IF NOT EXISTS sessions_expiry ON sessions(expires_at);
CREATE TABLE IF NOT EXISTS workspaces (learner_id TEXT NOT NULL REFERENCES learners(id) ON DELETE CASCADE, course_id TEXT NOT NULL, content TEXT NOT NULL, updated_at INTEGER NOT NULL, PRIMARY KEY(learner_id,course_id));
CREATE TABLE IF NOT EXISTS learning_events (id TEXT PRIMARY KEY, learner_id TEXT NOT NULL REFERENCES learners(id) ON DELETE CASCADE, event TEXT NOT NULL, course_id TEXT NOT NULL, created_at INTEGER NOT NULL);
CREATE INDEX IF NOT EXISTS events_date ON learning_events(created_at);
