const express = require("express");
const authRoutes = require("./authRoutes.js");
const { errorResponse } = require("../utils/errorResponse.js");
// const blogRoutes = require("./blogRoutes.js");

const router = express.Router();

router.use("/auth", authRoutes);
// router.use("/blog", blogRoutes);

router.use((req, res, next) => {
  res.status(404).json(errorResponse("Route not found", 404));
});

router.use((err, req, res, next) => {
  console.error(err);
  res
    .status(500)
    .json(errorResponse(err.message || "Something went wrong", 500));
});

module.exports = router;
