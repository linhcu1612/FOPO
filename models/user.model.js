/** @format */
const bcrypt = require("bcryptjs");
const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new mongoose.Schema({
  email: { type: String, unique: true, required: true },
  username: String,
  password: { type: String, required: true },
  avatar: String,
  currentPomo: { type: mongoose.Types.ObjectId, ref: "Pomo" },
});

userSchema.pre("save", async function () {
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

mongoose.model("User", userSchema);
