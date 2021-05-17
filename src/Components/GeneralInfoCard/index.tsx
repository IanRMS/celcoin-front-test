import CountUp from "react-countup";

import {
  CardContainer,
  CardIcon,
  CardNumber,
  CardLabel,
  CardResult,
  OverlayDiv,
  OverlayDivText,
  OverlayDivNumber,
  Wrapper,
} from "./styles";

interface GeneralInfoCardProps {
  icon: object;
  result: number;
  number: number;
  tipNumber: number;
  label: string;
  iconColor: string;
  tipLabel: string;
  tipNumberColor: string;
}

function GeneralInfoCard({
  result,
  label,
  icon,
  iconColor,
  number,
  tipNumber,
  tipLabel,
  tipNumberColor,
}: GeneralInfoCardProps) {
  return (
    <Wrapper>
      <CardContainer>
        <CardIcon icon={icon} color={iconColor} width="26" />
        <CardNumber>
          <CountUp start={0} end={number} duration={3} />
        </CardNumber>
        <CardLabel>{label}</CardLabel>
        <CardResult result={result}>
          {result > 0 && "+ "}
          {result}%
        </CardResult>
      </CardContainer>
      <OverlayDiv className="overlay">
        <OverlayDivText>{tipLabel}</OverlayDivText>
        <OverlayDivNumber color={tipNumberColor}>{tipNumber}</OverlayDivNumber>
      </OverlayDiv>
    </Wrapper>
  );
}

export default GeneralInfoCard;
