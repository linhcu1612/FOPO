/** @format */

import React, { useState, useEffect, useCallback } from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import PomodoroTopBarButton from "./PomodoroTopBarButton";
import PomodoroActionButton from "./PomodoroActionButton";

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
  {
    id: 4,
    title: "Test",
    minute: 1,
    isRunning: false,
  },
];

export default function Pomodoro() {
  const [pomoData, setPomoData] = useState(data);
  const [currentPomoIndex, setCurrentPomoIndex] = useState(0);
  const [pomoMinute, setPomoMinute] = useState(pomoData[0].minute);
  const [pomoSecond, setPomoSecond] = useState(0);
  const [pomoRun, setPomoRun] = useState(false);

  const pomoTopBarHandler = useCallback(
    (id) => {
      const pomoChangedData = pomoData;
      setPomoRun(false);
      setCurrentPomoIndex((prev) => {
        pomoChangedData[prev].isRunning = false;
        pomoChangedData[id - 1].isRunning = true;
        return id - 1;
      });
      setPomoData(pomoChangedData);
      setPomoSecond(0);
      setPomoMinute(pomoData[id - 1].minute);
    },
    [pomoData]
  );

  const changePomoHandler = useCallback(() => {
    if (currentPomoIndex > 1) {
      pomoTopBarHandler(1);
    } else {
      pomoTopBarHandler(currentPomoIndex + 1);
    }
  }, [currentPomoIndex, pomoTopBarHandler]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (pomoRun) {
        if (pomoMinute === 0 && pomoSecond === 0) {
          setPomoRun(false);
          changePomoHandler();
        } else if (pomoSecond === 0 && pomoMinute > 0) {
          setPomoMinute((prev) => prev - 1);
          setPomoSecond(59);
        } else {
          setPomoSecond((prev) => prev - 1);
        }
      } else {
        setPomoSecond(0);
      }
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [pomoRun, pomoSecond, pomoMinute, pomoTopBarHandler, changePomoHandler]);

  const actionButtonHandler = () => {
    setPomoRun((preState) => !preState);
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
    <Card
      sx={{ maxWidth: 345 }}
      style={{ margin: "60px 100px", paddingBottom: "20px" }}>
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
        <PomodoroActionButton
          variant='contained'
          color='primary'
          title={!pomoRun ? "Start" : "Stop"}
          onClick={actionButtonHandler}
        />
      </CardActions>
    </Card>
  );
}
