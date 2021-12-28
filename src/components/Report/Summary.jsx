/** @format */

import React from "react";

import { FaRegClock } from "react-icons/fa";
import { BsCalendar3 } from "react-icons/bs";
import { AiOutlineFire } from "react-icons/ai";

import classes from "./Summary.module.css";

const Summary = () => {
  return (
    <>
      <div className={classes.header}>
        <div className={classes.text}>Activity Summary</div>
        <div className={classes.line}></div>
      </div>
      <div className={classes.body}>
        <div className={classes.wrapper}>
          <FaRegClock className={classes.icon} />
          <div className={classes.number}>--</div>
          <div className={classes.text_body}>hours focused</div>
        </div>
        <div className={classes.wrapper}>
          <BsCalendar3 className={classes.icon} />
          <div className={classes.number}>--</div>
          <div className={classes.text_body}>day accessed</div>
        </div>
        <div className={classes.wrapper}>
          <AiOutlineFire className={classes.icon} />
          <div className={classes.number}>--</div>
          <div className={classes.text_body}>day streak</div>
        </div>
      </div>
    </>
  );
};

export default Summary;
