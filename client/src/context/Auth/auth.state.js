import React from 'react';
import AuthContext from './auth.context';
import AuthReducer from './auth.reducer';
import { REGISTER_SUCCESS, REGISTER_FAILED, LOGIN, LOGOUT } from './../types';
import chirpsApiCall from './axiosApi';

const AuthState = (props) => {
  const initialState = {
    user: null,
    token: localStorage.getItem('Chirps'),
    isAuthenticated: false,
    loading: true,
    error: null,
    success: null,
  };

  const [state, dispatch] = React.useReducer(AuthReducer, initialState);

  const onSubmit = () => dispatch();

  const registerUser = async (formData) => {
    const res = await chirpsApiCall.post('/users/register', formData);
    console.log(res);
    dispatch({ type: REGISTER_SUCCESS, payload: res.data });
  };

  const login = async (formData) => {
    const res = await chirpsApiCall.post('/auth/login', formData);

    dispatch({ type: LOGIN, payload: res.data });
  };

  const logout = () => dispatch({ type: LOGOUT });

  return (
    <AuthContext.Provider
      value={{
        token: state.token,
        isAuthenticated: state.isAuthenticated,
        loading: state.loading,
        error: state.error,
        card: state.card,
        registerUser,
        login,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
