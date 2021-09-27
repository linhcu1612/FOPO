/** @format */

import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./task";
import pomoReducer from "./pomo";

const store = configureStore({
  reducer: { task: taskReducer, pomo: pomoReducer },
});

export default store;
