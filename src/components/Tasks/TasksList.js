/** @format */

import React from "react";
import Task from "./Task";

import { useSelector } from "react-redux";

const TasksList = () => {
  const task = useSelector((state) => state.task.taskList);

  return (
    <div>
      {task.map((task) => (
        <Task key={task.id} {...task} />
      ))}
    </div>
  );
};

export default TasksList;
