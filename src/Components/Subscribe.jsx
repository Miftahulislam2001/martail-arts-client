import React from 'react';

const Subscribe = () => {
    return (

        <div className="my-20 max-w-[1240px] mx-auto">
            <div className='flex flex-col lg:flex-row gap-7 bg-[#2F2F2F] p-5 rounded'>
                <div className='text-white w-[55%]'>
                    <h1 className="text-5xl font-semibold  mb-8">Subscribe To Our <br /> Newsletter</h1>
                    <p className=' text-lg'>
                        Stay updated and informed by subscribing to our newsletter, where you'll receive regular updates, exclusive content, and valuable insights delivered straight to your inbox.</p>

                </div>

                <div className='w-[40%] p-5 flex flex-col justify-center items-center gap-4'>

                    <h2 className='text-xl font-semibold text-gray-700 text-white'>Dont miss our latest news</h2>
                    <input className='w-[70%] py-2 px-4 rounded-2xl  border-none shadow' placeholder='your email' type="text" />
                    <button className='w-[70%] bg-[#F72603] py-2 px-2 rounded-2xl  border-none shadow text-white font-bold' type="submit">Subscribe</button>

                </div>
            </div>
        </div>

    );
};

export default Subscribe;