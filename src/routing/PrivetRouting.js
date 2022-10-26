import React from 'react';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { mycontext } from '../contextApi/UserContext';

const PrivetRouting = ({children}) => {
    const {loadding,user} = useContext(mycontext)
    const location = useLocation()
    if(loadding){
        return <p>Loadding...</p>
    }
    if(user?.uid){
        return children
    }
    
        return <Navigate to = '/login' state={{from : location}} replace></Navigate>
    
};

export default PrivetRouting;