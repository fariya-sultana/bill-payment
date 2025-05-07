import React, { use} from 'react';
import { AuthContext } from './AuthProvider';
import { Navigate, useLocation } from 'react-router';
import Loading from '../Components/Loading';

const PrivateProvider = ({ children }) => {

    const {loading, user} = use(AuthContext);
    const location = useLocation();
    

    if (loading) {
        return <Loading></Loading>
    }

    if(user) {
        return children;
    }

    return <Navigate state={location?.pathName} to={'/auth/login'}></Navigate>
};

export default PrivateProvider;