import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

const UserAvatar = ({ name, img, size }) => {
    const useStyles = makeStyles((theme) => ({
        small: {
            width: theme.spacing(4),
            height: theme.spacing(4),
        },
        large: {
            width: theme.spacing(19),
            height: theme.spacing(19),
        },
    }));
    const classes = useStyles();
    return (
        <Avatar src={name ? name : img} className={classes[size]} />
    )
}
export default UserAvatar;