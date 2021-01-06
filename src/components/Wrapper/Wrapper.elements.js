import styled, { keyframes } from "styled-components/macro";
import "react-animated-slider/build/horizontal.css";

const media = {
  Laptop: "@media (max-width: 1740px)",
  ipadPro: "@media only screen and (device-width: 1024px)",
  ipad: "@media only screen and (device-width: 768px)",
  mobile: "@media only screen and (max-device-width: 480px)",
  mobileSm: "@media only screen and (max-device-width: 320px)",
};

export const WrapperImage = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  background-image: url(${({ img }) => img});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top;
  position: absolute;
  top: 51px;
  height: calc(100vh - 51px);
  height: 100vh;
  width: 100%;
  overflow-x: hidden;

  /* NOTE: Prevents auto scrolling after refreshing page: */
  overflow-anchor: none;

  &.mobile2 {
    @media (max-width: 768px) {
      background-image: url(${({ imgMobile }) => imgMobile});
    }
  }
`;

export const PrevBtn = styled.button`
  position: absolute;
  bottom: 110px;
  left: 5%;
  height: 70px;
  width: 70px;
  border-radius: 50%;
  border: none;
  background-color: rgba(0, 0, 0, 0.4);
  color: white;
  font-size: 3rem;
  cursor: pointer;
  outline: none;

  &:hover {
    background-color: orange;
  }

  ${media.mobile} {
    bottom: 113px;
    left: 6px;
    height: 60px;
    width: 60px;
  }

  ${media.mobileSm} {
    bottom: 123px;
    left: 3px;
    height: 40px;
    width: 40px;
    font-size: 1rem;
  }
`;

export const NextBtn = styled.button`
  position: absolute;
  bottom: 110px;
  right: 5%;
  height: 70px;
  width: 70px;
  border-radius: 50%;
  border: none;
  background-color: rgba(0, 0, 0, 0.4);
  color: white;
  font-size: 3rem;
  cursor: pointer;
  outline: none;

  &:hover {
    background-color: orange;
  }

  ${media.mobile} {
    bottom: 113px;
    right: 6px;
    height: 60px;
    width: 60px;
  }

  ${media.mobileSm} {
    bottom: 123px;
    right: 3px;
    height: 40px;
    width: 40px;
    font-size: 1rem;
  }
`;

export const WrapperTitleTxt = styled.h1`
  display: flex;
  justify-content: center;
  position: absolute;
  line-height: 113.4px;
  bottom: ${({ slide }) => slide.posTitleBottomDesktop}px;
  right: ${({ slide }) => slide.posTitleRightDesktop}px;
  /* right: inherit; */
  width: 100%;
  font-family: "Luckiest Guy", cursive;
  font-size: clamp(6.1rem, 6vw, 10rem);
  font-weight: 500;
  font-style: italic;
  letter-spacing: 3.1px;
  background-image: ${({ slide }) => slide.backgroundImage};
  background-size: 100%;
  /* NOTE: Ignore the linting: */
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  ${media.Laptop} {
    bottom: ${({ slide }) => slide.posTitleBottomLaptop}px;
    right: ${({ slide }) => slide.posTitleRightLaptop};
    width: ${({ slide }) => slide.widthTitleLaptop}px;
    margin-right: ${({ slide }) => slide.marginRightTitleLaptop}px;
    /* right: inherit; */
    /* line-height: 100.4px; */
  }

  @media screen and (max-width: 1190px) {
    width: ${({ slide }) => slide.widthTitleLaptop}px;
    right: inherit;
    margin-right: ${({ slide }) => slide.marginRightTitleLaptopSm}px;
    bottom: ${({ slide }) => slide.posTitleBottomLaptopSm}px;
    font-size: ${({ slide }) => slide.fontSizeTitleIpad};
  }

  ${media.ipadPro} {
    bottom: ${({ slide }) => slide.posTitleBottomIpadPro}px;
    line-height: 80.4px;
    font-size: 110px;
  }

  @media (max-width: 768px) {
    margin-right: 0;
    width: ${({ slide }) => slide.widthTitleIpad}px;
    font-size: ${({ slide }) => slide.fontSizeTitleIpadSm};
    right: ${({ slide }) => slide.posTitleRightIpad}px;
    bottom: ${({ slide }) => slide.posTitleBottomMobileWeb}px;
  }

  ${media.ipad} {
    bottom: ${({ slide }) => slide.posTitleBottomIpad}px;
    line-height: 80.4px;
  }

  ${media.mobile} {
    bottom: ${({ slide }) => slide.posTitleBottomMobile}px;
    font-size: xxx-large;
    line-height: 80.4px;
  }
`;

export const WrapperText = styled.img`
  display: flex;
  position: absolute;
  top: 0;
  bottom: 72px;
  right: 0;
  left: 3px;
  margin: auto;

  width: 576px;
  height: 174px;
  object-fit: contain;
  margin-bottom: 0;
  opacity: 1;

  @media only screen and (max-width: 620px) {
    width: 500px;
    height: 200px;
    left: 0;
  }

  @media only screen and (max-device-width: 320px) {
    width: 340px;
    height: 100px;
    left: 0;
  }
`;

// NOTE: Animate after refresh page:
const loadText = keyframes`
  0%{
    opacity:0;
  }
  55%{
    transform: skewX(26deg) translate(-5%); 
    opacity: 0; 
  }
 75%{
    transform: translate(0);
    opacity: 1;
  }
`;

export const WrapperButton = styled.button`
  position: absolute;
  bottom: 120px;
  background-color: #ff0;
  height: 48px;
  width: 228px;
  outline: none;
  border: none;
  cursor: pointer;
  animation: ${loadText} 1s linear;
  transition: 550ms ease-out;

  &:hover {
    transform: skewX(-5deg);
    background-color: rgba(235, 235, 0);
  }
`;

export const WrapperLearnMore = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
  font-family: "Luckiest Guy", cursive;
  font-size: 1.5rem;
  width: 230px;
  height: 100%;
  letter-spacing: 2.1px;
  transition: 550ms ease;

  &:hover {
    transform: translateX(1.5%);
  }
`;

// export const WrapperSlider
