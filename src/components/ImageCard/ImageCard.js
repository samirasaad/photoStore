import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CardHeader, CardMedia, CardActions, Card, IconButton } from '@material-ui/core';
import UserAvatar from './../../components/UserAvatar/UserAvatar';
import FavoriteIcon from '@material-ui/icons/Favorite';
import SystemUpdateAltIcon from '@material-ui/icons/SystemUpdateAlt';
import { Link } from 'react-router-dom';
import './ImageCard.scss';

const useStyles = makeStyles((theme) => ({
  root: {
    width: 22 + 'em',
    margin: 10
  },
  media: {
    height: 16 + 'em',
    paddingTop: '56.25%'
  }
}));

const ImageCard = (props) => {
  const { imgData:{regular, alt_description, likes}, userData,
          userData:{id, name, username, instagram_username, profile_image:{small}},
          handleModalState,
          downloadSelectedImage
           } = props;
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Link 
          to={{
            pathname:`/profile/${'@'+username}`,
            state:{userData}
          }}
          >
            <UserAvatar img={small} size='small'/>
          </Link>
        }
        title={name}
        subheader={instagram_username ? '@' + instagram_username : '@' + name}
      />
      <CardMedia
        className={classes.media}
        image={regular}
        title={alt_description}
        onClick={handleModalState}
      />
      <CardActions className='my-2 justify-content-between'>
        <div >
        {/* <FavoriteIcon color='secondary' onClick={likeAphoto}/> */}
        <span className='no-of-likes mx-2'>{likes}</span>
        </div>
        <div>
        <IconButton onClick={downloadSelectedImage} >
          <SystemUpdateAltIcon className='download-icon' />
        </IconButton>
        </div>
      </CardActions>
    </Card>
  );
}

export default ImageCard