/** @format */

import React from "react";
import Box from "@mui/material/Box";
import ReportButton from "../UIs/ReportButton";
import SettingButton from "../UIs/SettingButton";
import UserAvatar from "../UIs/UserAvatar";
import DarkLightModeButton from "../UIs/DarkLightModeButton";
import MusicButton from "../UIs/MusicButton";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";

export default function Header(props) {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
      mt={3}
      mx={4}
      pb={3}>
      <Link
        href='/'
        className=''
        underline='none'
        style={{
          display: "flex",
          alignItems: "center",
          color: "white",
          fontWeight: "bold",
          fontSize: "24px",
        }}>
        <CheckCircleIcon style={{ marginRight: "5px", width: "30px" }} />
        Pomofocus
      </Link>
      <Stack direction='row' spacing={2}>
        <MusicButton />
        <DarkLightModeButton
          changeTheme={props.changeTheme}
          theme={props.theme}
        />
        <ReportButton />
        <SettingButton />
        <UserAvatar />
      </Stack>
    </Box>
  );
}
