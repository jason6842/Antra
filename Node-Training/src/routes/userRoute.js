const { Router } = require("express");
const { register } = require("../controller/userController");

const userRouter = Router();

// Get all todos
// localhost:3000/user
userRouter.post("/", register);

module.exports = userRouter;
