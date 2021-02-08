import {Info, Info__product, Info__name, Info__productContainer} from './Cart.elements';
import CloseIcon from '@material-ui/icons/Close';

const CartProduct = ({purchasedItem}) => {
  const {modalData, modalPrice} = purchasedItem;
  return (
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
        <CloseIcon className="close-icon" />
      </Info__productContainer>
      <hr style={{opacity: .3}} />
    </Info>
  )
}

export default CartProduct
