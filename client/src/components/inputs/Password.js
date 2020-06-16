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

const Password = ({ inputRef, errors }) => {
  const [showPassword, setShowPassword] = React.useState(false);
  const [mouseDownPassword, handleMouseDownPassword] = React.useState(null);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className='mb-3'>
      <FormControl variant='filled' className='full-width'>
        <InputLabel htmlFor='password'>Password</InputLabel>
        <FilledInput
          id='password'
          name='password'
          inputRef={inputRef}
          type={showPassword ? 'Password' : 'Text'}
          fullWidth={true}
          error={errors.password}
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
        {errors.password ? (
          <FormHelperText
            error={errors.password}
            id='standard-weight-helper-text'
          >
            {errors.password.type === 'minLength'
              ? 'Password must be a minimum length of 6'
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
