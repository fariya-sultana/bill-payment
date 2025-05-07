import React from 'react';
import { Link } from 'react-router';

const Login = () => {
    return (
        <div className="hero min-h-screen">

            <div div className="card bg-white w-full max-w-sm shrink-0 shadow-2xl" >
                <div className="card-body">
                    <form className="fieldset space-y-1">
                        <label className="text-primary font-medium text-lg label">Email</label>
                        <input type="email" className="bg-white text-primary border-primary input" placeholder="Your Email" name='email' />
                        <label className="text-primary font-medium text-lg label">Password</label>
                        <input type="password" className="bg-white text-primary border-primary input" placeholder="Your Password" name='password' />
                        <div><a className="link link-hover text-sm text-secondary">Forgot password?</a></div>
                        <button className='btn mt-2 hover:bg-secondary text-lg bg-primary text-base-200' >Login</button>
                        <p className='text-center text-secondary pt-3 text-sm '>Dont’t Have An Account ? <Link className='font-bold text-secondary hover:underline' to={'/auth/register'}>Register</Link></p>
                    </form>
                    <p></p>
                </div>
            </div >

        </div >
    );
};

export default Login;