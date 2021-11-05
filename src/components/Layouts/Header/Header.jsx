/** @format */

//MUI Components
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";

//UIs Components
import ReportButton from "../../UIs/ReportButton";
import SettingButton from "../../UIs/SettingButton";
import UserAvatar from "../../UIs/UserAvatar";
import DarkLightModeButton from "../../UIs/DarkLightModeButton";
import MusicButton from "../../UIs/MusicButton";

//Router
import { Link } from "react-router-dom";
import { ROOT, AUTH, SETTING, MUSIC, REPORT } from "../../../routes/CONSTANTS";

//logo image
import logo from "../../../assets/logos/Fopo.png";

//css file
import classes from "./Header.module.css";

export default function Header(props) {
  return (
    <Box className={classes.header_container} py={3} px={4}>
      <Link to={ROOT} className={classes.header_logo}>
        FOMO
        <img src={logo} alt='Fopo Logo' className={classes.header_logo_icon} />
      </Link>
      <DarkLightModeButton
        changeTheme={props.changeTheme}
        theme={props.theme}
      />
      <Stack direction='row' spacing={2}>
        <Link to={MUSIC}>
          <MusicButton />
        </Link>
        <Link to={REPORT}>
          <ReportButton />
        </Link>
        <Link to={SETTING}>
          <SettingButton />
        </Link>
        <Link to={AUTH}>
          <UserAvatar />
        </Link>
      </Stack>
    </Box>
  );
}
