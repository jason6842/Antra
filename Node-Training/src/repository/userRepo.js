const shortid = require("shortid");
const { connectDB } = require("../database/connection");

const getUsers = async () => {
  const connection = await connectDB();
  const sql = `SELECT * FROM Users`;
  const [results, fields] = await connection.query(sql);
  return results;
};

const getUserByUserName = async (username) => {
  const connection = await connectDB();
  const sql = `SELECT * FROM Users WHERE username = "${username}"`;
  const [results, fields] = await connection.query(sql);
  if (results.length === 0) {
    return null;
  }
  return results[0];
};

const getUserById = async (id) => {
  return users.find((user) => user.id === id);
};

const createUser = async (user) => {
  try {
    const connection = await connectDB();
    const { id, username, password, role } = user || {};
    const sql = `INSERT INTO Users (id, username, password, role) VALUES ('${id}', '${username}', '${password}', '${role}')`;
    const [results, fields] = await connection.query(sql);
    // const sql = `INSERT INTO Users (username, password, role) VALUES (?, ?, ?)`;
    // await connection.execute(sql, [username, password, role]);

    return user;
  } catch (error) {
    console.log("Error creating user: ", error);
  }
};

const userRepo = {
  getUsers,
  getUserByUserName,
  getUserById,
  createUser,
};

module.exports = userRepo;
