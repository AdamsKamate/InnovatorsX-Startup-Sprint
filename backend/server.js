import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 3000;

// Middleware to allow cross-origin requests from our frontend
app.use(cors());
// Middleware to parse JSON
app.use(express.json());

// Mock Database (moved from frontend to backend)
const projects = [
  {
    id: 1,
    title: "A revolutionary AI solution",
    description: "Automate your daily tasks with artificial intelligence.",
    status: "Actif"
  },
  {
    id: 2,
    title: "B2B SaaS Platform",
    description: "Manage your teams and projects in a single, streamlined workspace.",
    status: "MVP"
  },
  {
    id: 3,
    title: "Productivity Tool",
    description: "Save 2 hours a day with our organizational algorithm.",
    status: "Beta"
  }
];

// API Route to get all projects
app.get('/api/projects', (req, res) => {
  res.json(projects);
});

// Start the server
app.listen(PORT, () => {
  console.log(`🚀 Backend server is running on http://localhost:${PORT}`);
});
