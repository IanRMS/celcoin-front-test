import styled from "styled-components";
import COLORS from "../../constants/colors";

export const Container = styled.div`
  width: calc(100% - 250px);
  height: calc(100vh - 80px);
  background-color: ${COLORS.lightGray};
  border-radius: 30px;
  position: relative;
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    width: 100%;
  }

  @media (max-width: 425px) {
    border-radius: 30px 30px 0px 0px;
  }
`;

export const CardContent = styled.main`
  width: 100%;
  padding: 40px;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;

  &::-webkit-scrollbar-track {
    background-color: transparent;
  }

  &::-webkit-scrollbar {
    width: 10px;
    background-color: transparent;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 2px;
    background-color: ${COLORS.scroll};
  }

  @media (max-width: 768px) {
    padding: 20px;
  }

  @media (max-width: 425px) {
    padding: 10px;
  }
`;
