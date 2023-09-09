/** @format */

import { createSlice } from "@reduxjs/toolkit";
import { authDetail, authRegister, authLogin } from "./authActions";

const token = localStorage.getItem("token")
  ? localStorage.getItem("token")
  : null;

const initialState = {
  loading: false,
  userInfo: null,
  token: token,
  error: null,
  success: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      localStorage.removeItem("token"); // delete token from storage
      state.loading = false;
      state.userInfo = null;
      state.token = null;
      state.error = null;
    },
    switchPage: (state) => {
      state.error = null;
    },
  },
  extraReducers: {
    // login user
    [authLogin.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [authLogin.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.userInfo = payload;
      state.token = payload.token;
    },
    [authLogin.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    // register user
    [authRegister.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [authRegister.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.success = true; // registration successful
    },
    [authRegister.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    // get user details
    [authDetail.pending]: (state) => {
      state.loading = true;
    },
    [authDetail.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.userInfo = payload;
    },
    [authDetail.rejected]: (state, { payload }) => {
      state.loading = false;
    },
  },
});

export const { logout, switchPage } = authSlice.actions;

export default authSlice.reducer;
