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
        top: 40px;
        width: 100%;
        height: 270px;
        object-fit: contain;
      }
    }
  }
`;

export const ModalClose = styled(CloseIcon)`
  position: absolute;
  z-index: 1;
  height: 30px;
  margin: 13px;
  color: #FFAE35;
`;

export const InfoContainer = styled.div`
  position: absolute;
  bottom: 0;
  z-index: 0;
  height: 100%;
  max-height: 572px;
  min-width: 300px;
  width: 100%;
  display: flex;
  align-items: flex-end;
  background-color: white;
  /* -webkit-clip-path:circle(320px at 50% 60vh);
  clip-path: circle(310px at 50% 60vh); */
`