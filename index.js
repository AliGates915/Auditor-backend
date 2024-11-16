const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
const adminRoutes = require('./routes/adminRoutes');

const app = express()
app.use(express.json());
// Load environment variables
dotenv.config();

app.use(cors({
  origin: true, 
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  credentials: true,
}));


// const corsConfig = {
//   credentials: true,
//   origin: true, // Allow only your frontend
// };

// app.options('*', cors(corsConfig)); // Handle preflight requests


// app.use((req, res, next) => {
//   res.header(
//   'Access-Control-Allow-Origin',
//   "https://auditor-frontend.vercel.app"
//   );
//   res.header("Access-Control-Allow-Methods", 'GET, POST, PUT, DELETE, OPTIONS');
//   res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
//   res.header("Access-Control-Allow-Credentials", true);
  
//   console.log("Request received:", req.method, req.url);
  
//   next();
//   });


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


