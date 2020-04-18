import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import PinDropIcon from '@material-ui/icons/PinDrop';
import './ImageModal.scss'
import UserAvatar from '../UserAvatar/UserAvatar';
const ImageModal = ({ isOpen, handleModalState, imgObj: { imgUrl },profile_image,location }) => {
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
                    <div>
                   <UserAvatar img={profile_image}/>
                    </div>
                    <div className='text-center img-wrapper' style={{
                        backgroundImage: `url(${imgUrl})` ,
                        backgroundSize: `contain`,
                        backgroundRepeat: `no-repeat`,
                        backgroundPosition: `center`
                        }}>
                    </div>
                    <div>
                    { location && 
                    <>
                      <PinDropIcon color='secondary'/>
                      <span className='location'>{location}</span>
                      </>
                    }
                    </div>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleModalState} color="primary">
                         like
                     </Button>
                </DialogActions>
            </Dialog>
    );
}

export default ImageModal;