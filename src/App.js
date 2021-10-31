/** @format */
import { useEffect } from "react";

import Container from "@mui/material/Container";
import Header from "./components/Layouts/Header/Header";
import Home from "./pages/Home/Home";
import Loader from "./components/UIs/Loader";

import styled, { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./styles/globalStyles";

import { useDarkMode } from "./hooks/useDarkMode";
import { useSelector } from "react-redux";
import { useAudio } from "./hooks/useAudio";

// ROUTER
//import { BrowserRouter } from "react-router-dom";
//import { RouterConfig } from "navigation/RouterConfig";

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
  const ui = useSelector((state) => state.ui);
  const currPomoIndex = useSelector((state) => state.pomo.currPomoIndex);
  const [playing, togglePlaying, setAudio] = useAudio();
  const [theme, themeToggler, mountedComponent] = useDarkMode();

  useEffect(() => {
    setAudio(pomo[currPomoIndex].music);
  }, [currPomoIndex, setAudio, pomo]);

  const themeMode = theme === "light" ? ui.theme.light : ui.theme.dark;

  const bgColor = pomo[currPomoIndex][`color_${theme}`];

  if (!mountedComponent) {
    return (
      <ThemeProvider theme={themeMode}>
        <Loader quote='Loading' />
      </ThemeProvider>
    );
  }
  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyles />
      <Background />
      <Header changeTheme={themeToggler} theme={theme} />
      {/* Home */}
      <Container
        maxWidth='md'
        style={{
          background: `${bgColor}`,
          padding: "25px",
          borderRadius: "20px",
          marginTop: "120px",
          marginBottom: "50px",
          opacity: "0.9",
          transition: "background-color 0.5s ease-in-out 0s",
        }}>
        <Home theme={theme} playing={playing} togglePlaying={togglePlaying} />
      </Container>
    </ThemeProvider>
  );
}

export default App;
