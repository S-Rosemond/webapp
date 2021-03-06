import React from 'react';
import { Container } from '@material-ui/core';
import InputField from './../inputs/InputField';
import Password from '../inputs/Password';
import Buttons from '../buttons/Buttons';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

const LoginCard = () => {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (temp) => console.log(temp);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Container>
        <InputField
          id='email'
          name='email'
          inputRef={register({
            required: 'This field is required',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
              message: 'Please enter a properly formatted email',
            },
          })}
          label='Email'
          variant='filled'
          errors={errors}
        />
        <Password
          inputRef={register({
            required: 'This field is required',
            minLength: 6,
          })}
          errors={errors}
        />
        <Buttons text='Login' fullWidth type='submit' />
      </Container>
      <div className='text-center'>
        <Link className='text-dec-none color-primary' to='/register'>
          Don't have an account? Register here!
        </Link>
      </div>
    </form>
  );
};

export default LoginCard;
