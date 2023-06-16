import React from 'react';

const Story = () => {
    return (
        <div className="my-20 max-w-[1240px] mx-auto">

            <div className='text-center'>
                <h3 className='text-3xl font-semibold text-red-500 mt-5 '>Blog Post</h3>
                <h1 className='text-5xl font-semibold text-gray-700 mb-5'>Story Around Here</h1>

            </div>

            <div className="mb-20 mt-12 grid md:grid-cols-3 gap-3 justify-center items-center">
                <div data-aos="zoom-in" className="card w-96 bg-base-100 rounded-none">
                    <figure><img src="https://kitpro.site/doujo/wp-content/uploads/sites/109/2022/08/martial-arts-master-on-fight-training-in-gym-2021-08-26-16-26-08-utc-1-copy-1024x684.jpg" alt="" /></figure>
                    <div className="card-body shadow-lg">
                        <h2 className="card-title">Don’t Limit Your Challenges</h2>
                        <p>
                            Embrace the opportunity to face and conquer challenges without placing limitations on yourself, as they serve as catalysts for growth, learning, and personal .</p>
                        <div className="card-actions">
                            <button className="text-red-400 mt-5 font-semibold text-lg">Learn More....</button>
                        </div>
                    </div>
                </div>
                <div data-aos="zoom-in" className="card w-96 bg-base-100 rounded-none">
                    <figure><img src="https://kitpro.site/doujo/wp-content/uploads/sites/109/2022/08/taekwondo-long-beach-british-columbia-2021-10-21-19-28-13-utc-copy-1024x684.jpg" alt="" /></figure>
                    <div className="card-body shadow-lg">
                        <h2 className="card-title">Everyone Has The Will To Win</h2>
                        <p>The innate desire to succeed resides within every individual, driving them to overcome challenges, persevere through obstacles, and strive for victory in their endeavors.</p>
                        <div className="card-actions">
                            <button className="text-red-400 mt-5 font-semibold text-lg">Learn More....</button>
                        </div>
                    </div>
                </div>
                <div data-aos="zoom-in" className="card w-96 bg-base-100 rounded-none">
                    <figure><img src="https://kitpro.site/doujo/wp-content/uploads/sites/109/2022/08/young-judo-fighter-in-kimono-posing-comfident-in-t-2021-08-27-15-26-59-utc-1024x683.jpg" alt="" /></figure>
                    <div className="card-body shadow-lg">
                        <h2 className="card-title">Karate Builds Your Character</h2>
                        <p>
                            Karate is a martial art that builds character by fostering discipline, self-control, resilience, and respect, shaping individuals into confident, focused, and morally upright .</p>
                        <div className="card-actions">
                            <button className="text-red-400 mt-5 font-semibold text-lg">Learn More....</button>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Story;