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
    const [ShareButtons, setShareButtons] = React.useState(
        [<FacebookShareButton children={<FacebookIcon size={32} round={`true`} />} url={url} />,
        <LinkedinShareButton children={<LinkedinIcon size={32} round={`true`} />} url={url} />,
        <TwitterShareButton children={<TwitterIcon size={32} round={`true`} />} url={url} />,
        <WhatsappShareButton children={<WhatsappIcon size={32} round={`true`} />} url={url} />
        ]
    )
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
                {ShareButtons.map((button, index) => {
                    return (
                        <MenuItem onClick={handleClose} key={index}>
                            {button}
                        </MenuItem>
                    )
                })
                }
            </Menu>
        </div>
    );
}