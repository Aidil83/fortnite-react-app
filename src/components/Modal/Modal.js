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
          <span>{modalData.type.value}</span>
        </div>
        <div className="modal-background">
          <img src={modalData.images.featured} alt="Featured-image" />
        </div>
        <ModalClose onClick={handleModal} />
        <InfoContainer>
          <div className="modal-footer">
            <div className="modal-purchase">Purchase</div>
          </div>
        </InfoContainer>
      </div>
    </ModalMain>
  )
}

export default Modal
