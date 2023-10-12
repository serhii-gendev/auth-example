  import React, { createContext, useReducer } from 'react';

  const AuthContext = createContext();

  const initialState = {
    isAuthenticated: false,
    token: null
  };

  const reducer = (state, action) => {
    switch(action.type) {
      case 'LOGIN':
        sessionStorage.setItem('token', action.payload.token);
        return {
          ...state,
          isAuthenticated: true,
          token: action.payload.token
        };
      case 'LOGOUT':
        sessionStorage.removeItem('token');
        return {...state, isAuthenticated: false, token: null};
      default:
        return state;
    }
  }

  export const AuthProvider = ({children}) => {
    const[state, dispatch] = useReducer(reducer, initialState);

    return(
      <AuthContext.Provider value={{state, dispatch}}>
        {children}
      </AuthContext.Provider> 
    );
  };

  export default AuthContext;