/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.png';

const Footer = () => {
    return (
        <footer className='pt-5'>
            <div className="container">
            <div className="row">
                <div className="col-12 col-lg-3">
                    <Link to='/' className='logo pb-3 mb-3'><img src={logo} alt="konado" /></Link>
                    <h6 className='pt-4'>Address: 123 Main Street, Anytown, CA 12345 - USA.</h6>
                    <h6>Phone: (012) 800 456 789</h6>
                    <h6>Fax: (012) 800 456 789</h6>
                    <h6>Email: Contact@plazathemes.com</h6>
                </div>
                <div className="col-12 col-lg-2">
                    <h5>Information</h5>
                    <ul className="px-0 pt-2">
                        <li>About</li>
                        <li>Check out</li>
                        <li>Contact</li>
                        <li>Wishlist</li>
                        <li>Service</li>
                    </ul>
                </div>
                <div className="col-12 col-lg-2">
                    <h5>My Account</h5>
                    <ul className="px-0 pt-2">
                        <li>My Account</li>
                        <li>Shop</li>
                        <li>Contact</li>
                        <li>Shopping Cart</li>
                        <li>Order History</li>
                    </ul>
                </div>
                <div className="col-12 col-lg-2">
                    <h5>Quick Shop</h5>
                    <ul className="px-0 pt-2">
                        <li>Shipping</li>
                        <li>Returns</li>
                        <li>Contact</li>
                        <li>Affiliates</li>
                        <li>Internet</li>
                    </ul>
                </div>
                <div className="col-12 col-lg-3">
                    <h5>Join Our Newsletter Now</h5>
                    <p className='pt-2'>Get E-mail updates about our latest shop and special offers.</p>
                    <input type="text" className='form-control bg-transparent' placeholder='Your Email Here' />
                    <button className='btn themeBtn text-white rounded-pill btn-md px-3 pt-2 pb-2 mt-3'>Subscribe Now</button>
                </div>
            </div>
            <div className="d-flex justify-content-center border-top pt-4 pb-2 mt-3"><p>Copyright © 2018 <span className='greenTheme'>Roadthemes</span>, All Rights Reserved.</p></div>
            </div>
        </footer>
    );
};

export default Footer;