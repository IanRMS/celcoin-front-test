import React, { ReactNode } from "react";
import Background from "../assets/images/background.jpg";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  background-image: url(${Background});
  padding: 40px;
  background-size: cover;

  @media (max-width: 1024px) {
    padding: 20px;
  }

  @media (max-width: 768px) {
    padding: 10px;
  }

  @media (max-width: 425px) {
    padding: 0;
  }
`;

interface ContainerProps {
  children: ReactNode;
}

function Container({ children }: ContainerProps) {
  return <Wrapper>{children}</Wrapper>;
}

export default Container;
