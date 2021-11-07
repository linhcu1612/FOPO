/** @format */
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";

const LightTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.white,
    color: "rgba(0, 0, 0, 0.87)",
    boxShadow: theme.shadows[1],
    fontSize: 14,
    fontWeight: "bold",
    fontFamily: "Nunito",
  },
}));

export default function UserAvatar(props) {
  return (
    <LightTooltip title='Login/Register'>
      <Button
        onClick={props.onClick}
        style={{
          color: "white",
        }}>
        <AccountCircleIcon />
      </Button>
    </LightTooltip>
  );
}
