import styled, { keyframes } from "styled-components/macro";

const media = {
  Laptop: "@media only screen and (min-width: 1740px)",
  ipadPro: "@media only screen and (min-width: 1024px)",
  ipad: "@media only screen and (min-width: 768px)",
  mobile: "@media only screen and (min-width: 375px)",
  mobileLg: "@media only screen and (min-width: 414px)",
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
  background-image: url(${({ slide }) => slide.bgImage});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top;
  top: 51px;
  height: 100vh;
  width: 100%;
  object-fit: cover;
  object-position: 100% 0;
  overflow-x: hidden;
  overflow-y: hidden;
  will-change: top;
  @media screen and (max-width: 620px) {
    /* Dynamic className needed without affecting slider 0 & 1 images. */
    &.mobile2 {
      background-image: url(${({ slide }) => slide.bgImageMobile});
    }
    &.mobile3 {
      background-image: url(${({ slide }) => slide.bgImageMobile});
    }
  }
  @media screen and (min-width: 375px) {
    &.mobile0 {
      background-size: ${({ slide }) => slide.backdropBackgroundSize};
    }
  }
  ${media.ipad} {
    &.mobile0 {
      background-size: cover;
    }
  }
  /* NOTE: Prevents auto scrolling after refreshing page: */
  overflow-anchor: none;
`;

export const PrevBtn = styled.button`
  /* display: none; */
  position: absolute;
  left: 2%;
  top: 50%;
  border: 2px #fff solid;
  border-radius: 50%;
  outline: #fff;
  background-color: rgba(0, 0, 0, 0);
  color: rgb(255, 255, 255);
  cursor: pointer;
  .MuiSvgIcon-root {
    font-size: 4rem;
  }
  &:hover {
    background-color: rgba(0, 0, 0, 0.3);
  }

  ${media.ipad} {
    display: flex;
  }
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
  /* display: none; */
  position: absolute;
  right: 2%;
  top: 50%;
  border: 2px #fff solid;
  border-radius: 50%;
  outline: #fff;
  background-color: rgba(0, 0, 0, 0);
  color: rgb(255, 255, 255);
  cursor: pointer;
  .MuiSvgIcon-root {
    font-size: 4rem;
  }

  &:hover {
    background-color: rgba(0, 0, 0, 0.3);
  }

  ${media.ipad} {
    display: flex;
  }

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

  */
`;

export const WrapperTextContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: center;
`;

export const WrapperText = styled.img`
  width: 95%;
  max-width: 700px;
  object-fit: contain;
  margin-bottom: ${({ slide }) => slide.wrapperText__marginBottom};
  ${media.mobile} {
    &.mobile3 {
      margin-bottom: 70vh;
    }
  }
`;

export const WrapperTitleTxt = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-self: ${({ slide }) => slide.alignSelf};
  line-height: 93.4px;
  width: 100%;
  max-width: 800px;
  margin-top: ${({ slide }) => slide.wrapperTitleTxt__marginTop};
  margin-right: ${({ slide }) => slide.wrapperTitleTxt__marginRight};
  font-family: "Luckiest Guy", cursive;
  font-size: ${({ slide }) => slide.wrapperTitleTxt__fontSize};
  font-weight: 500;
  font-style: italic;
  letter-spacing: 2.1px;
  background-image: ${({ slide }) => slide.backgroundImage};
  background-size: 100%;
  /* NOTE: Ignore the linting: */
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  ${media.ipad} {
    font-size: clamp(8.3rem, 6vw, 10rem);
    margin-top: ${({ slide }) => slide.wrapperTitleTxt__ipadMarginTop};
  }
`;

export const WrapperCaption = styled.div`
  width: ${({ slide }) => slide.wrapperCaption__width};
  align-self: center;
  margin-top: ${({ slide }) => slide.wrapperCaption__marginTop};
  font-family: "Luckiest Guy", cursive;
  font-size: clamp(1.9rem, 6vw, 2.3rem);
  color: ${({ slide }) => slide.captionColor};
  ${media.ipad} {
    font-size: clamp(3.5rem, 6vw, 2.3rem);
    margin-top: ${({ slide }) => slide.wrapperCaption__ipadMarginTop};
  }
`;

export const WrapperSection = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-self: center;
  font-family: "Luckiest Guy", cursive;
  font-size: 1.6rem;
  width: 200px;
  height: 45px;
  top: ${({ slide }) => slide.wrapperCaption__top};
  left: ${({ slide }) => slide.wrapperCaption__left};
  ${media.mobile} {
    &.mobile2 {
      top: 93%;
      left: 23%;
    }
  }
  ${media.mobileLg} {
    &.mobile2 {
      top: 94%;
      left: 26%;
    }
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
  bottom: ${({ slide }) => slide.wrapperButton__bottom};
  background-color: ${({ slide }) => slide.bgBtnColor};
  outline: none;
  border: none;
  cursor: pointer;
  animation: ${loadText} 1s linear;
  transition: 550ms ease-out;

  ${media.mobile} {
    bottom: 15%;
  }

  ${media.ipad} {
    bottom: 20vh;
  }

  &:hover {
    transform: skewX(-5deg);
    background-color: ${({ slide }) => slide.bgBtnColor};
  }
`;

export const WrapperLearnMore = styled.p`
  color: black;
  font-family: "Bowlby One SC", cursive, Roboto;
  font-size: clamp(1rem, 6vw, 1.4rem);
  padding: 0.1em 0.4em;
  transition: 550ms ease;
  color: ${({ slide }) => slide.txtBtnColor};

  &:hover {
    transform: translateX(1.5%);
  }
  ${media.ipad} {
    font-size: clamp(1.5rem, 7vw, 1.7rem);
    padding: 0.2em 0.4em;
  }
`;
