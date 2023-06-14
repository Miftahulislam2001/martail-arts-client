import React from 'react';

const Banner = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-slate-300 mb-5">
                <div className="hero-content flex-col lg:flex-row gap-5">

                    <div className='lg:w-1/2 space-y-5 p-2'>
                        <h3 className='text-3xl text-[#FF3607] font-bold'>We Believe In You</h3>
                        <h1 className="text-7xl font-semibold text-gray-700">Prove Yourself To Be The Best</h1>
                        <p className="py-6 text-gray-700 text-lg font-semibold">Prove Yourself To Be the Best is a motivational guide that empowers individuals to unlock their full potential, embrace challenges. this book will inspire readers to surpass their limits and achieve greatness in all aspects of life.</p>
                        <button className="btn bg-[#FF3607] text-white hover:bg-[#f4c1ca] font-semibold rounded-3xl p-3 w-32 h-14 mr-5">Get Started</button>
                        <button className="btn btn-ghost text-red-600 p-3 w-32 h-14 rounded-3xl hover:text-[#fdf9fa] hover:bg-[#FF3607]">Learn More</button>
                    </div>
                    <div className='lg:w-1/2 relative'>
                        <img src="https://kitpro.site/doujo/wp-content/uploads/sites/109/2022/08/kick2.png" className="w-3/4 rounded-lg" />

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;