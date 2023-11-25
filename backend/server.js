require('dotenv').config();

const express = require('express');
const app = express();

// Access Environment Variables
const PORT = process.env.PORT || 3000;

app.use(express.json()); // Middleware to parse JSON bodies

app.get('/', (req, res) => {
  res.send('AxleAxis Backend Running');
});

// Integrating User Routes
const userRoutes = require('./routes/userRoutes');
app.use('/api/users', userRoutes); // User routes

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
