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
    width: 85vw;
    max-width: 400px;
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
  @media screen and (min-width: 769px) {
    max-height: 280px;
  }
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
    background-color: #3d3d3d;
    color: #fff;
  }
`;

export const SidebarFooter = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-end;
  margin-top: auto;
  @media screen and (min-width: 769px) {
    display: none;
  }

  & .Footer__container {
    height: 120px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: #303030;
    & .Footer__searchBar {
      padding: 1em;
      align-self: center;
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
      text-decoration: none;
      & .icon-signIn {
        display: flex;
        height: 100%;
        width: 100%;
        justify-content: center;
        align-items: center;
        padding: 1em 0;
        border-right: solid 1px #3d3d3d;
        cursor: pointer;
        &:hover {
          background-color: #3d3d3d;
          & .icon,
          h3 {
            color: #fff;
          }
        }
        h3 {
          font-size: 1.1rem;
          margin-right: 0.6em;
          color: #ccc;
        }
      }
      & .icon {
        font-size: 1.8rem;
        align-self: center;
        text-decoration: none;
        color: #ccc;
      }
      & .icon-cart {
        display: flex;
        justify-content: center;
        width: 150px;
        height: 100%;
        cursor: pointer;
        &:hover {
          background-color: #3d3d3d;
          & .icon {
            color: #fff;
          }
        }
        span {
          position: absolute;
          top: 10px;
          right: -22px;
          width: 30px;
          max-width: 30px;
          font-size: 0.85rem;
          @media screen and (max-width: 768px) {
            top: 760px;
            right: 8px;
            color: #ccc;
          }
        }
        & .cart-indication {
          display: none;
          position: absolute;
          top: 45px;
          right: -58px;
          width: 150px;
          height: 100%;
          padding-bottom: 12px;
          border-radius: 2px;
          transform: rotate(180deg);
          background-color: #ff5454;
          clip-path: polygon(
            0% 0%,
            100% 0%,
            100% 75%,
            63% 75%,
            51% 100%,
            38% 75%,
            0% 75%
          );
          color: #000;
          div {
            display: flex;
            width: 100%;
            height: 100%;
            margin-bottom: 30px;
            justify-content: center;
            align-items: center;
            transform: rotate(180deg);
            color: #fff;
            font-weight: bold;
            font-size: 1rem;
            letter-spacing: 1.25px;
          }
        }
      }
    }
  }
`;
