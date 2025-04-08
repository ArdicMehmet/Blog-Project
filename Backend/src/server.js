const startServer = require("./app");
const dontenv = require("dotenv");

dontenv.config();

const PORT = process.env.PORT || 3000;

const initializeServer = async () => {
  const app = await startServer();
  app.listen(PORT, (_) => {
    console.log(`Server is running on port ${PORT}`);
  });
};

initializeServer();
