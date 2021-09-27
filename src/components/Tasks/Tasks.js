/** @format */

import React, { useState } from "react";

import CurrentTask from "./CurrentTask";
import TasksConfig from "./TasksConfig";
import TasksList from "./TasksList";
import AddTask from "./AddTask";
import EstTask from "./EstTask";

const DUMMY_TASK_LIST = [
  {
    id: "m1",
    title: "This is a test task",
    estimatedPomo: 1,
    pomoDone: 0,
    note: "Testing Purpose",
    isDoing: true,
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
  const [data, setData] = useState(DUMMY_TASK_LIST);

  const changeCurTaskHandler = (id) => {
    console.log(id);
  };

  const doneTaskHandler = (id) => {
    console.log(id);
  };

  const addNewTaskHandler = (task) => {
    setData((preState) => {
      return [...preState, task];
    });
  };

  return (
    <div style={{ margin: "auto 70px" }}>
      <CurrentTask />
      <TasksConfig />
      <TasksList
        lists={data}
        changeCurTask={changeCurTaskHandler}
        doneTask={doneTaskHandler}
      />
      <AddTask addNewTask={addNewTaskHandler} />
      <EstTask />
    </div>
  );
};

export default Task;
