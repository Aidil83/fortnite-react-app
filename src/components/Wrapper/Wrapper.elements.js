import styled, { keyframes } from "styled-components";

export const WrapperImage = styled.div`
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
  width: 100%;
  z-index: 0;

  /* NOTE: Prevents auto scrolling after refreshing page: */
  overflow-anchor: none;
`;

export const WrapperText = styled.div`
  display: flex;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  position: absolute;
  top: 0;
  left: 10px;
  bottom: 85px;
  right: 0;
  margin: auto;

  width: 590px;
  height: 150px;
  object-fit: contain;
  margin-bottom: 0;
  opacity: 0;
  background-image: url(${({ img }) => img});

  @media screen and (max-width: 620px) {
    width: 490px;
    height: 150px;
    left: 0;
  }
`;

// NOTE: Animate after refresh page:
const loadText = keyframes`
   0%, 25% {
    transform: skewX(23deg) translateX(-10%);
    opacity: 0; 
  }
  40%{
    transform: translateX(0);
    opacity: 1;
  }
`;

export const WrapperButton = styled.button`
  position: absolute;
  bottom: 120px;
  background-color: #ff0;
  height: 48px;
  width: 230px;
  outline: none;
  border: none;
  cursor: pointer;
  opacity: 0;
  animation-name: ${loadText};
  animation-duration: 3.5s;
  transition: 550ms;

  &:hover {
    transform: skewX(-5deg);
    background-color: rgba(235, 235, 0);
  }
`;

export const WrapperLearnMore = styled.p`
  display: flex;
  flex-direction: center;
  align-items: center;
  color: black;
  font-family: "Luckiest Guy", cursive;
  font-size: 1.5rem;
  width: 100%;
  height: 100%;
  padding: 0 34px;
  letter-spacing: 2.1px;
  transition: 550ms;

  &:hover {
    padding-left: 36px;
    transform: translateX(1.25%);
  }
`;
