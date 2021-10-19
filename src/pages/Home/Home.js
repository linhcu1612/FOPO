/** @format */

import React, { useState } from "react";
import Pomodoro from "../../components/Pomodoros/Pomodoro";
import Tasks from "../../components/Tasks/Tasks";

import { useSelector } from "react-redux";

import classes from "./Home.module.css";

export default function Home(props) {
  const [lengthProgress, setlengthProgress] = useState(0);

  const pomo = useSelector((state) => state.pomo.pomoList);
  const currPomoIndex = useSelector((state) => state.pomo.currPomoIndex);

  const currTimerHanlder = (time) => {
    setlengthProgress((1 - time / (pomo[currPomoIndex].minute * 60)) * 100);
  };

  return (
    <>
      <div className={classes.line_wrapper}>
        <div
          className={classes.progress_line}
          style={{ width: `${lengthProgress}%` }}></div>
      </div>
      <Pomodoro
        onTimerChange={currTimerHanlder}
        theme={props.theme}
        playing={props.playing}
        togglePlaying={props.togglePlaying}
      />
      <Tasks theme={props.theme} />
    </>
  );
}
