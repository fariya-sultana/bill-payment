import React from 'react';
import { Link, NavLink } from 'react-router'; 
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import logo from '../assets/logo3.png';
import '../Components/Navbar.css';

const Navbar = () => {
    const handleCloseDropdown = () => {
        document.activeElement.blur(); 
    };

    const bill = (
        <>
            <li><NavLink to="/payBills/Electricity-Bill" onClick={handleCloseDropdown}>Electricity Bill</NavLink></li>
            <li><NavLink to="/payBills/Gas-Bill" onClick={handleCloseDropdown}>Gas Bill</NavLink></li>
            <li><NavLink to="/payBills/Internet-Bill" onClick={handleCloseDropdown}>Internet Bill</NavLink></li>
            <li><NavLink to="/payBills/Water-Bill" onClick={handleCloseDropdown}>Water Bill</NavLink></li>
            <li><NavLink to="/payBills/Credit-Card-Bill" onClick={handleCloseDropdown}>Credit Card Bill</NavLink></li>
            <li><NavLink to="/payBills/Tuition-Fees-Bill" onClick={handleCloseDropdown}>Tuition Fees Bill</NavLink></li>
        </>
    );

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
                    <ul tabIndex={0} className="menu menu-sm dropdown-content bg-white rounded-box z-1 mt-3 w-70 p-2 shadow">
                        <li className='text-primary font bold'><NavLink onClick={handleCloseDropdown} to="/">Home</NavLink></li>
                        <li>
                            <details>
                                <summary className='text-primary font bold'><NavLink onClick={handleCloseDropdown} to="/payBills">Pay Bills</NavLink></summary>
                                <ul className="p-2 grid grid-cols-2 text-primary font-medium">
                                    {bill}
                                </ul>
                            </details>
                        </li>
                        <li><NavLink onClick={handleCloseDropdown} to="/myProfile" className='text-primary font bold'>My Profile</NavLink></li>
                    </ul>
                </div>
                <img src={logo} width={110} alt="PayFast Logo" className="rounded-md" />
            </div>

            <div className="navbar-center hidden lg:flex gap-12">
                <li className="list-none text-primary font-semibold"><NavLink to="/">Home</NavLink></li>

                <div className="dropdown dropdown-hover">
                    <NavLink
                        to="/payBills"
                        className="cursor-pointer flex items-center text-primary font-semibold gap-1"
                        onClick={() => setTimeout(handleCloseDropdown, 100)} 
                    >
                        Pay Bills
                        <MdOutlineKeyboardArrowDown size={20} />
                    </NavLink>

                    <ul
                        tabIndex={0}
                        className="dropdown-content bg-white menu rounded-box z-10 w-52 p-2 shadow-sm text-primary font-semibold"
                    >
                        {bill}
                    </ul>
                </div>

                <li className="list-none text-primary font-semibold"><NavLink to="/myProfile">My Profile</NavLink></li>
            </div>

            <div className="navbar-end space-x-2">
                <Link to={'/auth/login'} className="btn bg-base-100 text-primary font-bold">Login</Link>
                <Link to={'/auth/register'} className="btn bg-base-100 text-primary font-bold">Register</Link>
            </div>
        </div>
    );
};

export default Navbar;
