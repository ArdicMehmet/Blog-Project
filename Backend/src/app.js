const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const fs = require("fs");
const path = require("path");
const { createLogDirectory } = require("./utils/logUtils");

const logDirectory = createLogDirectory();

const logStream = fs.createWriteStream(path.join(logDirectory, "access.log"), {
  flags: "a",
});

const app = express();

app.use(
  cors({
    origin: "http://localhost:5000", // Deneme için
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("combined", { stream: logStream }));

app.get("/test", (req, res) => {
  res.send("Blog API is working");
});

module.exports = app;
