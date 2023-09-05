/* eslint-disable no-unused-vars */
import React, { useContext, useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import { UseContext } from '../Context/Context';

const Thanks = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    const product = useLoaderData();
    const { img, name } = product;
    const { userInformation } = useContext(UseContext)


    const order = (event) => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const address = form.address.value;
        console.log(name, email, phone, address);


    }


    


    return (
        <div className='mt-5 pt-5 pb-3'>
            <div className='container'>


                <div className='row w-50 pb-5 mx-auto align-items-center'>
                    <div className='col-2'>
                        <div className='img-box'></div>
                        <img className='img-fluid' src={img} alt={name} />

                    </div>

                    <div className='col-10'>
                        <h2 className='pt-5 text-dark'>{name}</h2>
                    </div>
                </div>

                <form onSubmit={order} className="w-50 mx-auto row g-3">
                            <div className="col-12">
                                <label htmlFor="name"  className="form-label">Name</label>
                                <input type="text" required defaultValue={userInformation?.displayName} name='name' className="form-control" id="name" />
                            </div>
                            <div className="col-12">
                                <label htmlFor="email" className="form-label">Email</label>
                                <input type="email" required defaultValue={userInformation?.email} name='email' className="form-control" id="email" />
                            </div>
                            <div className="col-12">
                                <label htmlFor="phone" className="form-label">Phone</label>
                                <input type="number" required name='phone' className="form-control" id="phone" placeholder='+88012455'  />
                            </div>
                            <div className="col-12">
                                <label htmlFor="address" className="form-label">Address</label>
                                <textarea name='address' className="form-control" id="address" />
                            </div>
                           

                            <div className="col-12 text-center">
                                <button type="submit" className="btn btn-lg themeBtn text-white rounded-pill btn-200">Order</button>
                            </div>
                        </form>


            </div>
        </div>
    );
};

export default Thanks;