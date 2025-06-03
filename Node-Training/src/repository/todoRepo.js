const shortid = require("shortid");

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

const getTodos = async () => {
  return [...todos];
};

const getTodoById = async (id) => {
  return todos.find((todo) => todo.id === id);
};

const createTodo = async (todo) => {
  todos.push(todo);
};

const updateTodo = async (id, updates) => {
  todos = todos.map((todo) => {
    if (todo.id === id) {
      return {
        ...todo,
        ...updates,
      };
    }
    return todo;
  });
};

const deleteTodo = async (id) => {
  todos = todos.filter((todo) => todo.id !== id);
};

const todoRepo = {
  getTodos,
  getTodoById,
  createTodo,
  updateTodo,
  deleteTodo,
};

module.exports = todoRepo;
