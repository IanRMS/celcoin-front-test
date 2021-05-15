import React, { ReactNode } from "react";
import styled from "styled-components";

const Container = styled.main`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  margin: auto;
  filter: drop-shadow(0px 1px 30px rgba(0, 0, 0, 0.15));

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

interface ContentProps {
  children: ReactNode;
}

function Content({ children }: ContentProps) {
  return <Container>{children}</Container>;
}

export default Content;
