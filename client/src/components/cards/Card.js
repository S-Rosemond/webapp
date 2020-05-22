import React from 'react';

const Card = ({ Component }) => {
	return <div className="card p-2">{Component && <Component />}</div>;
};

export default Card;
