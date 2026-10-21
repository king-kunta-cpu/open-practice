CREATE TABLE IF NOT EXISTS outreach_leads (domain TEXT PRIMARY KEY, organisation TEXT NOT NULL, source TEXT NOT NULL, email_hash TEXT UNIQUE, email TEXT, unsubscribe_hash TEXT UNIQUE, status TEXT NOT NULL, detail TEXT NOT NULL, updated_at INTEGER NOT NULL);
CREATE TABLE IF NOT EXISTS outreach_runs (day TEXT PRIMARY KEY, created_at INTEGER NOT NULL, result TEXT NOT NULL);
CREATE TABLE IF NOT EXISTS outreach_discovery (url TEXT PRIMARY KEY, title TEXT NOT NULL, found_at INTEGER NOT NULL);
