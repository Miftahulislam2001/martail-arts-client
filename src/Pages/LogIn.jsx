import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAxiosSecure from '../Hook/useAxiosSecure';
import { useAuthGlobally } from '../Context/AuthProvider';
import { useForm } from 'react-hook-form';
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai';
import Swal from 'sweetalert2';

const LogIn = () => {

    const [showPassword, setShowPassword] = useState(false)
    const { axiosSecure } = useAxiosSecure()

    const { signIn, signInGoogle } = useAuthGlobally();
    const navigate = useNavigate();
    const location = useLocation();
    console.log("login page", location)
    const from = location.state?.from?.pathname || "/"

    const [error, setError] = useState("");

    const {
        register,
        handleSubmit,
        reset
    } = useForm();

    const handleLogin = (data) => {

        const email = data.email;
        const password = data.password;
        console.log(email, password);

        if (!email || !password) {
            setError("Cannot leave any field empty")
            return
        }

        signIn(email, password)
            .then(() => {
                navigate(from, { replace: true })
                reset()
            })
            .catch(error => {
                setError(error.message)
            })
    }


    const handelGoogle = () => {
        signInGoogle()
            .then((result) => {
                const user = {
                    name: result?.user?.displayName,
                    email: result?.user?.email,
                    photo_url: result?.user?.photoURL
                }


                axiosSecure.put(`/add-user?email=${user?.email}`, user)
                    .then(res => {
                        if (res.data) {
                            Swal.fire({
                                position: 'center',
                                icon: 'success',
                                title: 'Login sucessfull',
                                showConfirmButton: false,
                                timer: 1500
                            })
                        }
                    })
                navigate(from)
            })
            .catch((error) => {
            })
    }

    return (
        <div>
            <main className='container grid md:grid-cols-2 px-3 mt-10'>
                <div className='flex items-center bg-red-200 m-5 rounded'>
                    <img className='w-[300px] mx-auto text-center mt-7' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCEmViDc3M5GBUnv6Uv5JhV266r4gZwKYFMg&usqp=CAU" alt="" />
                </div>

                <div>
                    <h1 className='text-center text-5xl font-bold'>LogIn<span className='text-[#de4263]'>Now</span></h1>

                    <div className=' text-center py-5 bg-red-200 rounded md:w-[500px] mx-auto my-5'>
                        <form onSubmit={handleSubmit(handleLogin)}>
                            <input className='w-[80%] py-2 my-5 rounded outline-none px-4 ' type="email" {...register('email', { required: true })} name="email" placeholder='enter your email' required />

                            <div className='relative'>
                                <input  name="password" {...register('password', { required: true })} type={showPassword ? "text" : "password"} id="password" className='border-b-2 w-[80%] rounded py-2 px-4 outline-none text-base ' autoComplete='off' placeholder='   enter your password' />
                                <span className='absolute md:top-3 md:right-14 top-3 right-11'>
                                {
                                        showPassword ? <AiFillEyeInvisible className='cursor-pointer' onClick={() => setShowPassword(!showPassword)} /> : <AiFillEye className='cursor-pointer' onClick={() => setShowPassword(!showPassword)} />
                                    }
                                </span>
                            </div>
                            <p className='text-[#2a31ad] underline mt-5'><Link>Forget Password</Link></p>
                            <p>{error}</p>
                            <button className='w-[80%]  bg-[#EB2674]  mx-auto rounded py-2 my-5 text-white font-semibold flex items-center justify-center'>Login</button>


                            <p className='text-red-600 text-lg'></p>

                            <p className='my-5'> Create a new account?<Link to="/register" className='text-[#492de9] underline'> Registration</Link></p>
                        </form>

                    </div>
                    <button onClick={handelGoogle} className='p-[10px] border rounded-lg shadow  flex justify-center items-center gap-[6px] mx-auto mb-10 '>
                        <img className='w-10 h-10' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyXt-6eKW1RmfLjjD8P2IR0g6c7sIdFoEE9A&usqp=CAU" alt="" />
                    <span className='font-semibold'>Continue With Google</span>
                       </button>
                </div>
            </main>


        </div>
    );
};

export default LogIn;