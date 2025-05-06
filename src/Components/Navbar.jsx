import React from 'react';
import { Link, NavLink } from 'react-router';
import logo from '../assets/logo3.png'
// import logo1 from '../assets/payfast.png'

const Navbar = () => {

    const home = <><li className='text-primary font-semibold list-none'><NavLink to={'/'}>Home</NavLink></li></>
    const profile = <><li className='text-primary font-semibold list-none'><NavLink to={'/myProfile'}>My Profile</NavLink></li></>

    return (
        <div className="navbar bg-base-200 shadow-sm mt-3 md:mt-5 rounded-md">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden p-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-200 rounded-box z-1 mt-3 w-52 p-2 shadow  ">
                        {home}    
                        <li className='font-semibold'>
                            <a className='text-primary '>Bills</a>
                            <ul className="p-2 text-primary ">
                                <li><a>Submenu 1</a></li>
                                <li><a>Submenu 2</a></li>
                            </ul>
                        </li>
                        {profile}
                    </ul>
                </div>
                <img src={logo} width={110} alt="" className='rounded-md'/>
            </div>

            <div className="navbar-center hidden lg:flex gap-12">
                {home}
                <div className="dropdown dropdown-hover">
                    <a tabIndex={0} role="button" className=" text-primary font-semibold cursor-pointer">Bills Page</a>
                    <ul tabIndex={0} className="dropdown-content bg-base-200 menu rounded-box z-1 w-52 p-2 shadow-sm text-primary font-semibold">
                        <li><a>Item 1</a></li>
                        <li><a>Item 2</a></li>
                    </ul>
                </div>
                {profile}
            </div>

            <div className="navbar-end space-x-2">
                <Link className="btn bg-base-100 text-primary font-bold">Login</Link>
                <Link className="btn bg-base-100 text-primary font-bold">Register</Link>
            </div>
        </div>
    );
};

export default Navbar;