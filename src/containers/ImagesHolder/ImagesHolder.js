import React, { Component } from 'react';
import { connect } from 'react-redux';
import { downloadApPhotoRequest } from './../../store/actions/download';
import ImageCard from '../../components/ImageCard/ImageCard';
import ImageModal from '../../components/ImageModal/ImageModal';
import Pagination from "react-js-pagination";
import History from './../../routes/History';
import noDataFound from './../../assets/images/noDataFound.jpg';

class ImagesHolder extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            searchList: [],
            total: null,
            userObj: {
                profile_image: null,
                location: null,
                username: null
            },
            imgObj: {
                imgId: null,
                img_description: '',
                imgUrl: null,
                likes: null
            }
        }
    }

    handleModalState = (imgId, img_description, imgUrl, profile_image, location, username, likes) => {
        const { isOpen } = this.state;
        !isOpen ?
            this.setState({
                isOpen: true,
                userObj: {
                    ...this.state.userObj,
                    profile_image,
                    location,
                    username
                },
                imgObj: {
                    ...this.state.imgObj,
                    imgId,
                    img_description,
                    imgUrl,
                    likes
                }
            }) :
            this.setState({
                isOpen: false,
            })
    }


    downloadSelectedImage = (id) => {
        const { downloadApPhotoRequest } = this.props;
        downloadApPhotoRequest({ id })
    }


    render() {
        const { isOpen, imgObj, userObj } = this.state;
        const { list } = this.props;
        return (
            <>
                    {
                        (list && list.length > 0) ?
                            <div className='row mx-0'>
                                {list.map(({
                                    id,
                                    urls: { full, regular },
                                    likes,
                                    description,
                                    alt_description,
                                    user,
                                    user: { profile_image: { small }, username, location }
                                }, index) => {
                                    return (
                                        <React.Fragment key={index}>
                                            <div className='card-wrapper col-lg-3 col-md-4 col-sm-6 px-2 mb-4'>
                                                <ImageCard
                                                    userData={user}
                                                    imgData={{ full, likes, alt_description, description, regular }}
                                                    handleModalState={() => this.handleModalState(id, description, full, small, location, username, likes)}
                                                    downloadSelectedImage={() => this.downloadSelectedImage(id)}
                                                />
                                            </div>
                                        </React.Fragment>
                                    )
                                })
                                }
                            </div>
                            :
                            <div style={{
                                backgroundImage: `url(${noDataFound})`,
                                minHeight: `25em`,
                                backgroundRepeat  : 'no-repeat',
                                backgroundSize: `contain`,
                                backgroundPosition: `center`
                            }}></div>
                    }
                    <ImageModal isOpen={isOpen}
                        handleModalState={this.handleModalState}
                        downloadSelectedImage={() => this.downloadSelectedImage(imgObj.imgId)}
                        imgObj={imgObj}
                        userObj={userObj}
                    />
            </>
        )
    }
}

export default connect(null, { downloadApPhotoRequest })(ImagesHolder);