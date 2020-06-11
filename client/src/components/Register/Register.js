import React from 'react';
import Card from './../cards/Card';
import LoginCard from './../cards/LoginCard';
import RegisterCard from './../cards/RegisterCard';
import CardContext from '../../context/Card/card.context';

const Register = () => {
  const cardContext = React.useContext(CardContext);
  const { card } = cardContext;

  return (
    <div className='register'>
      <Card Component={card === 0 ? RegisterCard : LoginCard} />
    </div>
  );
};

export default Register;
