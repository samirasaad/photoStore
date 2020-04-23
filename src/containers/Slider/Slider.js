import React from 'react';
import { connect } from 'react-redux';
import History from './../../routes/History';
import { searchRequest } from './../../store/actions/search';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import './Slider.scss';

class SimpleSlider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            featuredCollections: ['whatsapp','love','flowers','roses','spring','alexandria','cars','winter','fish','letters','session','rain','children','wedding','search','google','youtube']
        }
    }
    
    componentDidUpdate = (prevProps) => {
        if (prevProps.featuredCollections !== this.props.featuredCollections) {
            this.setState({
            })
        }
    }
    getCollectionImages= (collection)=>{
        History.push(`/imagesList/${collection}?page=1`)
    }
    renderSlides = () => {
        const { featuredCollections } = this.state;
        return (
            featuredCollections.map((collection, index) => {
                return (
                    <div id={collection} key={index} onClick={()=>this.getCollectionImages(collection)}>
                        {collection}
                    </div>
                )
            })
        )
    }
    render() {
        const { featuredCollections } = this.state;
        var settings = {
            dots: false,
            infinite: true,
            speed: 100,
            slidesToShow: 8,
            slidesToScroll: 2,
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
                    slidesToShow: 1,
                    slidesToScroll: 1
                  }
                }
              ]
        };
        return (
            <section className='slider-wrapper px-5 container-fluid'>
                <Slider {...settings}>
               { featuredCollections.length > 0 &&  this.renderSlides()}
               </Slider>
            </section>
        );
    }
}

const mapStateToProps = ({ featuredCollections:list }) => ({
    featuredCollections:list
})
export default connect(mapStateToProps, {})(SimpleSlider);