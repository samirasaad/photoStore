import React from 'react';
import YoutubeSearchedForIcon from '@material-ui/icons/YoutubeSearchedFor';
import './SearchInput.scss';
const SearchInput = ({ handleChange,handleSubmit }) => {
    return (
        <>
            <form onSubmit={handleSubmit} className='form-wrapper  mt-2 text-center'>
                <div className='position-relative'>
                 <input className=' search-input'
                  placeholder='Search for a photo'
                  onChange={handleChange}
                  />
                 <span className='position-absolute search-icon'>
                     <YoutubeSearchedForIcon />
                 </span>
                </div>
            </form>
        </>
    )
}

export default SearchInput;