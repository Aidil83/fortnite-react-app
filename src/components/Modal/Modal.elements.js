import styled from 'styled-components/macro';
import {ModalData} from '../../data/ModalData'
import CloseIcon from '@material-ui/icons/Close';

export const ModalMain = styled.div`
  position: fixed;
  top: 95px;
  z-index: 1;
  width: 100%;
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

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
    @media screen and (min-width: 450px) {
      max-height: 650px;
    }
    & .modal-type {
        position: absolute;
        top: 5%;
        z-index: 3;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        span {
          display: flex;
          justify-content: center;
          align-items: center;
          text-align: center;
          max-width: 80%;
          padding: 5px 13px;
          border-radius: 11px;
          font-size: 2rem;
          font-family: 'Luckiest Guy';
          letter-spacing: 0.105em;
          background-color: #1F0061;
          text-transform: uppercase;
          color: #fff;
        }
    }
    .MuiSvgIcon-root {
        font-size: 2rem;
    }
    & .modal-background {
        position: absolute;
        z-index: 1;
        height: 100%;
        width: 100%;
        display: flex;
        justify-content: center;
        background: ${ModalData.legendCard.gradOrange};
        -webkit-clip-path:circle(85% at 50% -15%);
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
  color: #FFAE35;
`;

export const InfoContainer = styled.div`
  height: 100%;
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
      height: 125px;
      width: 80%;
      margin-bottom: 24%;
      text-align: center;
      h2 {
        margin-bottom: 8px;
      }
      p {
        color: #000000;
        font-family: 'Montserrat', sans-serif;
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
`
export const ModalFooter = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    align-self: flex-end;
    width: 100%;
    height: 11%;
    background-color: #E9E9E9;
    box-shadow: 0px 4px 4px 5px rgba(0, 0, 0, 0.3);
    & .modal-purchase {
      position: relative;
      z-index: 9;
      padding: 8px 35px;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      border-radius: 10px;
      background: linear-gradient(180deg, #FFFFFF 0%, rgba(235, 223, 223, 0) 100%), linear-gradient(180deg, #F8B200 0%, rgba(255, 255, 255, 0) 100%), linear-gradient(180deg, #FFA800 0%, rgba(255, 246, 21, 0.916667) 48.96%, rgba(255, 255, 255, 0) 53.12%), #FFC700;
      font-size: 20px;
      line-height: 24px;
      letter-spacing: .1rem;
      cursor: pointer;
    }
`;
