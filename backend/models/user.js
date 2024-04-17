// models/user.js

const users = [
    { username: 'admin', password: '@Dmin123' },
    { username: 'jane', password: 'password456' }
  ];
  
  export function getUserByUsername(username) {
    return users.find(user => user.username === username);
  }

  