const express = require('express');
const app = express();
const path = require("path");

const PORT = process.env.PORT || 3000;

// ✅ Explicit route for validation file
app.get('/validation-key.txt', (req, res) => {
  res.sendFile(path.join(__dirname, 'validation-key.txt'));
});

// AfriPiPay payment callback endpoint
app.get('/payment-callback', (req, res) => {
  res.send('Payment callback received!');
});

// Health check endpoint
app.get('/', (req, res) => {
  res.send('AfriPiPay backend is running!');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
