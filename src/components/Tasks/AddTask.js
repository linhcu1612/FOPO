/** @format */

import React from "react";
import Button from "@mui/material/Button";
import classes from "./AddTask.module.css";
import AddCircleIcon from "@mui/icons-material/AddCircle";

const AddTask = () => {
  return (
    <Button className={classes.button} startIcon={<AddCircleIcon />}>
      <div className={classes.button_text}>Add Task</div>
    </Button>
  );
};

export default AddTask;
