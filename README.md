# 📦 StockMaster - Inventory Management System

A modern, full-stack inventory management system built with React and Express.js. StockMaster provides comprehensive warehouse and stock management capabilities with a beautiful, animated user interface.

![StockMaster](https://img.shields.io/badge/version-1.0.0-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Architecture](#-architecture)
- [Getting Started](#-getting-started)
- [Project Structure](#-project-structure)
- [Database Schema](#-database-schema)
- [API Documentation](#-api-documentation)
- [Frontend Pages](#-frontend-pages)
- [Authentication & Security](#-authentication--security)
- [Seeding Data](#-seeding-data)
- [Environment Variables](#-environment-variables)
- [Usage Guide](#-usage-guide)
- [Contributing](#-contributing)

---

## 🎯 Overview

**StockMaster** is a comprehensive inventory management system designed for warehouses, retail stores, and distribution centers. It provides real-time stock tracking, multi-location management, and complete audit trails for all inventory movements.

### Key Capabilities:
- **Multi-location inventory tracking** across warehouses and storage locations
- **Real-time stock movements** with receipts, deliveries, and transfers
- **Product management** with SKU, categories, and reorder levels
- **Dashboard analytics** with charts and key metrics
- **User authentication** with JWT and role-based access
- **Password recovery** via email OTP
- **Complete audit trail** with ledger entries for all transactions

---

## ✨ Features

### 📊 Dashboard
- Real-time inventory overview
- Stock value calculations
- Low stock alerts
- Recent activity feed
- Interactive charts (Recharts)
- Dynamic filters by date range

### 📦 Product Management
- Create, read, update, delete products
- SKU and barcode support
- Category organization
- Unit of measure (UOM) tracking
- Reorder level monitoring
- Stock location visibility

### 🚚 Operations
- **Receipts**: Record incoming stock from suppliers
- **Deliveries**: Process outgoing stock to customers
- **Transfers**: Move stock between locations
- **Adjustments**: Handle stock corrections and adjustments
- Multi-item transactions
- Location-based inventory

### 👤 User Management
- User registration and login
- JWT-based authentication
- Password reset via email OTP
- User profile management
- Role-based access control

### 🎨 Modern UI/UX
- Responsive design with Tailwind CSS
- Smooth animations with Framer Motion
- Loading skeletons for better UX
- Toast notifications
- Glassmorphism effects
- Dark mode support
- Lucide React icons

---

## 🛠 Tech Stack

### Frontend
- **React 19** - UI library
- **React Router DOM 7** - Client-side routing
- **Tailwind CSS 4** - Utility-first CSS framework
- **Framer Motion 12** - Animation library
- **Recharts 3** - Charting library
- **Lucide React** - Icon library
- **Axios** - HTTP client
- **Vite 7** - Build tool and dev server

### Backend
- **Node.js** - JavaScript runtime
- **Express 5** - Web framework
- **Sequelize 6** - ORM for MySQL
- **MySQL 2** - Database
- **JWT** - Authentication tokens
- **Bcrypt** - Password hashing
- **Nodemailer** - Email sending
- **dotenv** - Environment configuration

---

## 🏗 Architecture

### System Architecture

```
┌─────────────────┐         ┌─────────────────┐         ┌─────────────────┐
│                 │         │                 │         │                 │
│  React Frontend │ ◄─────► │  Express API    │ ◄─────► │  MySQL Database │
│  (Port 5173)    │  HTTP   │  (Port 4000)    │  SQL    │                 │
│                 │  REST   │                 │         │                 │
└─────────────────┘         └─────────────────┘         └─────────────────┘
```

### Application Flow

1. **User Authentication**
   - User registers/logs in via frontend
   - Backend validates credentials and issues JWT token
   - Token stored in localStorage and sent with each request

2. **Data Flow**
   - Frontend makes API calls via Axios
   - Backend middleware validates JWT token
   - Controllers process business logic
   - Sequelize ORM interacts with MySQL
   - Response sent back to frontend

3. **Inventory Operations**
   - User creates receipt/delivery/transfer
   - Backend validates data and creates transaction
   - Stock levels updated automatically
   - Ledger entries created for audit trail

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v16 or higher)
- **MySQL** (v8 or higher)
- **npm** or **yarn**

### Installation

#### 1. Clone the Repository
```bash
git clone <repository-url>
cd stock_Master
```

#### 2. Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file in the `backend` directory:
```env
PORT=4000
DB_HOST=localhost
DB_PORT=3306
DB_NAME=stockmaster
DB_USER=root
DB_PASS=your_mysql_password
JWT_SECRET=your_jwt_secret_here
JWT_EXPIRES_IN=7d
OTP_FROM_EMAIL=youremail@example.com
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your_email@gmail.com
SMTP_PASS=your_app_password
```

#### 3. Database Setup

Create the MySQL database:
```sql
CREATE DATABASE stockmaster;
```

The tables will be automatically created when you start the server (Sequelize auto-sync).

#### 4. Frontend Setup

```bash
cd ../frontend
npm install
```

#### 5. Start the Application

**Terminal 1 - Backend:**
```bash
cd backend
node server.js
```

**Terminal 2 - Frontend:**
```bash
cd frontend
npm run dev
```

The application will be available at:
- Frontend: `http://localhost:5173`
- Backend API: `http://localhost:4000`

---

## 📁 Project Structure

```
stock_Master/
├── backend/
│   ├── config/
│   │   └── db.js                 # Database configuration
│   ├── controllers/
│   │   ├── authController.js     # Authentication logic
│   │   ├── dashboardController.js # Dashboard data
│   │   ├── operationsController.js # Inventory operations
│   │   └── productController.js  # Product CRUD
│   ├── middleware/
│   │   ├── authMiddleware.js     # JWT verification
│   │   ├── errorHandler.js       # Error handling
│   │   └── validators.js         # Input validation
│   ├── models/
│   │   ├── User.js               # User model
│   │   ├── Product.js            # Product model
│   │   ├── StockLocation.js      # Location model
│   │   ├── Stock.js              # Stock levels
│   │   ├── Receipt.js            # Incoming stock
│   │   ├── ReceiptItem.js        # Receipt line items
│   │   ├── Delivery.js           # Outgoing stock
│   │   ├── DeliveryItem.js       # Delivery line items
│   │   ├── Transfer.js           # Stock transfers
│   │   ├── TransferItem.js       # Transfer line items
│   │   ├── Adjustment.js         # Stock adjustments
│   │   ├── Ledger.js             # Audit trail
│   │   └── PasswordReset.js      # Password reset tokens
│   ├── routes/
│   │   ├── authRoutes.js         # Auth endpoints
│   │   ├── productRoutes.js      # Product endpoints
│   │   ├── operationsRoutes.js   # Operations endpoints
│   │   └── dashboardRoutes.js    # Dashboard endpoints
│   ├── utils/
│   │   └── emailService.js       # Email sending utility
│   ├── .env.example              # Environment template
│   ├── seed_data.js              # Demo data seeder
│   ├── seed_location.js          # Location seeder
│   ├── server.js                 # Application entry point
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Layout.jsx        # Main layout with sidebar
│   │   │   └── ProtectedRoute.jsx # Route protection
│   │   ├── context/
│   │   │   └── AuthContext.jsx   # Authentication context
│   │   ├── pages/
│   │   │   ├── Login.jsx         # Login page
│   │   │   ├── Register.jsx      # Registration page
│   │   │   ├── ForgotPassword.jsx # Password recovery
│   │   │   ├── ResetPassword.jsx # Password reset
│   │   │   ├── Dashboard.jsx     # Main dashboard
│   │   │   ├── Products.jsx      # Product management
│   │   │   ├── Operations.jsx    # Inventory operations
│   │   │   ├── Profile.jsx       # User profile
│   │   │   └── Settings.jsx      # Application settings
│   │   ├── services/
│   │   │   └── api.js            # Axios API client
│   │   ├── App.jsx               # Root component
│   │   ├── App.css               # Global styles
│   │   ├── index.css             # Tailwind imports
│   │   └── main.jsx              # Entry point
│   ├── index.html
│   ├── vite.config.js
│   ├── tailwind.config.js
│   └── package.json
│
└── README.md
```

---

## 🗄 Database Schema

### Entity Relationship Diagram

```
┌─────────────┐       ┌──────────────┐       ┌─────────────────┐
│    User     │       │   Product    │       │ StockLocation   │
├─────────────┤       ├──────────────┤       ├─────────────────┤
│ id (PK)     │       │ id (PK)      │       │ id (PK)         │
│ name        │       │ name         │       │ name            │
│ email       │       │ sku          │       │ description     │
│ password    │       │ category     │       │ type            │
│ role        │       │ uom          │       │ createdAt       │
│ createdAt   │       │ reorderLevel │       │ updatedAt       │
└─────────────┘       └──────────────┘       └─────────────────┘
                             │                        │
                             │                        │
                             ▼                        ▼
                      ┌─────────────────────────────────┐
                      │           Stock                 │
                      ├─────────────────────────────────┤
                      │ id (PK)                         │
                      │ productId (FK → Product)        │
                      │ locationId (FK → StockLocation) │
                      │ quantity                        │
                      │ updatedAt                       │
                      └─────────────────────────────────┘
                                    │
                                    │
        ┌───────────────────────────┼───────────────────────────┐
        ▼                           ▼                           ▼
┌───────────────┐          ┌────────────────┐         ┌─────────────────┐
│   Receipt     │          │   Delivery     │         │    Transfer     │
├───────────────┤          ├────────────────┤         ├─────────────────┤
│ id (PK)       │          │ id (PK)        │         │ id (PK)         │
│ supplier      │          │ customer       │         │ createdAt       │
│ createdAt     │          │ createdAt      │         │ updatedAt       │
└───────────────┘          └────────────────┘         └─────────────────┘
        │                           │                          │
        ▼                           ▼                          ▼
┌───────────────┐          ┌────────────────┐         ┌─────────────────┐
│ ReceiptItem   │          │ DeliveryItem   │         │  TransferItem   │
├───────────────┤          ├────────────────┤         ├─────────────────┤
│ id (PK)       │          │ id (PK)        │         │ id (PK)         │
│ receiptId (FK)│          │ deliveryId (FK)│         │ transferId (FK) │
│ productId (FK)│          │ productId (FK) │         │ productId (FK)  │
│ locationId(FK)│          │ locationId(FK) │         │ fromLocationId  │
│ quantity      │          │ quantity       │         │ toLocationId    │
└───────────────┘          └────────────────┘         │ quantity        │
                                                       └─────────────────┘

                      ┌─────────────────────────────────┐
                      │           Ledger                │
                      ├─────────────────────────────────┤
                      │ id (PK)                         │
                      │ productId (FK → Product)        │
                      │ locationId (FK → StockLocation) │
                      │ transactionType                 │
                      │ quantity                        │
                      │ balanceAfter                    │
                      │ referenceId                     │
                      │ createdAt                       │
                      └─────────────────────────────────┘
```

### Key Models

#### User
- Stores user credentials and profile information
- Passwords hashed with bcrypt
- Supports roles: `admin`, `warehouse_staff`, `viewer`

#### Product
- Product master data
- SKU for unique identification
- Reorder levels for low stock alerts

#### StockLocation
- Warehouses and storage locations
- Hierarchical structure support

#### Stock
- Current inventory levels
- One record per product-location combination
- Updated automatically by transactions

#### Receipt/Delivery/Transfer
- Transaction headers
- Track supplier/customer information
- Timestamp for audit

#### ReceiptItem/DeliveryItem/TransferItem
- Transaction line items
- Link to products and locations
- Quantity tracking

#### Ledger
- Complete audit trail
- Every stock movement recorded
- Immutable transaction log

---

## 🔌 API Documentation

### Base URL
```
http://localhost:4000/api
```

### Authentication Endpoints

#### POST `/auth/signup`
Register a new user.
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123",
  "role": "warehouse_staff"
}
```

#### POST `/auth/login`
Login and receive JWT token.
```json
{
  "email": "john@example.com",
  "password": "password123"
}
```
**Response:**
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": 1,
    "name": "John Doe",
    "email": "john@example.com",
    "role": "warehouse_staff"
  }
}
```

#### POST `/auth/forgot-password`
Request password reset OTP.
```json
{
  "email": "john@example.com"
}
```

#### POST `/auth/reset-password`
Reset password with OTP.
```json
{
  "email": "john@example.com",
  "otp": "123456",
  "newPassword": "newpassword123"
}
```

### Product Endpoints

All product endpoints require authentication header:
```
Authorization: Bearer <token>
```

#### GET `/products`
Get all products with stock information.

#### POST `/products`
Create a new product.
```json
{
  "name": "Steel Rods",
  "sku": "STL-001",
  "category": "Raw Materials",
  "uom": "kg",
  "reorderLevel": 100
}
```

#### PUT `/products/:id`
Update a product.

#### DELETE `/products/:id`
Delete a product.

### Operations Endpoints

#### GET `/ops/locations`
Get all stock locations.

#### POST `/ops/locations`
Create a new location.
```json
{
  "name": "Warehouse A",
  "description": "Main warehouse",
  "type": "warehouse"
}
```

#### POST `/ops/receipts`
Record incoming stock.
```json
{
  "supplier": "ABC Suppliers",
  "items": [
    {
      "productId": 1,
      "locationId": 1,
      "quantity": 100
    }
  ]
}
```

#### POST `/ops/deliveries`
Record outgoing stock.
```json
{
  "customer": "XYZ Company",
  "items": [
    {
      "productId": 1,
      "locationId": 1,
      "quantity": 50
    }
  ]
}
```

#### POST `/ops/transfers`
Transfer stock between locations.
```json
{
  "items": [
    {
      "productId": 1,
      "fromLocationId": 1,
      "toLocationId": 2,
      "quantity": 25
    }
  ]
}
```

#### POST `/ops/adjustments`
Adjust stock levels.
```json
{
  "productId": 1,
  "locationId": 1,
  "quantity": -5,
  "reason": "Damaged goods"
}
```

### Dashboard Endpoints

#### GET `/dashboard/stats`
Get dashboard statistics.
```json
{
  "totalProducts": 150,
  "totalStock": 5000,
  "lowStockItems": 12,
  "stockValue": 125000
}
```

#### GET `/dashboard/recent-activity`
Get recent inventory movements.

---

## 🎨 Frontend Pages

### 1. Login Page (`/login`)
- Email and password authentication
- Form validation
- "Remember me" option
- Link to registration and forgot password
- Smooth animations on load

### 2. Register Page (`/register`)
- User registration form
- Name, email, password, role selection
- Password strength indicator
- Redirect to login after success

### 3. Forgot Password (`/forgot-password`)
- Email input for OTP request
- Email sent via Nodemailer
- OTP valid for 10 minutes

### 4. Reset Password (`/reset-password`)
- OTP verification
- New password input
- Password confirmation

### 5. Dashboard (`/`)
- Key metrics cards (total products, stock, low stock, value)
- Interactive charts (stock by category, recent movements)
- Recent activity feed
- Date range filters
- Quick action buttons

### 6. Products Page (`/products`)
- Product listing table
- Search and filter functionality
- Add/Edit/Delete products
- Stock levels by location
- Low stock indicators
- Modal forms for CRUD operations

### 7. Operations Page (`/operations`)
- Tab-based interface:
  - **Receipts**: Record incoming stock
  - **Deliveries**: Process outgoing stock
  - **Transfers**: Move stock between locations
  - **Adjustments**: Correct stock levels
- Multi-item transaction support
- Location selection
- Transaction history

### 8. Profile Page (`/profile`)
- User information display
- Edit profile details
- Change password
- Activity log

### 9. Settings Page (`/settings`)
- Application preferences
- Theme settings
- Notification preferences
- System configuration

---

## 🔐 Authentication & Security

### JWT Authentication
- Tokens issued on login
- 7-day expiration (configurable)
- Stored in localStorage
- Sent in Authorization header

### Password Security
- Bcrypt hashing with salt rounds
- Minimum password requirements
- Password reset via email OTP

### Protected Routes
- Frontend: `ProtectedRoute` component checks auth
- Backend: `authMiddleware` validates JWT

### Role-Based Access
- Roles: `admin`, `warehouse_staff`, `viewer`
- Future: Implement permission-based restrictions

---

## 🌱 Seeding Data

### Quick Start with Demo Data

Run the seed script to populate the database with sample data:

```bash
cd backend
node seed_data.js
```

This will create:
- ✅ Demo user account
- ✅ 8 sample products
- ✅ 4 stock locations
- ✅ 2 sample receipts
- ✅ 2 sample deliveries
- ✅ 1 sample transfer

**Demo Login Credentials:**
```
Email: demo@stockmaster.com
Password: demo123
```

### Manual Location Seeding

To create a single location:
```bash
node seed_location.js
```

---

## ⚙️ Environment Variables

### Backend `.env`

| Variable | Description | Example |
|----------|-------------|---------|
| `PORT` | Server port | `4000` |
| `DB_HOST` | MySQL host | `localhost` |
| `DB_PORT` | MySQL port | `3306` |
| `DB_NAME` | Database name | `stockmaster` |
| `DB_USER` | Database user | `root` |
| `DB_PASS` | Database password | `password` |
| `JWT_SECRET` | Secret for JWT signing | `your_secret_key` |
| `JWT_EXPIRES_IN` | Token expiration | `7d` |
| `OTP_FROM_EMAIL` | Sender email for OTP | `noreply@stockmaster.com` |
| `SMTP_HOST` | SMTP server | `smtp.gmail.com` |
| `SMTP_PORT` | SMTP port | `587` |
| `SMTP_USER` | SMTP username | `your_email@gmail.com` |
| `SMTP_PASS` | SMTP password | `your_app_password` |

### Frontend Configuration

The frontend uses Vite and connects to the backend API at `http://localhost:4000/api` (configured in `src/services/api.js`).

---

## 📖 Usage Guide

### Creating Your First Product

1. Login to the application
2. Navigate to **Products** page
3. Click **Add Product** button
4. Fill in product details:
   - Name
   - SKU (unique identifier)
   - Category
   - Unit of Measure
   - Reorder Level
5. Click **Save**

### Recording Stock Receipt

1. Go to **Operations** page
2. Select **Receipts** tab
3. Click **New Receipt**
4. Enter supplier name
5. Add items:
   - Select product
   - Select location
   - Enter quantity
6. Click **Submit**

### Transferring Stock

1. Go to **Operations** page
2. Select **Transfers** tab
3. Click **New Transfer**
4. Add items:
   - Select product
   - Select from location
   - Select to location
   - Enter quantity
5. Click **Submit**

### Viewing Dashboard Analytics

1. Navigate to **Dashboard**
2. View key metrics at the top
3. Use date filters to view specific periods
4. Check charts for stock distribution
5. Review recent activity feed

---

## 🎯 How It All Works

### Application Workflow

#### 1. **User Authentication Flow**
```
User → Login Form → API /auth/login → JWT Token → localStorage → Authenticated
```
- User enters credentials
- Frontend sends POST to `/api/auth/login`
- Backend validates credentials with bcrypt
- JWT token generated and returned
- Token stored in localStorage
- AuthContext provides token to all components

#### 2. **Product Management Flow**
```
User → Products Page → Add Product → API /products → Database → UI Update
```
- User fills product form
- Frontend validates input
- POST request to `/api/products` with JWT
- Backend creates Product record
- Stock records initialized at 0 for all locations
- Frontend refreshes product list

#### 3. **Stock Receipt Flow**
```
Receipt Form → API /ops/receipts → Create Receipt → Create Items → Update Stock → Ledger Entry
```
- User creates receipt with multiple items
- Backend creates Receipt header
- For each item:
  - Create ReceiptItem record
  - Find or create Stock record
  - Increase quantity
  - Create Ledger entry (type: 'receipt')
- Transaction ensures atomicity

#### 4. **Stock Delivery Flow**
```
Delivery Form → API /ops/deliveries → Validate Stock → Create Delivery → Decrease Stock → Ledger Entry
```
- User creates delivery
- Backend validates sufficient stock
- Creates Delivery and DeliveryItem records
- Decreases Stock quantity
- Creates Ledger entry (type: 'delivery')
- Prevents negative stock

#### 5. **Stock Transfer Flow**
```
Transfer Form → API /ops/transfers → Validate Stock → Move Stock → Ledger Entries (2)
```
- User creates transfer between locations
- Backend validates stock at source
- Decreases stock at source location
- Increases stock at destination location
- Creates 2 Ledger entries (out/in)

#### 6. **Dashboard Data Flow**
```
Dashboard Load → API /dashboard/stats → Aggregate Queries → Charts & Metrics
```
- Frontend requests dashboard data
- Backend runs aggregate queries:
  - Total products count
  - Sum of all stock quantities
  - Count of products below reorder level
  - Calculate total stock value
- Returns formatted data
- Frontend renders with Recharts

### Database Transaction Flow

All inventory operations use **database transactions** to ensure data consistency:

```javascript
// Example: Receipt creation
const transaction = await sequelize.transaction();
try {
  // 1. Create receipt header
  const receipt = await Receipt.create({...}, { transaction });
  
  // 2. Create receipt items
  for (const item of items) {
    await ReceiptItem.create({...}, { transaction });
    
    // 3. Update stock
    const stock = await Stock.findOne({...}, { transaction });
    stock.quantity += item.quantity;
    await stock.save({ transaction });
    
    // 4. Create ledger entry
    await Ledger.create({...}, { transaction });
  }
  
  // 5. Commit if all successful
  await transaction.commit();
} catch (error) {
  // 6. Rollback on any error
  await transaction.rollback();
  throw error;
}
```

### Frontend State Management

#### AuthContext
- Manages authentication state globally
- Provides login/logout functions
- Stores user information
- Handles token refresh

#### Component State
- Local state with `useState` for forms
- `useEffect` for data fetching
- Loading states for better UX
- Error handling with toast notifications

### API Request Flow

```javascript
// Frontend API call
import api from './services/api';

// api.js automatically adds JWT token
const response = await api.get('/products');

// Backend middleware validates token
authMiddleware → Controller → Database → Response
```

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License.

---

## 🙏 Acknowledgments

- **React Team** for the amazing UI library
- **Express.js** for the robust backend framework
- **Sequelize** for the powerful ORM
- **Tailwind CSS** for the utility-first CSS framework
- **Framer Motion** for smooth animations

---

## 📞 Support

For issues and questions:
- Create an issue on GitHub
- Email: support@stockmaster.com

---

## 🚀 Future Enhancements

- [ ] Barcode scanning integration
- [ ] Mobile app (React Native)
- [ ] Advanced reporting and analytics
- [ ] Multi-warehouse support with inter-warehouse transfers
- [ ] Batch and serial number tracking
- [ ] Integration with accounting systems
- [ ] Real-time notifications with WebSockets
- [ ] Export to Excel/PDF
- [ ] Advanced user permissions
- [ ] Audit log viewer

---

**Built with ❤️ by the StockMaster Team**
