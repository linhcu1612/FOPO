/** @format */
import Button from "@material-ui/core/Button";
import AssessmentIcon from "@mui/icons-material/Assessment";
import React from "react";

export default function ReportButton() {
  return (
    <Button
      variant='outlined'
      style={{
        backgroundColor: "rgba(255, 255, 255, 0.1)",
        border: "none",
        color: "white",
      }}
      startIcon={<AssessmentIcon />}>
      Report
    </Button>
  );
}
