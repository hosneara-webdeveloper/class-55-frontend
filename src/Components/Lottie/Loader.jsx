/* eslint-disable no-unused-vars */
import React from 'react';
import Lottie from "lottie-react";
import loader from "../../../public/loader.json";

const Loader = () => {
    return (
        <div className='d-flex justify-content-center align-items-center vh-100'>
            <Lottie className='loader' animationData={loader} loop={true} />
        </div>
    );
};

export default Loader;