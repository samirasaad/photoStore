import React from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import {
    FacebookIcon,
    LinkedinIcon,
    PinterestIcon,
    TwitterIcon,
    WhatsappIcon,
} from "react-share";

import {
    FacebookShareButton,
    LinkedinShareButton,
    PinterestShareButton,
    TwitterShareButton,
    WhatsappShareButton
} from "react-share";
import { IconButton } from '@material-ui/core';
import ShareIcon from '@material-ui/icons/Share';
export default function ShareDropDown({url}) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [ShareIcons, setShareIcons] = React.useState(
        [<FacebookShareButton children={<FacebookIcon size={32} round={`true`} />} url={url}/>,
         <LinkedinShareButton children={<LinkedinIcon size={32} round={`true`} />} url={url}/>,
         <PinterestShareButton children={<PinterestIcon size={32} round={`true`}  />} url={url}/>,
         <TwitterShareButton children={<TwitterIcon size={32} round={`true`}  />} url={url}/>,
         <WhatsappShareButton children={<WhatsappIcon size={32} round={`true`}  />} url={url}/>
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
                {ShareIcons.map((icon, index) => {
                    return (
                        <MenuItem onClick={handleClose} key={index}>
                            {icon}
                        </MenuItem>
                    )
                })
                }
            </Menu>
        </div>
    );
}