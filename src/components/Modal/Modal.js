import { useContext } from "react";
import { StateContext } from "../../context/StateProvider";
import {
  InfoContainer,
  ModalClose,
  ModalFooter,
  ModalMain,
  ModalOverlay,
} from "./Modal.elements";
import gold_coin from "../../images/merch_image_icon/gold-coin.png";

const Modal = ({ isModal, handleModal, setIsModal }) => {
  const [state, dispatch] = useContext(StateContext);
  const { modalData, purchasedItems, modalPrice, isTick } = state;

  const handlePurchase = (e) => {
    // Restrict user from purchasing the same item:
    e.stopPropagation();
    if (!purchasedItems.includes(modalData)) {
      dispatch({
        type: "PURCHASEDITEM",
        value: { modalData, modalPrice, isTick },
      });
      dispatch({
        type: "PURCHASEDINDICATOR",
        payload: handlePurchase,
      });
    }
    setIsModal((prevStateModal) => !prevStateModal);
  };

  // useEffect(() => {
  //   console.log(purchasedItems);
  // }, [purchasedItems]);

  return (
    <ModalMain>
      <div className="modal-container">
        <div className="modal-type">
          <span>{modalData.type.value}</span>
        </div>
        {/* NOTE: Can't pass background gradient as props in styled-component. Hence, this is the workaround: */}
        <div
          className="modal-background"
          style={{ background: `${modalPrice.background}` }}
        >
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
          <div className="modal-purchase" onClick={handlePurchase}>
            {modalPrice.price}
            <img src={gold_coin} alt="gold_coin" />
          </div>
        </ModalFooter>
      </div>
      <ModalOverlay isModal={isModal} onClick={() => setIsModal(false)} />
    </ModalMain>
  );
};

export default Modal;
