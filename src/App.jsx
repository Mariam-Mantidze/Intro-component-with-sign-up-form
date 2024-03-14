import { useState } from "react";
import "./App.css";
import styled from "styled-components";
import InformationText from "./components/Information";
import Form from "./components/Form";
import { GlobalStyles } from "./styles/GlobalStyles";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Main>
      <GlobalStyles />
      <InformationText />
      <Form />
    </Main>
  );
}

export default App;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100dvh;
  padding: 0 24px 0;
`;
