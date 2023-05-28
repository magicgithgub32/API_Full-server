const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const MONGO_URI = process.env.MONGO_URI;

const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("Connnected to DB 🚀 ");
  } catch (error) {
    console.log("Error connecting to DB 🤡 ", error);
  }
};

module.exports = { connectDB };
