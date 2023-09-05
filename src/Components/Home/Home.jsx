/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Link, useLoaderData } from 'react-router-dom';
import hero1 from './../../assets/1_3.jpg';
import hero2 from './../../assets/1_4.jpg';
import hero3 from './../../assets/1_5.jpg';
import hero4 from './../../assets/1_6.jpg';
import hero5 from './../../assets/1_7.jpg';
import hero6 from './../../assets/1_8.jpg';
import hero7 from './../../assets/1_9.jpg';
import hero8 from './../../assets/1_10.jpg';
import Product from '../Prodcuts/Product';
import ship from '../../assets/icon1.png';
import ship1 from '../../assets/icon2.png';
import ship2 from '../../assets/icon3.png';
import ship3 from '../../assets/icon4.png';

const Home = () => {


    // top theke load hobar jonno ei effect use korte hobe all page e
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);


    const products = useLoaderData();
    return (
        <div className='mt-5 pt-5 home'>
            <div className="container">
                <div className="slider-section">
                    <Carousel data-bs-theme="dark" className='carousel-fade'>
                        <Carousel.Item>
                            <div className="slider-1">
                                <h5 className='greenTheme pt-5 m-0 pb-2 animate__animated animate__fadeInLeft animate__slow'>Exclusive Offer -20% Off This Week </h5>
                                <h1 className='fw-light m-0 pb-3 animate__animated animate__fadeInRight animate__slow'>Live <b>healthy</b> with a glass <br /> of <b>fruit juice</b> every day</h1>
                                <h4 className='greenTheme m-0 pb-5 animate__animated animate__fadeInUp animate__slow'><span className="fw-light text-dark">Starting at</span> $ 140.00</h4>
                                <Link to='/shop' className='d-block pb-4 animate__animated animate__fadeInDown animate__slow'><button className='btn themeBtn rounded-0 text-white btn-lg shadow-sm'>Buy Now</button></Link>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div className="slider-2">
                                <h5 className='greenTheme pt-5 m-0 pb-2 animate__animated animate__fadeInLeft animate__slow'>Exclusive Offer -20% Off This Week </h5>
                                <h1 className='fw-light m-0 pb-3 animate__animated animate__fadeInRight animate__slow'>We <b>provide</b> best Products <br /> for <b>you</b> every day</h1>
                                <h4 className='greenTheme m-0 pb-5 animate__animated animate__fadeInUp animate__slow'><span className="fw-light text-dark">Starting at</span> $ 140.00</h4>
                                <Link to='/shop' className='d-block pb-4 animate__animated animate__fadeInDown animate__slow'><button className='btn themeBtn rounded-0 text-white btn-lg shadow-sm'>Buy Now</button></Link>
                            </div>
                        </Carousel.Item>
                    </Carousel>
                </div>
                <div className="hero-section pt-3">
                    <div className="row">
                        <div className="col-12 col-lg-4">
                            <div className="overflow-hidden"><img src={hero1} alt="hero" /></div>
                        </div>
                        <div className="col-12 col-lg-4">
                            <div className="overflow-hidden"><img src={hero2} alt="hero" /></div>
                        </div>
                        <div className="col-12 col-lg-4">
                            <div className="overflow-hidden"> <img src={hero3} alt="hero" /></div>
                        </div>
                    </div>
                </div>
                <div className="featured py-5">
                    <h2 className='text-center pt-3 m-0'>Featured Products</h2>
                    <div className="row row-cols-1 row-cols-lg-5 g-4">
                        {
                            products.map((product, i) => {
                                if (i <= 9) {
                                    return <Product key={product._id} product={product}></Product>
                                }
                            })
                        }
                    </div>
                    <div className="text-center pt-5 mt-4">
                        <Link to='/shop'><button className='btn themeBtn text-white'>See More</button></Link>
                    </div>

                </div>
                <div className="service-overview py-4 mt-5 border border-secondary-subtle rounded-3">
                    <div className="row justify-content-center ps-4">
                        <div className="col-12 col-lg-3 border-right">
                            <div className="row align-items-center justify-content-center">
                                <div className="col-2">
                                    <img src={ship} alt="ship" />
                                </div>
                                <div className="col-10">
                                    <p>Free Shipping On Order Over $120</p>
                                    <h6 className='text-secondary'>Free shipping on all order</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-3 border-right">
                            <div className="row align-items-center justify-content-center">
                                <div className="col-2">
                                    <img src={ship1} alt="ship" />
                                </div>
                                <div className="col-10">
                                    <p>Money Return</p>
                                    <h6 className='text-secondary'>Back guarantee under 7 days</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-3 border-right">
                            <div className="row align-items-center justify-content-center">
                                <div className="col-2">
                                    <img src={ship2} alt="ship" />
                                </div>
                                <div className="col-10">
                                    <p>Member Discount</p>
                                    <h6 className='text-secondary'>Support online 24 hours a day</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-3">
                            <div className="row align-items-center justify-content-center">
                                <div className="col-2">
                                    <img src={ship3} alt="ship" />
                                </div>
                                <div className="col-10">
                                    <p>Online Support 24/7</p>
                                    <h6 className='text-secondary'>Free shipping on all order</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="banner py-5">
                    <div className="row g-3">
                        <div className="col-12 col-lg-6">
                            <div className="overflow-hidden"><img src={hero4} alt="hero" /></div>
                        </div>
                        <div className="col-12 col-lg-6">
                            <div className="overflow-hidden"><img src={hero5} alt="hero" /></div>
                        </div>
                    </div>
                </div>
                <div className="Bestseller py-3">
                    <h2>Bestseller Products</h2>
                    <div className="row row-cols-1 row-cols-lg-5 g-4">
                        {
                            products.map((product, i) => {
                                if (i <= 4) {
                                    return <Product key={product._id} product={product}></Product>
                                }
                            })
                        }
                    </div>
                </div>
                <div className="hero-section pt-3 mt-5">
                    <div className="row justify-content-center">
                        <div className="col-12 col-lg-3">
                            <div className="overflow-hidden"><img src={hero6} alt="hero" /></div>
                        </div>
                        <div className="col-12 col-lg-5">
                            <div className="overflow-hidden"><img src={hero7} alt="hero" /></div>
                        </div>
                        <div className="col-12 col-lg-3">
                            <div className="overflow-hidden"> <img src={hero8} alt="hero" /></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;