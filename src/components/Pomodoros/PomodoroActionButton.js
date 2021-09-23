/** @format */

import React from "react";
import classes from "./PomodoroActionButton.module.css";

export default function PomodoroActionButton(props) {
  const handlePomoActionButtonClick = () => {
    props.onClick();
  };
  return (
    <button
      {...props}
      className={classes.button}
      value={props.id}
      onClick={handlePomoActionButtonClick}>
      {props.title}
    </button>
  );
}
