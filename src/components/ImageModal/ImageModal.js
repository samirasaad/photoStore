import React from 'react';
import { Dialog, Button, DialogActions, DialogContent, IconButton } from '@material-ui/core';
import PinDropIcon from '@material-ui/icons/PinDrop';
import UserAvatar from '../UserAvatar/UserAvatar';
import FavoriteIcon from '@material-ui/icons/Favorite';
import SystemUpdateAltIcon from '@material-ui/icons/SystemUpdateAlt';
import './ImageModal.scss';

const ImageModal = ({ isOpen, handleModalState, imgObj: { imgUrl, likes },
    userObj: { profile_image, location, instagram_username, name },downloadSelectedImage }) => {
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
                   <UserAvatar img={profile_image} />
                    <p className='user-name mt-2'>
                        {
                            instagram_username ? (
                                '@' + instagram_username
                            ) :
                                (
                                    '@' + name
                                )
                        }
                    </p>
                   </div>
                    <div>
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
                            <p className='mt-2  no-of-likes' >
                                <FavoriteIcon color='secondary' />
                               <span className='mx-2'>{likes}</span> 
                            </p>
                        </>
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