const todoService = require("../service/todoService");

const getTodos = async (req, res) => {
  const todos = await todoService.getAllTodos();
  res.json(todos);
};

const getTodoById = async (req, res) => {
  const { id } = req.params;
  const todo = await todoService.getTodoById(id);

  res.json(todo);
};

const createTodo = async (req, res) => {
  const { title, description } = req.body;

  if (!title) {
    return res.status(400).json({ message: "Title is required" });
  }

  // todoService creates the new todo object and calls todoRepo
  // todoRepo pushes new todo to the todo array
  const newTodo = await todoService.createTodo(title, description);
  res.status(201).json(newTodo);
};

const updateTodo = async (req, res) => {
  const { id } = req.params;
  const { title, description, completed } = req.body;

  const todoToUpdate = await todoService.updateTodo(id, {
    title,
    description,
    completed,
  });

  res.json(todoToUpdate);
};

const deleteTodo = async (req, res) => {
  const { id } = req.params;
  const todoToDelete = todos.find((todo) => todo.id === id);
  if (!todoToDelete) {
    return res.status(404).json({ message: "not found" });
  }
  todos = todos.filter((todo) => todo.id !== id);

  res.status(200).json({ message: `Todo with id ${id} deleted successfully.` });
};

module.exports = {
  getTodos,
  getTodoById,
  createTodo,
  updateTodo,
  deleteTodo,
};
