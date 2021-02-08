import { useState } from "react";
import {
  Info,
  Info__product,
  Info__name,
  Info__productContainer,
  Info__close,
} from "./Cart.elements";

const CartProduct = ({ purchasedItem }) => {
  const [isClose, setIsClose] = useState(false);
  const { modalData, modalPrice } = purchasedItem;

  const handleClose = () => {
    setIsClose(true);
  };

  return (
    <>
      {!isClose && (
        <Info>
          <Info__productContainer>
            <Info__product>
              <img className="product-image" src={modalData.images.smallIcon} />
            </Info__product>
            <Info__name>
              <div className="product-name">{modalData.name}</div>
              <div className="product-rarity">{modalData.rarity.value}</div>
            </Info__name>
            <div className="price-cost">${modalPrice.price}</div>
            <Info__close onClick={handleClose} />
          </Info__productContainer>
          <hr style={{ opacity: 0.3 }} />
        </Info>
      )}
    </>
  );
};

export default CartProduct;
