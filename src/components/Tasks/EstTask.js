/** @format */

import React from "react";
import classes from "./EstTask.module.css";

const EstTask = (props) => {
  const finishAtCal = () => {
    var today = new Date();
    today.setHours(
      today.getHours(),
      today.getMinutes() +
        props.est * 25 +
        (props.est / 3) * 5 +
        (props.est / 4) * 15
    );
    let hour = today.getHours() > 9 ? today.getHours() : "0" + today.getHours();
    let minute =
      today.getMinutes() > 9 ? today.getMinutes() : "0" + today.getMinutes();
    return `${hour}:${minute}`;
  };

  return (
    <div
      style={{ display: "flex", justifyContent: "center" }}
      className={classes.wrapper}>
      <div className={classes.est_block}>
        Est:
        <span className={classes.est_time}>{props.est}</span>
      </div>
      <div className={classes.est_block}>
        Act: <span className={classes.est_time}>{props.act}</span>
      </div>
      <div className={classes.est_block}>
        Finish at <span className={classes.est_time}>{finishAtCal()}</span>
      </div>
    </div>
  );
};

export default EstTask;
