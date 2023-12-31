import React from 'react';

import { motion } from "framer-motion"
import { Fade } from 'react-awesome-reveal';



const ClassesCard = ({ classes}) => {

    const { student_enroll,
        class_image,
        class_name,
        instructor_name,
        instructor_email,
        avilable_seats,
        price } = classes;

    return (
        <div className={`flex flex-col justify-between p-3 border-2 border-gray-300 rounded-md ${avilable_seats === 0
            ? 'bg-red-500' : 'bg-white'}`}>
            <div>
                <motion.img
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 100 }}

                    className="object-cover w-full h-64" src={class_image} alt="" />
                <Fade  triggerOnce={.6} delay={300} direction="up" cascade>
                    <h2 className='my-2 text-2xl font-bold'>{class_name}</h2>
                    <p className='mb-1'><span className='text-lg font-semibold'>Class Instructor</span>: {instructor_name}</p>
                    {/* todo kiso classs er email baki ashe  */}
                    <p className='mb-1'><span className='text-lg font-semibold'>Instructor Email</span>: {instructor_email}</p>
                    <p className='mb-1'><span className='text-lg font-semibold'>Available_seats</span>: {avilable_seats}</p>
                    <p className='mb-1'><span className='text-lg font-semibold'>Student Enroll</span>: {student_enroll}</p>
                    <p className='mb-1'><span className='text-lg font-semibold'>Class Fee</span>: ${price}</p>
                </Fade>
            </div>
            <button className='bg-[#F72603] w-full border-none shadow rounded text-white font-semibold p-2'>Enroll</button>
        </div>

    );
};

export default ClassesCard;