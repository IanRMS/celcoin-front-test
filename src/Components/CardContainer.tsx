import React, { ReactNode } from "react";
import styled from "styled-components";

interface CardContainerProps {
  children: ReactNode;
}

const Container = styled.div`
  width: calc(70% - 80px);
  min-height: calc(100vh - 80px);
  background-color: #eff2f9;
  border-radius: 30px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  padding: 40px;
  position: relative;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

function CardContainer({ children }: CardContainerProps) {
  return <Container>{children}</Container>;
}

export default CardContainer;
