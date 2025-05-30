const { Router } = require("express");

const todosRouter = Router();
const shortid = require("shortid");

const genID = (() => {
  let id = 1;
  return () => id++;
})();

let todos = [
  {
    id: shortid.generate(),
    title: "Learn Node.js",
    completed: false,
    description: "Understand the basics of Node.js",
  },
  {
    id: shortid.generate(),
    title: "Build a REST API",
    completed: true,
    description: "Understand the basics of Node.js",
  },
  {
    id: shortid.generate(),
    title: "Deploy to Heroku",
    completed: false,
    description: "Understand the basics of Node.js",
  },
];

// todosRouter.get("/", (req, res) => {
//   res.send("Hello World!");
// });

// READ
todosRouter.get("/", (req, res) => {
  res.json(todos);
});

// CREATE
todosRouter.post("/", (req, res) => {
  const { title, description } = req.body;
  console.log("req.body", req.body);
  const newTodo = {
    id: shortid.generate(),
    title: title,
    completed: false,
    description: description || "",
  };
  todos.push(newTodo);
  res.status(201).json(newTodo);
});

// DELETE
todosRouter.delete("/:id", (req, res) => {
  const { id } = req.params;
  const todoToDelete = todos.find((todo) => todo.id === id);
  if (!todoToDelete) {
    return res.status(404).json({ message: "not found" });
  }
  todos = todos.filter((todo) => todo.id !== id);

  res.status(200).json({ message: `Todo with id ${id} deleted successfully.` });
});

// export the todosRouter
module.exports = todosRouter;
