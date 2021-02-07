import {InfoContainer, Info__title, Main, MainContainer, Title} from './Cart.elements'
import {Info, Info__product, Info__name, Info__price, Info__edit, Total, Total__header, Total__subtotal} from './Cart.elements'
import {Total__shipping, Total__total, Total__btn, Info__productContainer} from './Cart.elements'
import EditIcon from '@material-ui/icons/Edit';
import CloseIcon from '@material-ui/icons/Close';
import blackWidow from "../../images/merch_image_icon/smallicon-blackWidow.png"

const Cart = () => {
  return (
    <Main>
      <Title><h1>my cart</h1></Title>
      <MainContainer>
        <InfoContainer>
          <Info>
            <Info__title>
              <div className="product-label">Product</div>
              <div className="price-label">Price</div>
              <EditIcon className="edit-icon" />
            </Info__title>
            <Info__productContainer>
              <Info__product>
                <img className="product-image" src={blackWidow} />
              </Info__product>
              <Info__name>
                <div className="product-name">Omega</div>
                <div className="product-rarity">Legendary</div>
              </Info__name>
              <div className="price-cost">$5</div>
              <CloseIcon className="close-icon" />
            </Info__productContainer>
            {/* <Info__product>
              <div className="product-label">Product</div>
              <img className="product-image" src={blackWidow} />
            </Info__product>
            <Info__name>
              <div className="product-name">Omega</div>
              <div className="product-rarity">Legendary</div>
            </Info__name>
            <Info__price>
              <div className="price-label">Price</div>
              <div className="price-cost">$5</div>
            </Info__price>
            <Info__edit>
              <EditIcon className="edit-icon" />
              <CloseIcon className="close-icon" />
            </Info__edit> */}
          </Info>
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
