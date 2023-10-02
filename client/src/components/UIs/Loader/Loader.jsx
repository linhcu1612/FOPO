/** @format */

import React from "react";

import Typography from "@mui/material/Typography";

import styled from "styled-components";

import classes from "./Loader.module.css";

const Background = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => `${theme.background}`};
`;

const Loader = (props) => {
  return (
    <Background>
      <div className={classes.lds_spinner}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <Typography
        variant='h1'
        component='div'
        gutterBottom
        className={classes.quote}>
        {props.quote}
      </Typography>
    </Background>
  );
};

export default Loader;
