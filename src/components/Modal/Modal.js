import {useContext, useEffect} from 'react'
import {StateContext} from '../../context/StateProvider'
import {InfoContainer, ModalClose, ModalMain} from './Modal.elements'

const Modal = ({handleModal}) => {
  const [state] = useContext(StateContext);
  const {modalCard} = state;

  return (
    <ModalMain>
      <div className="modal-container">
        <div className="modal-background">
          <img src={modalCard} alt="Featured-image" />
        </div>
        <ModalClose onClick={handleModal} />
        <InfoContainer />
      </div>
    </ModalMain>
  )
}

export default Modal
