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
  object-fit: cover;
  object-position: 100% 0;
  overflow-x: hidden;
  overflow-y: hidden;
  will-change: top;
  ${media.mobile} {
    background-size: 1300px 920px;
  }
  ${media.ipad} {
    background-size: cover;
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
  width: 100%;
  max-width: 700px;
  /* height: 100%; */
  /* max-height: 100px; */
  object-fit: contain;
  margin-bottom: 16vh;
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
`;

export const WrapperCaption = styled.div`
  width: ${({ slide }) => slide.wrapperCaption__width};
  align-self: center;
  margin-top: ${({ slide }) => slide.wrapperCaption__marginTop};
  font-family: "Luckiest Guy", cursive;
  font-size: clamp(1.9rem, 6vw, 2.3rem);
  color: ${({ slide }) => slide.captionColor};
`;

export const WrapperSection = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-self: center;
  font-family: "Luckiest Guy", cursive;
  font-size: 2rem;
  width: 200px;
  height: 45px;
  top: 450px;
  left: 57px;
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
  outline: none;
  border: none;
  cursor: pointer;
  animation: ${loadText} 1s linear;
  transition: 550ms ease-out;

  ${media.mobile} {
    bottom: 23vh;
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
