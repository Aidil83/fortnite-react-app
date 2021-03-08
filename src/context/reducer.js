export const initialState = {
  modalCard: {},
  getApi: [],
  modalPrice: {},
  hoverCard: {},
  firstCard: 0,
  purchasedItems: [],
  deleteSelected: [],
  purchasedIndicator: null,
  trackLogin: "SIGN IN",
  trackDemo: "Bob",
  isTick: false,
  saveTick: null,
};

export const getCartTotal = (purchasedItem) =>
  purchasedItem?.reduce((amount, item) => item?.modalPrice?.price + amount, 0);

export const getEstimatedTax = (purchasedItem) => {
  return (
    purchasedItem?.reduce(
      (amount, item) => item?.modalPrice?.price + amount,
      0
    ) * 0.08
  );
};

export const getTotalPrice = (purchasedItem) => {
  const subtotal = purchasedItem?.reduce(
    (amount, item) => item?.modalPrice?.price + amount,
    0
  );

  const tax = subtotal * 0.08;
  return tax + subtotal;
};

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
    case "PURCHASEDINDICATOR":
      return {
        ...state,
        purchasedIndicator: action.payload,
      };
    case "DELETE_SELECTED":
      let newCart1 = [...state.purchasedItems];

      const index1 = action.payload.filter((isTickItem) => {
        return isTickItem.isTick === false;
      });
      console.log(index1, "index1");

      return {
        ...state,
        purchasedItems: index1,
      };
    case "DELETE_ALL":
      return {
        ...state,
        purchasedItems: [],
      };
    case "DESELECT_ALL":
      let cart2 = action.payload.map((item) => {
        item.isTick = false;
        return item;
      });
      console.log(cart2, "cart2");
      return {
        ...state,
        purchasedItems: cart2,
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
        console.warn(
          `Can't remove product (id: ${action.payload}) as its not there.`
        );
      }
      // console.log(newCart, "removed 1");
      return {
        ...state,
        purchasedItems: newCart,
      };
    case "TRACK_LOGIN":
      return {
        ...state,
        trackLogin: action.payload,
      };
    case "SAVE_TICK":
      return {
        ...state,
        saveTick: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
