import React, { HTMLProps } from "react";
import styled from "styled-components";

import COLORS from "../constants/colors";

interface RoundButtonProps extends HTMLProps<HTMLButtonElement> {
  children: React.ReactNode;
  color: "blue" | "pink";
}

const RoundButtonContainer = styled.button<RoundButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 24px;
  border-radius: 20px;
  padding: 8px 16px;
  font-size: 10px;
  font-style: normal;
  font-weight: 700;
  line-height: 14px;
  letter-spacing: 1px;
  text-align: center;
  color: ${COLORS.white};
  background: ${(props) =>
    props.color === "blue"
      ? "linear-gradient(93.05deg, #00a3ff 0%, #0057ff 100%)"
      : "linear-gradient(93.05deg, #FF00C7 0%, #FF005C 100%);"};
`;

function RoundButton({ children, color }: RoundButtonProps) {
  return <RoundButtonContainer color={color}>{children}</RoundButtonContainer>;
}

export default RoundButton;
