import React from "react";
import CardContainer from "./Components/CardContainer";
import Container from "./Components/Container";
import Header from "./Components/Header";
import GlobalStyle from "./globalStyles";

function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <CardContainer>
          <Header />
        </CardContainer>
      </Container>
    </>
  );
}

export default App;
