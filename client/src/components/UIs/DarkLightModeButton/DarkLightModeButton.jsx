/** @format */

import React, { useState } from "react";

import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import { styled } from "@mui/material/styles";
import styledComponent from "styled-components";
import classes from "./DarkLightModeButton.module.css";

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

const ToggleContainer = styledComponent.button`
  position: relative;
  display: flex;
  justify-content: space-between;
  background: ${({ theme }) => theme.gradient};
  width: 5rem;
  height: 2.5rem;
  margin: 0 auto;
  border-radius: 30px;
  border: 2px solid ${({ theme }) => theme.toggleBorder};
  font-size: 0.5rem;
  padding: 0.5rem;
  overflow: hidden;
  cursor: pointer;

  svg {
    max-width: 2.5rem;
    height: auto;
    transition: all 0.3s linear;

    &:first-child {
      transform: ${({ lightTheme }) =>
        lightTheme ? "translateY(0) rotate(40deg)" : "translateY(100px)"};
    }

    &:nth-child(2) {
      transform: ${({ lightTheme }) =>
        lightTheme ? "translateY(-100px)" : "translateY(0) rotate(90deg)"};
    }
  }
`;

const DarkLightModeButton = ({ changeTheme, theme }) => {
  const [darkMode, setDarkMode] = useState(theme !== "light");

  const darkModeButtonHandler = () => {
    changeTheme();
    setDarkMode((preState) => !preState);
  };

  return (
    <>
      <LightTooltip title='Change theme'>
        <ToggleContainer
          lightTheme={darkMode}
          className={classes.darkModeButton}
          onClick={darkModeButtonHandler}>
          <svg
            width='18'
            height='18'
            viewBox='0 0 18 18'
            style={{
              position: "relative",
              overflowX: "visible",
              overflowY: "visible",
            }}>
            <mask id='moon-mask-main-nav'>
              <rect x='0' y='0' width='18' height='18' fill='white'></rect>
              <circle cx='10' cy='2' r='8' fill='black'></circle>
            </mask>
            <circle
              fill='white'
              cx='9'
              cy='9'
              mask='url(#moon-mask-main-nav)'
              r='8'></circle>
            <g>
              <circle
                cx='17'
                cy='9'
                r='1.5'
                fill='white'
                style={{
                  transformOrigin: "center center",
                  transform: "scale(0)",
                }}></circle>
              <circle
                cx='13'
                cy='15.928203230275509'
                r='1.5'
                fill='white'
                style={{
                  transformOrigin: "center center",
                  transform: "scale(0)",
                }}></circle>
              <circle
                cx='5.000000000000002'
                cy='15.92820323027551'
                r='1.5'
                fill='white'
                style={{
                  transformOrigin: "center center",
                  transform: "scale(0)",
                }}></circle>
              <circle
                cx='1'
                cy='9.000000000000002'
                r='1.5'
                fill='white'
                style={{
                  transformOrigin: "center center",
                  transform: "scale(0)",
                }}></circle>
              <circle
                cx='4.9999999999999964'
                cy='2.071796769724492'
                r='1.5'
                fill='white'
                style={{
                  transformOrigin: "center center",
                  transform: "scale(0)",
                }}></circle>
              <circle
                cx='13'
                cy='2.0717967697244912'
                r='1.5'
                fill='white'
                style={{
                  transformOrigin: "center center",
                  transform: "scale(0)",
                }}></circle>
            </g>
          </svg>
          <svg
            width='18'
            height='18'
            viewBox='0 0 18 18'
            style={{
              position: "relative",
              overflowX: "visible",
              overflowY: "visible",
            }}>
            <mask id='sun-mask-main-nav'>
              <rect x='0' y='0' width='18' height='18' fill='white'></rect>
              <circle cx='25' cy='0' r='8' fill='black'></circle>
            </mask>
            <circle
              fill='white'
              cx='9'
              cy='9'
              mask='url(#sun-mask-main-nav)'
              r='5'></circle>
            <g>
              <circle
                cx='17'
                cy='9'
                r='1.5'
                fill='white'
                style={{
                  transformOrigin: "center center",
                  transform: "scale(1)",
                }}></circle>
              <circle
                cx='13'
                cy='15.928203230275509'
                r='1.5'
                fill='white'
                style={{
                  transformOrigin: "center center",
                  transform: "scale(1)",
                }}></circle>
              <circle
                cx='5.000000000000002'
                cy='15.92820323027551'
                r='1.5'
                fill='white'
                style={{
                  transformOrigin: "center center",
                  transform: "scale(1)",
                }}></circle>
              <circle
                cx='1'
                cy='9.000000000000002'
                r='1.5'
                fill='white'
                style={{
                  transformOrigin: "center center",
                  transform: "scale(1)",
                }}></circle>
              <circle
                cx='4.9999999999999964'
                cy='2.071796769724492'
                r='1.5'
                fill='white'
                style={{
                  transformOrigin: "center center",
                  transform: "scale(1)",
                }}></circle>
              <circle
                cx='13'
                cy='2.0717967697244912'
                r='1.5'
                fill='white'
                style={{
                  transformOrigin: "center center",
                  transform: "scale(1)",
                }}></circle>
            </g>
          </svg>
        </ToggleContainer>
      </LightTooltip>
    </>
  );
};

export default DarkLightModeButton;
