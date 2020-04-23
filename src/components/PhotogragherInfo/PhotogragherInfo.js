import React from 'react';
import UserAvatar from '../UserAvatar/UserAvatar';
import PinDropIcon from '@material-ui/icons/PinDrop';

const PhotogragherInfo = ({ userInfo }) => {
    const { first_name, last_name, location, bio } = userInfo
    console.log(userInfo)
    return (
        <section className='info-wrapper'>
            <div className='d-flex justify-content-center'>
                <div className='profile-img'>
                    <UserAvatar />
                </div>
                <div className='mx-2'>
                    <h3 className='font-weight-bold'>{first_name + '-' + last_name}</h3>

                    <span className='text-muted'>
                        <PinDropIcon color='secondary' />
                        {location}
                    </span>
                    <p className='my-4'>{'-'+bio}</p>

                </div>
            </div>
        </section>
    )
}

export default PhotogragherInfo;