const express = require("express");
const authRoutes = require("./authRoutes.js");
const { errorResponse } = require("../utils/errorResponse.js");

const router = express.Router();

router.use("/auth", authRoutes);

router.use((req, res, next) => {
  res.status(404).json(errorResponse("Route not found", 404));
});

router.use((err, req, res, next) => {
  const statusCode = err?.statusCode || 500;
  const message = err?.message || "Something went wrong";
  res.status(statusCode).json(errorResponse(message, statusCode));
});

module.exports = router;
