CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY,
    created INTEGER NOT NULL DEFAULT extract(epoch from timestamp now()),
    username VARCHAR(64) UNIQUE NOT NULL,
    password VARCHAR(128) NOT NULL,
);

