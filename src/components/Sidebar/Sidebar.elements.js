import styled from "styled-components";

export const SidebarMain = styled.div`
  @media screen and (max-width: 1190px) {
    position: absolute;
    z-index: 10;
    transition: 300ms;
    right: ${({ isOpen }) => (isOpen ? "0" : "-1040px;")};
    height: 100vh;
    width: calc(100% - 100px);
    background-color: lightgray;
  }
`;
