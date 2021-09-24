/** @format */

import React from "react";
import Task from "./Task";

const TasksList = (props) => {
  return (
    <div>
      {props.lists.map((task) => (
        <Task {...task} />
      ))}
    </div>
  );
};

export default TasksList;
