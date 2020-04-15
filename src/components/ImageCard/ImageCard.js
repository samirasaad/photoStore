import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
// import IconButton from '@material-ui/core/IconButton';
import { red } from '@material-ui/core/colors';
// import FavoriteIcon from '@material-ui/icons/Favorite';
// import ShareIcon from '@material-ui/icons/Share';

const useStyles = makeStyles((theme) => ({
  root: {
    width: 22 + 'em',
    margin: 10
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

const ImageCard = (props) => {
  const { thumb, alt_description, liked_by_user, download, download_location } = props;
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardHeader
      // avatar={
      //   <Avatar aria-label="recipe" className={classes.avatar}>
      //     R
      //   </Avatar>
      // }
      />
      <CardMedia
        className={classes.media}
        image={thumb}
        title={alt_description}
      />
      <CardActions disableSpacing>
        {/* <IconButton aria-label='like this photo'> */}
        {/* <FavoriteIcon /> */}
        {/* </IconButton> */}
        {/* <IconButton aria-label="share this photo"> */}
        {/* <ShareIcon /> */}
        {/* </IconButton> */}
      </CardActions>
    </Card>
  );
}

export default ImageCard