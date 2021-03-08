import { Checkbox } from "@material-ui/core";
import { useContext, useEffect, useState } from "react";
import { StateContext } from "../../context/StateProvider";
import {
  Info,
  Info__product,
  Info__name,
  Info__productContainer,
  Info__close,
} from "./Cart.elements";

const CartProduct = ({ purchasedItem, isEdit }) => {
  const { modalData, modalPrice, isTick } = purchasedItem;
  const [storeTicked, setStoreTicked] = useState(purchasedItem);
  // double destructuring:
  const [{ purchasedItems }, dispatch] = useContext(StateContext);

  const handleClose = () => {
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: modalData.id,
    });
  };

  const handleCheckbox = () => {
    setStoreTicked({ ...storeTicked, isTick: !storeTicked.isTick });
    purchasedItems.forEach((item) => {
      if (item.modalData.id === storeTicked.modalData.id) {
        item.isTick = !storeTicked.isTick;
        console.log(item);
      }
    });

    // console.log(purchasedItems, "new");

    dispatch({
      type: "SAVE_TICK",
      payload: purchasedItems,
    });
  };

  return (
    <>
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
          <Info__close
            onClick={handleClose}
            isEdit={isEdit}
            style={{ display: isEdit ? "none" : "block" }}
          />
          <Checkbox
            inputProps={{ "aria-label": "uncontrolled-checkbox" }}
            style={{ display: isEdit ? "block" : "none", padding: 0 }}
            onClick={handleCheckbox}
            checked={purchasedItem.isTick}
          />
        </Info__productContainer>
        <hr style={{ opacity: 0.3 }} />
      </Info>
    </>
  );
};

export default CartProduct;
