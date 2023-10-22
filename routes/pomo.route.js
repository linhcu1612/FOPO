/** @format */
const pomo = require("../controllers/pomo.controller");

module.exports = (app) => {
  app.post("/api/pomo", pomo.createPomo);

  app.get("/api/pomos", pomo.getPomos);

  app.get("/api/pomo/:pomoId", pomo.getPomo);

  app.put("/api/pomo/:pomoId", pomo.editPomo);

  app.delete("/api/pomo/:pomoId", pomo.deletePomo);
};
