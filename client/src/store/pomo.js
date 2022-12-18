/** @format */

import { createSlice } from "@reduxjs/toolkit";
import classical from "../assets/music/classical.mp3";
import beach from "../assets/music/beach.mp3";
import rain from "../assets/music/rain.mp3";

const initialPomoState = {
  pomoList: [
    {
      id: 0,
      title: "Pomodoro",
      music: new Audio(classical),
      minute: 25,
      color_dark: "rgb(56,58,88)",
      color_light: "rgb(215, 75, 71)",
    },
    {
      id: 1,
      title: "Short Break",
      music: new Audio(beach),
      minute: 5,
      color_dark: "#2d3050",
      color_light: "rgb(70, 142, 145)",
    },
    {
      id: 2,
      title: "Long Break",
      music: new Audio(rain),
      minute: 15,
      color_dark: "#35384e",
      color_light: "rgb(67, 126, 168)",
    },
  ],
  pomoDone: 0,
  currPomoIndex: 0,
};

const pomoSlice = createSlice({
  name: "pomoList",
  initialState: initialPomoState,
  reducers: {
    changePomo(state, action) {
      state.currPomoIndex = action.payload;
    },
    increaseDone(state) {
      state.pomoDone = state.pomoDone + 1;
    },
  },
});

export const pomoActions = pomoSlice.actions;
export default pomoSlice.reducer;
