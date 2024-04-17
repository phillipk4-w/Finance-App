// Import required modules
import express from 'express';
import bodyParser from 'body-parser';
import testRoute from './path/testRoute.js';
import cors from 'cors';

// Create an Express application
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Use the test route
app.use('/test', testRoute);

// Define route handler for the root route
app.get('/test', (req, res) => {
  res.send('Hello World!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});



