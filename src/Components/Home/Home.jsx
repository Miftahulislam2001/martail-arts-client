import React from 'react';
import Banner from '../Banner';
import OurProgram from '../OurProgram';
import Discover from '../Discover';
import Story from '../Story';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <OurProgram></OurProgram>
            <Discover></Discover>
            <Story></Story>
        </div>
    );
};

export default Home;