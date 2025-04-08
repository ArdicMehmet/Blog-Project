const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const { createLogStream } = require("./utils/logUtils");
const connectBlogDB = require("./utils/dbConnectionHelper");
const router = require("./routes/mainRoutes");

const logStream = createLogStream();

const startServer = async () => {
  await connectBlogDB();

  const app = express();

  app.use(
    cors({
      origin: "http://localhost:5000", // Deneme için
    })
  );
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(morgan("combined", { stream: logStream }));

  app.use("/api", router);

  return app;
};

module.exports = startServer;
