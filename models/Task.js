/** @format */

const mongoose = require("mongoose");
const { Schema } = mongoose;

const taskSchema = new Schema({
  _user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  title: String,
  body: String,
  subject: String,
  dateSend: Date,
  lastResponded: Date,
});

mongoose.model("Task", taskSchema);
