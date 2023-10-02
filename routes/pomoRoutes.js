/** @format */
const pomo = require("../controllers/pomo");

module.exports = (app) => {
  app.post("/api/pomo", pomo.createPomo);

  app.get("/api/pomo", pomo.getPomos);

  app.put("/api/pomo/:pomoId", pomo.editPomo);

  app.delete("/api/pomo/:pomoId", pomo.deletePomo);
};
