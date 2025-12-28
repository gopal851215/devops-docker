const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, "public")));

app.get("/api/employees", (req, res) => {
  res.json([
    { id: 1, name: "Gopal Kumar", role: "Frontend Developer", status: "Active" },
    { id: 2, name: "Gautam kumar", role: "UI Designer", status: "On Leave" },
    { id: 3, name: "Rahul Singh", role: "Backend Developer", status: "Active" }
  ]);
});

app.listen(PORT, () => {
  console.log(`Dashboard running at http://localhost:${PORT}`);
});
