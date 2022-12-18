/** @format */

import Button from "@mui/material/Button";
import React, { useRef } from "react";
import classes from "./PomodoroTopBarButton.module.css";
import styled from "styled-components";

const TopBarButton = styled(Button)`
  color: ${({ theme }) => theme.text} !important;
  margin-right: 10px !important;
  margin-left: 10px !important;
  font-size: 20px !important;
  border: none !important;
  text-transform: unset !important;
`;

export default function PomodoroTopBarButton(props) {
  const pomoTopBarButton = useRef();
  const handlePomoButtonClick = () => {
    props.onClick(pomoTopBarButton.current.value);
  };
  return (
    <TopBarButton
      variant={props.isRunning ? "contained" : "outlined"}
      className={props.isRunning ? classes.active : ""}
      ref={pomoTopBarButton}
      value={props.id}
      onClick={handlePomoButtonClick}>
      {props.title}
    </TopBarButton>
  );
}
