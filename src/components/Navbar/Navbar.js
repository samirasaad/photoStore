import React from 'react';
import { Link } from 'react-router-dom';
import logo from './../../assets/images/logo.png';
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';

import './Navbar.scss';
const Navbar = () => {
  return (
    <nav className='nav-bar-wrapper mb-0'>
      <Link to='/'>
        <p className='p-3 font-weight-bold mb-0 pb-0'>
          PhotoStore
          <PhotoCameraIcon />
        </p>
      </Link>
    </nav>
  )
}

export default Navbar;