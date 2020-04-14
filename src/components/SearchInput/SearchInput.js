import React from 'react';
import InputField from './../Controls/TextField/TextField';

const  SearchInput = ({handleChange}) =>{
    return (
        <InputField  label='name'
                     color='secondary'
                     size='medium'
                     handleChange={handleChange}
                     />
    )
}

export default SearchInput;