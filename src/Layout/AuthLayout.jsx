import React from 'react';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router';

const AuthLayout = () => {
    return (
        <div className='bg-base-100 min-h-screen'>
            <header className='max-w-7xl mx-auto'>
                <Navbar></Navbar>
            </header>
            <main className='max-w-7xl  mx-auto py-5'>
                <Outlet></Outlet>
            </main>
        </div>
    );
};

export default AuthLayout;