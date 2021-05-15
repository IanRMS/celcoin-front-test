import React from "react";
import styled from "styled-components";

const Container = styled.div`
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

const SearchInputContainer = styled.div`
  width: 30%;
  max-width: 400px;
  height: 40px;
  position: relative;
`;

const SearchInput = styled.input`
  width: 100%;
  background-color: #f5f5f5;
  color: #787686;
  padding: 12.5px 40px;
  border: none;
  outline: none;

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

function Header() {
  return (
    <Container>
      <SearchInputContainer>
        <SearchInput placeholder="Busca..." />
      </SearchInputContainer>
      <div></div>
    </Container>
  );
}

export default Header;
