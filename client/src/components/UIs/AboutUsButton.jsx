/** @format */
import InfoIcon from "@mui/icons-material/Info";
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
    fontWeight: "bold",
    fontSize: 14,
    fontFamily: "Nunito",
  },
}));

const AboutUsButton = () => {
  return (
    <>
      <LightTooltip title='About Us'>
        <Button
          style={{
            color: "white",
          }}>
          <InfoIcon />
        </Button>
      </LightTooltip>
    </>
  );
};

export default AboutUsButton;
