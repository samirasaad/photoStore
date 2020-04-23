import React from 'react';
import './Navbar.scss';
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <div className='nav-bar-wrapper mb-3'>
      <Link to='/'>
        <p className='p-3 font-weight-bold'>
          PhotoStore
        </p>
      </Link>
    </div>
  )
}

export default Navbar;