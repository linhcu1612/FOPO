/** @format */

import React from "react";

import { useSelector } from "react-redux";

import { FaRegClock } from "react-icons/fa";
import { BsCalendar3 } from "react-icons/bs";
import { AiOutlineFire } from "react-icons/ai";

import Category from "./Category";

import classes from "./Summary.module.css";

const Summary = (props) => {
  const theme = useSelector((state) => state.ui.theme[`${props.theme}`]);
  return (
    <>
      <div className={classes.header}>
        <div className={classes.text}>Activity Summary</div>
        <div
          className={classes.line}
          style={{ backgroundColor: theme.text }}></div>
      </div>
      <div className={classes.body}>
        <Category
          icon={<FaRegClock className={classes.icon} />}
          bg={theme.summary_background}
          title='hours focused'
        />
        <Category
          icon={<BsCalendar3 className={classes.icon} />}
          bg={theme.summary_background}
          title='day accessed'
        />
        <Category
          icon={<AiOutlineFire className={classes.icon} />}
          bg={theme.summary_background}
          title='day streak'
        />
      </div>
    </>
  );
};

export default Summary;
