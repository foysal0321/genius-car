import React from 'react';
import img1 from '../../../assets/images/banner/1.jpg'
import img2 from '../../../assets/images/banner/2.jpg'
import img3 from '../../../assets/images/banner/3.jpg'
import img4 from '../../../assets/images/banner/4.jpg'
import img5 from '../../../assets/images/banner/5.jpg'
import img6 from '../../../assets/images/banner/6.jpg'
import './Banner.css'
import CaroselItem from './CaroselItem';

const Banner = () => {
    const banarData =[
        {
            image: img5,
            id: 1,
            prev:6,
            next:2
        },
        {
            image: img2,
            id: 2,
            prev:1,
            next:3
        },
        {
            image: img3,
            id: 3,
            prev:2,
            next:4
        },
        {
            image: img4,
            id: 4,
            prev:3,
            next:5
        },
        {
            image: img5,
            id: 5,
            prev:4,
            next:6
        },
        {
            image: img6,
            id: 6,
            prev:5,
            next:1
        },
        
    ]
    return (
        <div>
    <div className="carousel w-full">

    {
        banarData.map(slide => <CaroselItem
        key={slide.id}
        slide={slide}
        >
        </CaroselItem>)
    }
  
        </div>      
        </div>
    );
};

export default Banner;