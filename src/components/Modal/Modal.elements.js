import styled from 'styled-components';
import {ModalData} from '../../data/ModalData'
import CloseIcon from '@material-ui/icons/Close';


export const ModalMain = styled.div`
  position: fixed;
  top: 25px;
  z-index: 1;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  div {
    display: flex;
    align-items: start;
    justify-content: flex-end;
    height: 85vh;
    width: 100%;
    width: min(90vw, 800px);
    background: ${ModalData.legendCard.gradOrange};
    .MuiSvgIcon-root {
        font-size: 2rem;
    }
  }
`;

export const ModalClose = styled(CloseIcon)`
      height: 30px;
      margin: 13px;
      color: #FFAE35;
`