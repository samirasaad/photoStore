import React from 'react';
import UserAvatar from '../UserAvatar/UserAvatar';
import PinDropIcon from '@material-ui/icons/PinDrop';
import './PhotogragherInfo.scss'

const PhotogragherInfo = (props) => {
    const { userInfo: { first_name, last_name, location, bio, profile_image} } = props
    return (
        <section className='info-wrapper'>
            <div className='row justify-content-center mx-0 my-5'>
                <div className='col-md-2 d-flex justify-content-center'>
                    {profile_image &&
                        <UserAvatar img={profile_image.large} size='large'/>
                    }
                </div>
                <div className='col-md-5 mt-3 d-flex flex-column info-part'>
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