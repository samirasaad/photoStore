import React from 'react';
import { connect } from 'react-redux';
import { featuredCollectionsRequest } from './../../store/actions/featuredCollections';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

class SimpleSlider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            featuredCollections: []
        }
    }
    componentDidMount = () => {
        this.props.featuredCollectionsRequest({ page: 1, per_page: 20 })
    }
    componentDidUpdate = (prevProps) => {
        if (prevProps.featuredCollections !== this.props.featuredCollections) {
            this.setState({
                featuredCollections: this.props.featuredCollections
            })
        }
    }
    renderSlides = () => {
        const { featuredCollections } = this.state;
        return (
            featuredCollections.map((collection, index) => {
                console.log(collection)
                return (
                    <div key={index}>
                        {collection.title}
                    </div>
                )
            })
        )
    }
    render() {
        const { featuredCollections } = this.state;
        console.log(featuredCollections)
        var settings = {
            dots: true,
            infinite: true,
            speed: 100,
            slidesToShow: 3,
            slidesToScroll: 1
        };
        return (
            <section className='bg-dark'>
                <Slider {...settings}>
               { featuredCollections .length > 0 &&  this.renderSlides()}
               </Slider>
            </section>
        );
    }
}

const mapStateToProps = ({ featuredCollections:list }) => ({
    featuredCollections:list
})
export default connect(mapStateToProps, { featuredCollectionsRequest })(SimpleSlider);