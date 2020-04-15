import React from 'react';
import InputField from './../Controls/TextField/TextField';

const SearchInput = ({ handleChange,handleSubmit }) => {
    return (
        <>
            <form onSubmit={handleSubmit}>
                <InputField label='name'
                    color='secondary'
                    size='medium'
                    handleChange={handleChange}
                />
            </form>
        </>
    )
}

export default SearchInput;