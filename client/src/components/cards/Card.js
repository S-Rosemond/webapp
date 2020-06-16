import React from 'react';

const Card = ({ Component, form }) => {
  if (form)
    return (
      <div className='card p-2 t-100'>
        <form>{Component && <Component />}</form>
      </div>
    );

  return <div className='card p-2 t-100'>{Component && <Component />}</div>;
};

export default Card;
