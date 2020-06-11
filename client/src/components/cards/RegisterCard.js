import React from 'react';
import { Container } from '@material-ui/core';
import InputField from './../inputs/InputField';
import Password from '../inputs/Password';
import Buttons from './../buttons/Buttons';
import BtnGridTwo from '../buttons/BtnGridTwo';

const RegisterCard = () => {
  return (
    <div>
      <Container>
        <BtnGridTwo />

        <InputField
          id='name'
          label='Name'
          helperText='This will be displayed as your username'
          variant='filled'
        />
        <InputField
          id='email'
          label='Email'
          variant='filled'
          errorMessage='Please provide a properly formatted email'
        />
        <Password />
        <Buttons text='Register' fullWidth />
      </Container>
    </div>
  );
};

export default RegisterCard;
