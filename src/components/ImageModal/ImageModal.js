import React from 'react';
import { Dialog, Button, DialogActions, DialogContent } from '@material-ui/core';
import PinDropIcon from '@material-ui/icons/PinDrop';
import UserAvatar from '../UserAvatar/UserAvatar';
import './ImageModal.scss';

const ImageModal = ({ isOpen, handleModalState, imgObj: { imgUrl },
    userObj:{profile_image, location, instagram_username, name} }) => {
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
                <div className='d-flex align-items-baselinr'>
                    <UserAvatar img={profile_image} />
                    <p className='user-name mt-2'>
                        {console.log(instagram_username)}
                        {console.log(name)}
                       {
                           instagram_username ?(
                            '@' + instagram_username
                           ):
                           (
                            '@' + name
                           )
                       }
                    </p>
                </div>
                <div className='text-center img-wrapper' style={{
                    backgroundImage: `url(${imgUrl})`,
                    backgroundSize: `contain`,
                    backgroundRepeat: `no-repeat`,
                    backgroundPosition: `center`
                }}>
                </div>
                <div>
                    {location &&
                        <>
                            <PinDropIcon color='secondary' />
                            <span className='location'>{location}</span>
                        </>
                    }
                </div>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleModalState} >
                    download
                     </Button>
            </DialogActions>
        </Dialog>
    );
}

export default ImageModal;