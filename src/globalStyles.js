import { createGlobalStyle } from "styled-components/macro";

const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Montserrat', sans-serif;
  /* NOTE: Prevents auto scrolling after refreshing page: */
  overflow-anchor: none;

  html, body {
      overflow-x: hidden;
  }
}
`;

export default GlobalStyle;
