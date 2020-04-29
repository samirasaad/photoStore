import React from 'react';
import './Navbar.scss';
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <div className='nav-bar-wrapper mb-0'>
      <Link to='/'>
        <p className='p-3 font-weight-bold mb-0 pb-0'>
          PhotoStore
        </p>
      </Link>
    </div>
  )
}

export default Navbar;