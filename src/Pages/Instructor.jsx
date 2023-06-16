import React from 'react';

const Instructor = () => {
    return (
        <div className='grid md:grid-cols-4 gap-5 my-8 mx-3'>
            
            <div className='flex flex-col items-center justify-center gap-4 p-4 bg-white rounded-md shadow'>
                <img className='w-[200px] h-[200px] object-cover rounded-full' src="https://i.ibb.co/2W2bQx1/1542110209-fotolux.jpg" alt="" />
                <h1 className='text-2xl font-semibold '>Annie kapor</h1>
                <p className=''>annieLeibovitz@gmail.com</p>

            </div>
            <div className='flex flex-col items-center justify-center gap-4 p-4 bg-white rounded-md shadow'>
                <img className='w-[200px] h-[200px] object-cover rounded-full' src="https://i.ibb.co/YTjWmmX/licensed-image-2.jpg" alt="" />
                <h1 className='text-2xl font-semibold '>Marioi tesinto</h1>
                <p className=''>annieLeibovitz@gmail.com</p>

            </div>
            <div className='flex flex-col items-center justify-center gap-4 p-4 bg-white rounded-md shadow'>
                <img className='w-[200px] h-[200px] object-cover rounded-full' src="https://i.ibb.co/T8gvPx1/Henri-Cartier-Bresson.webp" alt="" />
                <h1 className='text-2xl font-semibold '>Annie Henri Bresson</h1>
                <p className=''>annieLeibovitz@gmail.com</p>

            </div>
            <div className='flex flex-col items-center justify-center gap-4 p-4 bg-white rounded-md shadow'>
                <img className='w-[200px] h-[200px] object-cover rounded-full' src="https://i.ibb.co/VqDYqxH/licensed-image-1.jpg" alt="" />
                <h1 className='text-2xl font-semibold '>Devid lou</h1>
                <p className=''>annieLeibovitz@gmail.com</p>

            </div>

        </div>
    );
};

export default Instructor;