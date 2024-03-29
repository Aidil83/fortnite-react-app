import { VerifiedUser } from "@material-ui/icons";
import gsap from "gsap/gsap-core";
import { useContext, useEffect, useRef, useState } from "react";
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
} from "./Navbar.elements";
import {
  NavHamburgerIcon,
  NavCloseIcon,
  Open,
  Close,
  SearchContainer,
  NavCart,
} from "./Navbar.elements";

const Navbar = ({ setIsOpen, isOpen, handleToggle, count }) => {
  const [isSearch, setIsSearch] = useState(false);
  // const [isLoad, setIsLoad] = useState(false);
  const [loadCount, setLoadCount] = useState(0);
  const [loadIndicator, setLoadIndicator] = useState(0);

  let inputRef = useRef(null);

  const [{ purchasedItems, purchasedIndicator, trackLogin }] =
    useContext(StateContext);

  useEffect(() => {
    if (loadIndicator >= 1)
      gsap
        .timeline()
        .to(".cart-indication", {
          display: "flex",
          autoAlpha: 1,
          duration: 0.3,
        })
        .to(".cart-indication", { display: "flex", duration: 2 })
        .to(".cart-indication", {
          display: "none",
          autoAlpha: 0,
          duration: 0.35,
        });
    setLoadIndicator(loadIndicator + 1);
  }, [purchasedIndicator]);

  useEffect(() => {
    if (loadCount < 1) {
      gsap.to(".animateInput", {
        visibility: "visible",
        width: 0,
        autoAlpha: 0,
        duration: 0,
      });
    } else if (isSearch) {
      gsap.to(".animateInput", {
        visibility: "visible",
        autoAlpha: 1,
        width: 230,
        duration: 0.55,
        ease: "power1.out",
      });
    } else {
      gsap.to(".animateInput", {
        visibility: "visible",
        width: 0,
        autoAlpha: 0,
        duration: 0.5,
      });
    }

    if (isSearch)
      gsap.to(".animateClose", {
        display: "block",
        visibility: "visible",
        autoAlpha: 1,
        duration: 0.1,
      });
    else
      gsap.to(".animateClose", {
        display: "none",
        visibility: "hidden",
        autoAlpha: 0,
        duration: 0,
      });
  }, [isSearch]);

  const handleSearch = () => {
    setIsSearch(!isSearch);
    setLoadCount(loadCount + 1);
    // if (loadCount >= 1) setIsLoad(true);
  };

  //NOTE: keeps the focus on input.
  useEffect(() => {
    if (isSearch) {
      inputRef.current.focus();
    }
  }, [isSearch]);

  const clickAnywhere = () => {
    setIsSearch(false);
  };

  return (
    <>
      <NavContainer>
        <NavLogo to="/" img={forniteLogo} onClick={() => setIsOpen(false)} />
        <NavMenu isSearch={isSearch}>
          <NavMenuLeftMobile>
            {isOpen ? (
              <NavCloseIcon onClick={handleToggle} toggle={isOpen} />
            ) : (
              <NavHamburgerIcon onClick={handleToggle} isOpen={isOpen} />
            )}
          </NavMenuLeftMobile>
          <NavMenuLeft>
            <NavMenuItem to="/merch">MERCH</NavMenuItem>
            {/* <NavMenuItem to="/battle_Pass">BATTLE PASS</NavMenuItem> */}
            <NavMenuItem to="/creative">CREATIVE</NavMenuItem>
            {/* <NavMenuItem to="/save_the_world">SAVE THE WORLD</NavMenuItem> */}
            {/* <NavMenuItem to="/competitive">COMPETITIVE</NavMenuItem> */}
            <NavMenuItem to="/news">NEWS</NavMenuItem>
          </NavMenuLeft>

          <NavMenuRight>
            <NavMenuIcon
              primary
              onClick={handleSearch}
              css={`
                position: relative;
                left: 225px;
                width: 37px;
                z-index: 1;
                justify-content: center;
                visibility: ${isSearch ? "hidden" : "visible"};
                margin-right: 0;
              `}
            >
              <div className="searchContainer">
                <Open />
              </div>
            </NavMenuIcon>
            {
              <SearchContainer toggle={isSearch} onBlur={clickAnywhere}>
                <div className="search__Box">
                  <input
                    className="animateInput"
                    type="text"
                    placeholder="Search..."
                    ref={inputRef}
                  />
                </div>
                <div className="search__Btn" onClick={handleSearch}>
                  <Close className="animateClose" />
                </div>
              </SearchContainer>
            }
            <NavMenuIcon css="margin-right: 8px; margin-left: 0">
              <NavCartBtn to="/cart" indicator={purchasedIndicator}>
                <NavCart />
                <span>{purchasedItems.length}</span>
                <div className="cart-indication">
                  <div>Item Added!</div>
                </div>
              </NavCartBtn>
            </NavMenuIcon>
            <NavmenuItemSignIn to="/sign_in">
              {trackLogin === "SIGN IN" ? (
                <NavUserLogo />
              ) : (
                <VerifiedUser style={{ fontSize: "1.2rem" }} />
              )}
              <NavUserSignIn>{trackLogin}</NavUserSignIn>
            </NavmenuItemSignIn>
            <NavCartBtn
              to="/cart"
              css={`
                margin-right: 10px;
                @media screen and (min-width: 769px) {
                  display: none;
                }
                @media screen and (max-width: 320px) {
                  display: none;
                }
              `}
            >
              <NavCart />
              <span>{purchasedItems.length}</span>
            </NavCartBtn>
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
