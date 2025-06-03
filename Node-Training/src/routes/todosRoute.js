const { Router } = require("express");
const {
  getTodos,
  getTodoById,
  createTodo,
  updateTodo,
  deleteTodo,
} = require("../controller/todoController");

const todosRouter = Router();

//  GET all todos
todosRouter.get("/", getTodos);

// Get todo by ID
todosRouter.get("/:id", getTodoById);

// CREATE
todosRouter.post("/", createTodo);

// UPDATE
todosRouter.patch("/:id", updateTodo);

// DELETE
todosRouter.delete("/:id", deleteTodo);

// export the todosRouter
module.exports = todosRouter;
