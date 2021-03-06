import styled, { keyframes } from "styled-components/macro";
import CloseIcon from "@material-ui/icons/Close";

export const ModalMain = styled.div`
  position: fixed;
  top: 95px;
  z-index: 1;
  width: 100%;
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.3s;

  & .modal-container {
    position: relative;
    overflow: hidden;
    display: flex;
    align-items: start;
    justify-content: flex-end;
    height: 100%;
    max-height: 500px;
    min-width: 300px;
    width: 80%;
    max-width: 400px;
    border-radius: 24px;
    box-shadow: 0px 0px 14px 3px rgba(0, 0, 0, 0.4);
    z-index: 10;
    @media screen and (min-width: 450px) {
      max-height: 650px;
    }
    & .modal-type {
      position: absolute;
      top: 230px;
      z-index: 3;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      @media screen and (min-width: 375px) {
        top: 48%;
      }
      @media screen and (min-width: 414px) {
        top: 51%;
      }
      span {
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        padding: 0.05em 0.25em;
        border-radius: 15px;
        font-size: 1.65rem;
        font-family: "Bowlby One SC", cursive, Roboto;
        letter-spacing: 0.07em;
        background-color: #1f0061;
        text-transform: uppercase;
        color: #fff;
      }
    }
    .MuiSvgIcon-root {
      font-size: 2.5rem;
    }
    & .modal-background {
      position: absolute;
      z-index: 1;
      height: 100%;
      width: 100%;
      display: flex;
      justify-content: center;
      -webkit-clip-path: circle(85% at 50% -15%);
      clip-path: circle(85% at 50% -15%);
      img {
        position: relative;
        top: 4px;
        min-height: 55%;
        min-width: 100%;
        width: 100%;
        height: 100%;
        max-width: 100vw;
        max-height: 30vh;
        object-fit: contain;
      }
    }
  }
`;

export const ModalClose = styled(CloseIcon)`
  position: absolute;
  z-index: 3;
  height: 30px;
  margin: 13px;
  color: rgba(255, 255, 255, 0.4);
  cursor: pointer;
  @media only screen and (min-width: 768px) {
    right: 5px;
  }
  @media only screen and (min-width: 1370px) {
    right: 0px;
  }
`;

export const InfoContainer = styled.div`
  height: 54%;
  max-height: 572px;
  min-width: 300px;
  width: 100%;
  position: absolute;
  bottom: 0;
  z-index: 0;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  background-color: white;
  & .modal-info {
    height: 65%;
    width: 80%;
    margin-bottom: 20%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
    @media screen and (max-width: 320px) {
      height: 50%;
    }
    @media screen and (min-width: 414px) and (max-width: 414px) {
      height: 50%;
    }
    h2 {
      margin-bottom: 8px;
      font-family: "Montserrat", sans-serif;
    }
    p {
      color: #000000;
      font-family: "Montserrat", sans-serif;
      &::before {
        content: open-quote;
        font-size: 1.5rem;
      }
      &::after {
        content: close-quote;
        font-size: 1.5rem;
      }
    }
  }
`;
export const ModalFooter = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: flex-end;
  width: 100%;
  height: 11%;
  background-color: #e9e9e9;
  box-shadow: 0px 4px 4px 5px rgba(0, 0, 0, 0.3);
  & .modal-purchase {
    position: relative;
    z-index: 9;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 40px;
    padding: 0px 20px;
    padding-right: 5px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    background: linear-gradient(180deg, #ffffff 0%, rgba(235, 223, 223, 0) 100%),
      linear-gradient(180deg, #f8b200 0%, rgba(255, 255, 255, 0) 100%),
      linear-gradient(
        180deg,
        #ffa800 0%,
        rgba(255, 246, 21, 0.916667) 48.96%,
        rgba(255, 255, 255, 0) 53.12%
      ),
      #ffc700;
    font-size: 25px;
    text-align: center;
    line-height: 24px;
    letter-spacing: 0.1rem;
    cursor: pointer;
    font-family: "Londrina Solid";
    transition: 0.3s;
    &:hover {
      transition: 0.3s;
      background: linear-gradient(
          180deg,
          #ffffff 0%,
          rgba(235, 223, 223, 0) 100%
        ),
        linear-gradient(180deg, #f8b200 0%, rgba(255, 255, 255, 0) 100%),
        linear-gradient(
          180deg,
          #ffa800 0%,
          rgba(255, 246, 21, 0.916667) 48.96%,
          rgba(255, 255, 255, 0) 53.12%
        ),
        #ffc700;
      box-shadow: -2px 3px 30px rgba(255, 230, 0, 0.75);
      transform: translateY(-2px);
    }
    img {
      width: 55px;
      height: 43px;
      object-fit: contain;
    }
  }
`;

const animateInCart = keyframes`
   0% {
    opacity: 0; 
  }
  100%{
    opacity: 1;
  }
`;
const animateOutCart = keyframes`
   0% {
    opacity: 1; 
  }
  100%{
    opacity: 0;
  }
`;

export const ModalOverlay = styled.div`
  display: ${({ isModal }) => (isModal ? "block" : "none")};
  width: 100%;
  height: 100vh;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.55);
  z-index: 1;
  animation: ${animateInCart} 0.3s;
`;
