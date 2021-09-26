/** @format */

import { useState } from "react";
import Container from "@mui/material/Container";
import Header from "./components/Layouts/Header";
import Main from "./components/Layouts/Main";
import "./App.css";

const data = [
  {
    id: 1,
    title: "Pomodoro",
    minute: 25,
    color: "rgb(215, 75, 71)",
    isRunning: true,
  },
  {
    id: 2,
    title: "Short Break",
    minute: 5,
    color: "rgb(70, 142, 145)",
    isRunning: false,
  },
  {
    id: 3,
    title: "Long Break",
    minute: 15,
    color: "rgb(0, 118, 176)",
    isRunning: false,
  },
];

function App() {
  const [color, setColor] = useState(data[0].color);

  const changePomoHandler = (index) => {
    setColor(data[index].color);
  };

  return (
    <Container
      maxWidth='md'
      style={{
        backgroundColor: `${color}`,
        padding: "25px",
        borderRadius: "20px",
        marginTop: "50px",
        marginBottom: "50px",
        opacity: "0.9",
        transition: "background-color 0.5s ease-in-out 0s",
      }}>
      <Header />
      <Main pomoList={data} onPomoChange={changePomoHandler} />
    </Container>
  );
}

export default App;
