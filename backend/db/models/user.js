// models/user.js

import {db} from '../database.js';

// Define the schema for the 'users' table
const createUserTable = () => {
  const createUserTableQuery = `
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      username TEXT UNIQUE,
      email TEXT,
      password TEXT
    )
  `;
  
  db.run(createUserTableQuery, (err) => {
    if (err) {
      console.error('Error creating users table:', err.message);
    } else {
      console.log('Users table created successfully');
    }
    const insertUserSQL = `
            INSERT INTO users (username, password)
            VALUES ('admin', 'password123')
        `;
        db.run(insertUserSQL, (err) => {
          if (err) {
              console.error('Error inserting default user:', err.message);
          } else {
              console.log('Default user inserted successfully');
          }
      });

  });
};

// Function to add a new user to the database
export const addUser = (username, email, password) => {
  const addUserQuery = `
    INSERT INTO users (username, email, password)
    VALUES (?, ?, ?)
  `;
  
  db.run(addUserQuery, [username, email, password], (err) => {
    if (err) {
      console.error('Error adding user:', err.message);
    } else {
      console.log('User added successfully');
    }
  });
};

// Function to retrieve a user by username from the database
export const getUserByUsername = (username, callback) => {
  const getUserQuery = `
    SELECT * FROM users
    WHERE username = ?
  `;
  
  db.get(getUserQuery, [username], (err, row) => {
    if (err) {
      console.error('Error retrieving user:', err.message);
      callback(err, null);
    } else {
      callback(null, row);
    }
  });
};

// Create the 'users' table when this module is imported
createUserTable();

export default {
  addUser,
  getUserByUsername
};

  