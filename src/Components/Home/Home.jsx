import React from 'react';
import Banner from '../Banner';
import OurProgram from '../OurProgram';
import Discover from '../Discover';
import Story from '../Story';
import Subscribe from '../Subscribe';
import TopInstructor from '../TopInstructor';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <OurProgram></OurProgram>
            <Discover></Discover>
            <Story></Story>
            <TopInstructor></TopInstructor>
            <Subscribe></Subscribe>
        </div>
    );
};

export default Home;