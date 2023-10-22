/** @format */

const mongoose = require("mongoose");
const Theme = mongoose.model("Theme");
const { validUser } = require("./auth.controller");

const createUi = async (request, response) => {
  const user = await validUser(request);

  if (user) {
    const { order, title, audio, minute, color_dark, color_light } =
      request.body;
    const theme = new Theme({
      _user: user._id,
      order,
      title,
      audio,
      minute,
      color_dark,
      color_light,
    });
    const returned = await theme.save();

    if (returned) {
      response.json({ status: "success", id: theme._id, messages: 0 });
    } else {
      response.json({ status: "error" });
    }
  } else {
    response.sendStatus(401);
  }
};

const editTheme = async (request, response) => {
  const user = await validUser(request);
  const themeId = request.params.themeId;
  const updatedData = request.body;

  if (user) {
    if (!mongoose.Types.ObjectId.isValid(themeId)) {
      return response.status(400).send("Invalid themeId");
    }

    const existingTheme = await Theme.findById(themeId);
    if (!existingTheme) {
      return response.status(404).send("Theme not found");
    }

    const updatedTheme = await Theme.findByIdAndUpdate(themeId, updatedData, {
      new: true,
    });
    response.status(200).send(updatedTheme);
  } else {
    response.sendStatus(401);
  }
};

const deleteTheme = async (request, response) => {
  const user = await validUser(request);
  const themeId = request.params.themeId;
  if (user) {
    try {
      if (!mongoose.Types.ObjectId.isValid(themeId)) {
        return response.status(400).send("Invalid themeId");
      }

      const deletedTheme = await Theme.findByIdAndRemove(themeId);

      if (!deletedTheme) {
        return response.status(404).send("Theme not found");
      }

      response.status(200).send(deletedTheme);
    } catch (error) {
      console.error(error);
      response.status(500).send("Internal Server Error");
    }
  } else {
    response.sendStatus(401);
  }
};

const getThemes = async (request, response) => {
  const user = await validUser(request);

  if (user) {
    try {
      const themes = await Theme.find({ _user: user._id });
      response.json(themes);
    } catch (error) {
      console.error(error);
      response.sendStatus(500);
    }
  } else {
    response.sendStatus(401);
  }
};

const getTheme = async (request, response) => {
  const user = await validUser(request);
  const themeId = request.params.themeId;

  if (user) {
    try {
      const theme = await Theme.find({ _user: user._id, _id: themeId });
      response.json({ theme });
    } catch (error) {
      console.error(error);
      response.sendStatus(500);
    }
  } else {
    response.sendStatus(401);
  }
};

const initThemes = async (request, response) => {};

module.exports = {
  createTheme,
  editTheme,
  deleteTheme,
  getThemes,
  getTheme,
};
