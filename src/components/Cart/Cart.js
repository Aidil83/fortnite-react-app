import {Main, MainContainer, Title, Cart__line} from './Cart.elements'
import {Info, Info__content, Info__header, Total, Total__header, Total__subtotal} from './Cart.elements'
import {Total__shipping, Total__total, Total__btn} from './Cart.elements'

const Cart = () => {
  return (
    <Main>
      <MainContainer>
        <Title><h1>my cart</h1></Title>
        <Info>
          <Info__header>
            <h2 className="header-label">Product</h2>
            <h2 className="header-label">Price</h2>
            <i className="edit-icon"></i>
          </Info__header>
          <Cart__line />
          <Info__content>
            <div className="image-container">
              <img src="" alt="" className="image-item" />
            </div>
            <div className="name-container">
              <h3 className="product-name">Omega</h3>
              <h4 className="product-rarity">legendary</h4>
            </div>
            <h3 className="product-price">$5</h3>
            <i className="close-icon"></i>
            <hr className="product-underline" />
          </Info__content>
        </Info>
        <Cart__line />
        {/* Cart card */}
        <Total>
          <Total__header>cart totals</Total__header>
          <Total__subtotal>
            <div className="subtotal-name">Subtotal</div>
            <div className="subtotal-price">$99.99</div>
          </Total__subtotal>
          <Cart__line />
          <Total__shipping>
            <div className="shipping-name">Shipping</div>
            <div className="shipping-price">Free</div>
          </Total__shipping>
          <Cart__line />
          <Total__total>
            <div className="total-name">Total</div>
            <div className="total-price">$99.99</div>
          </Total__total>
        </Total>
        <Total__btn>
          <h2>proceed to checkout</h2>
        </Total__btn>
      </MainContainer>
    </Main>
  )
}

export default Cart
