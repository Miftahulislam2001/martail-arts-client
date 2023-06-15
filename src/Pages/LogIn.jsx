import React from 'react';
import { Link } from 'react-router-dom';

const LogIn = () => {
    return (
        <div>
            <main className='container grid md:grid-cols-2 px-3 mt-10'>
                <div className='flex items-center bg-red-200 m-5 rounded'>
                    <img className='w-[300px] mx-auto text-center mt-7' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCEmViDc3M5GBUnv6Uv5JhV266r4gZwKYFMg&usqp=CAU" alt="" />
                </div>

                <div>
                    <h1 className='text-center text-5xl font-bold'>LogIn<span className='text-[#de4263]'>Now</span></h1>

                    <div className=' text-center py-5 bg-red-200 rounded md:w-[500px] mx-auto my-5'>
                        <form>
                        <input className='w-[80%] py-2 my-5 rounded outline-none px-4 ' type="email" name="email" placeholder='    enter your email' required />

                        <div className='relative'>
                            <input type="password" name="password" id="password" className='border-b-2 w-[80%] rounded py-2 px-4 outline-none text-base ' autoComplete='off' placeholder='   enter your password' />
                            <span className='absolute md:top-3 md:right-14 top-3 right-11'></span>
                        </div>
                        <p className='text-[#2a31ad] underline mt-5'><Link>Forget Password</Link></p>
                        <button className='w-[80%]  bg-[#EB2674]  mx-auto rounded py-2 my-5 text-white font-semibold flex items-center justify-center'>Login</button>

                        
                        <p className='text-red-600 text-lg'></p>

                        <p className='my-5'> Create a new account?<Link to="/register" className='text-[#492de9] underline'> Registration</Link></p>
                        </form>

                    </div>
                    <button  className='p-[10px] border rounded flex justify-center items-center gap-[6px] mx-auto mb-10 '>Continue with Google</button>
                </div>
            </main>


        </div>
    );
};

export default LogIn;