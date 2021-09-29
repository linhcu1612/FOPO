/** @format */
import "./App.css";

import Container from "@mui/material/Container";
import Header from "./components/Layouts/Header";
import Main from "./components/Layouts/Main";

import { useSelector } from "react-redux";

function App() {
  const pomo = useSelector((state) => state.pomo.pomoList);
  const currPomo = useSelector((state) => state.pomo.currPomo);

  return (
    <Container
      maxWidth='md'
      style={{
        backgroundColor: `${pomo[currPomo].color}`,
        padding: "25px",
        borderRadius: "20px",
        marginTop: "50px",
        marginBottom: "50px",
        opacity: "0.9",
        transition: "background-color 0.5s ease-in-out 0s",
      }}>
      <Header />
      <Main />
    </Container>
  );
}

export default App;
