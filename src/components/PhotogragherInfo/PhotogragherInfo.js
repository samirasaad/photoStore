import React from 'react';
import UserAvatar from '../UserAvatar/UserAvatar';
import PinDropIcon from '@material-ui/icons/PinDrop';
import './PhotogragherInfo.scss'

const PhotogragherInfo = ({ userInfo }) => {
    const { first_name, last_name, location, bio } = userInfo
    console.log(userInfo)
    return (
        <section className='info-wrapper'>
            <div className='row justify-content-center mx-0'>
                <div className='col-md-2'>
                    <UserAvatar />
                </div>
                <div className='col-md-5'>
                    <h3 className='font-weight-bold'>{first_name + '-' + last_name}</h3>
                    <span className='text-muted'>
                        <PinDropIcon color='secondary' />
                        {location}
                    </span>
                   <p className='my-4'>{bio}</p>
                </div>
            </div>
        </section>
    )
}

export default PhotogragherInfo;