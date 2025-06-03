const express = require("express");

const todosRoute = require("./routes/todosRoute");
const authRoute = require("./routes/authRoute");
const userRoute = require("./routes/userRoute");
const internalRoute = require("./routes/internal");
const { verifyToken } = require("./util/token");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const authenticate = require("./middlewares/authenticate");
const { connectDB } = require("./database/connection");

const port = 3000;

(async () => {
  await connectDB();

  const app = express();
  app.use(cookieParser());
  app.use(express.json());

  app.use(
    cors({
      origin: "*",
    })
  );
  app.use("/auth", authRoute);
  app.use("/user", userRoute);
  app.use(authenticate);
  app.use("/todos", todosRoute);
  app.use("/internal", internalRoute);

  app.get("/private", (req, res) => {
    res.status(200).json({ message: "This is a private information" });
  });

  app.get("/admin", (req, res) => {
    const token = req.cookies.token;
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
})();
