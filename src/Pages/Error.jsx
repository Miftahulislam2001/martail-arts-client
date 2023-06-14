import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div>
            <div className="flex justify-center items-center flex-col h-screen">
                <img className="w-[500px] mt-12" src="https://thumbs.dreamstime.com/b/error-page-not-found-abstract-background-flashes-small-particles-91270283.jpg" alt="" />
                <h1 className="font-bold text-5xl text-center my-8">404</h1>
                {/* <p className="text-center font-bold text-3xl mt-5"> <span className="text-[#FFB6C6]"> Opps !</span>  Server is not found</p> */}
                <Link to="/"><button className="text-center underline text-[#FFB6C6] block mx-auto my-20 text-2xl">Beck To Home</button></Link>
            </div>
        </div>
    );
};

export default Error;