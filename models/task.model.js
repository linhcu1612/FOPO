/** @format */

const mongoose = require("mongoose");
const { Schema } = mongoose;

const taskSchema = new Schema({
  _user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  title: String,
  description: String,
  estimated: Number,
  dateDone: Date,
  dateCreated: Date,
  isDone: Date,
});

mongoose.model("Task", taskSchema);
