const express = require("express");
const errorWrapper = require("../utils/errorWrapper");
const {
  registerUserController,
  loginUserController,
  currentUserController,
} = require("../controllers/user");
const router = express.Router();

// POST /api/auth/register
router.post("/register", errorWrapper(registerUserController));

// POST /api/auth/login
router.post("/login", errorWrapper(loginUserController));

// POST /api/auth/currentUser
router.get("/currentUser", errorWrapper(currentUserController));

module.exports = router;
