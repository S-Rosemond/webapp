import React from 'react';
import {Container} from '@material-ui/core'
import InputField from './../inputs/InputField';
import Password from '../inputs/Password';


const LoginCard = () => {
	return (
        <div>
            <Container>
             <InputField id='name' label='Name' helperText='This will be displayed as your username' variant='filled'    /> 
            <InputField id='email' label='Email' variant='filled' 
            errorMessage='Please provide a properly formatted email' 
             />
             <Password />
            </Container>
        </div>
    )
};

export default LoginCard;
