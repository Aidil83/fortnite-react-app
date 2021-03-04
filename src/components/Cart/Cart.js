import {
  CartProduct__container,
  InfoContainer,
  Info__title,
  Main,
  MainContainer,
  Title,
  Total__tax,
} from "./Cart.elements";
import { Total, Total__header, Total__subtotal } from "./Cart.elements";
import { Total__shipping, Total__total, Total__btn } from "./Cart.elements";
import EditIcon from "@material-ui/icons/Edit";
import CartProduct from "./CartProduct";
import { useContext, useState } from "react";
import { StateContext } from "../../context/StateProvider";
import CurrencyFormat from "react-currency-format";
import {
  getCartTotal,
  getEstimatedTax,
  getTotalPrice,
} from "../../context/reducer";
import { Link } from "react-router-dom";
import DotOption from "./DotOption";

const Cart = () => {
  const [{ purchasedItems }, dispatch] = useContext(StateContext);
  const pluralItem = purchasedItems.length > 1 ? "items" : "item";
  const [isEdit, setIsEdit] = useState(false);

  const handleEdit = () => {
    setIsEdit(!isEdit);
  };

  return (
    <Main>
      <Title>
        <h1>my cart</h1>
      </Title>
      <MainContainer>
        <InfoContainer>
          <Info__title isEdit={isEdit}>
            <div className="product-label">Product</div>
            <div className="price-label">Price</div>
            {!isEdit && <EditIcon className="edit-icon" onClick={handleEdit} />}
            {isEdit && <DotOption />}
          </Info__title>
          <CartProduct__container>
            {purchasedItems.map((purchasedItem, index) => {
              return (
                <CartProduct
                  key={index}
                  purchasedItem={purchasedItem}
                  isEdit={isEdit}
                />
              );
            })}
          </CartProduct__container>
        </InfoContainer>
        {/* Cart card */}
        <Total>
          <Total__header>cart totals</Total__header>
          <Total__subtotal>
            <div className="subtotal-name">
              Subtotal ({`${purchasedItems.length}`} {`${pluralItem}`})
            </div>
            <CurrencyFormat
              renderText={(value) => {
                return <div className="subtotal-price">{value}</div>;
              }}
              decimalScale={2}
              value={getCartTotal(purchasedItems)}
              displayType={"text"}
              thousandSeparator={true}
              prefix={"$"}
            />
          </Total__subtotal>
          <Total__tax>
            <div className="tax-label">Estimated Tax</div>
            <CurrencyFormat
              renderText={(value) => {
                return <div className="tax-price">{value}</div>;
              }}
              decimalScale={2}
              value={getEstimatedTax(purchasedItems)}
              displayType={"text"}
              thousandSeparator={true}
              prefix={"$"}
            />
          </Total__tax>
          <Total__shipping>
            <div className="shipping-name">Shipping</div>
            <div className="shipping-price">FREE</div>
          </Total__shipping>
          <Total__total>
            <div className="total-name">Total</div>
            <CurrencyFormat
              renderText={(value) => {
                return <div className="total-price">{value}</div>;
              }}
              decimalScale={2}
              value={getTotalPrice(purchasedItems)}
              displayType={"text"}
              thousandSeparator={true}
              prefix={"$"}
            />
          </Total__total>
          <Total__btn>
            <Link to="/checkout" className="checkoutBtn">
              proceed to checkout
            </Link>
          </Total__btn>
        </Total>
      </MainContainer>
    </Main>
  );
};

export default Cart;
