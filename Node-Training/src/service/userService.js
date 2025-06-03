const shortid = require("shortid");
const { encryptPassword } = require("../util/password");
const userRepo = require("../repository/userRepo");

const createUser = async (user) => {
  const { username, password, role } = user || {};
  const _user = await userRepo.getUserByUserName(username);
  if (_user) {
    throw new Error("Username already exists");
  }

  const newUser = {
    id: shortid.generate(),
    username,
    role: role || "user",
    password: encryptPassword(password),
  };

  await userRepo.createUser(newUser);

  const { password: _, ...userInfo } = newUser; // Exclude password from the response
  return userInfo;
};

module.exports = {
  createUser,
};
