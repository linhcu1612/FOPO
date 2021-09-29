/** @format */

import React, { useState } from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Button from "@mui/material/Button";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import TaskDetailForm from "./TaskDetailForm";

import { useDispatch } from "react-redux";
import { taskActions } from "../../store/task";

import classes from "./Task.module.css";

const Task = (props) => {
  const dispatch = useDispatch();

  //todo:
  // - find a way to handle when user only click on done button
  const [taskDetailShow, setTaskDetailShow] = useState(false);
  const [taskDone, setTaskDone] = useState(props.isDone);

  const isDoingClass = props.isDoing ? classes.task_current : "";
  const taskClasses = classes.task + " " + isDoingClass;

  const toggleTaskDetailHandler = () => {
    setTaskDetailShow(true);
  };

  const onCancel = () => {
    setTaskDetailShow(false);
  };

  const onEdit = (task) => {
    dispatch(taskActions.editTask(task));
  };

  const onDelete = (id) => {
    dispatch(taskActions.deleteTask(id));
  };

  const toggleDoneHandler = () => {
    setTaskDone((preState) => !preState);
    props.onDone(props.id);
  };

  // const changeCurTaskHandler = () => {
  //   props.onChange(props.id);
  // };

  return (
    <>
      {!taskDetailShow ? (
        <div className={taskClasses}>
          {/* leftside */}
          <div className={classes.task_left}>
            <Button
              className={classes.task_left_done_button}
              onClick={toggleDoneHandler}>
              <CheckCircleIcon
                className={
                  taskDone
                    ? classes.task_left_done_icon_done
                    : classes.task_left_done_icon
                }
              />
            </Button>
            <div
              className={
                taskDone ? classes.task_title_done : classes.task_title
              }>
              {props.title}
            </div>
          </div>
          {/* rightside */}
          <div className={classes.task_right}>
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
        <TaskDetailForm
          addNew={false}
          {...props}
          onEdit={onEdit}
          onCancel={onCancel}
          onDelete={onDelete}
        />
      )}
    </>
  );
};

export default Task;
