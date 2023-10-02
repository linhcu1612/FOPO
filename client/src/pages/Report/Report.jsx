/** @format */

import React from "react";

import Summary from "../../components/Report/Summary/Summary";

import classes from "./Report.module.css";

const Report = (props) => {
  return (
    <>
      <h1 className={classes.header}>Report</h1>
      <div className={classes.container}>
        <Summary theme={props.theme} />
      </div>
    </>
  );
};

export default Report;
