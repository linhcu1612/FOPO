/** @format */

const mongoose = require("mongoose");
const Pomo = mongoose.model("Pomo");
const { validUser } = require("../controllers/auth");

const createPomo = async (request, response) => {
  const user = await validUser(request);

  if (user) {
    const { order, title, audio, minute, color_dark, color_light } =
      request.body;
    const pomo = new Pomo({
      _user: user._id,
      order,
      title,
      audio,
      minute,
      color_dark,
      color_light,
    });
    const returned = await pomo.save();

    if (returned) {
      response.json({ status: "success", id: pomo._id, messages: 0 });
    } else {
      response.json({ status: "error" });
    }
  } else {
    response.sendStatus(401);
  }
};

const editPomo = async (request, response) => {
  const user = await validUser(request);
  const pomoId = request.params.pomoId;
  const updatedData = request.body;

  if (user) {
    if (!mongoose.Types.ObjectId.isValid(pomoId)) {
      return response.status(400).send("Invalid pomoId");
    }

    const existingPomo = await Pomo.findById(pomoId);
    if (!existingPomo) {
      return response.status(404).send("Pomo not found");
    }

    const updatedPomo = await Pomo.findByIdAndUpdate(pomoId, updatedData, {
      new: true,
    });
    response.status(200).send(updatedPomo);
  } else {
    response.sendStatus(401);
  }
};

const deletePomo = async (request, response) => {
  const user = await validUser(request);
  const pomoId = request.params.pomoId;
  if (user) {
    try {
      if (!mongoose.Types.ObjectId.isValid(pomoId)) {
        return response.status(400).send("Invalid pomoId");
      }

      const deletedPomo = await Pomo.findByIdAndRemove(pomoId);

      if (!deletedPomo) {
        return response.status(404).send("Pomo not found");
      }

      response.status(200).send(deletedPomo);
    } catch (error) {
      console.error(error);
      response.status(500).send("Internal Server Error");
    }
  } else {
    response.sendStatus(401);
  }
};

const getPomos = async (request, response) => {
  const user = await validUser(request);

  if (user) {
    try {
      const pomos = await Pomo.find({ _user: user._id });
      response.json({ pomos });
    } catch (error) {
      console.error(error);
      response.sendStatus(500);
    }
  } else {
    response.sendStatus(401);
  }
};

module.exports = {
  createPomo,
  editPomo,
  deletePomo,
  getPomos,
};
