import React from 'react';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import './Footer.scss';
const Footer = () => {
    return (
        <div className='d-flex justify-content-center footer-wrapper p-4'>
            <a href=''>
                <GitHubIcon className='mx-2' />
            </a>
            <a href=''>
                <LinkedInIcon className='mx-2' />
            </a>
        </div>
    )
}
export default Footer;