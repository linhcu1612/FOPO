/** @format */

import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const authLogin = createAsyncThunk(
  "auth/login",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      // configure header's Content-Type as JSON
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const { data } = await axios.post(
        "/auth/login",
        { email: email, password: password },
        config
      );

      // store user's token in local storage
      localStorage.setItem("token", data.token);

      return data;
    } catch (error) {
      // return custom error message from API if any
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const authRegister = createAsyncThunk(
  "auth/register",
  async ({ email, password, username }, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      await axios.post(
        "/auth/register",
        { username: username, password: password, email: email },
        config
      );
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const authDetail = createAsyncThunk(
  "auth/detail",
  async (arg, { getState, rejectWithValue }) => {
    try {
      // get user data from store
      const { auth } = getState();

      // configure authorization header with user's token
      const config = {
        headers: {
          Authorization: `Basic ${auth.token}`,
        },
      };

      const { data } = await axios.get(`/auth`, config);
      return data;
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);
