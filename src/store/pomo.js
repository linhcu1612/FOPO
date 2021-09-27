/** @format */

import { createSlice } from "@reduxjs/toolkit";

const initialPomoState = [
  {
    id: 1,
    title: "Pomodoro",
    minute: 25,
    color: "rgb(215, 75, 71)",
    isRunning: true,
  },
  {
    id: 2,
    title: "Short Break",
    minute: 5,
    color: "rgb(70, 142, 145)",
    isRunning: false,
  },
  {
    id: 3,
    title: "Long Break",
    minute: 15,
    color: "rgb(0, 118, 176)",
    isRunning: false,
  },
];

const pomoSlice = createSlice({
  name: "pomoList",
  initialState: initialPomoState,
  reducers: {
    changePomo(state, action) {
      console.log(action.payload);
    },
  },
});

export const pomoActions = pomoSlice.actions;
export default pomoSlice.reducer;
