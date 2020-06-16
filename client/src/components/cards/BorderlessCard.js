import React from 'react';

const BorderlessCard = ({ Component, form }) => {
  if (form)
    return <div className='p-2 t-100'>{Component && <Component />}</div>;

  return <div className='card p-2'>{Component && <Component />}</div>;
};

export default BorderlessCard;
