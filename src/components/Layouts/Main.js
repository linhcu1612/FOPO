/** @format */

import React, { useState } from "react";
import Pomodoro from "../Pomodoros/Pomodoro";
import Tasks from "../Tasks/Tasks";

import { useSelector } from "react-redux";

import classes from "./Main.module.css";

export default function Main(props) {
  const [lengthProgress, setlengthProgress] = useState(0);

  const pomo = useSelector((state) => state.pomo.pomoList);
  const currPomo = useSelector((state) => state.pomo.currPomo);

  const currTimerHanlder = (time) => {
    setlengthProgress((1 - time / (pomo[currPomo].minute * 60)) * 100);
  };

  return (
    <>
      <div
        className=''
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.1)",
          height: "2px",
          marginBottom: "40px",
        }}>
        <div
          className={classes.progress_line}
          style={{ width: `${lengthProgress}%` }}></div>
      </div>
      <Pomodoro onTimerChange={currTimerHanlder} />
      <Tasks data={props.taskList} />
    </>
  );
}
