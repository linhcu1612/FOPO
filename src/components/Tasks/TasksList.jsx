/** @format */

import React from "react";
import Task from "./Task";

import { useSelector } from "react-redux";

const TasksList = (props) => {
  const task = useSelector((state) => state.task.taskList);

  return (
    <div>
      {task.map((task) => (
        <Task key={task.id} {...task} theme={props.theme} />
      ))}
    </div>
  );
};

export default TasksList;
