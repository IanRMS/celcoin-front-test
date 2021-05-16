import styled from "styled-components";
import COLORS from "../../constants/colors";

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

export const Input = styled.input`
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
