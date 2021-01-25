import {useContext, useEffect} from 'react'
import {StateContext} from '../../context/StateProvider'
import {InfoContainer, ModalClose, ModalMain} from './Modal.elements'

const Modal = ({handleModal}) => {
  const [state] = useContext(StateContext);
  const {modalData} = state;

  return (
    <ModalMain>
      <div className="modal-container">
        <div className="modal-type">
          <span>{modalData.type.displayValue}</span>
        </div>
        <div className="modal-background">
          <img src={modalData.images.featured} alt="Featured-image" />
        </div>
        <ModalClose onClick={handleModal} />
        <InfoContainer />
      </div>
    </ModalMain>
  )
}

export default Modal
