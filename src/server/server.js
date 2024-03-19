import express from 'express';
import cors from 'cors';
import axios from 'axios';
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
// cors middleware for your Node.js server to enable CORS and restrict access to your API endpoints.

// API endpoints for fetching search results
app.get('/api/search', async (req, res) => {
  try {
    const { query } = req.query;
    const response = await axios.get(`https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=${query}&format=json`);
    res.header('Access-Control-Allow-Origin', '*'); // Allow requests from any origin
    res.header('Access-Control-Allow-Methods', 'GET'); // Allow GET requests
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching search results:', error);
    res.status(500).json({ error: 'Error fetching search results' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
