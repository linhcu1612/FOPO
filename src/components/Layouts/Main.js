/** @format */

import React, { useState } from "react";
import Pomodoro from "../Pomodoros/Pomodoro";
import Tasks from "../Tasks/Tasks";

import { useSelector } from "react-redux";

import classes from "./Main.module.css";

export default function Main(props) {
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
      <Pomodoro onTimerChange={currTimerHanlder} theme={props.theme} />
      <Tasks theme={props.theme} />
    </>
  );
}
