/** @format */

const mongoose = require("mongoose");
const { Schema } = mongoose;

const pomoSchema = new Schema({
  _user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  order: Number,
  title: String,
  audio: String,
  minute: Number,
  color_dark: String,
  color_light: String,
});

mongoose.model("Pomo", pomoSchema);
