import React from 'react';
import About from '../about/About';
import Service from '../services/Service';
import Banner from './bannar/Banner';

const Home = () => {
    return (
        <div>
            <Banner />
            <About />
            <Service />
        </div>
    );
};

export default Home;