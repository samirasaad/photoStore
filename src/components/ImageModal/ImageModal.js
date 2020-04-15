import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

const ImageModal = ({isOpen,handleModalState})=> {
  const [scroll, setScroll] = React.useState('paper');

  return (
    <div>
      <Dialog
        open={isOpen}
        onClose={handleModalState}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogContent dividers={scroll === 'paper'}>
         
        </DialogContent>
        <DialogActions>
          <Button  color="primary">
            share
          </Button>
          <Button  color="primary">
            download
          </Button>
          <Button  onClick={handleModalState} color="primary">
            like
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default ImageModal;