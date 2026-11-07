const express = require('express');
const app = express();
const path = require("path");

const PORT = process.env.PORT || 3000;

app.use(express.json());

// Validation file
app.get('/validation-key.txt', (req, res) => {
  res.sendFile(path.join(__dirname, 'validation-key.txt'));
});

// Payment callback endpoint
app.post('/payment-callback', (req, res) => {

  console.log("Payment callback:", req.body);

  res.json({
    success: true,
    received: req.body
  });

});

// Serve frontend
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});