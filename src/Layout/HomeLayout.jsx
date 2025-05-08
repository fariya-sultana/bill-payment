import React from 'react';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer';

const HomeLayout = () => {
    return (
        <div className='max-w-7xl mx-auto min-h-screen  flex flex-col '>
            <Navbar></Navbar>
            <main className='flex-grow'>
                <Outlet></Outlet>
            </main>
            <footer className='shrink-0'>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default HomeLayout;