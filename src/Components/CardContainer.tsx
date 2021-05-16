import React, { ReactNode } from "react";
import styled from "styled-components";
import COLORS from "../constants/colors";
import Header from "./Header";

interface CardContainerProps {
  children: ReactNode;
}

const Container = styled.div`
  width: calc(100% - 250px);
  height: calc(100vh - 80px);
  background-color: ${COLORS.lightGray};
  border-radius: 30px;
  position: relative;
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    width: 100%;
  }

  @media (max-width: 425px) {
    border-radius: 30px 30px 0px 0px;
  }
`;

export const CardContent = styled.main`
  width: 100%;
  padding: 40px;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;

  @media (max-width: 768px) {
    padding: 20px;
  }

  @media (max-width: 425px) {
    padding: 10px;
  }
`;

function CardContainer({ children }: CardContainerProps) {
  return (
    <Container>
      <Header />
      <CardContent>{children}</CardContent>
    </Container>
  );
}

export default CardContainer;
