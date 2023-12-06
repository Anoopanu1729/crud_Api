const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// Load environment variables from .env file
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());


mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error.message);
  });

// API Routes
const customerRoutes = require('./routes/customerRoutes');
app.use('/customers', customerRoutes);

// Start Server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
