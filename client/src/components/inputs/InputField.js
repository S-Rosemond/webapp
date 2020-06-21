import React from 'react';
import TextField from '@material-ui/core/TextField';

const InputField = ({
  label,
  type,
  helperText,
  variant = 'standard',
  name,
  inputRef,
  errors,
}) => {
  console.log('errors', errors);
  if (errors[name]) console.log(errors[name]);
  return (
    <div className='mb-3'>
      <TextField
        id={type}
        name={name}
        inputRef={inputRef}
        label={label}
        variant={variant}
        helperText={
          errors[name] ? errors[name].message : helperText ? helperText : ' '
        }
        error={errors[name] ? true : false}
        className='form-input'
        fullWidth
      />
    </div>
  );
};

export default InputField;
