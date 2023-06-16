import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuthGlobally } from '../Context/AuthProvider';
import useAxiosSecure from '../Hook/useAxiosSecure';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';

const Registration = () => {

    const { createUser, signInGoogle } = useAuthGlobally();
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const { axiosSecure } = useAxiosSecure();


    const {
        register,
        handleSubmit,
        reset
    } = useForm();

    const handleRegister = (data) => {



        setSuccess("");
        setError("");

        const name = data.name;
        const email = data.email;
        const password = data.password;
        const confirmPassword = data.confirmPassword;
        const photo = data.photo;

        if (password !== confirmPassword) {
            setError("Your password did not match")
            return
        }

        if (!/(?=.*?[A-Z])/.test(password)) {
            setError("At last one uppercase ")
            return
        }
        else if (password.length < 6) {
            setError("please add at least 6 number");
            return
        }


        createUser(email, password)
            .then(result => {
                const currentUser = result.user;
                reset();
                updateProfile(currentUser, { displayName: name, photoURL: photo })
                setSuccess("User has created successfully");
                const user = {
                    name: name,
                    email: email,
                    photo_url: photo
                }

                axiosSecure.put(`/add-user?email=${user?.email}`, user)
                    .then(res => {
                        console.log(res)
                        if (res.data) {

                            Swal.fire({
                                position: 'center',
                                icon: 'success',
                                title: 'Sign Up sucessfull',
                                showConfirmButton: false,
                                timer: 1500
                            })

                        }
                    })
                navigate("/")

                setSuccess("Registration successfull")
                reset()

            })
            .catch(error => {
                // setError(error)
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
           <div className='max-w-[1240px] mx-auto mt-20 bg-red-200 p-3 rounded m-3'>
                <h1 className='text-center text-5xl font-bold'>Please <span className='text-[#e45776]'>Register</span></h1>
                <form onSubmit={handleSubmit(handleRegister)} className='text-center py-5 bg-slate-200 rounded md:w-[500px]  mx-auto my-5'>
                    <input {...register('name', { required: true })} className='w-[80%] py-2 px-3 my-3 rounded' type="text" name='name' placeholder='Enter user  name' required /> <br />
                    <input {...register('email', { required: true })} className='w-[80%] px-3 py-2 my-3 rounded' type="email" name='email' placeholder='Enter your email' required /> <br />
                    <input {...register('password', { required: true })} className='w-[80%] px-3 py-2 my-3 rounded' type="password" name='password' placeholder='Enter your password' required /> <br />
                    <input {...register('confirmPassword', { required: true })} className='w-[80%] px-3 py-2 my-3 rounded' type="password" name='confirmPassword' placeholder='Enter your password' required /> <br />
                    <input {...register('photo', { required: true })} className='w-[80%] px-3 py-2 my-3 rounded' type="text" name='photo' placeholder='Enter user photoURL' required /> <br />

                    <p className='text-lg text-red-600' >{error}</p>
                    <p className='text-lg text-green-600'>{success}</p>
        

                    <button className='w-[80%] bg-[#e54769] mx-auto rounded py-2 my-5 text-white font-semibold' >Register</button>
                    <div>
                        Already have a account?
                        <Link to="/login" className="px-2 font-semibold py-1 ml-2 text-[#4c30e8] underline rounded">Login</Link>
                    </div>
                </form>
            </div>
            <button onClick={handelGoogle} className='p-[10px] border rounded flex justify-center items-center gap-[6px] mx-auto mb-10 '>Continue with Google</button>
        </div>
    );
};

export default Registration;