import React from 'react';
import { Button } from '@material-ui/core';

const Buttons = ({ onClick, text = 'Click', color = 'primary', variant = 'contained' }) => {
	return (
		<div>
			<Button variant={variant} color={color} onClick={onClick}>
				{text}
			</Button>
		</div>
	);
};

export default Buttons;
