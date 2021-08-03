/** @format */
import SettingsIcon from "@material-ui/icons/Settings";
import Button from "@material-ui/core/Button";
import React from "react";

export default function SettingButton() {
  return (
    <Button variant='contained' style={{ marginRight: "20px" }}>
      <SettingsIcon style={{ marginRight: "5px" }} />
      Setting
    </Button>
  );
}
