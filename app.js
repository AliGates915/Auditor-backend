const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
const adminRoutes = require('./routes/adminRoutes');


// Load environment variables
dotenv.config();

app.use(
  cors({
    origin: ["https://localhost:5173", "https://auditor-frontend.vercel.app"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: false,
  })
);

// Handle preflight requests
app.options("*", cors());


// Enable CORS for all requests
// app.use(cors({
//   origin: ['http://localhost:5173', 'https://auditor-frontend.vercel.app', 'https://cert.lpgexpress.com.pk'],
//   methods: ['GET', 'POST', 'PUT', 'DELETE'],
//   credentials: true, // Allow cookies and auth tokens
// }));

// const clientURL = 'https://auditor-frontend.vercel.app';

// app.use(cors({
//   origin: clientURL,
//   methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
//   credentials: true, // Allow cookies and auth tokens
// }));

app.use((req, res, next) => {
  console.log("Request received:", req.method, req.url);
  next();
  });

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


