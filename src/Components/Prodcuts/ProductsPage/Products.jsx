/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import Product from '../Product';

const Products = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const products = useLoaderData();
    return (
        <div className='mt-5 pt-5'>
            <div className="container">
                <div className="about-banner">
                    <h2 className='text-white pt-4'>Fresh Organic Milk <br /> From Holland</h2>
                    <h5 className='text-white pb-4'>Exclusive offer 10% off for this week</h5>
                </div>
                <h1 className="text-secondary text-center py-4">All Products</h1>
                <div className='row row-cols-1 row-cols-lg-5 g-4 pb-5'>
                    {
                        products.map(product=> <Product key={product._id} product={product}></Product>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Products;