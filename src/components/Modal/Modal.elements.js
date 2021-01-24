import styled from 'styled-components/macro';
import {ModalData} from '../../data/ModalData'
import CloseIcon from '@material-ui/icons/Close';

export const ModalMain = styled.div`
  position: fixed;
  top: 25px;
  z-index: 1;
  width: 100%;
  height: 90vh;
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
    width: 100%;
    width: min(90vw, 800px);
    border-radius: 24px;
    box-shadow: 0px 0px 14px 3px rgba(0, 0, 0, 0.4);
    .MuiSvgIcon-root {
        font-size: 2rem;
    }
    .modal-background {
      position: absolute;
      z-index: 1;
      height: 100%;
      width: 100%;
      background: ${ModalData.legendCard.gradOrange};
      -webkit-clip-path:circle(320px at 50% 60vh);
      clip-path: circle(310px at 50% -8vh);
    }
  }
`;

export const ModalClose = styled(CloseIcon)`
  height: 30px;
  margin: 13px;
  color: #FFAE35;
`;

export const InfoContainer = styled.div`
  position: absolute;
  bottom: 0;
  z-index: 0;
  height: 272px;
  width: inherit;
  display: flex;
  align-items: flex-end;
  background-color: white;
  /* -webkit-clip-path:circle(320px at 50% 60vh);
  clip-path: circle(310px at 50% 60vh); */
`