import React from 'react';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../context/Authprovider';

const PrivateRoutes = ({children}) => {
    const {user,loading} = useContext(AuthContext)
    const location = useLocation()


    if(loading){
        return <div className="text-center text-3xl">loading..........</div>
    }

    if(user){
        return children
    }
    return  <Navigate state={{from : location}} replace to ='/login'></Navigate>
};

export default PrivateRoutes;