/** @format */
import SettingsIcon from "@material-ui/icons/Settings";
import Button from "@material-ui/core/Button";
import React from "react";

export default function SettingButton() {
  return (
    <Button
      variant='outlined'
      style={{
        backgroundColor: "rgba(255, 255, 255, 0.1)",
        border: "none",
        color: "white",
      }}
      startIcon={<SettingsIcon />}>
      Setting
    </Button>
  );
}
