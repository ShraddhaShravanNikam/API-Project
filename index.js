const express = require("express");
const app = express();

app.use(express.json());

let tasks = [];
let id = 1;

//  AI Feature: Auto Priority Suggestion
function getPriority(title, description) {
  const text = (title + " " + description).toLowerCase();

  if (text.includes("urgent") || text.includes("asap")) {
    return { priority: "high", reason: "Contains urgent keywords" };
  } else if (text.includes("later") || text.includes("low")) {
    return { priority: "low", reason: "Can be done later" };
  } else {
    return { priority: "medium", reason: "Normal task" };
  }
}

// POST /tasks → Create Task
app.post("/tasks", (req, res) => {
  const { title, description } = req.body;

  if (!title) {
    return res.status(400).json({ error: "Title is required" });
  }

  const ai = getPriority(title, description || "");

  const task = {
    id: id++,
    title,
    description: description || "",
    status: "pending",
    priority: ai.priority,
    reason: ai.reason
  };

  tasks.push(task);
  res.json(task);
});

// PATCH /tasks/:id → Mark Complete
app.patch("/tasks/:id", (req, res) => {
  const task = tasks.find(t => t.id == req.params.id);

  if (!task) {
    return res.status(404).json({ error: "Task not found" });
  }

  task.status = "completed";
  res.json(task);
});

//  GET /tasks → List All Tasks
app.get("/tasks", (req, res) => {
  res.json(tasks);
});

//  Start Server
app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});

app.get("/", (req, res) => {
  res.send("Task Manager API is running 🚀");
});
