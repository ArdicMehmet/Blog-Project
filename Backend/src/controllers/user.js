const { registerUser, login, currentUser } = require("../services/user");

const registerUserController = async (req, res, next) => {
  try {
    const user = req.body;
    const savedUser = await registerUser(user);
    res.status(201).json({
      data: savedUser,
      message: "Registered successfully",
      status: true,
    });
  } catch (e) {
    next(e);
  }
};

const loginUserController = async (req, res, next) => {
  try {
    const user = req.body;
    const data = await login(user);
    res.status(200).json({
      data: data,
      message: "Login successfuly",
      status: true,
    });
  } catch (e) {
    next(e);
  }
};
const currentUserController = async (req, res, next) => {
  try {
    const authorizationHeader = req.headers.authorization;

    if (!authorizationHeader || !authorizationHeader.startsWith("Bearer ")) {
      throw createError(400, "Invalid token format");
    }
    const token = authorizationHeader?.split(" ")[1]; // 'Bearer token alma'

    if (!token) {
      throw createError(401, "Token is required");
    }

    const user = await currentUser(token);

    res.status(200).json({
      user,
      message: "User successfully retrieved",
      status: true,
    });
  } catch (e) {
    next(e);
  }
};

module.exports = {
  registerUserController,
  loginUserController,
  currentUserController,
};
