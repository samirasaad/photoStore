import React from 'react';
import { connect } from 'react-redux';
import { featuredCollectionsRequest } from './../../store/actions/featuredCollections';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import './Slider.scss';

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
            dots: false,
            infinite: true,
            speed: 100,
            slidesToShow: 10,
            slidesToScroll: 1,
            responsive: [
                {
                  breakpoint: 1024,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                  }
                },
                {
                  breakpoint: 600,
                  settings: {
                    slidesToShow:3,
                    slidesToScroll: 3,
                    // initialSlide: 3
                  }
                },
                {
                  breakpoint: 480,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                  }
                }
              ]
        };
        return (
            <section className='slider-wrapper px-5 container-fluid'>
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