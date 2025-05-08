import React from 'react';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router';

const AuthLayout = () => {
    return (
        <div className='bg-base-100 min-h-screen flex flex-col'>
            <header className='max-w-7xl mx-auto w-full'>
                <Navbar></Navbar>
            </header>
            <main className='flex-grow max-w-7xl  mx-auto py-5 w-full'>
                <Outlet></Outlet>
            </main>
        </div>
    );
};

export default AuthLayout;