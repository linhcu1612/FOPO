/** @format */

import Button from "@material-ui/core/Button";
import React from "react";

export default function PomodoroActionButton(props) {
  const handlePomoActionButtonClick = () => {
    props.onClick();
  };
  return (
    <Button {...props} value={props.id} onClick={handlePomoActionButtonClick}>
      {props.title}
    </Button>
  );
}
