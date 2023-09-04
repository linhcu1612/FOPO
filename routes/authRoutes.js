/** @format */
const auth = require("../controllers/auth");

module.exports = (app) => {
  app.post("/auth/register", auth.registerUser);

  app.post("/auth/login", auth.loginUser);

  app.get("/auth", auth.getUser);
};
