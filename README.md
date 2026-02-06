# Fitness Tracker

A modern fitness tracking application built with the MERN stack (MongoDB, Express, React, Node.js). Track your fitness activities, monitor your progress, and stay consistent in your fitness journey.

## 🚀 Live Demo

**[View Live Application](https://fitness-tracker-6tkn.onrender.com)**

> **Note**: The app is hosted on Render's free tier. The first load may take 30-60 seconds as the server spins up from sleep mode.

## Features

- 👤 **User Management** - Create and manage multiple user profiles
- 🏃 **Activity Tracking** - Record fitness activities with duration and date
- 📊 **Dashboard** - View all recorded activities in an organized table
- ✏️ **Activity Management** - Edit and delete fitness records
- 🎨 **Modern UI** - Beautiful, responsive interface with Material-UI components

## Tech Stack

- **Frontend**: React, Material-UI
- **Backend**: Node.js, Express
- **Database**: MongoDB
- **HTTP Client**: Axios

## Prerequisites

Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v14 or higher)
- [MongoDB](https://www.mongodb.com/try/download/community) (v4.4 or higher)
- npm or yarn package manager

## Installation

### 1. Clone the Repository

```bash
git clone <your-repository-url>
cd fitness-tracker-mern-stack-app-main
```

### 2. Set Up MongoDB

Make sure MongoDB is running on your local machine:

```bash
# Start MongoDB service
mongod
```

The application will connect to MongoDB at `mongodb://localhost:27017/fitness-tracker` by default.

### 3. Set Up Backend

```bash
# Navigate to backend directory
cd backend

# Install dependencies
npm install

# Start the backend server
npm start
```

The backend server will run on `http://localhost:5000`

### 4. Set Up Frontend

```bash
# Navigate to client directory (from root)
cd client

# Install dependencies
npm install

# Start the development server
npm start
```

The frontend will run on `http://localhost:3000` and automatically open in your browser.

## Environment Configuration

### Backend Configuration

Create a `.env` file in the `backend` directory (optional):

```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/fitness-tracker
```

### Frontend Configuration

If your backend is running on a different port or host, update the API URLs in:
- `client/src/pages/Dashboard.js`
- `client/src/pages/Exercises.js`
- `client/src/pages/user.js`

Replace `https://fitness-tracker-mern.herokuapp.com` with your backend URL (e.g., `http://localhost:5000`).

## Usage

1. **Create a User**: Navigate to the "Create User" page and add a new user profile
2. **Record Activity**: Go to "Record Activity" to log your fitness activities
3. **View Dashboard**: Check the dashboard to see all recorded activities
4. **Manage Records**: Delete activities directly from the dashboard

## Available Scripts

### Frontend (client directory)

- `npm start` - Runs the app in development mode
- `npm build` - Builds the app for production
- `npm test` - Runs the test suite
- `npm eject` - Ejects from Create React App (one-way operation)

### Backend (backend directory)

- `npm start` - Starts the Express server
- `npm run dev` - Starts the server with nodemon (auto-restart on changes)

## Project Structure

```
fitness-tracker-mern-stack-app/
├── backend/              # Express backend
│   ├── models/          # MongoDB models
│   ├── routes/          # API routes
│   └── server.js        # Entry point
├── client/              # React frontend
│   ├── public/          # Static files
│   └── src/
│       ├── components/  # Reusable components
│       ├── pages/       # Page components
│       └── App.js       # Main app component
└── README.md
```

## License

Apache License 2.0

---

Made with ❤️
