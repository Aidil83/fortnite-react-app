export const initialState = {
  modalCard: {},
  getApi: [],
  modalPrice: {},
  hoverCard: {},
  firstCard: 0,
  purchasedItems: [],
};

const reducer = (state, action) => {
  // console.log(action);

  // if (action.value) {
  //   console.log([...state.purchasedItems, action.value]);
  // }

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
    default:
      return state;
  }
};

export default reducer;
