import styled, { keyframes } from "styled-components/macro";

const media = {
  mobileSm: "@media only screen and (min-width: 320px)",
  mobile: "@media only screen and (min-width: 375px)",
  iphoneX:
    "@media only screen and (min-width: 375px) and (min-height: 812px) and (max-height: 812px)",
  mobileLg: "@media only screen and (min-width: 414px)",
  ipad: "@media only screen and (min-width: 768px)",
  ipadPro: "@media only screen and (min-width: 1024px)",
  laptop: "@media only screen and (min-width: 1740px)",
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

  @media screen and (max-width: 1024px) {
    &.mobile3 {
      background-image: url(${({ slide }) => slide.bgImageMobile});
    }
  }
  @media screen and (max-width: 620px) {
    /* Dynamic className needed without affecting slider 0 & 1 images. */
    &.mobile2 {
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
`;

export const WrapperTextContainer = styled.div`
  position: absolute;
  top: ${({ slide }) => slide.wrapperTextContainer__posTop};
  max-width: 1000px;
  width: 100%;
  min-height: 250px;
  height: 100%;
  max-height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  ${media.mobile} {
    top: ${({ slide }) => slide.wrapperTextContainer__posTop_mobileLg};
  }
  ${media.iphoneX} {
    top: ${({ slide }) => slide.wrapperTextContainer__posTop_iphoneX};
  }
  ${media.ipad} {
    top: ${({ slide }) => slide.wrapperTextContainer__posTop_ipad};
    right: ${({ slide }) => slide.wrapperTextContainer__posRight_ipad};
    width: ${({ slide }) => slide.wrapperTextContainer__width_ipad};
  }
  ${media.ipadPro} {
    /* width: ${({ slide }) => slide.wrapperTextContainer__width_ipad}; */
    right: ${({ slide }) => slide.wrapperTextContainer__posRight_ipadPro};
  }
`;

export const WrapperText = styled.img`
  width: 95%;
  max-width: 700px;
  object-fit: contain;
  margin-bottom: ${({ slide }) => slide.wrapperText__marginBottom};
  ${media.mobile} {
    &.mobile3 {
      margin-bottom: 88vh;
    }
  }
`;

export const WrapperTitleTxt = styled.div`
  /* position: absolute; */
  /* NOTE: needed: */
  /* display: flex; */
  /* justify-content: center; */
  /* align-self: ${({ slide }) => slide.alignSelf}; */
  text-align: center;
  line-height: 0.8em;
  width: 100%;
  max-width: 800px;
  /* margin-top: ${({ slide }) => slide.wrapperTitleTxt__marginTop};
  margin-right: ${({ slide }) => slide.wrapperTitleTxt__marginRight}; */
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
    /* margin-top: ${({ slide }) => slide.wrapperTitleTxt__ipadMarginTop};
    margin-right: ${({ slide }) => slide.wrapperTitleTxt__ipadMarginRight}; */
  }
  ${media.laptop} {
    font-size: clamp(8.3rem, 6vw, 10rem);
    /* margin-top: ${({ slide }) => slide.wrapperTitleTxt__laptopMarginTop};
    margin-right: ${({ slide }) => slide.wrapperTitleTxt__laptopMarginRight}; */
  }
`;

export const WrapperCaption = styled.div`
  width: ${({ slide }) => slide.wrapperCaption__width};
  text-align: center;
  /* margin-top: ${({ slide }) => slide.wrapperCaption__marginTop}; */
  font-family: "Luckiest Guy", cursive;
  font-size: clamp(1.9rem, 8vw, 2.5rem);
  color: ${({ slide }) => slide.captionColor};
  ${media.ipad} {
    /* font-size: clamp(3.5rem, 6vw, 2.3rem); */
    /* margin-top: ${({ slide }) => slide.wrapperCaption__ipadMarginTop};
    margin-right: ${({ slide }) => slide.wrapperCaption__ipadMarginRight}; */
  }
  ${media.ipadPro} {
    /* font-size: clamp(3.5rem, 6vw, 2.3rem); */
    /* margin-top: ${({ slide }) => slide.wrapperCaption__ipadProMarginTop};
    margin-right: ${({ slide }) => slide.wrapperCaption__ipadProMarginRight}; */
  }
  ${media.laptop} {
    /* margin-top: ${({ slide }) => slide.wrapperCaption__laptopMarginTop};
    margin-right: ${({ slide }) => slide.wrapperCaption__laptopMarginRight}; */
  }
`;

export const WrapperSection = styled.div`
  /* position: absolute; */
  /* display: flex; */
  /* justify-content: center; */
  text-align: center;
  font-family: "Luckiest Guy", cursive;
  font-size: 1.6rem;
  width: 200px;
  height: 45px;
  margin-top: 60px;
  /* top: ${({ slide }) => slide.wrapperSection__top};
  left: ${({ slide }) => slide.wrapperSection__left}; */
  ${media.mobile} {
    &.mobile2 {
      font-size: clamp(2rem, 6vw, 2rem);
      /* top: 94vh;
      left: 23.5%; */
    }
  }
  ${media.mobileLg} {
    &.mobile2 {
      /* top: 93.5vh;
      left: 26%; */
    }
  }
  ${media.iphoneX} {
    &.mobile2 {
      /* top: 90.5vh;
      left: 23%; */
    }
  }
  ${media.ipad} {
    &.mobile2 {
      font-size: 2.3rem;
      /* top: 67.5vh;
      left: 12%; */
    }
  }
  ${media.ipadPro} {
    &.mobile2 {
      font-size: 2.3rem;
      /* top: 59.5vh;
      left: 45vw; */
    }
  }
  ${media.laptop} {
    &.mobile2 {
      font-size: 2.3rem;
      /* top: 58%;
      left: 16.5vw; */
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
