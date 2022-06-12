/** @format */

import React from "react";

import classes from "./NotFound.module.css";
import Tomato from "../../assets/logo/Tomato.png";

const NotFound = () => {
  return (
    <>
      <div className={classes.number_wrapper}>
        <h1 className={classes.number}>4</h1>
        <img src={Tomato} alt='' className={classes.tomato} />
        <h1 className={classes.number}>4</h1>
      </div>
      <h2 className={classes.error}>ERROR</h2>
      <h3 className={classes.description}>Page Not Found</h3>
    </>
  );
};

export default NotFound;
