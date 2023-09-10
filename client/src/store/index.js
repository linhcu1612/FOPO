/** @format */

import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import taskReducer from "./task";
import pomoReducer from "./pomo";
import uiReducer from "./ui";
import authReducer from "./auth/authSlice";

const customizedMiddleware = getDefaultMiddleware({
  serializableCheck: false,
});

const store = configureStore({
  reducer: {
    task: taskReducer,
    pomo: pomoReducer,
    ui: uiReducer,
    auth: authReducer,
  },
  middleware: customizedMiddleware,
});

export default store;
