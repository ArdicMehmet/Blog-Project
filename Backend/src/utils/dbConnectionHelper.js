const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const connectBlogDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_CONNECTION_STRING);
    console.log("Database connection is successfully.");
  } catch (e) {
    console.log("Something went wrong while connecting database.", e);
    process.exit(1);
  }
};

module.exports = connectBlogDB;
