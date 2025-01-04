const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
const adminRoutes = require('./routes/adminRoutes');
const vehicleRoutes = require('./routes/vehicle.routes');

const app = express();

// Load environment variables
dotenv.config();

app.use(express.json());
app.use(
  cors({
    origin: [
      'https://auditor-frontend.vercel.app',
      'https://cert.lpgexpress.com.pk',
      'http://localhost:5173',
    ],
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    credentials: true,
  })
);

app.get('/', (req, res) => {
  res.send('Server running!');
});

// Routes
app.use('/auth', authRoutes);
app.use('/admin', adminRoutes);
app.use('/vehicle', vehicleRoutes);

// MongoDB connection using .env variable
mongoose
  .connect(process.env.MONGO, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
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
