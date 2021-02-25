import styled, { keyframes } from "styled-components/macro";

const media = {
  Laptop: "@media only screen and (min-width: 1740px)",
  ipadPro: "@media only screen and (min-width: 1024px)",
  ipad: "@media only screen and (min-width: 768px)",
  mobile: "@media only screen and (min-width: 375px)",
  mobileSm: "@media only screen and (min-width: 320px)",
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
  ${media.mobile} {
    background-size: 1240px 797px;
  }
  ${media.ipad} {
    background-size: cover;
  }

  /* NOTE: Prevents auto scrolling after refreshing page: */
  overflow-anchor: none;
  /* &.mobile2 {
    @media (max-width: 768px) {
      background-image: url(${({ imgMobile }) => imgMobile});
    }
  }
  &.mobile3 {
    @media (max-width: 768px) {
      background-image: url(${({ imgMobile }) => imgMobile});
    }
  } */
`;

export const PrevBtn = styled.button`
  display: none;
  /* position: absolute;
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
  .MuiSvgIcon-root {
    font-size: 2rem;
  }

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
  } */
`;

export const NextBtn = styled.button`
  display: none;
  /* position: absolute;
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
  .MuiSvgIcon-root {
    font-size: 2rem;
  }

  &:hover {
    background-color: orange;
  } */
`;

export const WrapperTextContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  /* display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: flex-start;
  width: ${({ slide }) => slide.posCaptionRight};
  height: 49%;
  position: absolute;
  left: ${({ slide }) => slide.WrapperContainerLeft};
  bottom: ${({ slide }) => slide.WrapperContainerBottom}; */
`;

export const WrapperText = styled.img`
  width: 100%;
  max-width: 700px;
  /* height: 100%; */
  /* max-height: 100px; */
  object-fit: contain;
  margin-bottom: 16vh;
  /* left: ${({ slide }) => slide.imgTxtLeft}; */

  /* height: ${({ slide }) => slide.imgTxtHeight}; */
  /* opacity: 1; */

  /* ${media.ipad} {
    left: ${({ slide }) => slide.imgTxtIpad};

    &.mobile3 {
      height: 100px;
      bottom: 150%;
      margin-bottom: -45px;
    }
  } */
`;

export const WrapperTitleTxt = styled.div`
  /* display: flex;
  justify-content: center;
  align-self: ${({ slide }) => slide.alignSelf};
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
  /* -webkit-background-clip: text; */
  /* -webkit-text-fill-color: transparent; */
`;

export const WrapperCaption = styled.div`
  /* width: ${({ wrapperCaptionWidth }) => wrapperCaptionWidth};
  height: 45px;
  align-self: center;
  font-family: "Luckiest Guy", cursive;
  font-size: clamp(2rem, 9.6vw, 2.3rem);
  color: ${({ slide }) => slide.captionColor}; */
`;

export const WrapperSection = styled.div`
  /* display: flex;
  justify-content: center;
  align-self: center;
  font-family: "Luckiest Guy", cursive;
  font-size: 2.2rem;
  width: 200px;
  height: 45px;
  left: 297px; */
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
  bottom: 150px;
  background-color: ${({ slide }) => slide.bgBtnColor};
  /* padding: 0.35em 0.8em; */
  outline: none;
  border: none;
  cursor: pointer;
  animation: ${loadText} 1s linear;
  transition: 550ms ease-out;
  transform: translateZ(0);
  -webkit-backface-visibility: hidden;

  ${media.mobile} {
    bottom: 23vh;
  }

  ${media.ipad} {
    padding: 0.7em 1.5em;
    bottom: 20vh;
  }

  &:hover {
    transform: skewX(-5deg);
    background-color: ${({ slide }) => slide.bgBtnColor};
  }
`;

export const WrapperLearnMore = styled.p`
  /* display: flex;
  justify-content: center;
  align-items: center; */
  color: black;
  font-family: "Luckiest Guy", cursive;
  font-size: clamp(1.5rem, 7vw, 1.7rem);
  padding: 0.2em 0.4em;
  letter-spacing: 2.1px;
  transition: 550ms ease;
  color: ${({ slide }) => slide.txtBtnColor};

  &:hover {
    transform: translateX(1.5%);
  }
  ${media.ipad} {
    font-size: clamp(1.8rem, 7vw, 1.7rem);
  }
`;
