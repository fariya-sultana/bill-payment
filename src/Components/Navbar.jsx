import React, { use } from 'react';
import { Link, NavLink, } from 'react-router';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import logo from '../assets/logo3.png';
import '../Components/Navbar.css';
import { AuthContext } from '../Context/AuthProvider';
import { FcUnlock } from 'react-icons/fc';
import { toast } from 'react-toastify';

const Navbar = () => {

    const { user, logOut, balance } = use(AuthContext);

    const links = <>
        <li className="text-primary hover:bg-base-200 md:hover:text-red-500 font-medium"><NavLink to="/">Home</NavLink></li>
        <li className="text-primary hover:bg-base-200 md:hover:text-red-500 font-medium"><NavLink to="/payBills">Pay Bills</NavLink></li>
        <li className="text-primary hover:bg-base-200 md:hover:text-red-500 font-medium"><NavLink to="/myProfile">My Profile</NavLink></li>
    </>

    const handleLogout = () => {
        logOut().then(() => {
            toast.success("Logged out successfully!");
        }).catch(error => {
            console.log(error.message)
        })
    }

    return (
        <div className="navbar bg-base-200 shadow-sm mt-3 md:mt-5 rounded-md">

            <div className="navbar-start">

                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden p-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none"
                            viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul tabIndex={0} className=" menu-sm dropdown-content bg-white rounded-box z-1 mt-3 w-70 p-2 shadow">
                        {links}
                    </ul>
                </div>

                <img src={logo} width={110} alt="PayFast Logo" className="rounded-md" />

            </div>

            <div className="navbar-center hidden lg:flex">

                <ul className="menu-horizontal px-1 gap-6 text-[16px] ">
                    {links}
                </ul>

            </div>

            <div className="navbar-end space-x-2">
                {
                    user ?
                        <div className="dropdown dropdown-end md:dropdown-center">
                            <div tabIndex={0} role="button" className="bg-secondary rounded-full p-1">
                                {
                                    (user.photoURL) ? <img src={user.photoURL} alt="" className='w-12 h-12  rounded-full' /> : <img src="https://i.postimg.cc/15HJjdw8/3135823.png" alt="" className='w-12 h-12  rounded-full' />
                                }
                            </div>
                            <div tabIndex={0} className="dropdown-content menu bg-white rounded-box z-1 w-54 p-2 shadow-sm text-center text-xl font-medium space-y-1 ">
                                <div className='bg-secondary p-6 justify-items-center rounded-md mb-2'>
                                    {
                                        (user.photoURL) ? <img src={user.photoURL} alt="" className='w-20 h-20 rounded-full' /> : <img src="https://i.postimg.cc/15HJjdw8/3135823.png" alt="" className='w-12 h-12 rounded-full' />
                                    }
                                </div>
                                <p>{user.displayName}</p>
                                <p>Balance: <span className='font-bold'>{balance}</span> BDT </p>
                                <button type='submit' onClick={handleLogout} className='btn btn-secondary text-lg mt-2 font-bold inline-flex items-center gap-2'>Log Out <FcUnlock></FcUnlock></button>
                            </div>
                        </div> :
                        <>
                            <Link to={'/auth/login'} className="btn bg-base-100 text-primary hover:bg-secondary hover:text-white font-bold">Login</Link>
                            <Link to={'/auth/register'} className="btn bg-base-100 text-primary font-bold hover:bg-secondary hover:text-white">Register</Link>
                        </>
                }
            </div>
        </div>
    );
};

export default Navbar;

