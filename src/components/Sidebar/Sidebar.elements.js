import styled from "styled-components/macro";
import { Link } from "react-router-dom";

export const SidebarMain = styled.div`
  display: none;

  @media screen and (max-width: 1190px) {
    display: block;
    position: fixed;
    z-index: 3;
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
  height: 320px;
  width: 100%;
  font-size: 0.8rem;
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

export const SidebarFooter = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  align-items: flex-end;
  margin-top: auto;
  background-color: lime;

  & .Footer__container {
    height: 100px;
    width: 100%;
    background-color: aqua;
  }
`;
