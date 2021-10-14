/** @format */

import React, { useEffect, useState } from "react";
import classes from "./PomodoroActionButton.module.css";
// import ReactHowler from "react-howler";
// import beachMusic from "../../assets/music/beach.mp3";
// import rainMusic from "../../assets/music/rain.mp3";
import classicalMusic from "../../assets/music/classical.mp3";
import { useAudio } from "../../hooks/useAudio";

export default function PomodoroActionButton(props) {
  const [playing, toggle] = useAudio(classicalMusic);

  // const [context, setContext] = useState(null);

  // useEffect(() => {
  //   setContext(new AudioContext());
  // }, []);

  const handlePomoActionButtonClick = () => {
    toggle();
    // context.resume();
    props.onClick();
  };

  return (
    <>
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
