import styled from "styled-components";

export const SidebarMain = styled.div`
  @media screen and (max-width: 1190px) {
    /* display: ${({ show }) => show}; */
    display: none;
    position: absolute;
    z-index: 10;
    right: 0;
    height: 100vh;
    width: calc(100% - 100px);
    background-color: lightgray;
  }
`;
