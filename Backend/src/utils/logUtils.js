const fs = require("fs");
const path = require("path");

const createLogDirectory = () => {
  const logDirectory = path.join(__dirname, "../..", "logger");

  if (!fs.existsSync(logDirectory)) {
    fs.mkdirSync(logDirectory);
  }

  return logDirectory;
};

module.exports = { createLogDirectory };
