import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import './UserAvatar.scss';

const UserAvatar = ({name,img}) =>{
    return(
        <Avatar src={name ? name : img} className=''/>
    )
}
export default UserAvatar;