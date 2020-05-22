import React from 'react';
import Buttons from './Buttons';

const BtnGridTwo = (left, right) => {
	return (
		<div>
			<Buttons onClick={left.onClick} />
			<Buttons />
		</div>
	);
};

export default BtnGridTwo;
