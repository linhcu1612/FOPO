/** @format */

//MUI Components
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";

//UIs Components
import ReportButton from "../../UIs/HeaderButton/ReportButton";
import SettingButton from "../../UIs/HeaderButton/SettingButton";
import UserAvatar from "../../UIs/HeaderButton/UserAvatar";
import DarkLightModeButton from "../../UIs/DarkLightModeButton/DarkLightModeButton";
import MusicButton from "../../UIs/HeaderButton/MusicButton";

//Router
import { Link } from "react-router-dom";
import { ROOT, LOGIN, SETTING, MUSIC, REPORT } from "../../../routes/CONSTANTS";

//logo image
import logo from "../../../assets/logo/Fopo.svg";

//css file
import classes from "./Header.module.css";

export default function Header(props) {
  return (
    <Box className={classes.header_container} py={3} px={4}>
      <Link to={ROOT} className={classes.header_logo}>
        <div>FOMO</div>
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
        <Link to={LOGIN}>
          <UserAvatar />
        </Link>
      </Stack>
    </Box>
  );
}
