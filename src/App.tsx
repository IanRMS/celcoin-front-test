import React from "react";
import { BrowserRouter } from "react-router-dom";

import CardContainer from "./Components/CardContainer";
import Container from "./Components/Container";
import Content from "./Components/Content";
import Header from "./Components/Header";
import SideMenu from "./Components/SideMenu";

import GlobalStyle from "./globalStyles";
import Routes from "./routes";

function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalStyle />
        <Container>
          <Content>
            <SideMenu />
            <CardContainer>
              <Header />
              <Routes />
            </CardContainer>
          </Content>
        </Container>
      </BrowserRouter>
    </>
  );
}

export default App;
