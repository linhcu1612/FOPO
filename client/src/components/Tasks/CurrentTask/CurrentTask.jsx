/** @format */

import React from "react";

import classes from "./CurrentTask.module.css";

import { useSelector } from "react-redux";

const CurrentTask = () => {
  const task = useSelector((state) => state.task.taskList);
  const currTaskId = useSelector((state) => state.task.currTaskId);
  const currPomoIndex = useSelector((state) => state.pomo.currPomoIndex);

  let display = "";

  const currTask = task.filter((t) => t.id === currTaskId)[0];
  if (currTask) {
    display = currTask.title;
  } else {
    if (currPomoIndex > 0) {
      display = "Time for a break!";
    } else {
      display = "Time to focus!";
    }
  }

  return (
    <div className={classes.wrapper}>
      <div className={classes.task_count}>#1</div>
      <div className={classes.task_header}>{display}</div>
    </div>
  );
};

export default CurrentTask;
