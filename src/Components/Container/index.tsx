import React, { ReactNode } from "react";
import { Wrapper } from "./style.js";

interface ContainerProps {
  children: ReactNode;
}

export function Container({ children }: ContainerProps) {
  return <Wrapper>{children}</Wrapper>;
}
