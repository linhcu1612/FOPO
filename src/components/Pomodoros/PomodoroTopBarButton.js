/** @format */

import Button from "@material-ui/core/Button";
import React, { useRef } from "react";

export default function PomodoroTopBarButton(props) {
  const pomoTopBarButton = useRef();
  const handlePomoButtonClick = () => {
    props.onClick(pomoTopBarButton.current.value);
  };
  return (
    <Button
      {...props}
      ref={pomoTopBarButton}
      value={props.id}
      onClick={handlePomoButtonClick}>
      {props.title}
    </Button>
  );
}
