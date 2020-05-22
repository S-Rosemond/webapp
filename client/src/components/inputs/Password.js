import React from 'react'
import { FilledInput, InputAdornment, IconButton, InputLabel, FormControl  } from '@material-ui/core';
import {Visibility, VisibilityOff} from '@material-ui/icons'

const Password = ({}) => {
    const [ showPassword, setShowPassword ] = React.useState(false);
	const [ mouseDownPassword , handleMouseDownPassword] = React.useState(null)
    const [ password, handlePassword ] = React.useState('');
    
    const handleShowPassword = () => {
        setShowPassword(!showPassword)
    }


    return (
        <div>
            <FormControl variant='filled' className='full-width'>

            <InputLabel htmlFor='password'>Password</InputLabel>
            <FilledInput 
                id='password'
                type={showPassword ? 'Password': 'Text'}
               
              
                fullWidth={true}
                onChange={handlePassword}
                endAdornment={
                    <InputAdornment position='end' >
                    
                    <IconButton 
                     aria-label='toggle password visibility'
                     edge='end'
                     onMouseDown={handleMouseDownPassword}
                     onClick={handleShowPassword}
                            >
            {showPassword? <Visibility/> : <VisibilityOff />}
                </IconButton>
                    </InputAdornment>
                }

                
            ></FilledInput>
                
            </FormControl>
          
        </div>
    )
}

export default Password;
