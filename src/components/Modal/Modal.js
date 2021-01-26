import {useContext, useEffect} from 'react'
import {StateContext} from '../../context/StateProvider'
import {InfoContainer, ModalClose, ModalDescription, ModalFooter, ModalMain} from './Modal.elements'

const Modal = ({handleModal}) => {
  const [state] = useContext(StateContext);
  const {modalData} = state;

  return (
    <ModalMain>
      <div className="modal-container">
        <div className="modal-type">
          <span>{modalData.type.value}</span>
        </div>
        <div className="modal-background">
          <img src={modalData.images.featured} alt="Featured-image" />
        </div>
        <ModalClose onClick={handleModal} />
        <InfoContainer>
          <div className="modal-info">
            <h2>{modalData.name}</h2>
            <p>{modalData.description}</p>
          </div>
        </InfoContainer>
        <ModalFooter>
          <div className="modal-purchase">Purchase</div>
        </ModalFooter>
      </div>
    </ModalMain>
  )
}

export default Modal
