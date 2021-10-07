/** @format */
import AssessmentIcon from "@mui/icons-material/Assessment";
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
    fontFamily: "Nunito",
  },
}));

export default function ReportButton() {
  return (
    <>
      <LightTooltip title='Report'>
        <Button
          style={{
            color: "white",
          }}>
          <AssessmentIcon />
        </Button>
      </LightTooltip>
    </>
  );
}
