import React from 'react';
import Banner from '../Banner';
import OurProgram from '../OurProgram';
import Discover from '../Discover';
import Story from '../Story';
import Subscribe from '../Subscribe';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <OurProgram></OurProgram>
            <Discover></Discover>
            <Story></Story>
            <Subscribe></Subscribe>
        </div>
    );
};

export default Home;