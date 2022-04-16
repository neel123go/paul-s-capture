import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import Pic1 from '../../../images/slider/slider-1.jpg';
import Pic2 from '../../../images/slider/slider-2.jpg';
import Pic3 from '../../../images/slider/slider-3.jpg';
import './Banner.css';

const Banner = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <div>
            <Carousel activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item>
                    <img
                        className="d-block img-fluid w-100"
                        src={Pic1}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block img-fluid w-100"
                        src={Pic2}
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block img-fluid w-100"
                        src={Pic3}
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;