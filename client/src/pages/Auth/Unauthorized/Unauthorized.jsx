/** @format */

import React from "react";

import { Link } from "react-router-dom";

import { LOGIN } from "../../../routes/CONSTANTS";

import { useSelector } from "react-redux";

import classes from "./Unauthorized.module.css";

const Unauthorized = (props) => {
  const pomo = useSelector((state) => state.pomo.pomoList);
  const currPomoIndex = useSelector((state) => state.pomo.currPomoIndex);
  const textColor = pomo[currPomoIndex][`color_${props.theme}`];
  return (
    <div className={classes.wrapper}>
      <h1 className={classes.header}>Unauthorized</h1>
      <div className={classes.btn_wrapper}>
        <Link to={LOGIN} className={classes.link_wrapper}>
          <div className={classes.btn} style={{ color: textColor }}>
            Login
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Unauthorized;
