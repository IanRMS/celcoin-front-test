import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";

import CardContainer from "./Components/CardContainer";
import Container from "./Components/Container";
import Content from "./Components/Content";
import Header from "./Components/Header";
import SideMenu from "./Components/SideMenu";
import SideMenuMobile from "./Components/SIdeMenuMobile";

import GlobalStyle from "./globalStyles";
import Routes from "./routes";

function App() {
  const [isSideMenuOpen, setSideMenuOpen] = useState(false);

  return (
    <>
      <BrowserRouter>
        <GlobalStyle />
        <Container>
          <Content>
            <SideMenu menuClick={() => setSideMenuOpen(!isSideMenuOpen)} />
            <SideMenuMobile
              open={isSideMenuOpen}
              menuClick={() => setSideMenuOpen(!isSideMenuOpen)}
            />
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
