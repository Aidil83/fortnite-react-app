import { useContext, useState } from "react";
import styled, { css } from "styled-components/macro";
import { StateContext } from "../../context/StateProvider";
import forniteLogo from "../../images/text_image/forniteLogo.png";
import { NavCartBtn } from "./Navbar.elements";
import {
  NavButton,
  NavContainer,
  NavLogo,
  NavMenu,
  NavMenuIcon,
  NavMenuItem,
  NavmenuItemSignIn,
} from "./Navbar.elements";
import {
  NavMenuLeft,
  NavMenuRight,
  NavUserSignIn,
  NavUserLogo,
  NavMenuLeftMobile,
  NavCurrentHamburgerIcon,
} from "./Navbar.elements";
import {
  NavHamburgerIcon,
  NavCloseIcon,
  Open,
  Close,
  SearchContainer,
  SearchContainerHidden,
  NavCart,
} from "./Navbar.elements";

const Navbar = ({ isOpen, handleToggle, count }) => {
  const [isSearch, setIsSearch] = useState(true);
  const [isLoad, setIsLoad] = useState(false);
  const [loadCount, setLoadCount] = useState(0);

  const [{ cartCount }] = useContext(StateContext);

  const handleSearch = () => {
    setIsSearch(!isSearch);
    setLoadCount(loadCount + 1);
    if (loadCount >= 1) setIsLoad(true);
  };

  return (
    <>
      <NavContainer>
        <NavLogo to="/" img={forniteLogo} />
        <NavMenu isSearch={isSearch}>
          <NavMenuLeftMobile isSearch={isSearch}>
            {count > 1 ? (
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
              <NavMenuItem to="/competitive">COMPETITIVE</NavMenuItem>
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
            {isSearch ? (
              <SearchContainerHidden isSearch={isSearch} isLoad={isLoad}>
                <div className="search__Box">
                  <input type="text" placeholder="Search..." />
                </div>
                <div className="search__Btn" onClick={handleSearch}>
                  <Close />
                </div>
              </SearchContainerHidden>
            ) : (
              <SearchContainer>
                <div className="search__Box" onBlur={handleSearch}>
                  <input
                    handleToggle
                    type="text"
                    placeholder="Search..."
                  ></input>
                </div>
                <div className="search__Btn" onClick={handleSearch}>
                  <Close />
                </div>
              </SearchContainer>
            )}
            <NavMenuIcon css="margin-right: 8px" isSearch={isSearch}>
              <NavCartBtn to="/cart">
                <NavCart />
                <span>{cartCount}</span>
              </NavCartBtn>
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
