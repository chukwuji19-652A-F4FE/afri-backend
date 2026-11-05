const express = require('express');
const app = express();
const path = require("path");

const PORT = process.env.PORT || 3000;

// Validation file
app.get('/validation-key.txt', (req, res) => {
  res.sendFile(path.join(__dirname, 'validation-key.txt'));
});

// Payment callback endpoint
app.get('/payment-callback', (req, res) => {
  res.send('Payment callback received!');
});

// Serve frontend
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});