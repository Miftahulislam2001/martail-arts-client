import React from 'react';

const OurProgram = () => {
    return (
        <div className="my-20 max-w-[1240px] mx-auto">

            <div className='text-center'>
                <h3 className='text-3xl font-semibold text-red-500 mt-5 '>Our Program</h3>
                <h1 className='text-5xl font-semibold text-gray-700 mb-5'>Martial Arts Classes</h1>
                <p className='text-gray-600 text-lg'>Transform your skills with our dynamic martial arts classes for all ages and experience levels.</p>
            </div>

            <div className="mb-20 mt-12 grid md:grid-cols-3 gap-3 justify-center items-center">
                <div className="card w-96 bg-base-100 shadow-lg">
                    <figure><img src="https://kitpro.site/doujo/wp-content/uploads/sites/109/2022/08/two-partners-in-karate-2021-08-27-22-39-35-utc-1024x683.jpg" alt="" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Junior Class</h2>
                        <p>Ignite your child's potential through our junior karate class, building confidence, discipline, and self-defense skills.</p>
                        <div className="card-actions">
                            <button className="text-red-400 mt-5 font-semibold text-lg">Learn More....</button>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-lg">
                    <figure><img src="https://kitpro.site/doujo/wp-content/uploads/sites/109/2022/08/man-in-white-kimono-training-karate-2021-08-26-17-40-54-utc-copy-1024x683.jpg" alt="" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Karate Class</h2>
                        <p>Experience the power and discipline of karate through our dynamic classes that cultivate strength, focus, and self-defense skills.</p>
                        <div className="card-actions">
                        <button className="text-red-400 mt-5 font-semibold text-lg">Learn More....</button>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-lg">
                    <figure><img src="https://kitpro.site/doujo/wp-content/uploads/sites/109/2022/08/the-two-judokas-fighters-fighting-men-2021-08-26-17-41-30-utc-1024x683.jpg" alt="" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Judo Class</h2>
                        <p> Develop balance, control, and self-defense skills in our Judo class, empowering you to unleash your inner strength.</p>
                        <div className="card-actions">
                        <button className="text-red-400 mt-5 font-semibold text-lg">Learn More....</button>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default OurProgram;