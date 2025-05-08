import React, { use } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../Context/AuthProvider';
import { toast } from 'react-toastify';
import { Helmet } from 'react-helmet-async';

const Login = () => {

    const { loginUser, googleLogin } = use(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.pathname || '/';

    const handleLogin = (e) => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;

        loginUser(email, password)
            .then(() => {
                toast.success('Login successful! 🎉');
                navigate(from, { replace: true });
            })
            .catch(error => {
                toast.error("Login failed. Please check your credentials.");
                console.log(error.code);
            });

    };
    const handleGoogleBtn = () => {
        googleLogin()
            .then(() => {
                toast.success('Login successful! 🎉');
                navigate(from, { replace: true });
            })

            .catch(error => {
                toast.error("Login failed. Please check your credentials.");
                console.log(error.message)
            })
    }


    return (
        <div className="hero mt-16 p-3">
            <Helmet>
                <title>PayFast | Login Page</title>
            </Helmet>

            <div className="card bg-white w-full max-w-sm shrink-0 shadow-2xl py-5" >

                <h2 className='font-bold text-3xl text-center text-primary pb-4'>Login your account</h2>

                <div className="card-body py-0">
                    <form onSubmit={handleLogin} className="fieldset space-y-1">

                        <label className="text-primary font-medium text-lg label">Email</label>
                        <input type="email" className="bg-white text-primary border-primary input" placeholder="Your Email" name='email' required />

                        <label className="text-primary font-medium text-lg label">Password</label>
                        <input
                            type="password"
                            name='password'
                            required
                            className="bg-white text-primary border-primary input validator "
                            placeholder="Your Password"
                            minLength="6"
                            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}"
                            title="Must be more than 6 character including number, lowercase letter, uppercase letter"
                        />
                        <p className="validator-hint hidden">
                            Must be more than  character including
                            at least one number, at least one lowercase letter, at least one uppercase letter
                        </p>

                        <div><a className="link link-hover text-sm text-secondary">Forgot password?</a></div>

                        <button type='submit' className='btn mt-2 hover:bg-secondary text-lg bg-primary text-base-200' >Login</button>

                        <p className='text-center text-secondary py-2 text-sm '>Dont’t Have An Account ? <Link className='font-bold text-secondary hover:underline' to={'/auth/register'}>Register</Link></p>

                    </form>

                    <button type='submit' onClick={handleGoogleBtn} className="btn hover:bg-secondary hover:text-base-200 bg-base-200 border-[#e5e5e5] text-primary">
                        <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                        Login with Google
                    </button>
                </div>
            </div >

        </div >
    );
};

export default Login;