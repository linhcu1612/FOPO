/** @format */

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
  const [theme, themeToggler, mountedComponent] = useDarkMode();

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
            transition: "background-color 0.5s ease-in-out 0s",
          }}>
          <RouterConfig theme={theme} bgColor={bgColor} />
        </Container>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
