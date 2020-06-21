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

const Password = ({ inputRef, errors, name, placeholderText }) => {
  const [showPassword, setShowPassword] = React.useState(false);
  const [mouseDownPassword, handleMouseDownPassword] = React.useState(null);

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
          error={errors?.name ? true : false}
          endAdornment={
            <InputAdornment position='end'>
              <IconButton
                aria-label='toggle password visibility'
                edge='end'
                onMouseDown={handleMouseDownPassword}
                onClick={handleShowPassword}
              >
                {showPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl>
    </div>
  );
};

export default Password;
