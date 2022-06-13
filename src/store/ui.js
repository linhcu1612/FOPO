/** @format */

import { createSlice } from "@reduxjs/toolkit";
import dark_default from "../assets/background/dark_default.jpeg";
import light_default from "../assets/background/light_default.jpeg";

const initialUIState = {
  theme: {
    dark: {
      background_img: dark_default,
      background: "rgb(53, 56, 78)",
      text: "rgb(189, 147, 249)",
      toggleBorder: "#6B8096",
      gradient: "linear-gradient(#091236, #1E215D)",
      summary_background: "rgb(245, 239, 254)",
    },
    light: {
      background_img: light_default,
      background: "rgba(255,255,255,0.7)",
      text: "#FFF",
      toggleBorder: "#fff",
      gradient: "linear-gradient(#39598A, #79D7ED)",
      summary_background: "rgb(248, 232, 231)",
    },
  },
};

const uiSlice = createSlice({
  name: "ui",
  initialState: initialUIState,
  reducers: {
    // changePomo(state, action) {
    //   state.currPomoIndex = action.payload;
    // },
  },
});

export const pomoActions = uiSlice.actions;
export default uiSlice.reducer;
