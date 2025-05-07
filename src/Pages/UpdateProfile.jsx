import React, { use } from 'react';
import { AuthContext } from '../Context/AuthProvider';
import { useNavigate } from 'react-router';

const UpdateProfile = () => {

    const { user, setUser, updateUser } = use(AuthContext);
    const navigate = useNavigate();

    const handleUpdate = (e) => {
        e.preventDefault();

        const name = e.target.name.value;
        const photo = e.target.photo.value;

        updateUser({ displayName: name, photoURL: photo }).then(() => {
            setUser({ ...user, displayName: name, photoURL: photo });
            navigate('/myProfile')
        }).catch(error => {
            setUser(user);
            alert(error.message)
        })
    }
    return (
        <div className="hero py-12 px-4">

            <div className="card bg-white w-full max-w-sm shrink-0 shadow-2xl py-4">
                <h2 className='font-bold text-3xl text-center text-primary'>Update Your Profile</h2>
                <div className="card-body">
                    <form onSubmit={handleUpdate} className="fieldset">
                        <label className="text-primary font-medium text-lg label">Name</label>
                        <input type="text" className="bg-base-200 text-primary border-primary input" placeholder="Updated Name" required name='name' />
                        <label className="text-primary font-medium text-lg label">Photo</label>
                        <input type="text" className="bg-base-200 text-primary border-primary input" placeholder="Updated Photo-Url" required name='photo' />
                        <button className="btn btn-secondary hover:btn-primary mt-4 text-lg">Update Information</button>
                    </form>
                </div>
            </div>

        </div>
    );
};

export default UpdateProfile;