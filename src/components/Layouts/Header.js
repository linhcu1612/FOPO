/** @format */

import React from "react";
import Box from "@mui/material/Box";
import ReportButton from "../UIs/ReportButton";
import SettingButton from "../UIs/SettingButton";
import UserAvatar from "../UIs/UserAvatar";
import DarkLightModeButton from "../UIs/DarkLightModeButton";
import MusicButton from "../UIs/MusicButton";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";

import classes from "./Header.module.css";

export default function Header(props) {
  return (
    <Box className={classes.header_container} mt={3} mx={4} pb={3}>
      <Link href='/' className={classes.header_logo} underline='none'>
        FOPO
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
