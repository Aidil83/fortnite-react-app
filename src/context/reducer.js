export const initialState = {
  modalCard: {},
  getApi: [],
  modalPrice: {},
  hoverCard: {},
  firstCard: 0,
  purchasedItems: [],
  cartCount: 0,
};

export const getCartTotal = (purchasedItem) =>
  purchasedItem?.reduce((amount, item) => item.modalPrice.price + amount, 0);

const reducer = (state, action) => {
  // console.log(action);

  if (action.value) {
    console.log([...state.purchasedItems, action.value]);
  }

  // NOTE: This is where all the logics happen:
  switch (action.type) {
    case "GETAPI":
      return {
        // NOTE: action is the dispatch that we passed in:
        ...state, // state is currentState and initialState.
        getApi: action.getApi,
      };
    case "MODALDATA":
      return {
        ...state,
        modalData: action.modalData,
      };
    case "MODALPRICE":
      return {
        ...state,
        modalPrice: action.modalPrice,
      };
    case "MODALBACKGROUND":
      return {
        ...state,
        modalBackground: action.modalBackground,
      };
    case "HOVERCARD":
      return {
        ...state,
        hoverCard: action.hoverCard,
      };
    case "FIRSTCARD":
      return {
        ...state,
        firstCard: action.firstCard,
      };
    case "PURCHASEDITEM":
      return {
        ...state,
        purchasedItems: [...state.purchasedItems, action.value],
      };
    case "CARTCOUNT":
      return {
        ...state,
        cartCount: action.payload,
      };
    case "REMOVE_FROM_CART":
      let newCart = [...state.purchasedItems];

      const index = state.purchasedItems.findIndex((cartItem) => {
        return cartItem.modalData.id === action.payload;
      });

      if (index >= 0) {
        // item exists in basket, remove it...
        newCart.splice(index, 1);
      } else {
        console.warn(`Can't remove product (id: ${action.payload}) as its not`);
      }
      // console.log(newCart, "removed 1");
      return {
        ...state,
        purchasedItems: newCart,
      };
    default:
      return state;
  }
};

export default reducer;
