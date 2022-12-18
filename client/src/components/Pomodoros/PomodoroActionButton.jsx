/** @format */

import React from "react";
import classes from "./PomodoroActionButton.module.css";

export default function PomodoroActionButton(props) {
  const handlePomoActionButtonClick = () => {
    props.onClick();
  };

  return (
    <>
      <button
        style={{ color: props.color, transition: "color 0.5s ease-in-out 0s" }}
        className={!props.running ? classes.button : classes.button_start}
        value={props.id}
        onClickCapture={handlePomoActionButtonClick}>
        {props.title}
      </button>
    </>
  );
}
