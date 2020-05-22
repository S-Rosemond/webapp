import React from 'react';
import Card from './../cards/Card';
import LoginCard from './../cards/LoginCard';




const Register = () => {
	return (
		<div className='register'>
			<Card Component={LoginCard} />
		</div>
	);
};

export default Register;
