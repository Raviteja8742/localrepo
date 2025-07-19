const express = require('express');
const app = express();
const PORT = 3000;

// Allow AJAX from any origin (CORS)
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  next();
});

// Sample API endpoint
app.get("/api/user", (req, res) => {
  res.json({
    name: "RavTeja",
    email: "ravi@example.com"
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
