/** @format */

import React from "react";
import Pomodoro from "../Pomodoros/Pomodoro";
import Tasks from "../Tasks/Tasks";

export default function Main() {
  return (
    <>
      <div
        className=''
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.1)",
          height: "1px",
          marginBottom: "40px",
        }}>
        <div className=''></div>
      </div>
      <Pomodoro />
      <Tasks />
    </>
  );
}
