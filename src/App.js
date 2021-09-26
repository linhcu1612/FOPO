/** @format */

import Container from "@mui/material/Container";
import Header from "./components/Layouts/Header";
import Main from "./components/Layouts/Main";
import "./App.css";

const data = [
  {
    id: 1,
    title: "Pomodoro",
    minute: 25,
    color: "rgb(219, 82, 77)",
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
    color: "rgb(67, 126, 168)",
    isRunning: false,
  },
];

function App() {
  return (
    <Container>
      <Header />
      <Main pomoList={data} />
    </Container>
  );
}

export default App;
