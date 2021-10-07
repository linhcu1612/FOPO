/** @format */

import Button from "@mui/material/Button";
import React, { useRef } from "react";
import classes from "./PomodoroTopBarButton.module.css";

export default function PomodoroTopBarButton(props) {
  const pomoTopBarButton = useRef();
  const handlePomoButtonClick = () => {
    props.onClick(pomoTopBarButton.current.value);
  };
  return (
    <Button
      style={{
        marginRight: "10px",
        marginLeft: "10px",
        fontSize: "20px",
        color: "rgb(189, 147, 249)",
        //rgb(189, 147, 249)
        //white
        border: "none",
        textTransform: "unset",
      }}
      variant={props.isRunning ? "contained" : "outlined"}
      className={props.isRunning ? classes.active : ""}
      ref={pomoTopBarButton}
      value={props.id}
      onClick={handlePomoButtonClick}>
      {props.title}
    </Button>
  );
}
