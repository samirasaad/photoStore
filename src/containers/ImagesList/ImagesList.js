import React, { Component } from 'react';
import { connect } from 'react-redux';
import ImageCard from '../../components/ImageCard/ImageCard';
import './ImagesList.scss';
class ImagesList extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    componentDidMount = () => {

    }


    render() {
        const { photosList } = this.props;
        return (
            <section className='d-flex flex-row flex-wrap image-list-wrapper container-fluid'>
                {
                    photosList.map(({ urls: { raw, full, regular, small, thumb },
                        links: { self, html, download, download_location, liked_by_user },
                        alt_description }, index) => {
                        return (
                            <>
                                <ImageCard
                                    thumb={thumb}
                                    alt_description={alt_description}
                                    liked_by_user={liked_by_user}
                                    download={download}
                                    download_location={download_location}
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
            </section>
        )
    }
}

const mapStateToProps = ({ locale: { lang } }) => ({
    lang: lang
})

export default connect(mapStateToProps, {})(ImagesList);