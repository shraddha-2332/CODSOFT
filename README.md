# Job Board Application

## Overview
A full-stack job board built during my CodSoft internship.  
Employers can post jobs, candidates can apply with resumes, and applications are managed securely.

## Tech Stack
- *rontend: React, Vite, Axios, React Router
- Backend: Node.js, Express, MongoDB, Multer
- Auth:*JWT-based authentication
- Database: MongoDB 

## Features
- User authentication (Employer & Candidate roles)
- Employers can post jobs
- Candidates can apply with resume upload
- Candidates can view their applications
- Employers can view all applications (simplified for demo)
- Error handling & secure API routes

##  Project Structure
job-board/

├── client/              
├── server/              
├── assets/              
│   ├── frontend/       
│   └── backend/         
└── README.md

##  Setup Instructions

1. Clone the repo:
   git clone https://github.com/shraddha-2332/CODSOFT.git

2. Install dependencies:
   cd job-board/server
   npm install

   cd ../client
   npm install


3. Create .env file in server/:
   PORT=5000
   MONGO_URI=your_mongodb_connection
   CLIENT_URL=http://localhost:5173
   JWT_SECRET=your_secret
  
4. Run backend
   cd server
   npm run dev
   
5. Run frontend
   cd client
   npm run dev

##  Screenshots

### 🔑 Authentication
"C:\codsoft-internship\job-board\assets\Backend\applications.jpg.png"

"C:\codsoft-internship\job-board\assets\Backend\jobs.jpg.png"

"C:\codsoft-internship\job-board\assets\Backend\login.jpg.png"

"C:\codsoft-internship\job-board\assets\Backend\register.jpg.png"

### 📋 Jobs
"C:\codsoft-internship\job-board\assets\Frontend\List_Jobs.jpg.png"

### 📄 Applications
"C:\codsoft-internship\job-board\assets\Frontend\List_Jobs.jpg.png"

### 🖥️ Frontend UI
"C:\codsoft-internship\job-board\assets\Frontend\Register.jpg.png"

"C:\codsoft-internship\job-board\assets\Frontend\List_Jobs.jpg.png"

"C:\codsoft-internship\job-board\assets\Frontend\Application_Submitted.jpg.png"
