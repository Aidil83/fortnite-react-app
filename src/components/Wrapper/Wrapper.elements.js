import styled, { keyframes } from "styled-components/macro";

const media = {
  Laptop: "@media (max-width: 1740px)",
  ipadPro: "@media only screen and (max-width: 1024px)",
  ipad: "@media only screen and (max-width: 768px)",
  mobile: "@media only screen and (max-width: 480px)",
  mobileSm: "@media only screen and (max-width: 320px)",
};

export const WrapperHidden = styled.div`
  display: none;
`;

export const WrapperImage = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  background-image: url(${({ img }) => img});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top;
  top: 51px;
  height: 100vh;
  width: 100%;
  overflow-x: hidden;
  overflow-y: hidden;
  will-change: top;

  /* NOTE: Prevents auto scrolling after refreshing page: */
  overflow-anchor: none;

  &.mobile2 {
    @media (max-width: 768px) {
      background-image: url(${({ imgMobile }) => imgMobile});
    }
  }
  &.mobile3 {
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

export const WrapperTextContainer = styled.div`
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: flex-start;
  width: ${({ slide }) => slide.posCaptionRight};
  height: 49%;
  position: absolute;
  left: ${({ slide }) => slide.WrapperContainerLeft};
  bottom: ${({ slide }) => slide.WrapperContainerBottom};

  @media only screen and (max-width: 768px) {
    height: ${({ slide }) => slide.WrapperTextContainerHeight};
    width: 100%;
    bottom: 0;
    left: 0px;
  }
`;

export const WrapperCaption = styled.div`
  width: ${({ wrapperCaptionWidth }) => wrapperCaptionWidth}px;
  /* height: 145px; */
  height: 45px;
  align-self: center;
  font-family: "Luckiest Guy", cursive;
  font-size: 2rem;
  color: ${({ slide }) => slide.captionColor};

  ${media.ipad} {
    height: ${({ slide }) => slide.posCaptionHeight};
  }
`;

export const WrapperTitleTxt = styled.div`
  display: flex;
  justify-content: center;
  align-self: ${({ slide }) => slide.alignSelf};
  /* height: 200px; */
  height: 170px;
  line-height: 93.4px;
  width: 800px;
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
    margin-right: ${({ slide }) => slide.marginRightTitleLaptop}px;
  }

  @media screen and (max-width: 1190px) {
    width: ${({ slide }) => slide.widthTitleLaptop}px;
    right: inherit;
    margin-right: ${({ slide }) => slide.marginRightTitleLaptopSm}px;
    font-size: ${({ slide }) => slide.fontSizeTitleIpadSm};
  }

  ${media.ipadPro} {
    bottom: ${({ slide }) => slide.posTitleBottomIpadPro}px;
    line-height: 80.4px;
    font-size: 90px;
  }

  @media (max-width: 768px) {
    margin-right: 0;
    width: ${({ slide }) => slide.widthTitleIpad}px;
    font-size: ${({ slide }) => slide.fontSizeTitleIpadSm};
    right: ${({ slide }) => slide.posTitleRightIpad}px;
    bottom: ${({ slide }) => slide.posTitleBottomMobileWeb};
  }

  ${media.ipad} {
    font-size: ${({ slide }) => slide.fontSizeTitleIpad};
    line-height: 80.4px;
    align-self: center;
    width: 100%;
    height: ${({ slide }) => slide.wrapperTxtHeight};
  }
`;

export const WrapperText = styled.img`
  display: flex;
  position: absolute;
  top: 0;
  bottom: 72px;
  right: 0;
  left: ${({ slide }) => slide.imgTxtLeft};
  margin: auto;

  width: 576px;
  height: ${({ slide }) => slide.imgTxtHeight};
  object-fit: contain;
  margin-bottom: 0;
  opacity: 1;

  ${media.ipad} {
    left: ${({ slide }) => slide.imgTxtIpad};

    &.mobile3 {
      height: 100px;
      bottom: 150%;
      margin-bottom: -45px;
    }
  }

  @media only screen and (max-width: 620px) {
    width: ${({ slide }) => slide.imgmobileBigwidth};
    height: ${({ slide }) => slide.imgmobileBigheight};
    left: 0;

    &.mobile3 {
      height: 100px;
      bottom: 156%;
      margin-bottom: -55px;
    }
  }

  @media only screen and (max-width: 320px) {
    width: ${({ slide }) => slide.imgmobileBigwidth};
    height: ${({ slide }) => slide.imgmobileBigheight};
    left: 0;
  }
`;

export const WrapperSection = styled.div`
  display: flex;
  justify-content: center;
  /* position: absolute; */
  align-self: center;
  font-family: "Luckiest Guy", cursive;
  font-size: 2.2rem;
  width: 200px;
  height: 45px;
  left: 297px;

  ${media.Laptop} {
    left: 297px;
    font-size: 2rem;
  }

  ${media.ipadPro} {
    left: 300px;
  }

  ${media.ipad} {
    height: 12%;
    position: absolute;
    left: auto;
    bottom: 8%;
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
  background-color: ${({ slide }) => slide.bgBtnColor};
  height: 48px;
  width: 228px;
  outline: none;
  border: none;
  cursor: pointer;
  animation: ${loadText} 1s linear;
  transition: 550ms ease-out;

  &:hover {
    transform: skewX(-5deg);
    background-color: ${({ slide }) => slide.bgBtnColor};
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
  color: ${({ slide }) => slide.txtBtnColor};

  &:hover {
    transform: translateX(1.5%);
  }
`;

// export const WrapperSlider
