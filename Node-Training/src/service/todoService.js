const shortid = require("shortid");
const todoRepo = require("../repository/todoRepo");

const getAllTodos = async () => {
  return todoRepo.getTodos();
};

const getTodoById = async (id) => {
  return todoRepo.getTodoById(id);
};

const createTodo = async (title, description) => {
  const newTodo = {
    id: shortid.generate(),
    title,
    description: description || "",
    completed: false,
  };

  // adds to the todo array
  await todoRepo.createTodo(newTodo);
  return newTodo;
};

const updateTodo = async (id, updates) => {
  const todoUpdate = await todoRepo.updateTodo(id, updates);
  return todoUpdate;
};

const deleteTodo = async (id) => {
  await todoRepo.deleteTodo(id);
};

// Improve intellisense
const todoService = {
  getAllTodos,
  getTodoById,
  createTodo,
  updateTodo,
  deleteTodo,
};

module.exports = todoService;
