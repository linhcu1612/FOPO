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
      isDone: false,
    };
  } else {
    task = { ...props };
  }

  const cancelHandler = () => {
    props.onCancel();
  };

  const [estPomo, setEstPomo] = useState(task.estimatedPomo);
  const [title, setTitle] = useState(task.title);
  const [note, setNote] = useState(task.note);
  const [noteShow, setNoteShow] = useState(task.note.length > 0);

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

  const noteChangeHandler = (event) => {
    setNote(event.target.value);
  };

  const noteShowHandler = () => {
    setNoteShow((preState) => !preState);
  };

  const saveTaskHandler = () => {
    task.title = title;
    task.estimatedPomo = estPomo;
    task.note = note;
    if (props.addNew) {
      task.id = "m" + Math.floor(Math.random() * 100000);
      props.onSubmit(task);
      props.onCancel();
    } else {
      props.onEdit(task);
      props.onCancel();
    }
  };

  const deleteTaskHandler = () => {
    props.onDelete(task.id);
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
            {!noteShow ? (
              <Button
                className={classes.add_note_button}
                onClick={noteShowHandler}>
                + Add Note
              </Button>
            ) : (
              <textarea
                placeholder='Some notes...'
                className={classes.note}
                value={note}
                onChange={noteChangeHandler}></textarea>
            )}
          </div>
        </div>
      </div>
      <div className={classes.action}>
        {!props.addNew ? (
          <Button
            className={classes.action_delete_cancel}
            onClick={deleteTaskHandler}>
            Delete
          </Button>
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
            <Button className={classes.action_save} onClick={saveTaskHandler}>
              Save
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default TaskDetailForm;
