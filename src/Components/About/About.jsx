/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import aboutImg1 from '../../assets/about_img1.jpg';
import aboutImg2 from '../../assets/about_img2.jpg';
import aboutImg3 from '../../assets/about_img3.jpg';
import aboutImg4 from '../../assets/about_img4.jpg';
import testi from '../../assets/testimonials-icon.png';
import person from '../../assets/testimonial4-100x100.jpg';

const About = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className='about-page pt-5 mt-5'>
            <div className="container">
                <h1 className='text-center text-dark pt-5 pb-3'>Welcom to Konado!</h1>
                <div className="row align-items-center">
                    <div className="col-12 col-lg-6">
                        <img className='img-fluid' src={aboutImg1} alt="about" />
                    </div>
                    <div className="col-12 col-lg-6">
                        <p className='text-justify'>Adipiscing lacus ut elementum, nec duis, tempor litora turpis dapibus. Imperdiet cursus odio tortor in elementum. Egestas nunc eleifend feugiat lectus laoreet, vel nunc taciti integer cras. Hac pede dis, praesent nibh ac dui mauris sit. Pellentesque mi, facilisi mauris, elit sociis leo sodales accumsan. Iaculis ac fringilla torquent lorem consectetuer, sociosqu phasellus risus urna aliquam, ornare.</p>
                        <p className='text-justify greenTheme'>“There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.”</p>
                    </div>
                </div>
                <h1 className="text-center text-dark py-3 mt-5">Why chose us?</h1>
                <div className="row">
                    <div className="col-12 col-lg-4 text-center">
                        <img className='img-fluid' src={aboutImg2} alt="about" />
                        <h5 className="text-center pt-3 m-0">What do we do?</h5>
                        <p className="text-center py-2 m-0">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto</p>
                    </div>
                    <div className="col-12 col-lg-4 text-center">
                        <img className='img-fluid' src={aboutImg3} alt="about" />
                        <h5 className="text-center pt-3 m-0">Our Mission</h5>
                        <p className="text-center py-2 m-0">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto</p>
                    </div>
                    <div className="col-12 col-lg-4 text-center">
                        <img className='img-fluid' src={aboutImg4} alt="about" />
                        <h5 className="text-center pt-3 m-0">History Of Us</h5>
                        <p className="text-center py-2 m-0">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto</p>
                    </div>
                </div>
                <h1 className='text-center text-secondary pt-5 mt-3 pb-3'>What Our Custumers Says ?</h1>
                <div className="w-25 mx-auto text-center">
                    <img src={testi} alt="konado" />
                </div>
                <p className="text-center w-75 mx-auto py-3">These guys have been absolutely outstanding. Perfect Themes and the best of all that you have many options to choose! Best Support team ever! Very fast responding! These guys have been absolutely outstanding. Perfect Themes and the best of all that you have many options to choose! Best Support team ever! Very fast responding!</p>
                <div className="w-25 mx-auto text-center">
                    <img className='rounded-circle' src={person} alt="konado" />
                </div>
                <p className="text-center pt-3 pb-1 fw-semibold fs-4 m-0">Katherine Sullivan</p>
                <small className='text-center fw-light mx-auto w-100 d-block pb-5'>Customer</small>
            </div>
        </div>
    );
};

export default About;