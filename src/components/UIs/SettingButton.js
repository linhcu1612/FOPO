/** @format */
import SettingsIcon from "@mui/icons-material/Settings";
import Button from "@mui/material/Button";
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
