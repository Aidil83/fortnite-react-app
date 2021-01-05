import styled, { css, keyframes } from "styled-components/macro";
import { Link } from "react-router-dom";
import { FaUserPlus } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { IoCloseOutline, IoSearchOutline } from "react-icons/io5";

export const NavContainer = styled.div`
  display: flex;
  align-items: center;
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 51px;
  background-color: #2a2a2a;
  color: #fff;
`;

export const NavLogo = styled(Link)`
  position: relative;
  z-index: 1;
  background-image: url(${({ img }) => img});
  background-position: 50%;
  background-size: contain;
  background-repeat: no-repeat;
  object-fit: contain;
  min-width: 135px;
  min-height: 51px;
  margin-left: 20px;
  margin-right: 5px;
  transition: transform 450ms;

  &:hover {
    transform: scale(1.05);
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: ${({ isSearch }) =>
    isSearch ? "space-between" : "flex-end"};
  font-family: sans-serif, arial;
  font-size: 11px;

  @media screen and (max-width: 768px) {
    flex-direction: row-reverse;
    justify-content: space-between;
  }
`;

export const NavMenuLeft = styled.li`
  display: relative;
  z-index: 1;
  display: flex;
  align-items: center;

  @media screen and (max-width: 1190px) {
    display: none;
  }
`;

export const NavMenuLeftMobile = styled.div`
  display: none;

  @media screen and (max-width: 1190px) {
    position: relative;
    z-index: 1;
    display: ${({ isSearch }) => (isSearch ? "flex" : "none")};
    align-items: center;
    justify-content: center;
    height: 51px;
    width: 50px;
    font-size: 2.1rem;
    cursor: pointer;
  }

  @media screen and (max-width: 768px) {
    display: flex;
  }
`;

const animateCloseIcon = keyframes`
   0% {
    opacity: 0; 
  }
  100%{
    opacity: 1;
  }
`;

export const NavCurrentHamburgerIcon = styled(GiHamburgerMenu)`
  animation-name: ${animateCloseIcon};
  animation-duration: "0";
`;

export const NavHamburgerIcon = styled(GiHamburgerMenu)`
  animation-name: ${animateCloseIcon};
  animation-duration: ${({ isOpen }) => (isOpen ? "0s" : "0.7s")};
`;

export const NavCloseIcon = styled(AiOutlineClose)`
  animation-name: ${animateCloseIcon};
  animation-duration: ${({ isOpen }) => (isOpen ? "0s" : "0.7s")};
`;

export const NavMenuRight = styled.li`
  display: flex;
  min-width: 350px;
  align-items: center;
  justify-content: flex-end;

  /* NOTE: Brute force the button to stick to the hamburger icon */
  @media screen and (max-width: 768px) {
    position: absolute;
    width: 100vw;
    right: 50px;
    justify-content: flex-end;
  }
`;

const NavLink = css`
  display: flex;
  align-items: center;
  text-decoration: none;
  list-style: none;
  cursor: pointer;
  color: #ccc;

  &:hover {
    color: #fff;
  }
`;

const NavUnderline = css`
  position: relative;

  &:before,
  &:after {
    content: "";
    position: absolute;
    top: 47px;
    left: 0;
    right: 0;
    height: 5px;
    width: 100%;
    background-color: #ff0;
  }
  &:before {
    opacity: 0;
    transform: translateY(5px);
    transition: transform 0s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }
  &:after {
    opacity: 0;
    transform: translateY(5px/2);
    transition: transform 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275),
      opacity 0.2s;
  }
  &:hover,
  &:focus {
    &:before,
    &:after {
      opacity: 1;
      transform: translateY(0);
    }
    &:before {
      transition: transform 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275),
        opacity 0.2s;
    }
    &:after {
      transition: transform 0s 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275),
        opacity 0s 0.2s;
    }
  }
`;

const NavMobileReset = css`
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavMenuItem = styled(Link)`
  height: 51px;
  padding: 0 20px;
  ${NavLink}
  ${NavUnderline}
  ${NavMobileReset}
`;

export const NavMenuIcon = styled.i`
  font-size: 1.4rem;
  height: 51px;
  ${NavLink};
  ${NavMobileReset};
  ${({ primary }) => (primary ? `${NavUnderline}` : null)};

  margin: 0 7px;

  ul {
    position: relative;
    z-index: 1;
    padding: 14px;
  }
`;

const animateSearchBar = keyframes`
  0%{
    opacity: 0;
    width: 0px;
  }
`;

const animateSearchBarHidden = keyframes`
  0%{
    opacity: 1;
    width: 380px;
  }
  100%{
    opacity: 0;
    width: 0px;
  }
`;

export const SearchContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-right: 20px;

  input {
    position: relative;
    height: 40px;
    padding-left: 15px;
    border-radius: 2px;
    background-color: #393939;
    font-size: 1.2rem;
    border-style: none;
    outline: none;
    color: white;
  }

  input[type="text"] {
    width: 380px;
    animation-name: ${animateSearchBar};
    animation-duration: 0.5s;
  }

  .search__Box {
    display: flex;
    justify-content: flex-end;
    position: relative;
    min-width: 230px;
    border-radius: 5px;
  }

  .search__Btn {
    position: absolute;
    display: flex;
    align-items: center;
    padding: 5px;
    min-width: 41px;
    height: 40px;
    cursor: pointer;
    animation-name: ${animateSearchBar};
    animation-duration: 0.75s;

    &:hover {
      background-color: #505050;
    }
  }
`;

export const SearchContainerHidden = styled.div`
  visibility: ${({ isLoad }) => (isLoad ? "visible" : "hidden")};
  position: absolute;
  left: 0;
  right: 278px;
  top: 0;
  bottom: 0;

  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-right: 20px;

  input {
    opacity: 0;
    transition: 1s;
    position: relative;
    height: 40px;
    padding-left: 15px;
    border-radius: 2px;
    background-color: #393939;
    font-size: 1.2rem;
    border-style: none;
    outline: none;
    color: white;
  }

  input[type="text"] {
    width: 380px;
    animation-name: ${animateSearchBarHidden};
    animation-duration: 0.4s;
  }

  .search__Box {
    display: flex;
    justify-content: flex-end;
    position: relative;
    min-width: 230px;
    border-radius: 5px;
  }

  .search__Btn {
    position: absolute;
    display: flex;
    align-items: center;
    padding: 5px;
    min-width: 41px;
    height: 40px;
    cursor: pointer;
    opacity: 0;

    &:hover {
      background-color: #505050;
    }
  }
`;

export const Open = styled(IoSearchOutline)`
  display: ${({ isSearch }) => (isSearch ? "flex" : "none")};
`;

export const Close = styled(IoCloseOutline)`
  position: absolute;
  font-size: 1.8rem;
  cursor: pointer;
  ${NavLink};
  transition: 280ms;
`;

export const NavmenuItemSignIn = styled(Link)`
  display: flex;
  justify-content: space-around;
  align-items: center;
  ${NavLink}
  ${NavMobileReset}
  margin-left: 17px;
  margin-right: 24px;
`;

export const NavUserLogo = styled(FaUserPlus)`
  font-size: 1.4rem;
  margin-right: 7px;
`;

export const NavUserSignIn = styled.div`
  padding-left: 8px;
  margin-right: 2px;
`;

export const NavButton = styled.a`
  display: flex;
  justify-content: center;
  background-color: #ff0;
  align-items: center;
  width: 118px;
  height: 51px;
  ${NavLink};
  color: #000;
  font-size: 0.7rem;

  &:hover {
    background-color: rgba(245, 245, 0);
    color: #000;
    cursor: pointer;
  }
`;