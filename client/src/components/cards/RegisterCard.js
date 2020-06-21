import React from 'react';
import { useForm } from 'react-hook-form';
import { Container } from '@material-ui/core';
import InputField from './../inputs/InputField';
import Password from '../inputs/Password';
import Buttons from './../buttons/Buttons';
import { Link } from 'react-router-dom';
import AuthContext from '../../context/Auth/auth.context';

const RegisterCard = () => {
  const { register, handleSubmit, errors, watch } = useForm();

  const authContext = React.useContext(AuthContext);
  const { registerUser } = authContext;

  const onSubmit = (data, event) => {
    event.preventDefault();

    const { name, email, password } = data;

    let formData = {
      name,
      email,
      password,
    };
    // note to self: Change backend so all emails are lowercase. I was able to create user with same email but differing case
    registerUser(formData);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Container>
        <InputField
          id='name'
          name='name'
          inputRef={register}
          label='Name'
          helperText='This will be displayed as your username'
          variant='filled'
          errors={errors}
        />
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
            required: true,
            minLength: 6,
          })}
          errors={errors}
          name='password'
        />

        <Password
          inputRef={register({
            required: true,
            minLength: 6,
            validate: (input) => input === watch('password'),
          })}
          errors={errors}
          name='password2'
        />

        <Buttons text='Register' fullWidth type='submit' />
      </Container>
      <div className='text-center'>
        <Link className='text-dec-none color-primary' to='/login'>
          Already have an account? Login
        </Link>
      </div>
    </form>
  );
};

export default RegisterCard;
