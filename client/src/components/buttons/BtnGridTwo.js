import React from 'react';
import Buttons from './Buttons';
import CardContext from '../../context/Card/card.context';

const BtnGridTwo = () => {
  const cardContext = React.useContext(CardContext);
  const { setLoginCard, setRegisterCard } = cardContext;

  return (
    <div className='btn-grid-2'>
      <Buttons text='Login' fullWidth variant='text' onClick={setLoginCard} />
      <Buttons
        text='Register'
        fullWidth
        variant='text'
        onClick={setRegisterCard}
      />
    </div>
  );
};

export default BtnGridTwo;
