import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuthGlobally } from '../../Context/AuthProvider';
import useDark from '../../Hook/useDark';
import { MdOutlineDarkMode } from 'react-icons/md';
import { HiOutlineLightBulb } from 'react-icons/hi';



const NavBar = () => {

    const [isDark, setIsdark] = useState(null)
    useDark(isDark)

    const { user, logOut } = useAuthGlobally();
    const navItems = <>
        <li><Link to="/">Home</Link> </li>
        <li><Link to="/classes">Classes</Link></li>
        <li><Link to="/instructor">Instructor</Link></li>
        
        {/* <li> <Link to="/dashboard">Dashboard</Link> </li> */}
        
        
        {
            user?.photoURL ? <img className="w-[35px] h-[35px] rounded-full mx-3" src={user.photoURL} title={user.displayName} alt="" /> : <></>
        }

        {
            user?.email ? <Link to='/login'><button onClick={logOut} className='px-5 py-2  rounded-md hover:bg-slate-300'>LogOut</button></Link> : <Link to='/login'><button onClick={logOut} className='px-5 py-2 hover:bg-slate-300  rounded-md'>login</button></Link>
        }
    </>

    return (
        <div className="navbar bg-base-300 shadow-xl h-28">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {navItems}
                    </ul>
                </div>
                <Link to="/" className="btn btn-ghost normal-case text-xl md:ms-10">
                    <img className='w-24 md:w-44' src="https://kodesolution.com/html/2018/martialarts-html/demo/images/logo-wide.png" alt="" />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItems}
                </ul>
            </div>
            <div className="navbar-end pr-3">
                {/* <button className="btn btn-outline text-red-500">Contact Us</button> */}
                <button>
                    {isDark ? <HiOutlineLightBulb className="cursor-pointer" onClick={() => setIsdark(false)} /> : <MdOutlineDarkMode className="cursor-pointer" onClick={() => setIsdark(true)} />}
                </button>
            </div>
        </div>

    );
};

export default NavBar;