/** @format */

import { createSlice } from "@reduxjs/toolkit";

const initialThemeState = {
  theme: [
    {
      type: "dark",
      background_img:
        "https://fopo-lucas.s3.ap-southeast-2.amazonaws.com/img/dark_default.jpeg",
      text: "rgb(189, 147, 249)",
      toggleBorder: "#6B8096",
      gradient: "linear-gradient(#091236, #1E215D)",
      summary_background: "rgb(245, 239, 254)",
    },
    {
      type: "light",
      background_img:
        "https://fopo-lucas.s3.ap-southeast-2.amazonaws.com/img/light_default.jpeg",
      text: "#FFF",
      toggleBorder: "#fff",
      gradient: "linear-gradient(#39598A, #79D7ED)",
      summary_background: "rgb(248, 232, 231)",
    },
  ],
};

const themeSlice = createSlice({
  name: "ui",
  initialState: initialThemeState,
  reducers: {
    // changePomo(state, action) {
    //   state.currPomoIndex = action.payload;
    // },
  },
});

export const pomoActions = themeSlice.actions;
export default themeSlice.reducer;
