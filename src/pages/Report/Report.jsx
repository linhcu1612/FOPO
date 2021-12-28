/** @format */

import React from "react";

import HeapMap from "../../components/Report/HeapMap";
import Summary from "../../components/Report/Summary";

import classes from "./Report.module.css";

const Report = () => {
  return (
    <>
      <h1 className={classes.header}>Report</h1>
      <div className={classes.container}>
        <Summary />
        <HeapMap />
      </div>
    </>
  );
};

export default Report;
