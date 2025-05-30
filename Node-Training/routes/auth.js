const { Router } = require("express");
const shortid = require("shortid");
const { encryptPassword, comparePassword } = require("../util/password");
const { signToken } = require("../util/token");

const authRouter = Router();

const users = [
  {
    id: shortid.generate(),
    role: "admin",
    username: "John_Doe",
    password: "123",
  },
  {
    id: shortid.generate(),
    role: "user",
    username: "Jane_Doe",
    password: "123",
  },
];

authRouter.post("/register", (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res
      .status(400)
      .json({ message: "Username and password are required." });
  }

  const usersExists = users.some((user) => user.username === username);
  if (usersExists) {
    return res.status(409).json({ message: "Username already exists" });
  }

  const newUser = {
    id: shortid.generate(),
    username,
    role: "user",
    password: encryptPassword(password),
  };

  const { password: _, ...userInfo } = newUser;

  users.push(newUser);
  res.status(201).json({
    message: "User registered successfully",
    user: userInfo,
  });
});

authRouter.post("/login", (req, res) => {
  const { username, password } = req.body;
  const user = users.find((u) => u.username === username);

  //   ####### This approach gives out a bit too much information
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }
  console.log(password, user.password);
  if (comparePassword(password, user.password) === false) {
    return res.status(401).json({ message: "Invalid password" });
  }

  const { password: _, ...userInfo } = user;

  res.status(200).json({
    message: "Login successful",
    token: signToken(userInfo),
    user: {
      id: user.id,
      username: user.username,
    },
  });
});

module.exports = authRouter;
