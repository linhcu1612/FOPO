/** @format */

import React from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Button from "@mui/material/Button";
import MoreVertIcon from "@mui/icons-material/MoreVert";

import classes from "./Task.module.css";

const Task = (props) => {
  return (
    <div
      className={classes.task}
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
        <Button className={classes.task_left_done_button}>
          <CheckCircleIcon
            className={classes.task_left_done_icon}
            style={{ color: "rgb(223, 223, 223)" }}
          />
        </Button>
        <div className=''>{props.title}</div>
      </div>
      {/* rightside */}
      <div className='' style={{ display: "flex", alignItems: "center" }}>
        <div className=''>
          <span className={classes.task_right_pomo_cur}>
            {props.estimatedPomo}
            <span className={classes.task_right_pomo_est}>
              /{props.pomoDone}
            </span>
          </span>
        </div>
        <Button className={classes.task_right_more_button}>
          <MoreVertIcon />
        </Button>
      </div>
    </div>
  );
};

export default Task;
