import React, { ReactNode } from "react";
import Background from "../assets/images/background.jpg";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  background-image: url(${Background});
  padding: 40px;
`;

interface ContainerProps {
  children: ReactNode;
}

function Container({ children }: ContainerProps) {
  return <Wrapper>{children}</Wrapper>;
}

export default Container;
