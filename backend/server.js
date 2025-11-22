const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();
const connectDB = require('./config/db'); // Mongoose connection

// Load Mongoose models
require('./models/User');
require('./models/Warehouse');
require('./models/StockLocation');
require('./models/Product');
require('./models/Stock');
require('./models/Receipt');
require('./models/ReceiptItem');
require('./models/Delivery');
require('./models/DeliveryItem');
require('./models/Transfer');
require('./models/TransferItem');
require('./models/Adjustment');
require('./models/Ledger');
require('./models/PasswordReset');

const authRoutes = require('./routes/authRoutes');
const productRoutes = require('./routes/productRoutes');
const operationsRoutes = require('./routes/operationsRoutes');
const dashboardRoutes = require('./routes/dashboardRoutes');

const app = express();
app.use(bodyParser.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);
app.use('/api/ops', operationsRoutes);
app.use('/api/dashboard', dashboardRoutes);

// Test route
app.get('/', (req, res) => res.json({ ok: true, name: 'StockMaster API' }));

async function start() {
  try {
    await connectDB();  // 🔥 Connect MongoDB Atlas
    console.log('MongoDB connected');

    const port = process.env.PORT || 4000;
    app.listen(port, () => console.log('Server running on port', port));

  } catch (err) {
    console.error('Failed to start', err);
    process.exit(1);
  }
}

start();
