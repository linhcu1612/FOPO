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
      {...props}
      style={{
        marginRight: "10px",
        marginLeft: "10px",
        color: "white",
        border: "none",
      }}
      variant={props.isRunning ? "contained" : "outlined"}
      ref={pomoTopBarButton}
      value={props.id}
      onClick={handlePomoButtonClick}>
      {props.title}
    </Button>
  );
}
