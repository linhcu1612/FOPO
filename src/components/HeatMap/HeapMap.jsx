/** @format */

import React from "react";

import moment from "moment";

import ReactTooltip from "react-tooltip";

import CalendarHeatmap from "react-calendar-heatmap";
import "react-calendar-heatmap/dist/styles.css";

const HeapMap = () => {
  let startDate = moment().add(-345, "days");

  let data = Array.from(new Array(346)).map((_, index) => {
    const num = Math.random();
    return {
      date: moment(startDate).add(index, "day"),
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
      <CalendarHeatmap
        startDate={startDate}
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
