# MERN Stack eCommerce App

This is a full-stack eCommerce web application built using the MERN stack (MongoDB, Express, React, Node.js). The app allows users to browse products, add them to their cart, and proceed to checkout. It includes user authentication, payment integration, and an admin panel to manage products, orders, and users.

## Features

- **User Authentication**: User sign-up, login, and authentication via JWT (JSON Web Tokens).
- **Product Management**: Admins can add, edit, and delete products.
- **Shopping Cart**: Users can add/remove products to/from their shopping cart.
- **Order Management**: Users can place orders, and admins can manage orders.
- **Payment Integration**: Integration with payment gateway (e.g., Stripe, PayPal).

## Tech Stack

- **Frontend**:
  - React
  - React Router for navigation
  - Axios for API requests

- **Backend**:
  - Node.js
  - Express.js
  - MongoDB for the database
  - JWT for authentication
  - bcrypt.js for password hashing
  - dotenv for environment variable management

- **Payment Gateway**:
  - Stripe integration

## Installation

### Prerequisites

- Node.js (>= 22.17.x)
- MongoDB (either locally or use MongoDB Atlas)
- Stripe account (if using payment integration)

### Step 1: Clone the repository

```bash
git clone https://github.com/yourusername/mern-ecommerce-app.git
cd mern-ecommerce-app
Step 2: Install Backend Dependencies
Navigate to the backend directory and install the dependencies:

bash
Copy code
cd backend
npm install
Step 3: Set up Environment Variables
Create a .env file in the backend directory and add the following variables:

env
Copy code
MONGO_URI=mongodb://localhost:27017/yourdbname
JWT_SECRET=your_jwt_secret
PAYPAL_CLIENT_ID=your_paypal_client_id (if using PayPal)
STRIPE_SECRET_KEY=your_stripe_secret_key (if using Stripe)
PORT=5000
Step 4: Install Frontend Dependencies
Navigate to the frontend directory and install the dependencies:

bash
Copy code
cd ../frontend
npm install
Step 5: Run the App
Start the Backend Server:
Navigate to the backend directory and run:

bash
Copy code
npm run dev
This will start the backend server at http://localhost:5000.

Start the Frontend Server:
In a separate terminal window, navigate to the frontend directory and run:

bash
Copy code
npm start
This will start the frontend development server at http://localhost:3000.

Now, you can open your browser and navigate to http://localhost:3000 to access the app.
