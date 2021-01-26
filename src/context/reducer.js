export const initialState = {
  modalCard: {},
  getApi: [],
  modalPrice: 100,
};

const reducer = (state, action) => {
  // console.log(action);

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
    default:
      return state;
  }
};

export default reducer;
