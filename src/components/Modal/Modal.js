import { useContext, useEffect } from "react";
import { StateContext } from "../../context/StateProvider";
import {
  InfoContainer,
  ModalClose,
  ModalFooter,
  ModalMain,
} from "./Modal.elements";
import gold_coin from "../../images/merch_image_icon/gold-coin.png";

const Modal = ({ handleModal, setIsModal }) => {
  const [state, dispatch] = useContext(StateContext);
  const { modalData, purchasedItems, modalPrice, cartCount } = state;

  const handlePurchase = () => {
    // Restrict user from purchasing the same item:
    if (!purchasedItems.includes(modalData)) {
      dispatch({
        type: "PURCHASEDITEM",
        value: { modalData, modalPrice },
      });
      dispatch({
        type: "CARTCOUNT",
        payload: cartCount + 1,
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
    </ModalMain>
  );
};

export default Modal;
