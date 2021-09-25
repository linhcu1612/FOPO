/** @format */

import React from "react";
import classes from "./EstTask.module.css";

const EstTask = () => {
  return (
    <div
      style={{ display: "flex", justifyContent: "center" }}
      className={classes.wrapper}>
      <div className={classes.est_block}>
        Est:
        <span className={classes.est_time}>4</span>
      </div>
      <div className={classes.est_block}>
        Act: <span className={classes.est_time}>2</span>
      </div>
      <div className={classes.est_block}>
        Finish at <span className={classes.est_time}>12:36</span>
      </div>
    </div>
  );
};

export default EstTask;
