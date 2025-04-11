const express = require("express");
const errorWrapper = require("../utils/errorWrapper");
const {
  registerUserController,
  loginUserController,
  currentUserController,
} = require("../controllers/user");
const { validateBody } = require("../validations/user");
const { registerSchema, loginSchema } = require("../schemas/authSchemas");
const router = express.Router();

// GET /api/auth/currentUser
router.get("/currentUser", errorWrapper(currentUserController));

// POST /api/auth/register
router.post(
  "/register",
  validateBody(registerSchema),
  errorWrapper(registerUserController)
);

// POST /api/auth/login
router.post(
  "/login",
  validateBody(loginSchema),
  errorWrapper(loginUserController)
);

module.exports = router;
