import styled from 'styled-components';

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
    align-items: center;
    justify-content: center;
    height: 85vh;
    width: 100%;
    width: min(90vw, 800px);
    background-color: rgba(255,55,2, .9);
  }
`;