/** @format */

import React, { useState } from "react";
import Button from "@mui/material/Button";
import classes from "./AddTask.module.css";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import TaskDetailForm from "./TaskDetailForm";

const AddTask = (props) => {
  const [addNewTask, setAddNewTask] = useState(false);

  const toggleTaskHandler = () => {
    setAddNewTask((preState) => !preState);
  };

  const onSubmitHandler = (task) => {
    props.addNewTask(task);
  };

  return (
    <>
      {addNewTask && (
        <TaskDetailForm
          addNew={true}
          onCancel={toggleTaskHandler}
          onSubmit={onSubmitHandler}
        />
      )}
      {!addNewTask && (
        <Button
          className={classes.button}
          onClick={toggleTaskHandler}
          startIcon={
            <AddCircleIcon style={{ fontSize: "24px", opacity: "0.8" }} />
          }>
          <div className={classes.button_text}>Add Task</div>
        </Button>
      )}
    </>
  );
};

export default AddTask;
