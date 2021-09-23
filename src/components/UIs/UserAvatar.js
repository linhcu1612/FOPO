/** @format */
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import Button from "@material-ui/core/Button";
import React from "react";

export default function UserAvatar() {
  return (
    <Button
      variant='outlined'
      style={{
        backgroundColor: "rgba(255, 255, 255, 0.1)",
        border: "none",
        color: "white",
      }}
      startIcon={<AccountCircleIcon />}>
      Login
    </Button>
  );
}
