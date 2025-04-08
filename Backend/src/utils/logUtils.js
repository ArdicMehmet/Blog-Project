const fs = require("fs");
const path = require("path");

const createLogDirectory = () => {
  const logDirectory = path.join(__dirname, "../..", "logger");

  if (!fs.existsSync(logDirectory)) {
    fs.mkdirSync(logDirectory);
  }

  return logDirectory;
};

const createLogStream = () => {
  const dir = createLogDirectory();
  const logStream = fs.createWriteStream(path.join(dir, "access.log"), {
    flags: "a",
  });
  return logStream;
};

module.exports = { createLogStream };
