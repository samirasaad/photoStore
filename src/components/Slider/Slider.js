import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Slider.scss';

const SimpleSlider = ({ list, SliderSettings, handleClick }) => {
    const renderSlides = () => {
        return (
            list.map((col, index) => {
                return (
                    <div id={col} key={index}
                        onClick={(e) => handleClick(col)}>
                        {col}
                    </div>
                )
            })
        )
    }

    return (
        <section className='slider-wrapper px-5 container-fluid'>
            <Slider {...SliderSettings}>
                {list && list.length > 0 && renderSlides()}
            </Slider>
        </section>
    );
}

export default SimpleSlider;