/** @format */

import React, { useState } from "react";

import CurrentTask from "./CurrentTask";
import TasksConfig from "./TasksConfig";
import TasksList from "./TasksList";
import AddTask from "./AddTask";
import EstTask from "./EstTask";

const DUMMY_TASK_LIST = [];

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

  const estCal = () => {
    let count = 0;
    data.map((data) => {
      count += data.estimatedPomo;
    });
    return count;
  };

  console.log(estCal());

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
      {data.length > 0 && <EstTask est={+estCal()} act={data.length} />}
    </div>
  );
};

export default Task;
