/** @format */

import React, { useState } from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import DoneIcon from "@mui/icons-material/Done";

import { useDispatch } from "react-redux";
import { taskActions } from "../../store/task";

import classes from "./TasksConfig.module.css";

const TasksConfig = () => {
  const dispatch = useDispatch();
  const [configShow, setConfigShow] = useState(false);

  const toggleConfigShowHandler = () => {
    setConfigShow((preState) => !preState);
  };

  const clearAllTaskHandler = () => {
    dispatch(taskActions.clearAllTask());
    setConfigShow(false);
  };

  const clearFinishedTaskHandler = () => {
    dispatch(taskActions.clearFinishedTask());
    setConfigShow(false);
  };

  const clearActPomodorosHandler = () => {
    dispatch(taskActions.clearActPomodoros());
    setConfigShow(false);
  };

  return (
    <div className={classes.wrapper}>
      <div className={classes.left_text}>Tasks</div>
      <Button
        className={classes.right_button}
        onClick={toggleConfigShowHandler}>
        <MoreVertIcon />
      </Button>
      {configShow && (
        <div className={classes.right_action_wrapper}>
          <Button
            className={classes.right_action_detail}
            startIcon={<DeleteIcon />}
            onClick={clearAllTaskHandler}>
            Clear all tasks
          </Button>
          <Button
            className={classes.right_action_detail}
            startIcon={<DeleteIcon />}
            onClick={clearFinishedTaskHandler}>
            Clear finished tasks
          </Button>
          <Button
            className={classes.right_action_detail}
            startIcon={<DoneIcon />}
            onClick={clearActPomodorosHandler}>
            Clear act pomodoros
          </Button>
        </div>
      )}
    </div>
  );
};

export default TasksConfig;
