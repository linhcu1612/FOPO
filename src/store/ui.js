/** @format */

import { createSlice } from "@reduxjs/toolkit";

const initialUIState = {
  theme: {
    dark: {
      background_img:
        "https://fopo-assets.s3.ap-southeast-2.amazonaws.com/background/background/dark_default.jpg",
      background: "rgb(53, 56, 78)",
      text: "rgb(189, 147, 249)",
      toggleBorder: "#6B8096",
      gradient: "linear-gradient(#091236, #1E215D)",
    },
    light: {
      background_img:
        "https://fopo-assets.s3.ap-southeast-2.amazonaws.com/background/background/light_default.jpg",
      background: "rgba(255,255,255,0.7)",
      text: "#FFF",
      toggleBorder: "#fff",
      gradient: "linear-gradient(#39598A, #79D7ED)",
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
