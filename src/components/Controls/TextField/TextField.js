import React from 'react';
import { TextField } from '@material-ui/core';
const InputField = ({label,color,id,size,handleChange}) =>{
return(
    <TextField id={id} 
               label={label} 
               color={color}
               size={size}
               onChange={handleChange}
               />
)
}

export default InputField;