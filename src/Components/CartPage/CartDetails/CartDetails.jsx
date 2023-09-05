/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const CartDetails = ({ product }) => {
    const [counter, setCounter] = useState(1);
    const { img, name, price, _id } = product;
    const plus = () => {
        setCounter(counter + 1);
    }
    const minus = () => {
        if (counter > 1) {
            setCounter(counter - 1);
        }
    }
    return (
        <div className='row align-items-center justify-content-center py-3'>
            <div className="col-12 col-lg-5">
                <img src={img} alt={name} className="img-fluid" />
            </div>
            <div className="col-12 col-lg-7">
                <h5>{name}</h5>
                <h4 className="greenTheme fw-semibold">$ {price * counter}</h4>
                <p className="m-0 py-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos cum vero ratione, voluptate rerum voluptas! Unde modi consequuntur iure illo quae dolor in ipsa sint! Voluptatibus corrupti fugit nam tempora?</p>
                <div className="counter pb-4">
                    <div className="btn-group" role="group" aria-label="Basic example">
                        <button onClick={minus} type="button" className="btn btn-counter minus">-</button>
                        <input type="number" disabled value={counter} className='text-center counter-value' />
                        <button onClick={plus} type="button" className="btn btn-counter plus">+</button>
                    </div>
                    <Link to={`/thanks/${_id}`}><button className='themeBtn text-white rounded-pill btn mx-4 btn-200'>Order Now</button></Link>
                </div>
                <hr />
                <h6>SKU: f001</h6>
                <h6>CATEGORIES: Fruits Juice, Vegetables</h6>
            </div>
        </div>
    );
};

export default CartDetails;