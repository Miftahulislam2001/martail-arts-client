import React from 'react';
import { Link } from 'react-router-dom';

const Registration = () => {
    return (
        <div>
           <div className='max-w-[1240px] mx-auto mt-20 bg-red-200 p-3 rounded m-3'>
                <h1 className='text-center text-5xl font-bold'>Please <span className='text-[#e45776]'>Register</span></h1>
                <form  className='text-center py-5 bg-slate-200 rounded md:w-[500px]  mx-auto my-5'>
                    <input className='w-[80%] py-2 px-3 my-3 rounded' type="text" name='name' placeholder='Enter user  name' required /> <br />
                    <input className='w-[80%] px-3 py-2 my-3 rounded' type="email" name='email' placeholder='Enter your email' required /> <br />
                    <input className='w-[80%] px-3 py-2 my-3 rounded' type="password" name='password' placeholder='Enter your password' required /> <br />
                    <input className='w-[80%] px-3 py-2 my-3 rounded' type="text" name='photo' placeholder='Enter user photoURL' required /> <br />

                    <p className='text-red-600 text-lg'></p>
                    <p className='text-green-600 text-lg'></p>

                    <button className='w-[80%] bg-[#e54769] mx-auto rounded py-2 my-5 text-white font-semibold' >Register</button>
                    <div>
                        Already have a account?
                        <Link to="/login" className="px-2 font-semibold py-1 ml-2 text-[#563ee3] underline rounded">Login</Link>
                    </div>
                </form>
            </div>

        </div>
    );
};

export default Registration;