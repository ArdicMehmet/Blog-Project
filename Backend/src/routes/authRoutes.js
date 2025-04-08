const express = require("express");
const errorWrapper = require("../utils/errorWrapper");
const { registerUser, loginUser } = require("../controllers/user");
const router = express.Router();

// POST /api/auth/register
router.post("/register", errorWrapper(registerUser));

// POST /api/auth/login
router.post("/login", loginUser);

module.exports = router;
