import Database from "better-sqlite3";
const db = new Database('users.db');

const createTable = `
    CREATE TABLE IF NOT EXISTS users(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        username TEXT NOT NULL,
        password TEXT NOT NULL,
        email TEXT,
        name TEXT
    )`
    ;

db.exec(createTable);


db.close();


