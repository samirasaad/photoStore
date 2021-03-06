import React from 'react';
import { Dialog, DialogActions, DialogContent, IconButton } from '@material-ui/core';
import PinDropIcon from '@material-ui/icons/PinDrop';
import UserAvatar from '../UserAvatar/UserAvatar';
import FavoriteIcon from '@material-ui/icons/Favorite';
import SystemUpdateAltIcon from '@material-ui/icons/SystemUpdateAlt';
import ShareDropDown from '../ShareDropDown/ShareDropDown';
import './ImageModal.scss';

const ImageModal = ({ isOpen, handleModalState, imgObj: { imgUrl, likes },
    userObj: { profile_image, location, username }, downloadSelectedImage }) => {
    return (
        <Dialog
            fullWidth={true}
            maxWidth='lg'
            scroll='body'
            open={isOpen}
            onClose={handleModalState}
            className='dialog-wrapper'
        >
            <DialogContent >
                <div className='d-flex justify-content-between'>
                    <div className='d-flex '>
                        <UserAvatar img={profile_image} size='small' />
                        <p className='user-name m-2'>
                            {
                                '@' + username
                            }
                        </p>
                    </div>
                    <div className='d-flex'>
                        <ShareDropDown url={imgUrl} />
                        <IconButton onClick={downloadSelectedImage} >
                            <SystemUpdateAltIcon className='download-icon' />
                        </IconButton>
                    </div>
                </div>
                <div className='text-center img-wrapper' style={{
                    backgroundImage: `url(${imgUrl})`,
                    backgroundSize: `contain`,
                    backgroundRepeat: `no-repeat`,
                    backgroundPosition: `center`
                }}>
                </div>
                <div className='mt-1'>
                    {location &&
                        <>
                            <PinDropIcon color='secondary' />
                            <span className='location mx-2'>
                                {location}
                            </span>
                        </>
                    }
                    {likes &&
                        <p className='mt-2  no-of-likes' >
                            <FavoriteIcon color='secondary' />
                            <span className='mx-2'>{likes}</span>
                        </p>
                    }
                </div>
            </DialogContent>
            <DialogActions>
                <button onClick={handleModalState} className='btn button-secondary' >
                    Close
                </button>
            </DialogActions>
        </Dialog>
    );
}

export default ImageModal;