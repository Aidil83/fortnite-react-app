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
import { useContext } from "react";
import { StateContext } from "../../context/StateProvider";
import CurrencyFormat from "react-currency-format";
import { getCartTotal } from "../../context/reducer";

const Cart = () => {
  const [{ purchasedItems }] = useContext(StateContext);
  const pluralItem = purchasedItems.length > 1 ? "items" : "item";

  const calcTax = (tax) => {
    return tax * 0.08;
  };

  return (
    <Main>
      <Title>
        <h1>my cart</h1>
      </Title>
      <MainContainer>
        <InfoContainer>
          <Info__title>
            <div className="product-label">Product</div>
            <div className="price-label">Price</div>
            <EditIcon className="edit-icon" />
          </Info__title>
          <CartProduct__container>
            {purchasedItems.map((purchasedItem, index) => {
              return <CartProduct key={index} purchasedItem={purchasedItem} />;
            })}
          </CartProduct__container>
        </InfoContainer>
        {/* Cart card */}
        <CurrencyFormat
          renderText={(value) => {
            // NOTE: Used regex to parse string with a comma thousand separator to a number.
            console.log(value.replace(/[^\d\.\-]/g, ""));
            const calcTax = value.replace(/[^\d\.\-]/g, "") * 0.08;
            return (
              <>
                <Total>
                  <Total__header>cart totals</Total__header>
                  <Total__subtotal>
                    <div className="subtotal-name">
                      Subtotal ({`${purchasedItems.length}`} {`${pluralItem}`})
                    </div>
                    <div className="subtotal-price">{value}</div>
                  </Total__subtotal>
                  <Total__tax>
                    <div className="tax-label">Estimated Tax</div>
                    <div className="tax-price">${calcTax}</div>
                  </Total__tax>
                  <Total__shipping>
                    <div className="shipping-name">Shipping</div>
                    <div className="shipping-price">FREE</div>
                  </Total__shipping>
                  <Total__total>
                    <div className="total-name">Total</div>
                    <div className="total-price">{value}</div>
                  </Total__total>
                  <Total__btn>
                    <button className="checkoutBtn">proceed to checkout</button>
                  </Total__btn>
                </Total>
              </>
            );
          }}
          decimalScale={2}
          value={getCartTotal(purchasedItems)}
          displayType={"text"}
          thousandSeparator={true}
          prefix={"$"}
        />
      </MainContainer>
    </Main>
  );
};

export default Cart;
