/** @format */

import React from "react";

import classes from "./CurrentTask.module.css";

const CurrentTask = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.task_count}>#1</div>
      <div className={classes.task_header}>Time to focus!</div>
    </div>
  );
};

export default CurrentTask;
