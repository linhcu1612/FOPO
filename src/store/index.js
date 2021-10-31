/** @format */

import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import taskReducer from "./task";
import pomoReducer from "./pomo";
import uiReducer from "./ui";

const customizedMiddleware = getDefaultMiddleware({
  serializableCheck: false,
});

const store = configureStore({
  reducer: { task: taskReducer, pomo: pomoReducer, ui: uiReducer },
  middleware: customizedMiddleware,
});

export default store;
