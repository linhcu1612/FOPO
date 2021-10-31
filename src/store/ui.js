/** @format */

import { createSlice } from "@reduxjs/toolkit";

const initialUIState = {
  theme: {
    dark: {
      background_img:
        "https://fopo-assets.s3.ap-southeast-2.amazonaws.com/background/background/dark_default.jpg",
      background: "rgb(53, 56, 78)",
      text: "rgb(189, 147, 249)",
    },
    light: {
      background_img:
        "https://fopo-assets.s3.ap-southeast-2.amazonaws.com/background/background/light_default.jpg",
      background: "rgba(255,255,255,0.7)",
      text: "#FFF",
    },
  },
  music:
    "https://fopo-assets.s3.ap-southeast-2.amazonaws.com/music/music/classical.mp3",
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
