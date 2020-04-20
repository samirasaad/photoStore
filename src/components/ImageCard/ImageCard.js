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
  },
  // avatar: {
  //   width: 'auto'
  // },
}));

const ImageCard = (props) => {
  const { regular, alt_description, likes, profile_image, name, instagram_username, handleModalState
    , downloadImage, forceDownload, thumb, downloadSelectedImage } = props;
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Link to=''>
            <UserAvatar img={profile_image} />
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
        <FavoriteIcon color='secondary' />
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