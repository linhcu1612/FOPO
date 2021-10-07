/** @format */

import React, { useState } from "react";

import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import classes from "./DarkLightModeButton.module.css";

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

const DarkLightModeButton = () => {
  const [darkMode, setDarkMode] = useState(false);

  const darkModeButtonHandler = () => {
    setDarkMode((preState) => !preState);
  };

  const dotStyle = {
    transformOrigin: "center center",
    transform: `scale(${darkMode ? 0 : 1})`,
  };

  const svgStyle = {
    transform: `rotate(${darkMode ? 40 : 90}deg)`,
  };

  return (
    <>
      <LightTooltip title='Change theme'>
        <Button
          className={classes.darkModeButton}
          onClick={darkModeButtonHandler}>
          <svg
            width='18'
            height='18'
            viewBox='0 0 18 18'
            style={svgStyle}
            className={classes.DarkModeToggle__MoonOrSun}>
            <mask id='moon-mask-main-nav'>
              <rect x='0' y='0' width='18' height='18' fill='white'></rect>
              <circle
                cx={darkMode ? "10" : "25"}
                cy={darkMode ? "2" : "0"}
                r='8'
                fill='black'></circle>
            </mask>
            <circle
              fill='white'
              cx='9'
              cy='9'
              mask='url(#moon-mask-main-nav)'
              r={darkMode ? "8" : "5"}></circle>
            <g>
              <circle
                cx='17'
                cy='9'
                r='1.5'
                fill='white'
                style={dotStyle}></circle>
              <circle
                cx='13'
                cy='15.928203230275509'
                r='1.5'
                fill='white'
                style={dotStyle}></circle>
              <circle
                cx='5.000000000000002'
                cy='15.92820323027551'
                r='1.5'
                fill='white'
                style={dotStyle}></circle>
              <circle
                cx='1'
                cy='9.000000000000002'
                r='1.5'
                fill='white'
                style={dotStyle}></circle>
              <circle
                cx='4.9999999999999964'
                cy='2.071796769724492'
                r='1.5'
                fill='white'
                style={dotStyle}></circle>
              <circle
                cx='13'
                cy='2.0717967697244912'
                r='1.5'
                fill='white'
                style={dotStyle}></circle>
            </g>
          </svg>
        </Button>
      </LightTooltip>
    </>
  );
};

export default DarkLightModeButton;
