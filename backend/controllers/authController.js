// controllers/authController.js

import { getUserByUsername } from "../models/user.js";

export function login(req, res) {
  const { username, password } = req.body;
  const user = getUserByUsername(username);

  if (!user || user.password !== password) {
    return res.status(401).json({ error: 'Invalid username or password' });
  }

  // Authentication successful
  res.json({ message: 'Login successful' });
}

