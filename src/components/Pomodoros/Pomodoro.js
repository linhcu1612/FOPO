/** @format */

import React, { useState } from "react";
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
  const [pomoData, setPomoData] = useState(data);
  const currentPomoIndex = pomoData.findIndex(({ isRunning }) => isRunning);
  const [pomoMinute, setPomoMinute] = useState(
    pomoData[currentPomoIndex].minute
  );
  const [pomoSecond, setPomoSecond] = useState(0);

  const pomoTopBarHandler = (id) => {
    const pomoChangedData = pomoData;
    pomoChangedData[currentPomoIndex].isRunning = false;
    pomoChangedData[id - 1].isRunning = true;
    setPomoData(pomoChangedData);
    setPomoSecond(0);
    setPomoMinute(pomoChangedData[id - 1].minute);
  };

  const timerScreenDisplay = () => {
    let minuteDisplay, secondDisplay;
    minuteDisplay = pomoMinute < 10 ? "0" + pomoMinute : pomoMinute;
    secondDisplay = pomoSecond < 10 ? "0" + pomoSecond : pomoSecond;

    return `${minuteDisplay}:${secondDisplay}`;
  };

  const pomoTopBarRender = pomoData.map(({ id, title, isRunning }) => {
    return (
      <PomodoroTopBarButton
        color={isRunning ? "secondary" : "inherit"}
        key={id}
        id={id}
        title={title}
        onClick={pomoTopBarHandler}
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
