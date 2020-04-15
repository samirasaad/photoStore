import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import { Link } from 'react-router-dom';
// import PinDropIcon from '@material-ui/icons/PinDrop';
import './ImageCard.scss';
const useStyles = makeStyles((theme) => ({
  root: {
    width: 22 + 'em',
    margin: 10
  },
  media: {
    height: 16 + 'em',
    paddingTop: '56.25%', // 16:9
  },
  avatar: {
    width: 'auto'
  },
}));

const ImageCard = (props) => {
  const { thumb, alt_description, liked_by_user, download, download_location,
    profile_image, name, location } = props;
  const classes = useStyles();

  return (
    <div className='card-wrapper'>
      <Card className={classes.root}>
        <CardHeader
          avatar={
            <Link to=''>
              <Avatar
                src={profile_image}
                aria-label="recipe"
                className={classes.avatar}
                variant='circle'>
              </Avatar>
            </Link>
          }
          title={name}
          subheader={location}
        />
        <CardMedia
          className={classes.media}
          image={thumb}
          title={alt_description}
        />
        <CardActions className='justufy-content-between'>
          <IconButton aria-label='like this photo'>
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share this photo">
            <ShareIcon />
          </IconButton>
        </CardActions>
      </Card>
    </div>
  );
}

export default ImageCard