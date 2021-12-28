/** @format */

import React from "react";

import moment from "moment";

import classes from "./HeapMap.module.css";

import ReactTooltip from "react-tooltip";

import CalendarHeatmap from "react-calendar-heatmap";
import "react-calendar-heatmap/dist/styles.css";

const HeapMap = () => {
  const data = Array.from(new Array(365)).map((_, index) => {
    const num = Math.random();
    return {
      date: moment(moment().add(-364, "days").format("YYYY-MM-DD")).add(
        index,
        "day"
      ),
      count: Math.floor(num * 4),
      data: Math.floor(num * 10),
    };
  });

  const getTooltipDataAttrs = (value) => {
    if (!value || !value.date) {
      return null;
    }
    return {
      "data-tip": `${
        value.count > 0 ? value.data : "No"
      } pomodoros on ${value.date.format("MMM D, yyyy")}`,
    };
  };

  return (
    <>
      <div className={classes.header}>
        <div className={classes.text}>Pomodoro Summary</div>
        <div className={classes.line}></div>
      </div>
      <CalendarHeatmap
        startDate={moment().add(-364, "days").format("YYYY-MM-DD")}
        endDate={moment()}
        values={data}
        showWeekdayLabels={true}
        gutterSize={2}
        tooltipDataAttrs={getTooltipDataAttrs}
        classForValue={(value) => {
          if (!value) {
            return "color-empty";
          }
          return `color-scale-${value.count}`;
        }}
      />
      <ReactTooltip />
    </>
  );
};

export default HeapMap;
