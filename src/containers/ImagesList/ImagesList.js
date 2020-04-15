import React, { Component } from 'react';
import { connect } from 'react-redux';
import ImageCard from '../../components/ImageCard/ImageCard';
import './ImagesList.scss';
import ImageModal from '../../components/ImageModal/ImageModal';
class ImagesList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            imgObj:{
                imgId: null,
                img_description:'',
                img_alt_description:''
            }
        }
    }
    componentDidMount = () => {

    }

    handleModalState = (imgId) => {
        const { isOpen } = this.state;
        !isOpen ?
            this.setState({
                isOpen: true,
                imgObj:{
                    ...this.state.imgObj,
                    imgId
                }
            }) :
            this.setState({
                isOpen: false,
                imgId: null
            })
    }

    render() {
        const { photosList } = this.props;
        const { isOpen } = this.state;
        return (
            <section className='d-flex flex-row flex-wrap image-list-wrapper container-fluid '>
                {
                    photosList.map(({ id, urls: { raw, full, regular, small, thumb },
                        links: { self, html, download, download_location, liked_by_user },
                        alt_description, user: { profile_image, name, location } }, index) => {
                        return (
                            <>
                                {/* <div className='position-relative'>
                                    <img className='m-2 img ' src={thumb} />
                                </div>
                                <div className='position-absolute'>test</div> */}
                                {/* </div> */}
                                <ImageCard
                                    key={index}
                                    thumb={thumb}
                                    alt_description={alt_description}
                                    liked_by_user={liked_by_user}
                                    download={download}
                                    download_location={download_location}
                                    profile_image={profile_image.small}
                                    name={name}
                                    location={location}
                                    handleModalState={() => this.handleModalState(id)}
                                />
                                {/* <img src={raw} />
                                 <img src={full} />*/}
                                {/* <img src={regular} /> */}
                                {/* <img src={small} />
                                    <img src={thumb} /> */}
                                {/* <img src={self} /> */}
                                {/* <img src={html} /> */}
                                {/* <a href={download_location} download>download</a> */}
                                {/* <img src={download_location} /> */}
                            </>
                        )
                    })
                }
                <ImageModal isOpen={isOpen}
                    handleModalState={this.handleModalState} />
            </section>
        )
    }
}

const mapStateToProps = ({ locale: { lang } }) => ({
    lang: lang
})

export default connect(mapStateToProps, {})(ImagesList);