/** @format */

import Button from "@material-ui/core/Button";
import React, { useRef } from "react";

export default function PomodoroTopBarButton(props) {
  const pomoTopBarButton = useRef();
  const handlePomoButtonClick = () => {
    console.log(pomoTopBarButton);
  };
  return (
    <Button {...props} ref={pomoTopBarButton} onClick={handlePomoButtonClick}>
      {props.title}
    </Button>
  );
}
