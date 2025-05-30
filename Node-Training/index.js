const express = require("express");
const app = express();
const port = 3000;
const todosRoute = require("./routes/todos");
const authRoute = require("./routes/auth");
const { verifyToken } = require("./util/token");

app.use(express.json());

app.use("/todos", todosRoute);
app.use("/auth", authRoute);

app.get("/private", (req, res) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1]; // Bearer <token>
  console.log("Token: ", token);

  if (!token) {
    return res.status(401).json({ message: "Please log in" });
  }

  try {
    verifyToken(token);
    res.status(200).json({ message: "This is a private information" });
  } catch (error) {
    console.log("Token verification failed: ", error);
    res.status(401).json({ message: "Invalid token" });
  }
});

app.get("/admin-only", (req, res) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1]; // Bearer <token>
  console.log("Token: ", token);

  if (!token) {
    return res.status(401).json({ message: "Please log in" });
  }
  
  try {
    const payload = verifyToken(token);
    if (payload.role !== "admin") {
      return res.status(403).json({ message: "Access denied" });
    }
    res.status(200).json({ message: "This is a private information" });
  } catch (error) {
    console.log("Token verification failed: ", error);
    res.status(401).json({ message: "Invalid token" });
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
