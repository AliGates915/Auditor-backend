const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
const adminRoutes = require('./routes/adminRoutes');


// Load environment variables
dotenv.config();

// Create Express app
const app = express();

// Enable CORS for all requests
app.use(cors({
  origin: [
    'https://auditor-frontend.vercel.app',  // Allow this frontend domain
    'http://localhost:5173'                 // If testing locally
  ],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true, // Allow sending cookies or authentication tokens
}));


// Middleware to parse JSON
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Server running!');
});


// Routes
app.use('/auth', authRoutes);
app.use('/admin', adminRoutes);

// MongoDB connection
mongoose
  .connect(process.env.MONGOO_URI, {
  
  })
  .then(() => console.log('DB connection successful'))
  .catch((err) => {
    console.error('DB connection error:', err.message);
  });

// Start server
const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`App running on port ${port}`);

});

