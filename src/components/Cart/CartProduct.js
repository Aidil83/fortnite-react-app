import {Info, Info__product, Info__name, Info__productContainer} from './Cart.elements';
import CloseIcon from '@material-ui/icons/Close';
import blackWidow from "../../images/merch_image_icon/smallicon-blackWidow.png";

const CartProduct = ({purchasedItem}) => {
  const {images, name, rarity} = purchasedItem;
  return (
    <Info>
      <Info__productContainer>
        <Info__product>
          <img className="product-image" src={images.smallIcon} />
        </Info__product>
        <Info__name>
          <div className="product-name">{name}</div>
          <div className="product-rarity">{rarity.value}</div>
        </Info__name>
        <div className="price-cost">$2</div>
        <CloseIcon className="close-icon" />
      </Info__productContainer>
      <hr style={{opacity: .3}} />
    </Info>
  )
}

export default CartProduct
