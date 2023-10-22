/** @format */
const theme = require("../controllers/theme.controller");

module.exports = (app) => {
  app.post("/api/theme", theme.createTheme);

  app.get("/api/themes", theme.getThemes);

  app.get("/api/theme/:themeId", theme.getTheme);

  app.put("/api/theme/:themeId", theme.editTheme);

  app.delete("/api/theme/:themeId", theme.deleteTheme);
};
