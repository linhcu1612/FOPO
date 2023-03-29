/** @format */

const mongoose = require("mongoose");

const db = process.env.MONGODB_URL;

const connectDB = async () => {
  try {
    await mongoose.connect(db);
    console.log("MongoDB is Connected...");
  } catch (err) {
    console.error(err.message);
    console.log("Check Your ENV VAR");
    process.exit(1);
  }
};
module.exports = connectDB;
