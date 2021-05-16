import styled from "styled-components";
import COLORS from "../../constants/colors";

interface UpdatesCardStatusInfoProps {
  status: string;
}

export const UpdatesCardContainer = styled.div`
  background-color: ${COLORS.white};
  border-radius: 6px;
  box-shadow: 0px 1px 26px 0px #47577a14;
  padding: 16px;
  display: flex;
  flex-direction: row;
  margin-right: 16px;
  width: 100%;
  min-width: 400px;
  max-width: 500px;
  margin-bottom: 8px;
`;

export const UpdatesCardImage = styled.img`
  border-radius: 6px;
  width: 96px;
  height: 96px;
  margin-right: 16px;
`;

export const UpdatesCardInfoContent = styled.div`
  display: flex;
  flex-direction: column;
`;

export const UpdatesCardInfo = styled.div`
  font-size: 10px;
  font-style: normal;
  font-weight: 800;
  line-height: 14px;
  letter-spacing: 0em;
  color: #303b5b4d;
`;

export const UpdatesCardName = styled.h2`
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 25px;
  letter-spacing: 0em;
  color: ${COLORS.darkBlue};
  margin: 8px 0px;
`;

export const UpdatesCardStatusInfo = styled.span<UpdatesCardStatusInfoProps>`
  color: ${(props) =>
    props.status === "completed" ? `${COLORS.green}` : `${COLORS.red}`};
  margin: 8px 0px 8px 0px;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0em;

  strong {
    font-size: 12px;
    font-style: normal;
    font-weight: 700;
    line-height: 16px;
    letter-spacing: 0em;
  }
`;
