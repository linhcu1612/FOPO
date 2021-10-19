/** @format */

//MUI Components
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";

//UIs Components
import ReportButton from "../../UIs/ReportButton";
import SettingButton from "../../UIs/SettingButton";
import UserAvatar from "../../UIs/UserAvatar";
import DarkLightModeButton from "../../UIs/DarkLightModeButton";
import MusicButton from "../../UIs/MusicButton";

//logo image
import logo from "../../../assets/logos/Fopo.png";

//css file
import classes from "./Header.module.css";

export default function Header(props) {
  return (
    <Box className={classes.header_container} py={3} px={4}>
      <Link href='/' className={classes.header_logo} underline='none'>
        FOMO
        <img src={logo} alt='Fopo Logo' className={classes.header_logo_icon} />
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
