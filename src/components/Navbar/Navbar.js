import { useState } from "react";
import styled, { css } from "styled-components/macro";
import forniteLogo from "../../images/forniteLogo.png";
import { IoSearchOutline } from "react-icons/io5";
import { IoIosGlobe } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
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
} from "./Navbar.elements";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <>
      <NavContainer>
        <NavLogo to="/" img={forniteLogo} />
        <NavMenu>
          <NavMenuLeftMobile>
            <GiHamburgerMenu onClick={handleToggle} />
          </NavMenuLeftMobile>
          <NavMenuLeft>
            <NavMenuItem to="/battle_Pass">BATTLE PASS</NavMenuItem>
            <NavMenuItem to="/creative">CREATIVE</NavMenuItem>
            <NavMenuItem to="/save_the_world">SAVE THE WORLD</NavMenuItem>
            <NavMenuItem to="/trending">TRENDING</NavMenuItem>
            <NavMenuItem to="/features">FEATURES</NavMenuItem>
            <NavMenuItem to="/news">NEWS</NavMenuItem>
          </NavMenuLeft>

          <NavMenuRight>
            <NavMenuIcon primary>
              <IoSearchOutline />
            </NavMenuIcon>
            <NavMenuIcon css="margin-right: 10px;">
              <IoIosGlobe />
            </NavMenuIcon>
            <NavmenuItemSignIn to="/sign_in">
              <NavUserLogo />
              <NavUserSignIn>SIGN IN</NavUserSignIn>
              <NavUserSignIn>{}</NavUserSignIn>
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
