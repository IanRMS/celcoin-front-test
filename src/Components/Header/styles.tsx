import styled from "styled-components";

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
  background-color: #fff;
  box-shadow: rgba(149, 157, 165, 0.05) 0px 8px 24px;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 30px 30px 0px 0px;
`;

export const SearchInputContainer = styled.div`
  width: 30%;
  max-width: 400px;
  height: 40px;
  position: relative;

  svg {
    position: absolute;
    top: 12px;
    left: 12px;
  }
`;

export const SearchInput = styled.input`
  width: 100%;
  background-color: #f5f5f5;
  color: #787686;
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
    background-color: #eff2f9;
    cursor: pointer;
  }

  &::after {
    content: "";
    width: 6px;
    height: 6px;
    border-radius: 3px;
    background: #ef0c35;
    display: ${(props) => (props.hasNotification ? "block" : "none")};
    position: absolute;
    top: 5px;
    right: 5px;
  }
`;

export const UserContent = styled.div`
  background-color: #eff2f9;
  border-radius: 40px;
  padding: 8px;
  display: flex;
  align-items: center;
  margin: 10px;
  outline: none;
  transition: 0.3s ease-in-out;

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
  color: #787686;
  margin: 0px 15px;

  strong {
    font-weight: 600;
    color: #303b5b;
  }
`;
