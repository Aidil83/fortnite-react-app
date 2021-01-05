import styled from "styled-components/macro";
import { Link } from "react-router-dom";

export const SidebarMain = styled.div`
  display: none;

  @media screen and (max-width: 1190px) {
    display: block;
    position: fixed;
    z-index: 2;
    right: ${({ isOpen }) => (isOpen ? "0" : "-1080px")};
    transition: 300ms;
    top: 51px;
    height: calc(100vh - 51px);
    width: calc(100% - 100px);
    background-color: #2a2a2a;
  }
`;

export const SidebarMenu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 40vh;
  width: 100%;
  font-size: 1rem;
  font-weight: 500;
  color: white;
`;
export const SidebarItem = styled(Link)`
  padding: 1em 2em;
  text-decoration: none;
  list-style: none;
  border-bottom: 1px solid;
  border-color: #333;
  cursor: pointer;
  color: #ccc;

  &:hover {
    color: #fff;
  }
`;