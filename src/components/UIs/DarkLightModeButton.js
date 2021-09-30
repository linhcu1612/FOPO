/** @format */

import React, { useState } from "react";

import classes from "./DarkLightModeButton.module.css";

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
      <button
        aria-label='Activate light mode'
        title='Activate light mode'
        class={classes.darkModeButton}
        onClick={darkModeButtonHandler}>
        <svg
          width='18'
          height='18'
          viewBox='0 0 18 18'
          style={svgStyle}
          class={classes.DarkModeToggle__MoonOrSun}>
          <mask id='moon-mask-main-nav'>
            <rect x='0' y='0' width='18' height='18' fill='white'></rect>
            <circle
              cx={darkMode ? "10" : "25"}
              cy={darkMode ? "2" : "0"}
              r='8'
              fill='black'></circle>
            {/* cx = 10 cy = 2 in moon and cx = 25 cy = 0 in sun */}
          </mask>
          <circle
            fill='white'
            cx='9'
            cy='9'
            mask='url(#moon-mask-main-nav)'
            r={darkMode ? "8" : "5"}></circle>
          {/* r = 8 in moon and r = 5 in sun */}
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
      </button>
    </>
  );
};

export default DarkLightModeButton;
