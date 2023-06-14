import React from 'react';

const Discover = () => {
    return (
        <div className="my-20 max-w-[1240px] mx-auto">
            <div className='flex flex-col lg:flex-row gap-7'>
                <div>
                    <img src="https://kitpro.site/doujo/wp-content/uploads/sites/109/2022/08/martial-arts-fighters-hone-their-skills-2021-08-26-16-26-07-utc-1024x684.jpg" alt="Discover logo" />
                </div>

                <div>
                    <div>
                        <h3 className='text-2xl text-[#c14428] font-semibold'>Discover More</h3>
                        <h1 className="text-5xl font-semibold text-gray-700 mb-4">Benefits Of Learning <br /> Martial Arts</h1>
                        <p className=" text-gray-700 text-lg font-semibold"> Experience empowerment through martial arts as you gain self-defense skills, discipline, confidence, and physical fitness.</p>
                    </div>

                    <div className='mt-5 p-3 grid md:grid-cols-3 w-full mx-auto text-center'>
                        <div className='text-left mx-auto'>
                            <img className='image-full w-16 h-16' src="/martial-arts.png" alt="" />
                            <h2 className='text-xl text-gray-500 font-semibold'>Maintain Stamina</h2>
                            <h3 className='text-gray-500 '>Discover the transform</h3>
                        </div>
                        <div className='text-left mx-auto'>
                            <img className='image-full w-16 h-16' src="/love.png" alt="" />
                            <h2 className='text-xl text-gray-500 font-semibold'>Self Defense</h2>
                            <h3 className='text-gray-500 '>overall physical prowess</h3>
                        </div>
                        <div className='text-left mx-auto'>
                            <img className='image-full w-16 h-16' src="/kimono.png" alt="" />
                            <h2 className='text-xl text-gray-500 font-semibold'>Karate Stamina</h2>
                            <h3 className='text-gray-500 '>Power of martial strength</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Discover;