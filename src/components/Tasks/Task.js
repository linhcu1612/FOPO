/** @format */

import React, { useState } from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Button from "@mui/material/Button";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import TaskDetailForm from "./TaskDetailForm";

import classes from "./Task.module.css";

const Task = (props) => {
  //todo:
  // - find a way to handle when user only click on done button
  const [taskDetailShow, setTaskDetailShow] = useState(false);

  const isDoingClass = props.isDoing ? classes.task_current : "";
  const taskClasses = classes.task + " " + isDoingClass;

  const toggleTaskDetailHandler = () => {
    setTaskDetailShow(true);
  };

  const onCancel = () => {
    setTaskDetailShow(false);
  };

  const toggleDoneHandler = () => {
    props.onDone(props.id);
  };

  const changeCurTaskHandler = () => {
    props.onChange(props.id);
  };

  return (
    <>
      {!taskDetailShow ? (
        <div
          className={taskClasses}
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            backgroundColor: "white",
            color: "black",
          }}>
          {/* leftside */}
          <div
            className={classes.task_left}
            style={{ display: "flex", alignItems: "center" }}>
            <Button
              className={classes.task_left_done_button}
              onClick={toggleDoneHandler}>
              <CheckCircleIcon className={classes.task_left_done_icon} />
            </Button>
            <div className={classes.task_title}>{props.title}</div>
          </div>
          {/* rightside */}
          <div className='' style={{ display: "flex", alignItems: "center" }}>
            <div className=''>
              <span className={classes.task_right_pomo_cur}>
                {props.pomoDone}
                <span className={classes.task_right_pomo_est}>
                  /{props.estimatedPomo}
                </span>
              </span>
            </div>
            <Button
              className={classes.task_right_more_button}
              onClick={toggleTaskDetailHandler}>
              <MoreVertIcon />
            </Button>
          </div>
        </div>
      ) : (
        <TaskDetailForm addNew={false} {...props} onCancel={onCancel} />
      )}
    </>
  );
};

export default Task;
