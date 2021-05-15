import React from "react";
import styled from "styled-components";

import COLORS from "../constants/colors";

interface SectionTitleProps {
  text: string;
}

const Title = styled.h2`
  font-size: 18px;
  font-weight: 700;
  line-height: 27px;
  color: ${COLORS.darkBlue};
`;

function SectionTitle({ text }: SectionTitleProps) {
  return <Title>{text}</Title>;
}

export default SectionTitle;
