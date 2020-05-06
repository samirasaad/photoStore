import React from 'react';
import './SearchInput.scss';
const SearchInput = ({ handleChange,handleSubmit,value }) => {
    return (
        <>
            <form onSubmit={handleSubmit} className='form-wrapper  mt-2 text-center'>
                <div className='position-relative input-holder '>
                 <input className=' search-input'
                  placeholder='Search for a photo'
                  onChange={handleChange}
                  value={value}
                  />
                 {/* <span className='position-absolute search-icon'>
                     <YoutubeSearchedForIcon />
                 </span> */}
                </div>
            </form>
        </>
    )
}

export default SearchInput;