export const initialState = {
  modalCard: "",
  getApi: [],
};

const reducer = (state, action) => {
  console.log(action);

  // NOTE: This is where all the logics happen:
  switch (action.type) {
    case "MODALCARD":
      return {
        // NOTE: action is the dispatch that we passed in:
        ...state, // state is currentState and initialState.
        modalCard: action.modalCard,
      };
    case "GETAPI":
      return {
        // NOTE: action is the dispatch that we passed in:
        ...state, // state is currentState and initialState.
        modalCard: action.modalCard,
      };
    default:
      return state;
  }
};

export default reducer;
