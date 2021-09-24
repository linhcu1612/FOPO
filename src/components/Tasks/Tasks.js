/** @format */

import React from "react";

import CurrentTask from "./CurrentTask";
import TasksConfig from "./TasksConfig";
import TasksList from "./TasksList";
import AddTask from "./AddTask";

const DUMMY_TASK_LIST = [
  {
    id: "m1",
    title: "This is a test task",
    estimatedPomo: 1,
    pomoDone: 0,
    note: "Testing Purpose",
    isDoing: false,
  },
  {
    id: "m2",
    title: "This is second test task",
    estimatedPomo: 1,
    pomoDone: 0,
    note: "Testing 2nd Purpose",
    isDoing: false,
  },
];

const Task = () => {
  return (
    <div style={{ margin: "auto 70px" }}>
      <CurrentTask />
      <TasksConfig />
      <TasksList lists={DUMMY_TASK_LIST} />
      <AddTask />
    </div>
  );
};

export default Task;
