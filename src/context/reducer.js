export const initialState = {
  modalCard: 0,
};

const reducer = (state, action) => {
  console.log(action);

  // NOTE: This is where all the logics happen:
  switch (action.type) {
    case "MODALCARD":
      return {
        // NOTE: action is the dispatch that we passed in:
        ...state, // state is currentState and initialState.
        modalCard: action.modalCard + 1,
      };
    default:
      return state;
  }
};

export default reducer;
