import {CartProduct__container, InfoContainer, Info__title, Main, MainContainer, Title} from './Cart.elements'
import {Total, Total__header, Total__subtotal} from './Cart.elements'
import {Total__shipping, Total__total, Total__btn, } from './Cart.elements'
import EditIcon from '@material-ui/icons/Edit';
import CartProduct from './CartProduct';
import {useContext} from 'react';
import {StateContext} from '../../context/StateProvider';

const Cart = () => {
  const [{purchasedItems}] = useContext(StateContext);
  console.log(purchasedItems);
  return (
    <Main>
      <Title><h1>my cart</h1></Title>
      <MainContainer>
        <InfoContainer>
          <Info__title>
            <div className="product-label">Product</div>
            <div className="price-label">Price</div>
            <EditIcon className="edit-icon" />
          </Info__title>
          <CartProduct__container>
            {purchasedItems.map((purchasedItem, index) => {
              return <CartProduct key={index} purchasedItem={purchasedItem} />
            })}
          </CartProduct__container>
        </InfoContainer>
        {/* Cart card */}
        <Total>
          <Total__header>cart totals</Total__header>
          <Total__subtotal>
            <div className="subtotal-name">Subtotal</div>
            <div className="subtotal-price">$99.99</div>
          </Total__subtotal>
          <Total__shipping>
            <div className="shipping-name">Shipping</div>
            <div className="shipping-price">FREE</div>
          </Total__shipping>
          <Total__total>
            <div className="total-name">Total</div>
            <div className="total-price">$99.99</div>
          </Total__total>
          <Total__btn>
            <button className="checkoutBtn">
              proceed to checkout
            </button>
          </Total__btn>
        </Total>
      </MainContainer>
    </Main>
  )
}

export default Cart
