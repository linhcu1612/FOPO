/** @format */

import { useEffect, useState } from "react";

import Container from "@mui/material/Container";
import Header from "./components/Layouts/Header/Header";
import Loader from "./components/UIs/Loader";

import styled, { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./styles/globalStyles";

import { useDarkMode } from "./hooks/useDarkMode";
import { useSelector } from "react-redux";

// ROUTER
import { BrowserRouter } from "react-router-dom";
import { RouterConfig } from "./routes/RouterConfig";

const Background = styled.img`
  height: 100%;
  width: 100%;
  position: fixed;
  top: 0;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

function App() {
  const pomo = useSelector((state) => state.pomo.pomoList);
  const ui = useSelector((state) => state.ui);
  const currPomoIndex = useSelector((state) => state.pomo.currPomoIndex);
  const [theme, themeToggler, mountedComponent] = useDarkMode();
  const [isLoading, setIsLoading] = useState(true);

  const cacheImages = async (srcArray) => {
    const promises = await srcArray.map((src) => {
      return new Promise(function (resolve, reject) {
        const img = new Image();
        img.src = src;
        img.onload = resolve();
        img.onerror = reject();
      });
    });

    await Promise.all(promises);
    setIsLoading(false);
  };

  useEffect(() => {
    const imageList = [
      ui.theme.dark.background_img,
      ui.theme.light.background_img,
    ];
    cacheImages(imageList);
  }, []);

  const themeMode = theme === "light" ? ui.theme.light : ui.theme.dark;

  const bgColor = pomo[currPomoIndex][`color_${theme}`];

  if (!mountedComponent && isLoading) {
    return (
      <ThemeProvider theme={themeMode}>
        <Loader quote='Loading' />
      </ThemeProvider>
    );
  }
  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyles />
      <Background src={themeMode.background_img} />
      <BrowserRouter>
        <Header changeTheme={themeToggler} theme={theme} />
        <Container
          maxWidth='md'
          style={{
            background: `${bgColor}`,
            padding: "25px",
            borderRadius: "20px",
            marginBottom: "50px",
            opacity: "0.99",
          }}>
          <RouterConfig theme={theme} bgColor={bgColor} />
        </Container>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
