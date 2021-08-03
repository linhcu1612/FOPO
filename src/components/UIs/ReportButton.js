/** @format */
import Button from "@material-ui/core/Button";
import AssessmentIcon from "@material-ui/icons/Assessment";
import React from "react";

export default function ReportButton() {
  return (
    <Button style={{ marginRight: "20px" }} variant='contained'>
      <AssessmentIcon style={{ marginRight: "5px" }} />
      Report
    </Button>
  );
}
