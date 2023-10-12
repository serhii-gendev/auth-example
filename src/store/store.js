import React, { createContext, useReducer } from "react";

const initialState = { isAuthenticated: false };
export const store = createContext(initialState);

const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case "SET_AUTHENTICATION":
        return { ...state, isAuthenticated: action.payload };
      default:
        throw new Error();
    }
  }, initialState);

  return (
    <store.Provider value={{ state, dispatch }}>{children}</store.Provider>
  );
};

export default StateProvider;
