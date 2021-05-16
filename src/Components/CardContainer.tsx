import React, { ReactNode } from "react";
import styled from "styled-components";
import COLORS from "../constants/colors";

interface CardContainerProps {
  children: ReactNode;
}

const Container = styled.div`
  width: calc(100% - 250px);
  /* min-height: calc(100vh - 80px); */
  height: 100vh;
  background-color: ${COLORS.lightGray};
  border-radius: 30px;
  padding: 40px;
  position: relative;
  overflow-y: scroll;

  @media (max-width: 768px) {
    width: 100%;
    padding: 20px;
  }

  @media (max-width: 425px) {
    padding: 10px;
    border-radius: 30px 30px 0px 0px;
  }
`;

function CardContainer({ children }: CardContainerProps) {
  return <Container>{children}</Container>;
}

export default CardContainer;
