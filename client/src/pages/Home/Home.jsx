/** @format */

import React, { useState, useEffect } from "react";
import { useAudio } from "../../hooks/useAudio";
import Pomodoro from "../../components/Pomodoros/Pomodoro";
import Tasks from "../../components/Tasks/Tasks";

import { useSelector } from "react-redux";

import classes from "./Home.module.css";

export default function Home(props) {
  const [lengthProgress, setlengthProgress] = useState(0);
  const [playing, togglePlaying, setAudio] = useAudio();
  const pomo = useSelector((state) => state.pomo.pomoList);
  const currPomoIndex = useSelector((state) => state.pomo.currPomoIndex);

  useEffect(() => {
    setAudio(new Audio(pomo[currPomoIndex].music));
  }, [currPomoIndex, setAudio, pomo]);

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
        playing={playing}
        togglePlaying={togglePlaying}
      />
      <Tasks theme={props.theme} bgColor={props.bgColor} />
    </>
  );
}
