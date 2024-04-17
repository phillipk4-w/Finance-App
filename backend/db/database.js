import sqlite3 from 'sqlite3';

// Open SQLite database connection
export const db = new sqlite3.Database(':memory:', (err) => {
    if (err) {
        console.error('Error connecting to SQLite database:', err.message);
    } else {
        console.log('Connected to SQLite database');
    }
});


