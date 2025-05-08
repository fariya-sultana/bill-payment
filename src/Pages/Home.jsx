import React from 'react';
import Slider from '../Components/Slider';
import GridIcons from '../Components/GridIcons';
import { Helmet } from 'react-helmet-async';


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>PayFast | Home</title>
            </Helmet>
            <Slider></Slider>
            <GridIcons></GridIcons>
        </div>
    );
};

export default Home;