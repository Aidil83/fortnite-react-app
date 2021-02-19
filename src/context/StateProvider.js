import { createContext, useReducer } from "react";

export const StateContext = createContext();

export const StateProvider = ({ children, initialState, reducer }) => {
  return (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </StateContext.Provider>
  );
};
