import React, { Component } from 'react';
import { connect } from 'react-redux';
import ImageCard from '../../components/ImageCard/ImageCard';
import ImageModal from '../../components/ImageModal/ImageModal';
import { downloadApPhotoRequest } from './../../store/actions/download';
import './ImagesList.scss';

class ImagesList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            profile_image: null,
            location: null,
            imgObj: {
                imgId: null,
                img_description: '',
                imgUrl: null
            }
        }
    }

    handleModalState = (imgId, img_description, imgUrl, profile_image, location, instagram_username) => {
        const { isOpen } = this.state;
        !isOpen ?
            this.setState({
                isOpen: true,
                profile_image,
                location,
                instagram_username,
                imgObj: {
                    ...this.state.imgObj,
                    imgId,
                    img_description,
                    imgUrl
                }
            }, () => { console.log(this.state) }) :
            this.setState({
                isOpen: false,
            })
    }

    forceDownload = (url) => {
        console.log(url);
        //  debugger;
        // var url = link.getAttribute("data-href");
        // var fileName = link.getAttribute("download");
        // link.innerText = "Working...";
        // var xhr = new XMLHttpRequest();
        // xhr.open("GET", url, true);
        // xhr.responseType = "blob";
        // xhr.onload =()=>{
        //     var urlCreator = window.URL || window.webkitURL;
        //     var imageUrl = urlCreator.createObjectURL(this.response);
        //     var tag = document.createElement('a');
        //     tag.href = imageUrl;
        //     // tag.download = fileName;
        //     document.body.appendChild(tag);
        //     tag.click();
        //     document.body.removeChild(tag);
        //     // link.innerText="Download Image";
        // }
        // xhr.send();
    }

    downloadImage = (id) => {
        const { downloadApPhotoRequest } = this.props;
        console.log(id);
        // downloadApPhotoRequest({id})
        // this.forceDownload()
    }
    render() {
        const { total } = this.props;
        const { isOpen, imgObj, profile_image, location,
            activePage, photosPerPage, instagram_username } = this.state;
        const { photosList } = this.props;
        return (
            <section className='d-flex flex-row flex-wrap image-list-wrapper container-fluid my-4 min-vh-100'>
                {
                    photosList.map(({ id, urls: { raw, full, regular, small, thumb }, likes,
                        links: { self, html, download, download_location, liked_by_user },
                        description,
                        alt_description, user: { profile_image, name, location, instagram_username } }, index) => {
                        return (
                            <React.Fragment key={index}>
                                <div className='card-wrapper d-flex justify-content-center'>
                                    <ImageCard
                                        likes={likes}
                                        regular={regular}
                                        alt_description={alt_description}
                                        liked_by_user={liked_by_user}
                                        download={download}
                                        download_location={download_location}
                                        profile_image={profile_image.small}
                                        name={name}
                                        location={location}
                                        instagram_username={instagram_username}
                                        downloadImage={() => this.downloadImage(id)}
                                        forceDownload={() => this.forceDownload(download)}
                                        handleModalState={() => this.handleModalState(id, description, full, profile_image.small, location, instagram_username)}
                                    />
                                </div>
                            </React.Fragment>
                        )

                    })
                }
                <ImageModal isOpen={isOpen}
                    handleModalState={this.handleModalState}
                    imgObj={imgObj}
                    profile_image={profile_image}
                    location={location}
                    instagram_username={instagram_username}
                />
            </section>
        )
    }
}

const mapStateToProps = ({ locale: { lang } }) => ({
    lang: lang,
})

export default connect(mapStateToProps, { downloadApPhotoRequest })(ImagesList);