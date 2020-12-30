import styled, { css } from "styled-components/macro";
import forniteLogo from "../../images/forniteLogo.png";
import { IoIosGlobe } from "react-icons/io";
import {
  NavButton,
  NavContainer,
  NavLogo,
  NavMenu,
  NavMenuIcon,
  NavMenuItem,
  NavmenuItemSignIn,
  NavMenuLeft,
  NavMenuRight,
  NavUserSignIn,
  NavUserLogo,
  NavMenuLeftMobile,
  NavCurrentHamburgerIcon,
  NavHamburgerIcon,
  NavCloseIcon,
  Open,
  Close,
  SearchContainer,
} from "./Navbar.elements";
import { useState } from "react";

const Navbar = ({ isOpen, handleToggle, count }) => {
  const [isSearch, setIsSearch] = useState(true);

  const handleSearch = () => {
    setIsSearch(!isSearch);
  };

  return (
    <>
      <NavContainer>
        <NavLogo to="/" img={forniteLogo} />
        <NavMenu isSearch={isSearch}>
          <NavMenuLeftMobile isSearch={isSearch}>
            {count < 1 ? (
              <NavCurrentHamburgerIcon onClick={handleToggle} />
            ) : isOpen ? (
              <NavCloseIcon onClick={handleToggle} toggle={isOpen} />
            ) : (
              <NavHamburgerIcon onClick={handleToggle} isOpen={isOpen} />
            )}
          </NavMenuLeftMobile>
          {isSearch && (
            <NavMenuLeft>
              <NavMenuItem to="/battle_Pass">BATTLE PASS</NavMenuItem>
              <NavMenuItem to="/creative">CREATIVE</NavMenuItem>
              <NavMenuItem to="/save_the_world">SAVE THE WORLD</NavMenuItem>
              <NavMenuItem to="/competitive">COMPETIVE</NavMenuItem>
              <NavMenuItem to="/news">NEWS</NavMenuItem>
              <NavMenuItem to="/merch">MERCH</NavMenuItem>
            </NavMenuLeft>
          )}

          <NavMenuRight>
            <NavMenuIcon primary isSearch={isSearch}>
              {isSearch && (
                <ul onClick={handleSearch}>
                  <Open isSearch={isSearch} />
                </ul>
              )}
            </NavMenuIcon>
            {isSearch ? null : (
              <SearchContainer>
                <input type="text"></input>
                <Close onClick={handleSearch} />
              </SearchContainer>
            )}
            <NavMenuIcon css="margin-right: 8px" isSearch={isSearch}>
              <IoIosGlobe />
            </NavMenuIcon>
            <NavmenuItemSignIn to="/sign_in">
              <NavUserLogo />
              <NavUserSignIn>SIGN IN</NavUserSignIn>
            </NavmenuItemSignIn>
            <NavButton href="https://www.epicgames.com/fortnite/en-US/download">
              DOWNLOAD
            </NavButton>
          </NavMenuRight>
        </NavMenu>
      </NavContainer>
    </>
  );
};

export default Navbar;
