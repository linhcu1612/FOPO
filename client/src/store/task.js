/** @format */

import { createSlice } from "@reduxjs/toolkit";

const initialTaskState = {
  taskList: [],
  currTaskId: 0,
};

const taskSlice = createSlice({
  name: "taskList",
  initialState: initialTaskState,
  reducers: {
    addTask(state, action) {
      state.taskList = [...state.taskList, action.payload];
    },
    editTask(state, action) {
      const index = state.taskList.findIndex(
        (task) => task.id === action.payload.id
      );
      state.taskList[index] = action.payload;
    },
    deleteTask(state, action) {
      state.taskList = state.taskList.filter(({ id }) => {
        return id !== action.payload;
      });
    },
    doneTask(state, action) {
      const index = state.taskList.findIndex(
        (task) => task.id === action.payload
      );
      state.taskList[index].isDone = !state.taskList[index].isDone;
    },
    changeTask(state, action) {
      state.currTaskId = action.payload;
    },
    clearAllTask(state) {
      state.taskList = [];
    },
    clearFinishedTask(state) {
      state.taskList = state.taskList.filter((task) => !task.isDone);
    },
    clearActPomodoros(state) {
      const newTaskList = state.taskList.map((task) => {
        task.pomoDone = 0;
        return task;
      });
      state.taskList = newTaskList;
    },
  },
});

export const taskActions = taskSlice.actions;
export default taskSlice.reducer;
