/** @format */

import { createSlice } from "@reduxjs/toolkit";

const initialTaskState = [];

const taskSlice = createSlice({
  name: "taskList",
  initialState: initialTaskState,
  reducers: {
    addTask(state, action) {
      state = [...state, action.payload];
    },
  },
});

export const taskActions = taskSlice.actions;
export default taskSlice.reducer;
