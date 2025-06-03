const jwt = require("jsonwebtoken");

const JWT_SECRET = "your-secret-key";
const REFRESH_SECRET = "your-refresh-secret-key";

// access token
const signToken = (payload) => {
  return jwt.sign(payload, JWT_SECRET, {
    expiresIn: "5m",
  }); // creates the jwt token
};

const verifyToken = (token) => {
  const decoded = jwt.verify(token, JWT_SECRET);
  console.log("Decoded token: ", decoded);
  return decoded;
};

// refresh token
const refreshToken = (payload) => {
  return jwt.sign(payload, REFRESH_SECRET, {
    expiresIn: "7d",
  });
};

const verifyRefreshToken = (token) => {
  return jwt.verify(token, REFRESH_SECRET);
};

module.exports = {
  signToken,
  verifyToken,
  refreshToken,
  verifyRefreshToken,
};
