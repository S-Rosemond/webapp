import React from 'react';
import {
  FilledInput,
  InputAdornment,
  IconButton,
  InputLabel,
  FormControl,
  FormHelperText,
} from '@material-ui/core';
import { Visibility, VisibilityOff } from '@material-ui/icons';

const Password = ({ name, placeholderText, inputRef, errors }) => {
  const [showPassword, setShowPassword] = React.useState(true);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className='mb-3'>
      <FormControl variant='filled' className='full-width'>
        <InputLabel htmlFor={name}>{placeholderText || 'Password'}</InputLabel>
        <FilledInput
          id={name}
          name={name}
          inputRef={inputRef}
          type={showPassword ? 'Password' : 'Text'}
          fullWidth={true}
          error={errors[name] ? true : false}
          endAdornment={
            <InputAdornment position='end'>
              <IconButton
                aria-label='toggle password visibility'
                edge='end'
                onClick={handleShowPassword}
              >
                {showPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          }
        />
        {errors[name] ? (
          <FormHelperText
            error={errors[name] ? true : false}
            id='standard-weight-helper-text'
          >
            {errors[name].type === 'minLength'
              ? 'Password must be a minimum length of 6'
              : errors[name].type === 'validate'
              ? 'Passwords do not match'
              : 'This field is required'}
          </FormHelperText>
        ) : (
          <FormHelperText> </FormHelperText>
        )}
      </FormControl>
    </div>
  );
};

export default Password;
