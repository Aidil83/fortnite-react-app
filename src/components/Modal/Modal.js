import {ModalClose, ModalMain} from './Modal.elements'

const Modal = ({handleModal}) => {
  return (
    <ModalMain>
      <div>
        <ModalClose onClick={handleModal} />
      </div>
    </ModalMain>
  )
}

export default Modal
