import express from 'express';
import bodyParser from 'body-parser';
import {  register, login } from '../controllers/authController.js';
import Database from 'better-sqlite3';
const db = new Database('../users.db');
import cors from 'cors';

const router = express.Router();


router.use(bodyParser.json());
router.use(cors());


console.log("testRoute.js: Router setup complete");
router.get('/', (req, res) =>{
    let query = 'SELECT * FROM users';

    const users = db.prepare(query).all();
    res.json({users})
});
router.post('/login', login)
router.post('/register', register);
export default router;

