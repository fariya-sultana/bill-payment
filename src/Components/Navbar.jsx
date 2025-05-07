import React from 'react';
import { Link, NavLink } from 'react-router';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import logo1 from '../assets/payfast.png'


const Navbar = () => {

    const pay = <><NavLink to={'/payBills'}>Pay Bills</NavLink></>
    const home = <>
        <li className='text-primary font-semibold list-none'><NavLink to={'/'}>Home</NavLink></li>
    </>
    const profile = <>
        <li className='text-primary font-semibold list-none'><NavLink to={'/myProfile'}>My Profile</NavLink></li>
    </>
    const bill = <>
        <li><NavLink to={'/payBills/Electricity-Bill'}>Electricity Bill</NavLink></li>
        <li><NavLink to={'/payBills/Gas-Bill'}>Gas Bill</NavLink></li>
        <li><NavLink to={'/payBills/Internet-Bill'}>Internet Bill</NavLink></li>
        <li><NavLink to={'/payBills/Water-Bill'}>Water Bill</NavLink></li>
        <li><NavLink to={'/payBills/Credit-Card-Bill'}>Credit Card Bill</NavLink></li>
        <li><NavLink to={'/payBills/Tuition-Fees-Bill'}>Tuition Fees Bill</NavLink></li>
    </>

    return (
        <div className="navbar bg-base-200 shadow-sm mt-3 md:mt-5 rounded-md">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden p-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-200 rounded-box z-1 mt-3 w-70 p-2 shadow  ">
                        {home}
                        <li className='font-semibold text-primary '>
                            <details>
                                <summary>{pay}</summary>
                                <ul className='p-2 grid grid-cols-2'>
                                    {bill}
                                </ul>
                            </details>
                        </li>
                        {profile}
                    </ul>
                </div>
                <img src={logo1} width={110} alt="" className='rounded-md' />
            </div>

            <div className="navbar-center hidden lg:flex gap-12">
                {home}
                <div className="dropdown dropdown-hover">
                    <ul >
                        <li tabIndex={0} role="button" className=' font-semibold text-primary inline-flex items-end gap-1'>
                            {pay}
                            <MdOutlineKeyboardArrowDown size={20}></MdOutlineKeyboardArrowDown>
                        </li>
                        <ul tabIndex={0} className="dropdown-content bg-base-200 menu rounded-box z-1 w-52 p-2 shadow-sm text-primary font-semibold">
                            {bill}
                        </ul>
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