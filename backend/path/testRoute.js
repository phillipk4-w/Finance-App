import express from 'express';
import bodyParser from 'body-parser';
import { login } from '../controllers/authController.js';
import cors from 'cors';

const router = express.Router();

// Middleware
router.use(bodyParser.json());
router.use(cors());

// Login route
router.post('/login', login);
console.log("testRoute.js: Router setup complete");

export default router;

