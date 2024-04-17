import express from 'express';
import Database from 'better-sqlite3';
const db = new Database('../users.db');

db.exec(`
    CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        username TEXT NOT NULL,
        password TEXT NOT NULL,
        email TEXT NOT NULL,
        name TEXT NOT NULL
    );
`);

export function checkUser(username, password){

  const stmt = db.prepare('SELECT COUNT(*) as count FROM users WHERE username = ? AND password = ?');
  const result = stmt.get(username, password);
  return result.count > 0;
}


export const addUser = (username, password, email, name) =>{
  const result = db
        .prepare('INSERT INTO users (username, password, email, name) VALUES (?, ?, ?, ?)')
        .run(username, password, email, name);
}

export default { addUser, checkUser};
  