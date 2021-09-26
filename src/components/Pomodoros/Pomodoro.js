/** @format */

import React, { useState, useEffect, useCallback } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import PomodoroTopBarButton from "./PomodoroTopBarButton";
import PomodoroActionButton from "./PomodoroActionButton";
import SkipNextIcon from "@mui/icons-material/SkipNext";

import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import classes from "./Pomodoro.module.css";

// need to do:
// not using Card any more MUI v5 ? x
// own styling x
// CardHeader => Stack MUI x
// store all time as second then convert it to minute
// line under topbar can update the size

export default function Pomodoro(props) {
  //useReducer ?
  const [pomoData, setPomoData] = useState(props.data);
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
    if (currentPomoIndex >= 1) {
      pomoTopBarHandler(1);
    } else {
      pomoTopBarHandler(currentPomoIndex + 2);
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
      }
    }, 1000);

    const totalTime = pomoMinute * 60 + pomoSecond;

    props.onTimerChange(totalTime, currentPomoIndex);

    return () => {
      clearTimeout(timer);
    };
  }, [
    pomoRun,
    pomoSecond,
    pomoMinute,
    currentPomoIndex,
    pomoTopBarHandler,
    changePomoHandler,
    props,
  ]);

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
        key={id}
        id={id}
        title={title}
        isRunning={isRunning}
        onClick={pomoTopBarHandler}
      />
    );
  });
  return (
    <Card
      sx={{ maxWidth: 345 }}
      style={{
        margin: "60px auto",
        paddingBottom: "20px",
        width: "100%",
        backgroundColor: "rgba(255, 255, 255, 0.1)",
        maxWidth: "1000px",
        borderRadius: "10px",
      }}>
      <Stack
        direction='row'
        spacing={2}
        mt={2}
        mb={5}
        style={{ display: "flex", justifyContent: "center" }}>
        {pomoTopBarRender}
      </Stack>
      <Typography
        style={{
          textAlign: "center",
          color: "white",
          fontFamily: "Nunito",
        }}
        className={classes.timer}
        variant='h1'
        component='div'
        gutterBottom>
        {timerScreenDisplay()}
      </Typography>
      <CardActions
        style={{
          display: "flex",
          textAlign: "center",
          justifyContent: "center",
        }}>
        <PomodoroActionButton
          style={{
            position: "relative",
          }}
          variant='contained'
          color='primary'
          title={!pomoRun ? "START" : "STOP"}
          onClick={actionButtonHandler}
        />
        {pomoRun ? (
          <SkipNextIcon
            style={{
              cursor: "pointer",
              position: "absolute",
              left: "62%",
              width: "55px",
              height: "55px",
              color: "white",
            }}
            onClick={changePomoHandler}
          />
        ) : (
          ""
        )}
      </CardActions>
    </Card>
  );
}
