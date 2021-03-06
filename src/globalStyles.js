import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: Poppins, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

input, button {
  border: none;
  outline: none;
}

input, button{
  font-family: Poppins, sans-serif;
}

button {
  cursor: pointer;
}
`;

export default GlobalStyle;
