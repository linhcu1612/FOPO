/** @format */

import React from "react";
import classes from "./PomodoroActionButton.module.css";
import ReactHowler from "react-howler";

export default function PomodoroActionButton(props) {
  const handlePomoActionButtonClick = () => {
    props.onClick();
  };
  return (
    <>
      <ReactHowler
        src='http://goldfirestudios.com/proj/howlerjs/sound.ogg'
        playing={!!props.running}
      />
      <button
        style={{ color: props.color, transition: "color 0.5s ease-in-out 0s" }}
        className={!props.running ? classes.button : classes.button_start}
        value={props.id}
        onClick={handlePomoActionButtonClick}>
        {props.title}
      </button>
    </>
  );
}
