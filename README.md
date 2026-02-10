# 💬 Chatify App – Real-Time Chat Application

A **full-stack real-time chat application** built using **React, Node.js, Express, Socket.IO, and MongoDB**.  
The app supports real-time messaging with WebSockets and is **fully deployed on Render (Free Tier)** with a merged frontend and backend setup.

This project was built by following and extending concepts from a Socket.IO chat application tutorial and implementing a production-ready deployment pipeline.

---

## 🌐 Live Demo

🔗 **Live Application:**  
https://chatify-app-2-lzin.onrender.com

> ⚠️ Note: The app is hosted on Render’s free tier, so it may take **10–30 seconds to wake up** on the first request.

---

## 🚀 Features

- 🔐 User authentication (JWT)
- 💬 Real-time one-to-one chat using Socket.IO
- 🟢 Online users tracking
- ⚡ Instant message delivery
- 🗂 MongoDB Atlas for persistent storage
- 🌍 Single merged deployment (frontend + backend)
- 🔧 Environment-based configuration
- ☁️ Free cloud deployment (Render)

---

## 🧠 Tech Stack

| Layer | Technology |
|-----|------------|
| Frontend | React + Vite |
| Backend | Node.js + Express |
| Real-Time | Socket.IO |
| Database | MongoDB Atlas |
| Deployment | Render (Free Tier) |
| Environment Config | dotenv |

---

## 📁 Project Structure

Chatify-App/
├── backend/
│ ├── src/
│ │ ├── routes/
│ │ ├── controllers/
│ │ ├── models/
│ │ └── server.js
│ └── package.json
├── frontend/
│ ├── src/
│ ├── public/
│ └── package.json
├── .gitignore
└── README.md


---

## ⚙️ Local Development Setup

### 📌 Prerequisites

- Node.js (v18 or later)
- npm
- MongoDB Atlas account

---

### 🛠 Backend Setup

```bash
cd backend
npm install


Create a .env file inside backend/:

PORT=3000
NODE_ENV=development
MONGO_URI=your_mongodb_atlas_uri
JWT_SECRET=your_secret_key


Start backend server:

npm run dev
```
### 🛠 Frontend Setup
cd frontend
npm install


Create a .env file inside frontend/:

VITE_API_URL=http://localhost:3000
VITE_SOCKET_URL=http://localhost:3000


Start frontend:

npm run dev

🌍 Production Deployment (Render – Free)

This project uses a single Render Web Service where:

Frontend is built during deployment

Backend serves the frontend build

Socket.IO works over WebSockets

🔑 Render Environment Variables

Add these in Render → Environment:

NODE_ENV=production
MONGO_URI=your_mongodb_atlas_uri
JWT_SECRET=your_secret_key
VITE_API_URL=https://chatify-app-2-lzin.onrender.com
VITE_SOCKET_URL=https://chatify-app-2-lzin.onrender.com


❌ Do NOT set PORT manually (Render handles it)

🏗 Render Build & Start Commands

Build Command

cd backend && npm install && cd ../frontend && npm install --include=dev && npm run build


Start Command

cd backend && npm start

🔌 Socket.IO Configuration
Backend (Example)
import http from "http";
import { Server } from "socket.io";

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

Frontend (Example)
import { io } from "socket.io-client";

const socket = io(import.meta.env.VITE_SOCKET_URL, {
  transports: ["websocket"],
});```
### 🧪 Testing the App

Open the live demo in two different browsers

Login with different users

Send messages

Messages appear instantly → ✅ real-time confirmed```
### 📌 Known Limitations

Render free tier sleeps after inactivity

Initial load may be slow (cold start)

Intended for learning & portfolio use

### 🙌 Acknowledgements

This project is inspired by and built by following a Socket.IO chat application tutorial, with additional work on:

Environment management

Production-ready deployment

Merged frontend + backend setup

Free cloud hosting
