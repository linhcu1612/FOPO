/** @format */

import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import taskReducer from "./task/taskSlice";
import pomoReducer from "./pomo/pomoSlice";
import uiReducer from "./ui/uiSlice";
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
