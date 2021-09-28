/** @format */

import { createSlice } from "@reduxjs/toolkit";

const initialPomoState = {
  pomoList: [
    {
      id: 0,
      title: "Pomodoro",
      minute: 25,
      color: "rgb(215, 75, 71)",
    },
    {
      id: 1,
      title: "Short Break",
      minute: 5,
      color: "rgb(70, 142, 145)",
    },
    {
      id: 2,
      title: "Long Break",
      minute: 15,
      color: "rgb(0, 118, 176)",
    },
  ],
  pomoDone: 0,
  currPomo: 0,
};

const pomoSlice = createSlice({
  name: "pomoList",
  initialState: initialPomoState,
  reducers: {
    changePomo(state, action) {
      state.currPomo = action.payload;
    },
  },
});

export const pomoActions = pomoSlice.actions;
export default pomoSlice.reducer;
