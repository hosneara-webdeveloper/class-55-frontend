/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { UseContext } from '../Context/Context';
import Loader from '../Components/Lottie/Loader';
import { Navigate } from 'react-router-dom';


const PrivateRouter = ({children}) => {
   const {userInformation, loader} = useContext(UseContext);
    if(loader){
        return <Loader></Loader>
    }
    if(userInformation && userInformation.uid){
        return children;
    }
    return <Navigate to='/login'></Navigate>
};

export default PrivateRouter;