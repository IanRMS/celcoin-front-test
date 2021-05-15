import styled from "styled-components";
import COLORS from "../../constants/colors";

export const PageContent = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 82px;
`;

export const SectionRow = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  overflow-x: scroll;
  overflow-y: visible;
`;

export const HistoricSection = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 24px;
  align-items: flex-start;
`;

export const HistoricContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(100% - 368px);
  margin-right: 16px;
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
  border: 1px solid red;
`;
