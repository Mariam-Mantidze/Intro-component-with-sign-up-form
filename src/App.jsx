import { useState } from "react";
import "./App.css";
import styled from "styled-components";
import InformationText from "./components/Information";
import MainForm from "./components/Form";
import { GlobalStyles } from "./styles/GlobalStyles";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <GlobalStyles />
      <Form></Form>
      <InformationText></InformationText>
    </>
  );
}

export default App;
