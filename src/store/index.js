/** @format */

import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import taskReducer from "./task";
import pomoReducer from "./pomo";

const customizedMiddleware = getDefaultMiddleware({
  serializableCheck: false,
});

const store = configureStore({
  reducer: { task: taskReducer, pomo: pomoReducer },
  middleware: customizedMiddleware,
});

export default store;
