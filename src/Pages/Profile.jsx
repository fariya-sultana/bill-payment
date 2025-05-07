import React from 'react';
import { Link } from 'react-router';

const Profile = () => {
    return (
        <div className=' max-w-7xl mx-auto px-4'>
            <div>
                <img src="" alt="" />
                <div>
                    <p><span>Name:</span></p>
                    <p><span>Email:</span></p>
                </div>
                <Link to={'/updateProfile'} className='btn btn-secondary'>Update</Link>
            </div>
        </div>
    );
};

export default Profile;