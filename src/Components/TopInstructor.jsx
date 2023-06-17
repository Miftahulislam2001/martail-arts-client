import React from 'react';

const TopInstructor = () => {
    return (
        <div className='max-w-[1240px] mx-auto my-10 px-3'>

            <div className='text-center mb-10'>
                <h3 className='text-3xl font-semibold text-red-500 mt-5 '>Top Instructor</h3>
                <h1 className='text-4xl font-semibold text-gray-700 mb-5'>Our Most Valuable Top Instructor</h1>
                <p className='text-gray-600 text-lg'>The most important and respected people of our institute are the instructors</p>
            </div>

            <div className='grid grid-cols-1 gap-4 md:grid-cols-3 mt-10'>

                <div className='text-center'>
                    <img className='object-cover rounded-md h-96 w-96 shadow-lg' src="/instr/instr1.png" alt="" />
                    <div className='relative bg-[#e85f47] opacity-95 text-white bottom-10 w-[300px] mx-auto rounded-full p-2'>
                        <div className=''>
                            <h1 className='mt-4 text-2xl font-semibold'> Rafael Lovato Jr.</h1>
                        </div>
                        <div>
                            <p className='my-2'>rafael.@gmai.com</p>
                        </div>
                    </div>
                </div>
                <div className='text-center'>
                    <img className='object-cover rounded-md h-96 w-96 shadow-lg' src="/instr/instr2.jpg" alt="" />
                    <div className='relative bg-[#e85f47] opacity-95 text-white bottom-10 w-[300px] mx-auto rounded-full p-2'>
                        <div className=''>
                            <h1 className='mt-4 text-2xl font-semibold'>Sifu Liang Tian</h1>
                        </div>
                        <div>
                            <p className='my-2'>sifuian@gmai.com</p>
                        </div>
                    </div>
                </div>
                <div className='text-center'>
                    <img className='object-cover rounded-md h-96 w-96 shadow-lg' src="/instr/instr3.png" alt="" />
                    <div className='relative bg-[#e85f47] opacity-95 text-white bottom-10 w-[300px] mx-auto rounded-full p-2'>
                        <div className=''>
                            <h1 className='mt-4 text-2xl font-semibold'>Shihan Aiko Tanaka</h1>
                        </div>
                        <div>
                            <p className='my-2'>tanaka@gmai.com</p>
                        </div>
                    </div>
                </div>
                <div className='text-center'>
                    <img className='object-cover rounded-md h-96 w-96 shadow-lg' src="/instr/instr4.jpg" alt="" />
                    <div className='relative bg-[#e85f47] opacity-95 text-white bottom-10 w-[300px] mx-auto rounded-full p-2'>
                        <div className=''>
                            <h1 className='mt-4 text-2xl font-semibold'>Wong Kiew Kit</h1>
                        </div>
                        <div>
                            <p className='my-2'>wongiewit@gmai.com</p>
                        </div>
                    </div>
                </div>
                <div className='text-center'>
                    <img className='object-cover rounded-md h-96 w-96 shadow-lg' src="/instr/instr5.jpg" alt="" />
                    <div className='relative bg-[#e85f47] opacity-95 text-white bottom-10 w-[300px] mx-auto rounded-full p-2'>
                        <div className=''>
                            <h1 className='mt-4 text-2xl font-semibold'>Master Chen Zhihua</h1>
                        </div>
                        <div>
                            <p className='my-2'>zhihua@gmai.com</p>
                        </div>
                    </div>
                </div>
                <div className='text-center'>
                    <img className='object-cover rounded-md h-96 w-96 shadow-lg' src="/instr/instr6.jpg" alt="" />
                    <div className='relative bg-[#e85f47] opacity-95 text-white bottom-10 w-[300px] mx-auto rounded-full p-2'>
                        <div className=''>
                            <h1 className='mt-4 text-2xl font-semibold'>Sensei Hiroshi Nakamura</h1>
                        </div>
                        <div>
                            <p className='my-2'>hiroshiakamura@gmai.com</p>
                        </div>
                    </div>
                </div>

                






            </div>
        </div>
    );
};

export default TopInstructor;