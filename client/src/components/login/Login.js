import React from 'react';
import LoginCard from './../cards/LoginCard';
import BorderlessCard from './../cards/BorderlessCard';

const Login = () => {
  return (
    <div className='form'>
      <BorderlessCard form Component={LoginCard} />
    </div>
  );
};

export default Login;
