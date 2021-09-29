/** @format */

import React, { useState } from "react";
import Pomodoro from "../Pomodoros/Pomodoro";
import Tasks from "../Tasks/Tasks";

import { useSelector } from "react-redux";

import classes from "./Main.module.css";

export default function Main() {
  const [lengthProgress, setlengthProgress] = useState(0);

  const pomo = useSelector((state) => state.pomo.pomoList);
  const currPomo = useSelector((state) => state.pomo.currPomo);

  const currTimerHanlder = (time) => {
    setlengthProgress((1 - time / (pomo[currPomo].minute * 60)) * 100);
  };

  return (
    <>
      <div className={classes.line_wrapper}>
        <div
          className={classes.progress_line}
          style={{ width: `${lengthProgress}%` }}></div>
      </div>
      <Pomodoro onTimerChange={currTimerHanlder} />
      <Tasks />
    </>
  );
}
