/** @format */

import { createSlice } from "@reduxjs/toolkit";
import { pomoList, pomoCreate } from "./pomoActions";

const initialPomoState = {
  pomoList: [],
  error: null,
  loading: false,
};

const pomoSlice = createSlice({
  name: "pomoList",
  initialState: initialPomoState,
  reducers: {
    // changePomo(state, action) {
    //   state.currPomoIndex = action.payload;
    // },
    // increaseDone(state) {
    //   state.pomoDone = state.pomoDone + 1;
    // },
  },
  extraReducers: {
    [pomoList.fulfilled]: (state, action) => {
      state.pomoList = action.payload;
    },
    [pomoList.rejected]: (state, action) => {
      state.error = action.payload;
    },
    [pomoCreate.pending]: (state, action) => {
      state.loading = true;
    },
    [pomoCreate.rejected]: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    [pomoCreate.pending]: (state, action) => {
      state.loading = false;
    },
    [pomoCreate.fulfilled]: (state, action) => {
      state.pomoList = [...state.pomoList, action.payload];
    },
  },
});

export const pomoActions = pomoSlice.actions;
export default pomoSlice.reducer;
