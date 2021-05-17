import { ReactNode } from "react";

import Header from "../Header";

import { Container, CardContent } from "./styles";

interface CardContainerProps {
  children: ReactNode;
}

function CardContainer({ children }: CardContainerProps) {
  return (
    <Container>
      <Header />
      <CardContent>{children}</CardContent>
    </Container>
  );
}

export default CardContainer;
