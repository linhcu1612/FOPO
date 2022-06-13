/** @format */

import React, { useState } from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Button from "@mui/material/Button";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import TaskDetailForm from "./TaskDetailForm";

import { useDispatch, useSelector } from "react-redux";
import { taskActions } from "../../store/task";

import classes from "./Task.module.css";

const Task = (props) => {
  const dispatch = useDispatch();
  const currTaskId = useSelector((state) => state.task.currTaskId);
  const [taskDetailShow, setTaskDetailShow] = useState(false);

  const isDoingClass = props.id === currTaskId ? classes.task_current : "";
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

  const toggleDoneHandler = (event) => {
    event.stopPropagation();
    dispatch(taskActions.doneTask(props.id));
  };

  const changeCurTaskHandler = () => {
    dispatch(taskActions.changeTask(props.id));
  };

  return (
    <>
      {!taskDetailShow ? (
        <div className={taskClasses} onClick={changeCurTaskHandler}>
          <div className={classes.task_wrapper}>
            {/* leftside */}
            <div className={classes.task_left}>
              <Button
                className={classes.task_left_done_button}
                onClick={toggleDoneHandler}>
                <CheckCircleIcon
                  className={classes.task_left_done_icon}
                  style={{
                    color: props.isDone ? props.bgColor : "rgb(223, 223, 223)",
                  }}
                />
              </Button>
              <div
                className={
                  props.isDone ? classes.task_title_done : classes.task_title
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
          {props.note.length > 0 && (
            <div className={classes.task_note_wrapper}>
              <p className={classes.task_note_text}>{props.note}</p>
            </div>
          )}
        </div>
      ) : (
        <TaskDetailForm
          {...props}
          addNew={false}
          onEdit={onEdit}
          onCancel={onCancel}
          onDelete={onDelete}
        />
      )}
    </>
  );
};

export default Task;
