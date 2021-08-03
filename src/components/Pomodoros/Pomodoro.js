/** @format */

import React, { useState, useRef } from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import PomodoroTopBarButton from "./PomodoroTopBarButton";

const data = [
  {
    id: 1,
    title: "Pomodoro",
    minute: 25,
    isRunning: true,
  },
  {
    id: 2,
    title: "Short Break",
    minute: 5,
    isRunning: false,
  },
  {
    id: 3,
    title: "Long Break",
    minute: 15,
    isRunning: false,
  },
];

export default function Pomodoro() {
  const currentPomoIndex = data.findIndex(({ isRunning }) => isRunning);
  console.log(data[currentPomoIndex].minute);

  const [pomoMinute, setPomoMinute] = useState(data[currentPomoIndex].minute);
  const [pomoSecond, setPomoSecond] = useState(0);

  const timerScreenDisplay = () => {
    let minuteDisplay, secondDisplay;
    minuteDisplay = pomoMinute < 10 ? "0" + pomoMinute : pomoMinute;
    secondDisplay = pomoSecond < 10 ? "0" + pomoSecond : pomoSecond;

    return `${minuteDisplay}:${secondDisplay}`;
  };

  const pomoTopBarRender = data.map(({ id, title, isRunning }) => {
    return (
      <PomodoroTopBarButton
        color={isRunning ? "secondary" : "inherit"}
        key={id}
        id={id}
        title={title}
      />
    );
  });
  return (
    <Card sx={{ maxWidth: 345 }} style={{ margin: "60px 100px 0 100px" }}>
      <CardContent
        style={{
          display: "flex",
          textAlign: "center",
          justifyContent: "center",
        }}>
        {pomoTopBarRender}
      </CardContent>
      <CardHeader
        style={{ textAlign: "center" }}
        title={timerScreenDisplay()}
      />
      <CardActions
        style={{
          display: "flex",
          textAlign: "center",
          justifyContent: "center",
        }}>
        <Button variant='contained' color='primary'>
          Start
        </Button>
      </CardActions>
    </Card>
  );
}
