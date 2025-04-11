const jwt = require("jsonwebtoken");
const createError = require("http-errors");
const User = require("../models/User");

const authenticate = async (req, res, next) => {
  try {
    const authorizationHeader = req.headers.authorization;

    if (!authorizationHeader || !authorizationHeader.startsWith("Bearer ")) {
      throw createError(400, "Invalid token format");
    }

    const token = authorizationHeader.split(" ")[1];

    if (!token) {
      throw createError(401, "Token is required");
    }
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);

    if (!decodedToken || !decodedToken.userId) {
      throw createError(401, "Invalid token");
    }

    const user = await User.findById(decodedToken.userId);

    if (!user) {
      throw createError(404, "User not found");
    }

    req.user = user;

    next();
  } catch (err) {
    next(err);
  }
};

module.exports = authenticate;
