/** @format */

import { createGlobalStyle } from "styled-components";
export const GlobalStyles = createGlobalStyle`
  body {
    color: ${({ theme }) => theme.text};
    margin: 0;
    font-family: "Nunito", sans-serif;
    font-weight: 300;
    position: relative;
  }
  `;
