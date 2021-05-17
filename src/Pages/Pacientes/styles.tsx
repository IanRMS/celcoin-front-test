import styled from "styled-components";
import COLORS from "../../constants/colors";

interface SectionCardProps {
  scroll?: boolean;
  direction: "column" | "row";
  maxHeight?: number;
}

export const PageContent = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 500px) {
    padding-top: 10px;
  }
`;

export const UpdatesSection = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const SectionCard = styled.div<SectionCardProps>`
  border-radius: 6px;
  background-color: ${COLORS.white};
  box-shadow: 0px 8px 26px 0px ${COLORS.shadow};
  padding: 16px;
  transition: 0.3s ease-in-out;
  margin-top: 24px;
  display: flex;
  flex-direction: ${(props) => props.direction};
  overflow-x: ${(props) => (props.scroll ? "scroll" : "auto")};
  background-color: ${COLORS.white};

  &::-webkit-scrollbar-track {
    background-color: transparent;
  }

  &::-webkit-scrollbar {
    background-color: transparent;
    height: 8px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 2px;
    background-color: ${COLORS.scroll};
  }

  @media (max-width: 425px) {
    padding: 8px;
  }
`;

export const AllPacientsSection = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 48px;
`;

export const AllPacientsCardHeader = styled.div`
  width: 100%;
  padding: 16px 0px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: relative;

  @media (max-width: 500px) {
    padding: 16px 10px;
  }

  > div {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;

    @media (max-width: 600px) {
      flex-direction: column;
      align-items: flex-start;
      width: 100%;

      > div > input {
        width: 270px;
        margin-top: 8px;
      }
    }
  }
`;

export const AllPacientsListInfo = styled.h2`
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: 0em;
  color: ${COLORS.info2};
  margin-right: 16px;
`;

export const IconButton = styled.button`
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: 0.3s ease-in-out;
  background: transparent;

  &:hover {
    background-color: ${COLORS.lightGray};
  }

  @media (max-width: 425px) {
    position: absolute;
    top: 0px;
    right: 20px;
  }
`;

export const PacientsListContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 16px;
  max-height: 400px;
  overflow-y: scroll;

  &::-webkit-scrollbar-track {
    background-color: transparent;
  }

  &::-webkit-scrollbar {
    background-color: transparent;
    height: 8px;
    width: 8px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 2px;
    background-color: ${COLORS.scroll};
  }
`;
