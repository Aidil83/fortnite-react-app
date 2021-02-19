import { createGlobalStyle } from "styled-components/macro";

const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-rendering: optimizeLegibility;
  font-family: sans-serif, 'Montserrat';
  /* NOTE: Prevents auto scrolling after refreshing page: */
  overflow-anchor: none;

  html, body {
      overflow-x: hidden;
  }
}
`;

export default GlobalStyle;
