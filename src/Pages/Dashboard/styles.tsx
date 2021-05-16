import styled from "styled-components";
import COLORS from "../../constants/colors";
import backImage from "../../assets/images/cardimage.jpg";

export const PageContent = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 82px;

  @media (max-width: 500px) {
    padding-top: 150px;
  }
`;

export const SectionRow = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  overflow-x: scroll;
  overflow-y: visible;
`;

export const HistoricSection = styled.section`
  display: flex;
  flex-direction: row;
  margin-top: 48px;
  align-items: flex-end;

  @media (max-width: 1150px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const HistoricContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(100% - 384px);
  margin-right: 16px;

  @media (max-width: 1150px) {
    width: 100%;
    margin-right: 0px;
  }
`;

export const HistoricTitleRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  button {
    margin-left: 8px;
  }
`;

export const HistoricRowCard = styled.div`
  border-radius: 6px;
  background-color: ${COLORS.white};
  box-shadow: 0px 8px 26px 0px #47577a14;
  padding: 16px;
  transition: 0.3s ease-in-out;
  margin-top: 24px;
  display: flex;
  flex-direction: row;
  overflow-x: scroll;

  &:hover {
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
  }
`;

export const TopTestContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 368px;
  margin-bottom: 16px;

  @media (max-width: 1150px) {
    width: 100%;
    margin-top: 24px;
  }
`;

export const TopTestCard = styled.div`
  width: 368px;
  height: 323px;
  background-image: url(${backImage});
  background-size: cover;
  margin-top: 24px;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 1150px) {
    width: 100%;
  }
`;

export const TopTestImage = styled.img`
  width: 93px;
  height: 93px;
  margin-top: 41px;
`;

export const TopTestContent = styled.div`
  width: 100%;
  padding: 28px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const TopTestInfo = styled.h1`
  color: ${COLORS.darkBlue};
  font-size: 26px;
  font-style: normal;
  font-weight: 700;
  line-height: 35px;
  letter-spacing: 0em;
`;

export const TopTestInfoRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 8px;

  button {
    margin-left: 16px;
  }
`;

export const UpdatesSection = styled.section`
  margin-top: 48px;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const UpdatesRow = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  overflow-x: scroll;
  margin-top: 24px;
`;
