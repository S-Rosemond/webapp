import React from 'react';
import { Button } from '@material-ui/core';

const Buttons = ({ onClick, text = 'Click', color = 'primary', variant = 'contained', fullWidth }) => {
	return (
		<div className="mb-1">
			<Button fullWidth={fullWidth && true} variant={variant} color={color} onClick={onClick}>
				{text}
			</Button>
		</div>
	);
};

export default Buttons;
