/** @format */

import { createSlice } from "@reduxjs/toolkit";

const initialPomoState = {
  pomoList: [
    {
      id: 0,
      title: "Pomodoro",
      music:
        "https://fopo-lucas.s3.ap-southeast-2.amazonaws.com/audio/classical.mp3",
      minute: 25,
      color_dark: "rgb(56,58,88)",
      color_light: "rgb(215, 75, 71)",
    },
    {
      id: 1,
      title: "Short Break",
      music:
        "https://fopo-lucas.s3.ap-southeast-2.amazonaws.com/audio/beach.mp3",
      minute: 5,
      color_dark: "#2d3050",
      color_light: "rgb(70, 142, 145)",
    },
    {
      id: 2,
      title: "Long Break",
      music:
        "https://fopo-lucas.s3.ap-southeast-2.amazonaws.com/audio/rain.mp3",
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
