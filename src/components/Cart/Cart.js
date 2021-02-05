import {Main, MainContainer, Title} from './Cart.elements'
import {Info, Info__content, Info__header, Total, Total__header, Total__subtotal} from './Cart.elements'
import {Total__shipping, Total__total, Total__btn} from './Cart.elements'
import EditIcon from '@material-ui/icons/Edit';
import blackWidow from "../../images/merch_image_icon/smallicon-blackWidow.png"

const Cart = () => {
  return (
    <Main>
      <Title><h1>my cart</h1></Title>
      <MainContainer>
        <Info>
          <Info__header>
            <h2 className="header-label">Product</h2>
            <h2 className="header-label">Price</h2>
            <EditIcon className="edit-icon" />
          </Info__header>
          <Info__content>
            <div className="product-container">
              <div className="image-container">
                <div className="image-inner-container">
                  <img src={blackWidow} alt="black Widow" className="image-item" />
                </div>
              </div>
              <div className="name-container">
                <div className="name-inner-container">
                  <h3 className="product-name">Omega</h3>
                  <h4 className="product-rarity">legendary</h4>
                </div>
              </div>
            </div>
            <h3 className="product-price">$5</h3>
            <i className="close-icon"></i>
          </Info__content>
        </Info>
        {/* Cart card */}
        <Total>
          <Total__header>cart totals</Total__header>
          <Total__subtotal>
            <div className="subtotal-name">Subtotal</div>
            <div className="subtotal-price">$99.99</div>
          </Total__subtotal>
          <Total__shipping>
            <div className="shipping-name">Shipping</div>
            <div className="shipping-price">Free</div>
          </Total__shipping>
          <Total__total>
            <div className="total-name">Total</div>
            <div className="total-price">$99.99</div>
          </Total__total>
          <Total__btn>
            <h2>proceed to checkout</h2>
          </Total__btn>
        </Total>
      </MainContainer>
    </Main>
  )
}

export default Cart
