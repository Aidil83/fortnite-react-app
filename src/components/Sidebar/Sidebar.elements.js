import styled from "styled-components/macro";
import {Link} from "react-router-dom";

export const SidebarMain = styled.div`
  display: none;

  @media screen and (max-width: 1190px) {
    display: block;
    position: fixed;
    z-index: 3;
    right: ${({isOpen}) => (isOpen ? "0" : "-1080px")};
    transition: 300ms;
    top: 51px;
    height: calc(100vh - 51px);
    width: calc(100% - 50px);
    background-color: #2a2a2a;
  }
`;

export const SidebarMenu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
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
  height: 100%;
  display: flex;
  align-items: flex-end;
  margin-top: auto;

  & .Footer__container {
    height: 120px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: #303030;
    & .Footer__searchBar {
      padding: 1em;
      input {
        border: none;
        width: 100%;
        padding: 0.4em 0.5em;
        border-radius: 4px;
        background-color: #444444;
        font-size: 1.2rem;
        border-style: none;
        outline: none;
        color: white;
      }
    }
    & .Footer__icons {
      display: flex;
      height: 100%;
      justify-content: space-between;
      border-top: solid 1px #3d3d3d;
      & .icon-signIn {
        display: flex;
        height: 100%;
        width: 100%;
        justify-content: center;
        align-items: center;
        padding: 1em 0;
        border-right: solid 1px #3d3d3d;
        h3 {
          font-size: 1.1rem;
          margin-right: 0.6em;
        }
      }
      & .icon {
        font-size: 1.8rem;
        align-self: center;
      }
      & .icon-cart {
        display: flex;
        justify-content: center;
        width: 150px;
        height: 100%;
      }
    }
  }
`;
