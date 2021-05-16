import styled from "styled-components";
import COLORS from "../../constants/colors";

interface IconButtonProps {
  hasNotification?: boolean;
}

export const Container = styled.div`
  width: 100%;
  height: 88px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 32px;
  background-color: ${COLORS.white};
  box-shadow: rgba(149, 157, 165, 0.05) 0px 8px 24px;
  position: relative;
  border-radius: 30px 30px 0px 0px;

  @media (max-width: 500px) {
    padding: 20px;
    height: 150px;
    flex-direction: column-reverse;
  }

  @media (max-width: 375px) {
    padding: 12px;
  }
`;

export const SearchInputContainer = styled.div`
  width: 30%;
  max-width: 400px;
  height: 40px;
  position: relative;

  @media (max-width: 500px) {
    width: 100%;
  }

  svg {
    position: absolute;
    top: 12px;
    left: 12px;
  }
`;

export const SearchInput = styled.input`
  width: 100%;
  background-color: ${COLORS.lightGray};
  color: ${COLORS.gray};
  padding: 12.5px 45px;
  border: none;
  outline: none;
  border-radius: 5px;

  ::placeholder {
    /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: rgba(44, 46, 61, 0, 3);
  }

  :-ms-input-placeholder {
    /* Internet Explorer 10-11 */
    color: rgba(44, 46, 61, 0, 3);
  }

  ::-ms-input-placeholder {
    /* Microsoft Edge */
    color: rgba(44, 46, 61, 0, 3);
  }
`;

export const HeaderRow = styled.div`
  display: flex;
  align-items: center;
`;

export const IconButton = styled.button<IconButtonProps>`
  width: 30px;
  height: 30px;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  transition: 0.3s ease-in-out;
  position: relative;
  margin: 10px;

  &:hover {
    background-color: ${COLORS.lightGray};
    cursor: pointer;
  }

  &::after {
    content: "";
    width: 6px;
    height: 6px;
    border-radius: 3px;
    background: ${COLORS.red};
    display: ${(props) => (props.hasNotification ? "block" : "none")};
    position: absolute;
    top: 5px;
    right: 5px;
  }
`;

export const UserContent = styled.div`
  background-color: ${COLORS.lightGray};
  border-radius: 40px;
  padding: 8px;
  display: flex;
  align-items: center;
  margin: 10px;
  outline: none;
  transition: 0.3s ease-in-out;
  user-select: none;

  &:hover {
    cursor: pointer;
    box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.2);
  }
`;

export const UserContentImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 20px;
`;

export const UserContextText = styled.span`
  font-weight: 400;
  color: ${COLORS.gray};
  margin: 0px 15px;

  strong {
    font-weight: 600;
    color: ${COLORS.darkBlue};
  }
`;

export const SubMenuContainer = styled.div`
  position: absolute;
  min-width: 160px;
  top: 72px;
  right: 90px;
  border-radius: 8px;
  box-shadow: 4px 4px 16px rgba(0, 0, 0, 0.1);
  background-color: ${COLORS.white};

  button:nth-child(2) {
    border-bottom: 1px solid rgba(0, 0, 0, 0.05);
    border-top: 1px solid rgba(0, 0, 0, 0.05);
  }
`;

export const SubMenuOption = styled.button`
  width: 100%;
  height: 42px;
  display: flex;
  align-items: center;
  padding-left: 10px;
  background-color: transparent;
  transition: 0.3s ease-out;

  svg {
    margin-right: 8px;
  }

  &:hover {
    background-color: rgba(0, 0, 0, 0.02);
  }
`;

export const SubMenuOptionsText = styled.span`
  color: ${COLORS.darkBlue};
  font-weight: 700;
  font-size: 12px;
  line-height: 18px;
`;
