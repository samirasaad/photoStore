import React, { Component } from 'react';
import { connect } from 'react-redux';

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
        let urlsArr = [];
        return (
            <>
                {
                    photosList.map(({ urls: { raw, full, regular, small, thumb },links:{self, html, download, download_location} }, index) => {
                        // urlsArr = Array.from(urls)
                        return (
                            <>
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
            </>
        )
    }
}

const mapStateToProps = ({ locale: { lang } }) => ({
    lang: lang
})

export default connect(mapStateToProps, {})(ImagesList);