/** @format */

import React from "react";
import Task from "./Task";
import TaskDetailForm from "./TaskDetailForm";

const TasksList = (props) => {
  return (
    <div>
      {props.lists.map((task) => (
        <Task key={task.id} {...task} />
      ))}
      <TaskDetailForm />
    </div>
  );
};

export default TasksList;
