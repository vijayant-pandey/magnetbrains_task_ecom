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
[git clone https://github.com/yourusername/mern-ecommerce-app.git](https://github.com/vijayant-pandey/magnetbrains_task_ecom.git)
cd mern-ecommerce-app
Step 2: Install Backend Dependencies
Navigate to the backend directory and install the dependencies:

bash
Copy code
cd backend
npm install
Step 3: Set up Environment Variables
Create a .env file in the backend directory and add the following variables:

env -- backend
Copy code
PORT=5000
MONGO_URI=mongodb+srv://vijayantecom:vkp12311@projects.yywqc.mongodb.net/magnetbrains-ecom?retryWrites=true&w=majority&appName=PROJECTS
JWT_SECRET=some_super_secret_key_here
JWT_EXPIRES_IN=7d
STRIPE_SECRET_KEY=sk_test_51QSO34P3n1RfUKI1b4RRBab2WaR1W9xtvBQfDQGblqmqxXz2BltNjdzT5dTwL2UsNOglJtLLtnKYKqHWpNVsnHgn00BFdDuAka
CLIENT_URL=http://localhost:3000

env --rontend
REACT_APP_API_URL=http://localhost:5000/api
REACT_APP_STRIPE_PUBLIC_KEY=pk_test_51QSO34P3n1RfUKI19NnY3HUVUcrDZTGR8UjfquTIvJPAXXBZu3GEVn7kehF5n7PTX91v8pFkKDFrlhlzCXfFaIvi00YuSgdh99


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
