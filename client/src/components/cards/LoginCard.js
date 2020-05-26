import React from 'react';
import { Container } from '@material-ui/core';
import InputField from './../inputs/InputField';
import Password from '../inputs/Password';
import Buttons from '../buttons/Buttons';
import BtnGridTwo from './../buttons/BtnGridTwo';

const LoginCard = () => {
	return (
		<div>
			<Container>
				<BtnGridTwo />

				<InputField
					id="email"
					label="Email"
					variant="filled"
					errorMessage="Please provide a properly formatted email"
				/>
				<Password />
				<Buttons text="Login" fullWidth />
			</Container>
		</div>
	);
};

export default LoginCard;
