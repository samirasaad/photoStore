import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import './UserAvatar.scss';

const UserAvatar = ({ name, img, size }) => {
    const useStyles = makeStyles((theme) => ({
        small: {
            width: theme.spacing(4),
            height: theme.spacing(4),
        },
        large: {
            width: theme.spacing(12),
            height: theme.spacing(12),
        },
    }));
    const classes = useStyles();
    return (
        <Avatar src={name ? name : img} className={classes[size]} />
    )
}
export default UserAvatar;