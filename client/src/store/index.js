/** @format */

import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import taskReducer from "./task/taskSlice";
import pomoReducer from "./pomo/pomoSlice";
import themeReducer from "./theme/themeSlice";
import authReducer from "./auth/authSlice";

const customizedMiddleware = getDefaultMiddleware({
  serializableCheck: false,
});

const store = configureStore({
  reducer: {
    task: taskReducer,
    pomo: pomoReducer,
    theme: themeReducer,
    auth: authReducer,
  },
  middleware: customizedMiddleware,
});

export default store;
