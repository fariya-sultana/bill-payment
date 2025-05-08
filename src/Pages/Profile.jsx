import React, { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../Context/AuthProvider';
import { FaUserEdit } from 'react-icons/fa';

const Profile = () => {

    const { user } = use(AuthContext);


    return (
        <div className='my-6 max-w-2xl md:mx-auto mx-4'>
            <h2 className='font-bold text-3xl text-center text-primary mb-4'>Profile Information</h2>
            <div className='bg-base-200  flex  rounded-md items-center justify-center text-center p-8'>

                <div>
                    <div className='relative justify-items-center w-60 h-60 rounded-full mb-4 '>
                        {
                            (user.photoURL) ? <img src={user.photoURL} alt="" className='w-60 h-60 rounded-full mb-4' /> : <img src="https://i.postimg.cc/15HJjdw8/3135823.png" alt="" className='w-60 h-60 mb-4 rounded-full' />
                        }
                        <Link to={'/updateProfile'} ><FaUserEdit size={40} className="absolute bottom-4 right-4 bg-white p-1 rounded-full shadow-md cursor-pointer text-primary"
                        ></FaUserEdit></Link>
                    </div>
                    <div className='md:text-2xl text-primary font-bold space-y-2 mb-3'>
                        <p><span>{user.displayName} </span></p>
                        <p><span>{user.email} </span></p>
                    </div>
                    <Link to={'/updateProfile'} className='btn  w-1/2 btn-secondary'>Update </Link>
                </div>
            </div >
        </div>
    );
};

export default Profile;