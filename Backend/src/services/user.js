const bcrypt = require("bcrypt");
const createError = require("http-errors");
const jwt = require("jsonwebtoken");
const User = require("../models/User.js");

const registerUser = async (user) => {
  const existingEmail = await User.findOne({ email: user.email });
  const existingUsername = await User.findOne({ username: user.username });

  if (existingEmail) {
    throw createError(409, "This email is already registered");
  }

  if (existingUsername) {
    throw createError(409, "This username is already taken");
  }

  const { password, ...userData } = user;
  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = new User({
    ...userData,
    password: hashedPassword,
  });
  const savedUser = await newUser.save();
  return savedUser;
};

const login = async (user) => {
  const { password, email } = user;
  const findedUser = await User.findOne({ email });

  if (!findedUser) {
    throw createError(401, "Username or password is incorrect");
  }

  const isPasswordValid = await bcrypt.compare(password, findedUser.password);

  if (!isPasswordValid) {
    throw createError(401, "Username or password is incorrect");
  }
  const token = jwt.sign(
    { userId: findedUser._id, email: findedUser.email },
    process.env.JWT_SECRET,
    { expiresIn: "24h" }
  );
  return { user: findedUser, token };
};

const currentUser = async (token) => {
  try {
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decodedToken.userId);
    if (!user) {
      throw createError(404, "User not found");
    }
    return user;
  } catch (err) {
    throw createError(401, "Invalid token");
  }
};

module.exports = { registerUser, login, currentUser };
