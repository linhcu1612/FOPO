/** @format */

import React from "react";

import styled from "styled-components";

import classes from "./Loader.module.css";

const Background = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => `${theme.background}`};
`;

const Loader = () => {
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
    </Background>
  );
};

export default Loader;
