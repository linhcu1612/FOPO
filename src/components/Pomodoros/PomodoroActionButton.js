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
      style={{ color: props.color, transition: "color 0.5s ease-in-out 0s" }}
      className={!props.pomoRun ? classes.button : classes.button_start}
      value={props.id}
      onClick={handlePomoActionButtonClick}>
      {props.title}
    </button>
  );
}
