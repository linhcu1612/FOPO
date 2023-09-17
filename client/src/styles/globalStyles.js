/** @format */

import { createGlobalStyle } from "styled-components";
export const GlobalStyles = createGlobalStyle`
  body {
    width: 100%;
    height: 100%;
    color: ${({ theme }) => theme.text};
    margin: 0;
    font-family: "Nunito", sans-serif !important;
    font-weight: 300;
    position: relative;
  }
  `;
