import styled from "styled-components";
import { Icon } from "@iconify/react";
import COLORS from "../../constants/colors";

interface CardResultProps {
  result: number;
}

interface OverlayDivNumberProps {
  color: string;
}

export const Wrapper = styled.div`
  max-width: 360px;
  width: 30%;
  min-width: 200px;
  position: relative;
  margin: 24px 16px 16px 0px;
`;

export const CardContainer = styled.div`
  box-shadow: 0px 8px 26px 0px #47577a14;
  border-radius: 6px;
  padding: 20px;
  background-color: ${COLORS.white};
  width: 100%;
  position: relative;
  transition: 0.3s ease-in-out;

  &:hover {
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);

    ~ .overlay {
      opacity: 1;
    }
  }
`;

export const CardIcon = styled(Icon)``;

export const CardNumber = styled.h2`
  font-size: 36px;
  font-style: normal;
  font-weight: 700;
  line-height: 54px;
  letter-spacing: 1px;
  color: ${COLORS.darkBlue};
`;

export const CardLabel = styled.span`
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0px;
  color: ${COLORS.darkBlue};
`;

export const CardResult = styled.div<CardResultProps>`
  position: absolute;
  top: 20px;
  right: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 20px;
  border-radius: 20px;
  background-color: ${(props) =>
    props.result > 0 ? `${COLORS.green}` : `${COLORS.red}`};
  color: ${COLORS.white};
  font-size: 10px;
  font-style: normal;
  font-weight: 700;
  line-height: 15px;
  letter-spacing: 0px;
`;

export const OverlayDiv = styled.div`
  border-radius: 8px;
  box-shadow: 4px 4px 16px 0px #0000001a;
  padding: 16px;
  background-color: ${COLORS.white};
  display: flex;
  flex-direction: column;
  position: absolute;
  top: -20px;
  z-index: 10;
  right: 10px;
  opacity: 0;
  transition: 0.3s ease-in-out;
`;

export const OverlayDivText = styled.span`
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: 18px;
  letter-spacing: 0em;
  color: ${COLORS.darkBlue};
  margin-bottom: 8px;
`;

export const OverlayDivNumber = styled.span<OverlayDivNumberProps>`
  font-size: 22px;
  font-style: normal;
  font-weight: 700;
  line-height: 33px;
  letter-spacing: 0em;
  color: ${(props) => props.color};
`;
