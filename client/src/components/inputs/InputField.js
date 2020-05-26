import React from 'react';
import TextField from '@material-ui/core/TextField';

const InputField = ({ handleChange, label, type, helperText, errorMessage, variant = 'standard' }) => {
	const [ error, setError ] = React.useState(null);

	return (
		<div className="mb-3">
			<TextField
				id={type}
				label={label}
				variant={variant}
				onChange={handleChange}
				helperText={error ? errorMessage : helperText ? helperText : ' '}
				error={error && error}
				className="register-input"
			/>
		</div>
	);
};

export default InputField;
