import { useContext, useState } from "react";
import { StateContext } from "../../context/StateProvider";
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
  // double destructuring:
  const [{ cartCount }, dispatch] = useContext(StateContext);

  const handleClose = (productId) => {
    setIsClose(true);
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: productId,
    });
    dispatch({
      type: "CARTCOUNT",
      payload: cartCount - 1,
    });
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
            <Info__close onClick={() => handleClose(modalData.id)} />
          </Info__productContainer>
          <hr style={{ opacity: 0.3 }} />
        </Info>
      )}
    </>
  );
};

export default CartProduct;
