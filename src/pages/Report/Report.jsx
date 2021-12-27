/** @format */

import React from "react";

import HeapMap from "../../components/HeatMap/HeapMap";

import classes from "./Report.module.css";

const Report = () => {
  return (
    <>
      <h1 className={classes.header}>Report</h1>
      <div className={classes.container}>
        <HeapMap />
      </div>
    </>
  );
};

export default Report;
