import { getUserByUsername } from "../db/models/user.js";

export function login(req, res) {
  const { username, password } = req.body;

  // Call getUserByUsername with a callback function
  getUserByUsername(username, (err, user) => {
    if (err) {
      // Handle database error
      return res.status(500).json({ error: 'Database error' });
    }
    
    if (!user || user.password !== password) {
      // User not found or password incorrect
      return res.status(401).json({ error: 'Invalid username or password' });
    }

    // Authentication successful
    res.json({ message: 'Login successful' });
  });
}


