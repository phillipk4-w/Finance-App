// server.js or server.mjs
import express from 'express';
import path from 'path';



const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.static(path.join(new URL('frontend/build', import.meta.url).pathname)));
// Serve static files from the 'frontend/build' directory
app.use(express.static(path.join(__dirname, 'frontend/build')));

// API route
app.get('/api/message', (req, res) => {
  res.json({ message: 'Hello from the backend!' });
});

// Catch-all route to serve React's 'index.html'
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'frontend/build/index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
