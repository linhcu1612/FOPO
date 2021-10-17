/** @format */
import "./App.css";

import { useState, useEffect } from "react";

import Container from "@mui/material/Container";
import Header from "./components/Layouts/Header";
import Main from "./components/Layouts/Main";
import Loader from "./components/UIs/Loader";

import styled, { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./styles/globalStyles";
import { lightTheme, darkTheme } from "./styles/Themes";

import background_light from "./assets/background/light_default.jpg";
import background_dark from "./assets/background/dark_default.jpg";

import { useDarkMode } from "./hooks/useDarkMode";
import { useSelector } from "react-redux";

const Background = styled.div`
  height: 100%;
  width: 100%;
  position: fixed;
  top: 0;
  background-image: ${({ theme }) => `url(${theme.background_img})`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  transition: background-image 0.5s linear;
`;

function App() {
  const pomo = useSelector((state) => state.pomo.pomoList);
  const currPomoIndex = useSelector((state) => state.pomo.currPomoIndex);
  const [theme, themeToggler, mountedComponent] = useDarkMode();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const imgs = [background_light, background_dark];

    cacheImages(imgs);
  }, []);

  const cacheImages = async (srcArr) => {
    const promises = await srcArr.map((src) => {
      return new Promise((resolve, reject) => {
        const img = new Image();

        img.src = src;
        img.onload = resolve();
        img.onerror = reject();
      });
    });

    await Promise.all(promises);

    setIsLoading(false);
  };

  const themeMode = theme === "light" ? lightTheme : darkTheme;

  const bgColor = pomo[currPomoIndex][`color_${theme}`];
  if (!mountedComponent && isLoading) {
    console.log(themeMode);
    return (
      <ThemeProvider theme={themeMode}>
        <Loader />
      </ThemeProvider>
    );
  }
  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyles />
      <Background />
      <Container
        maxWidth='md'
        style={{
          backgroundColor: `${bgColor}`,
          padding: "25px",
          borderRadius: "20px",
          marginTop: "50px",
          marginBottom: "50px",
          opacity: "0.9",
          transition: "background-color 0.5s ease-in-out 0s",
        }}>
        <Header changeTheme={themeToggler} theme={theme} />
        <Main theme={theme} />
      </Container>
    </ThemeProvider>
  );
}

export default App;
