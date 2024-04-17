// authController.js
import {  addUser, checkUser } from "../db/models/user.js";

export function login(req, res) {
  const { username, password } = req.body;

  if (!checkUser(username, password)) {
      return res.status(401).json({ message: 'Invalid username or password' });
  }

  res.json({ message: 'Login successful' });
}

export function register(req, res) {
  const { username, password, email, name } = req.body;


  if (checkUser(username, password)) {
      return res.status(400).json({ message: 'Username is already taken' });
  }

  
  const newUser = addUser(username, password, email, name);

  res.json({ message: 'Registration successful', user: newUser });
}
export default {register, login};

