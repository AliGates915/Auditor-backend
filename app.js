const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
const adminRoutes = require('./routes/adminRoutes');


// Load environment variables
dotenv.config();

const corsOptions ={
  origin:'*', 
  credentials:true,            //access-control-allow-credentials:true
  optionSuccessStatus:200,
}

app.use(cors(corsOptions))


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
//   res.header(
//   'Access-Control-Allow-Origin',
//   "clientURL"
//   );
  // res.header('Access-Control-Allow-Methods', "GET, POST, PUT, DELETE, OPTIONS");
  // res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  // res.header("Access-Control-Allow-Credentials", true);
  // res.setHeader( "Access-Control-Allow-Origin", "https://auditor-frontend.vercel.app" );
  
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


