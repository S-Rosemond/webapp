import React from 'react';
import RegisterCard from './../cards/RegisterCard';
import BorderlessCard from './../cards/BorderlessCard';

const Register = () => {
  return (
    <div className='form'>
      <BorderlessCard form Component={RegisterCard} />
    </div>
  );
};

export default Register;
