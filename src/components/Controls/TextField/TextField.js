import React from 'react';
import { TextField } from '@material-ui/core';
const InputField = ({label,color,id}) =>{
return(
    <TextField id={id} 
               label={label} 
               color={color}/>
)
}

export default InputField;