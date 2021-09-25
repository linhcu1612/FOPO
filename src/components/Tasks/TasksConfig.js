/** @format */

import React from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Button from "@mui/material/Button";

const TasksConfig = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "15px 0",
        borderBottom: "2px solid rgba(255, 255, 255, 0.6)",
      }}>
      <div className='' style={{ fontSize: "18px", fontWeight: "bold" }}>
        Tasks
      </div>
      <Button
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.1)",
          margin: "0",
          minWidth: "0",
          color: "white",
        }}>
        <MoreVertIcon />
      </Button>
    </div>
  );
};

export default TasksConfig;
