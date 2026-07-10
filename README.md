# 🚀 InnovatorsX MVP: The Solution Hub

An all-in-one centralized platform providing innovative AI, SaaS, and productivity solutions to streamline your daily workflows. Built as a rapid prototype for the **InnovatorsX: Startup Sprint** hackathon.

---

## 💡 About The Project

Founders and teams often struggle with fragmented tools. This MVP acts as a dynamic portfolio and operational dashboard. It allows users to discover various startup tools, read brief descriptions of their value propositions, and track their current development status in a single, streamlined workspace. 

### Key Features
* **Dynamic Data Fetching:** Frontend seamlessly connects to a custom backend API to render real-time project statuses.
* **Responsive UI:** Clean, modern, and accessible user interface built with React components.
* **Full-Stack Architecture:** Proves technical viability by separating the client application from the server logic.

---

## 🛠️ Built With

This project was built from scratch utilizing a modern JavaScript stack to ensure speed, scalability, and clean code:

* **Frontend:** React, Vite, JavaScript, HTML5, CSS3
* **Backend:** Node.js, Express.js, CORS
* **Tools:** Git, npm, ESLint

---

## ⚙️ Getting Started (Usage Guide)

To run this project locally, you will need to run both the backend server and the frontend development environment. Follow these steps carefully.

### Prerequisites
Make sure you have Node.js and npm installed on your machine.
* Node.js (v14 or higher)
* npm

### Installation

**1. Clone the repository**
```bash
git clone [https://github.com/](https://github.com/)[your-username]/InnovatorsX-Startup-Sprint.git
cd InnovatorsX-Startup-Sprint
```

**2. Install all dependencies**
```bash
npm install
npm install express cors
```

### Running the Application

Because this is a Full-Stack application, you need to start the backend and the frontend in **two separate terminal windows**.

**Step 1: Start the Backend Server**
Open your first terminal, ensure you are in the root directory of the project, and run:
```bash
node backend/server.js
```
> **Note:** You should see `🚀 Backend server is running on http://localhost:3000` in the console.

**Step 2: Start the Frontend Application**
Open a second terminal window, navigate to the root directory of the project, and run:
```bash
npm run dev
```
> **Note:** Once Vite optimizes the dependencies, navigate to `http://localhost:5173/` in your web browser to view the application.

---

## 📂 Project Structure

```text
InnovatorsX-Startup-Sprint/
├── backend/
│   └── server.js           # Express server and API endpoint (/api/projects)
├── docs/
│   └── screenshots/        # Project media for hackathon submission
├── src/
│   ├── assets/             # Static assets
│   ├── components/         # Reusable React components (Navbar, DataCard)
│   ├── pages/              # Main application views (Home)
│   ├── App.jsx             # Root React component
│   └── main.jsx            # React DOM rendering entry point
├── .env.example            # Example environment variables
├── package.json            # Project dependencies and scripts
└── README.md               # Project documentation
```

---

## 🔮 What's Next?

As we continue to develop The Solution Hub, our upcoming features include:

1. Integrating a true database (PostgreSQL/MongoDB) to replace in-memory backend data.
2. Adding secure user authentication and personalized profiles.
3. Connecting the "Launch the App" actions to live product environments.