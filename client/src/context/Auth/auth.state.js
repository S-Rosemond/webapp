import React from 'react';
import AuthContext from './auth.context';
import AuthReducer from './auth.reducer';
import { REGISTER, LOGIN } from './../types';

const AuthState = (props) => {
  const initialState = {
    user: null,
    token: localStorage.getItem('Chirps'),
    isAuthenticated: false,
    loading: true,
    error: null,
  };

  const [state, dispatch] = React.useReducer(AuthReducer, initialState);

  const registerUser = () => dispatch({ type: REGISTER, payload });

  const login = () => dispatch({ type: LOGIN });

  const logout = () => dispatch({ type: LOGOUT });

  return (
    <AuthContext.Provider
      value={{
        token: state.token,
        isAuthenticated: state.isAuthenticated,
        loading: state.loading,
        error: state.error,
        card: state.card,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
