/** @format */

import React, { useState } from "react";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Button from "@mui/material/Button";

import classes from "./TaskDetailForm.module.css";

const TaskDetailForm = (props) => {
  let task = {};
  if (props.addNew) {
    task = {
      id: "",
      title: "",
      estimatedPomo: 1,
      pomoDone: 0,
      note: "",
      isDoing: false,
    };
  } else {
    task = { ...props };
  }

  const cancelHandler = () => {
    props.onCancel();
  };

  const [estPomo, setEstPomo] = useState(task.estimatedPomo);
  const [title, setTitle] = useState(task.title);

  const estPomoChangeHanlder = (event) => {
    setEstPomo(event.target.value);
  };

  const incrementEstPomoHanlder = () => {
    setEstPomo((preState) => preState + 1);
  };

  const decrementEstPomoHanlder = () => {
    if (estPomo === 0) {
      return;
    }
    setEstPomo((preState) => preState - 1);
  };

  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
  };

  const saveNewTaskHandler = () => {
    if (props.addNew) {
      task.id = "m" + Math.floor(Math.random() * 100000);
      task.title = title;
      task.estimatedPomo = estPomo;
      props.onSubmit(task);
      props.onCancel();
    }
  };

  return (
    <div className={classes.wrapper}>
      <div className={classes.detail}>
        <div className={classes.detail_section}>
          <div className={classes.detail_section_block}>
            <div className={classes.block_flex}>
              <div className={classes.width_100}>
                <input
                  type='text'
                  className={classes.block_flex_input}
                  value={title}
                  onChange={titleChangeHandler}
                  placeholder='What are you working on?'
                />
              </div>
            </div>
          </div>
          <div className={classes.detail_section_block}>
            <div className={classes.block_flex}>
              <div className={classes.width_100}>
                <div className={classes.margin_bottom_8}>
                  <span className={classes.est_pomo}>Est Pomodoros</span>
                </div>
                <input
                  id='input_est_pomodoro'
                  type='number'
                  min='0'
                  step='1'
                  value={estPomo}
                  onChange={estPomoChangeHanlder}
                  className={classes.est_pomo_input}
                />
                <Button
                  className={classes.est_pomo_button}
                  onClick={incrementEstPomoHanlder}>
                  <ArrowDropUpIcon />
                </Button>
                <Button
                  className={classes.est_pomo_button}
                  onClick={decrementEstPomoHanlder}>
                  <ArrowDropDownIcon />
                </Button>
              </div>
            </div>
          </div>
          <div className={classes.detail_section_block}>
            <Button className={classes.add_note_button}>+ Add Note</Button>
          </div>
        </div>
      </div>
      <div className={classes.action}>
        {!props.addNew ? (
          <Button className={classes.action_delete_cancel}>Delete</Button>
        ) : (
          <div></div>
        )}
        <div className=''>
          <Button
            className={classes.action_delete_cancel}
            onClick={cancelHandler}>
            Cancel
          </Button>
          {estPomo === 0 ? (
            <Button className={classes.action_save_disabled} disabled>
              Save
            </Button>
          ) : (
            <Button
              className={classes.action_save}
              onClick={saveNewTaskHandler}>
              Save
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default TaskDetailForm;
