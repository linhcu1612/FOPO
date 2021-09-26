/** @format */

import React from "react";

const CurrentTask = (props) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}>
      <div
        className=''
        style={{ margin: "4px auto", fontSize: "18px", opacity: "0.6" }}>
        #4
      </div>
      <div
        className=''
        style={{
          margin: "auto",
          fontSize: "20px",
          color: "white",
          overflowWrap: "break-word",
          fontWeight: "bold",
        }}>
        Time for a break!
      </div>
    </div>
  );
};

export default CurrentTask;
