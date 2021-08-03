/** @format */

import { Container } from "@material-ui/core";
import Header from "./components/Layouts/Header";
import Main from "./components/Layouts/Main";
import "./App.css";

function App() {
  return (
    <Container>
      <Header />
      <Main />
    </Container>
  );
}

export default App;
