require('dotenv').config();

const express = require('express');
const app = express();

// Access Environment Variables
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('AxleAxis Backend Running');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
