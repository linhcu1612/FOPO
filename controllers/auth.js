/** @format */
const mongoose = require("mongoose");
const User = mongoose.model("User");

const registerUser = async (request, response) => {
  const user = new User({
    email: request.body.email,
    password: request.body.password,
    username: request.body.username,
  });

  const returned = await user.save().catch((err) => {
    response.status(404);
    response.json({ status: "error", message: "User already exists" });
  });

  if (returned) {
    if (user._id) {
      response.json({
        status: "success",
        username: returned.username,
        token: returned._id,
      });
      response.status(201);
    }
  }
};

const getUser = async (request, response) => {
  const authHeader = request.get("Authorization");
  if (authHeader && authHeader.toLowerCase().startsWith("basic ")) {
    const token = authHeader.substring(6);
    try {
      // this will throw an error if token isn't of the right format
      const match = await User.findById(token);
      if (match) {
        response.json({
          status: "success",
          username: match.username,
          token: match._id,
        });
      }
    } catch {}
  } else {
    response.json({ status: "error", message: "unregistered" });
    response.status(404);
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  // check if user email exists in db
  const user = await User.findOne({ email });

  // return user obj if their password matches
  if (user && (await user.matchPassword(password))) {
    res.json({
      username: user.username,
      email: user.email,
      token: user._id,
    });
  } else {
    res.status(401);
    res.json({ status: "error", message: "Invalid email or password" });
  }
};

/*
 * validUser - check for a valid user via Authorization header
 *   return the username if found, false if not
 */
const validUser = async (request, response) => {
  const authHeader = request.get("Authorization");
  if (authHeader && authHeader.toLowerCase().startsWith("basic ")) {
    const token = authHeader.substring(6);
    const match = await User.findOne({ _id: token });

    if (match) {
      return match._id;
    }
  }
  return false;
};

module.exports = { validUser, getUser, registerUser, loginUser };
