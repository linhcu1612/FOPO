/** @format */

import React from "react";

import HeapMap from "../../components/Report/HeapMap";
import Summary from "../../components/Report/Summary";

import classes from "./Report.module.css";

const Report = (props) => {
  return (
    <>
      <h1 className={classes.header}>Report</h1>
      <div className={classes.container}>
        <Summary theme={props.theme} />
        <HeapMap theme={props.theme} />
      </div>
    </>
  );
};

export default Report;
