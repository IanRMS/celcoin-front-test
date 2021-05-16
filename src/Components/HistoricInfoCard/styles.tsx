import styled from "styled-components";
import BackImage from "../../assets/images/cardimage.jpg";
import COLORS from "../../constants/colors";

export const HistoricCardContainer = styled.div`
  border-radius: 6px;
  border: 1px solid #edf1f8;
  min-width: 264px;
  margin-right: 16px;
`;

export const HistoricCardImageContainer = styled.div`
  background-image: url(${BackImage});
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 136px;
`;

export const HistoricCardImage = styled.img`
  width: 60px;
  height: 60px;
`;

export const HistoricInfoContent = styled.div`
  width: 100%;
  padding: 16px;
`;

export const HistoricName = styled.div`
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 22px;
  letter-spacing: 0em;
`;

export const HistoricInfoLabel = styled.div`
  font-size: 10px;
  font-style: normal;
  font-weight: 800;
  line-height: 14px;
  letter-spacing: 0em;
  color: #303b5b4d;
  margin: 8px 0px;
`;

export const HistoricInfo = styled.div`
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 19px;
  letter-spacing: 0em;
  color: ${COLORS.darkBlue};
`;
