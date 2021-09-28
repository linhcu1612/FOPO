/** @format */

import React, { useState, useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { pomoActions } from "../../store/pomo";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import PomodoroTopBarButton from "./PomodoroTopBarButton";
import PomodoroActionButton from "./PomodoroActionButton";
import SkipNextIcon from "@mui/icons-material/SkipNext";

import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import classes from "./Pomodoro.module.css";

export default function Pomodoro(props) {
  const dispatch = useDispatch();
  const pomo = useSelector((state) => state.pomo.pomoList);
  const currPomo = useSelector((state) => state.pomo.currPomo);

  //useReducer ?
  const [pomoMinute, setPomoMinute] = useState(pomo[0].minute);
  const [pomoSecond, setPomoSecond] = useState(0);
  const [pomoRun, setPomoRun] = useState(false);

  const pomoTopBarHandler = useCallback(
    (id) => {
      setPomoRun(false);
      dispatch(pomoActions.changePomo(id));
      setPomoSecond(0);
      setPomoMinute(pomo[id].minute);
    },
    [pomo, dispatch]
  );

  const changePomoHandler = useCallback(() => {
    if (currPomo >= 1) {
      pomoTopBarHandler(0);
    } else {
      pomoTopBarHandler(+currPomo + 1);
    }
  }, [currPomo, pomoTopBarHandler]);

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

    props.onTimerChange(totalTime, currPomo);

    return () => {
      clearTimeout(timer);
    };
  }, [
    pomoRun,
    pomoSecond,
    pomoMinute,
    currPomo,
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

  const pomoTopBarRender = pomo.map(({ id, title }) => {
    const isRunning = +id === +currPomo;
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
    <Card sx={{ maxWidth: 345 }} className={classes.card}>
      <Stack
        direction='row'
        spacing={2}
        mt={2}
        mb={5}
        className={classes.stack}>
        {pomoTopBarRender}
      </Stack>
      <Typography
        className={classes.timer}
        variant='h1'
        component='div'
        gutterBottom>
        {timerScreenDisplay()}
      </Typography>
      <CardActions className={classes.card_action}>
        <PomodoroActionButton
          variant='contained'
          color={pomo[currPomo].color}
          title={!pomoRun ? "START" : "STOP"}
          onClick={actionButtonHandler}
        />
        {pomoRun ? (
          <SkipNextIcon className={classes.icon} onClick={changePomoHandler} />
        ) : (
          ""
        )}
      </CardActions>
    </Card>
  );
}
