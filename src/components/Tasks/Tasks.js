/** @format */

import React, { useState } from "react";

import CurrentTask from "./CurrentTask";
import TasksConfig from "./TasksConfig";
import TasksList from "./TasksList";
import AddTask from "./AddTask";
import EstTask from "./EstTask";

const Task = (props) => {
  const [data, setData] = useState(props.data);

  const changeCurTaskHandler = (id) => {
    console.log(id);
  };

  const doneTaskHandler = (id) => {
    const taskIndex = data.findIndex((task) => task.id === id);
    setData((preState) => {
      preState[taskIndex].isDone = !preState[taskIndex].isDone;
      return preState;
    });
  };

  const addNewTaskHandler = (task) => {
    setData((preState) => {
      return [...preState, task];
    });
  };

  const estCal = () => {
    let count = 0;
    data.map((data) => (count += data.estimatedPomo));
    return count;
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
      {data.length > 0 && <EstTask est={+estCal()} act={data.length} />}
    </div>
  );
};

export default Task;
