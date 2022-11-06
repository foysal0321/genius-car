import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProver';

const PrivetRour = ({children}) => {
    const {user, loding} = useContext(AuthContext);
    const location = useLocation();

    if(loding){
        return <p>loading..</p>
    }
    if(user){
        return children
    }
   return <Navigate to='/login' state={{from : location}} replace></Navigate>
};

export default PrivetRour;