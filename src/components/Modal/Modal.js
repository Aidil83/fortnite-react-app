import {InfoContainer, ModalClose, ModalMain} from './Modal.elements'

const Modal = ({handleModal}) => {
  return (
    <ModalMain>
      <div className="modal-container">
        <div className="modal-background"></div>
        <ModalClose onClick={handleModal} />
        <InfoContainer />
      </div>
    </ModalMain>
  )
}

export default Modal
