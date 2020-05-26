import React from 'react';
import AuthContext from './auth.context';
import AuthReducer from './auth.reducer';
import initialState from './auth.initialState';

const AuthState = (props) => {
	const [ state, dispatch ] = React.useReducer(AuthReducer, initialState);

	return (
		<AuthContext.Provider
			value={{
				state
			}}
		>
			{props.children}
		</AuthContext.Provider>
	);
};

export default AuthState;
