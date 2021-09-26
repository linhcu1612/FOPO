/** @format */

import React, { useState } from "react";
import Pomodoro from "../Pomodoros/Pomodoro";
import Tasks from "../Tasks/Tasks";

import classes from "./Main.module.css";

export default function Main(props) {
  const [lengthProgress, setlengthProgress] = useState(0);

  console.log(lengthProgress);

  const currTimerHanlder = (time, index) => {
    setlengthProgress((1 - time / (props.pomoList[index].minute * 60)) * 100);
  };

  return (
    <>
      <div
        className=''
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.1)",
          height: "1px",
          marginBottom: "40px",
        }}>
        <div
          className={classes.progress_line}
          style={{ width: `${lengthProgress}%` }}></div>
      </div>
      <Pomodoro data={props.pomoList} onTimerChange={currTimerHanlder} />
      <Tasks />
    </>
  );
}
