/** @format */

const mongoose = require("mongoose");
const { Schema } = mongoose;

const themeSchema = new Schema({
  _user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  theme: String,
  backgroundImg: String,
  textColor: String,
  toggleBorder: String,
  gradient: String,
  summaryBackground: String,
});

mongoose.model("Theme", themeSchema);
