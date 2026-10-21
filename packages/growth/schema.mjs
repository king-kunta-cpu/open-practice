export const growthSchema = `CREATE TABLE IF NOT EXISTS growth_events (
 id TEXT PRIMARY KEY,
 visitor TEXT NOT NULL,
 event TEXT NOT NULL,
 activity TEXT NOT NULL,
 source TEXT NOT NULL,
 day INTEGER NOT NULL,
 created_at INTEGER NOT NULL,
 UNIQUE(visitor,event,activity,day)
);
CREATE INDEX IF NOT EXISTS growth_events_date ON growth_events(created_at);
CREATE TABLE IF NOT EXISTS growth_optouts (
 visitor_hash TEXT PRIMARY KEY,
 expires_at INTEGER NOT NULL
);
`;
