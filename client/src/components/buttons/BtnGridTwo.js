import React from 'react';
import Buttons from './Buttons';

const BtnGridTwo = ({ handleClick }) => {
	return (
		<div className="btn-grid-2">
			<Buttons text="Login" fullWidth variant="text" onClick={handleClick} />
			<Buttons text="Register" fullWidth variant="text" onClick={handleClick} />
		</div>
	);
};

export default BtnGridTwo;
