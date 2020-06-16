import React from 'react';
import { useForm } from 'react-hook-form';
import { Container } from '@material-ui/core';
import InputField from './../inputs/InputField';
import Password from '../inputs/Password';
import Buttons from './../buttons/Buttons';
import { Link } from 'react-router-dom';

const RegisterCard = () => {
  const { register, handleSubmit, errors } = useForm();

  // const xContext = useContext(xContext)
  // const {onSubmit} = xContext

  const onSubmit = (data) => console.log(data);

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
          })}
          label='Email'
          variant='filled'
          errors={errors}
          errorMessage='Please provide a properly formatted email'
        />
        <Password
          inputRef={register({
            required: true,
            minLength: 6,
          })}
          errors={errors}
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
