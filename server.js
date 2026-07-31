const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

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
