const express = require("express");
const authRoutes = require("./authRoutes.js");
// const blogRoutes = require("./blogRoutes.js");

const router = express.Router();

router.use("/auth", authRoutes);
// router.use("/blog", blogRoutes);

router.use((req, res, next) => {
  res.status(404).json({
    message: "Route not found",
    status: false,
  });
});

router.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({
    message: err.message || "Something went wrong",
    status: false,
  });
});

module.exports = router;
