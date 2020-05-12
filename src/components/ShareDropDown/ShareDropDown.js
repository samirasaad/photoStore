import React from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import {
    FacebookIcon,
    LinkedinIcon,
    TwitterIcon,
    WhatsappIcon,
} from "react-share";

import {
    FacebookShareButton,
    LinkedinShareButton,
    TwitterShareButton,
    WhatsappShareButton
} from "react-share";
import { IconButton } from '@material-ui/core';
import ShareIcon from '@material-ui/icons/Share';
export default function ShareDropDown({ url }) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <IconButton onClick={handleClick} >
                <ShareIcon className='share-icon' aria-haspopup="true" />
            </IconButton>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}>
                <MenuItem onClick={handleClose} >
                    <FacebookShareButton
                        children={<FacebookIcon 
                        size={32}
                        round={`true`}
                        />}
                        url={url}
                    />
                </MenuItem>
                <MenuItem onClick={handleClose} >
                    <LinkedinShareButton
                        children={<LinkedinIcon
                        size={32}
                        round={`true`}
                        />}
                        url={url}
                    />
                </MenuItem>

                <MenuItem onClick={handleClose} >
                    <TwitterShareButton
                        children={<TwitterIcon
                        size={32}
                        round={`true`}
                        />}
                        url={url}
                    />
                </MenuItem>

                <MenuItem onClick={handleClose} >
                    <WhatsappShareButton
                        children={<WhatsappIcon
                        size={32} 
                        round={`true`}
                        />}
                        url={url}
                    />
                </MenuItem>
            </Menu>
        </div>
    );
}