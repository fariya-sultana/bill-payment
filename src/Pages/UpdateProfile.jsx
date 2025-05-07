import React from 'react';

const UpdateProfile = () => {
    return (
        <div className="hero py-8 px-4">

            <div className="card bg-white w-full max-w-sm shrink-0 shadow-2xl">
                <div className="card-body">
                    <form className="fieldset">
                        <label className="text-primary font-medium text-lg label">Name</label>
                        <input type="text" className="bg-base-200 text-primary border-primary input" placeholder="Updated Name" required />
                        <label className="text-primary font-medium text-lg label">Photo</label>
                        <input type="text" className="bg-base-200 text-primary border-primary input"  placeholder="Updated Photo-Url" required />
                        <button className="btn btn-secondary hover:btn-primary mt-4 text-lg">Update Profile</button>
                    </form>
                </div>
            </div>

        </div>
    );
};

export default UpdateProfile;