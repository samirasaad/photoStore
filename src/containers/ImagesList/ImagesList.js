import React, { Component } from 'react';
import { connect } from 'react-redux';
import ImageCard from '../../components/ImageCard/ImageCard';
import './ImagesList.scss';
import ImageModal from '../../components/ImageModal/ImageModal';
import {downloadApPhotoRequest} from './../../store/actions/download';
class ImagesList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            imgObj: {
                imgId: null,
                img_description: '',
                imgUrl: null
            }
        }
    }
    componentDidMount = () => {

    }

    handleModalState = (imgId, img_description, imgUrl) => {
        const { isOpen } = this.state;
        !isOpen ?
            this.setState({
                isOpen: true,
                imgObj: {
                    ...this.state.imgObj,
                    imgId,
                    img_description,
                    imgUrl
                }
            }, () => { console.log(this.state) }) :
            this.setState({
                isOpen: false,
                imgId: null
            })
    }
   
     forceDownload=(url)=>{
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

    downloadImage= (id)=>{
        const {downloadApPhotoRequest} =this.props;
        console.log(id);
        // downloadApPhotoRequest({id})
        // this.forceDownload()
    }
    render() {
        const { photosList } = this.props;
        const { isOpen, imgObj } = this.state;
        return (
            <section className='d-flex flex-row flex-wrap image-list-wrapper container-fluid '>
                {
                    photosList.map(({ id, urls: { raw, full, regular, small, thumb },likes,
                        links: { self, html, download, download_location, liked_by_user },
                        description,
                        alt_description, user: { profile_image, name, location } }, index) => {
                        return (
                            <React.Fragment key={index}>
                                {/* <div className='position-relative'>
                                    <img className='m-2 img ' src={thumb} />
                                </div>
                                <div className='position-absolute'>test</div> */}
                                {/* </div> */}
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
                                    downloadImage={()=>this.downloadImage(id)}
                                    forceDownload={()=>this.forceDownload(download)}
                                    handleModalState={() => this.handleModalState(id, description, small)}
                                />
                                </div>
                                {/* <img src={raw} />
                                 <img src={full} />*/}
                                {/* <img src={regular} /> */}
                                {/* <img src={small} />
                                    <img src={thumb} /> */}
                                {/* <img src={self} /> */}
                                {/* <img src={html} /> */}
                                {/* <a href={download_location} download>download</a> */}
                                {/* <img src={download_location} /> */}
                            </React.Fragment>
                        )
                    })
                }
                <ImageModal isOpen={isOpen}
                    maxWidth='xl'
                    fullWidth={true}
                    scroll='body'
                    // fullScreen={true}
                    handleModalState={this.handleModalState}
                    imgObj={imgObj}
                />
            </section>
        )
    }
}

const mapStateToProps = ({ locale: { lang } }) => ({
    lang: lang
})

export default connect(mapStateToProps, {downloadApPhotoRequest})(ImagesList);