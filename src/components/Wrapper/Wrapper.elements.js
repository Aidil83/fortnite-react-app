import styled, { keyframes } from "styled-components/macro";

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
  overflow-x: hidden;

  /* NOTE: Prevents auto scrolling after refreshing page: */
  overflow-anchor: none;
`;

export const NextBtn = styled.button`
  position: absolute;
  bottom: 120px;
  right: 500px;
  height: 50px;
  width: 50px;
  border-radius: 50%;
  border: none;
  background-color: #2a2a2a;
  color: white;
  font-size: 2rem;
  cursor: pointer;
  outline: none;

  &:hover {
    background-color: orange;
  }
`;

export const WrapperText = styled.img`
  display: flex;
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
  opacity: 1;

  @media screen and (max-width: 620px) {
    width: 290px;
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
