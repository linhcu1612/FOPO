/** @format */

import React from "react";
import Task from "./Task";

const TasksList = (props) => {
  const changeCurTaskHandler = (id) => {
    props.changeCurTask(id);
  };

  const taskDoneHandler = (id) => {
    props.doneTask(id);
  };

  return (
    <div>
      {props.lists.map((task) => (
        <Task
          key={task.id}
          {...task}
          onChange={changeCurTaskHandler}
          onDone={taskDoneHandler}
        />
      ))}
    </div>
  );
};

export default TasksList;
