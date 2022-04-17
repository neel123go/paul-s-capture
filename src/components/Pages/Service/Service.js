import React from 'react';
import { ShoppingCartIcon } from '@heroicons/react/solid';
import './Service.css';

const Service = ({ service }) => {
    const { name, img, description, price } = service;
    return (
        <div className='d-md-flex justify-content-between align-items-center container mt-5 p-5 event-service'>
            <div className='w-100'>
                <img src={img} className="img-fluid w-100 mx-auto" alt="" />
            </div>
            <div className='w-100'>
                <h2>{name}</h2>
                <p className='my-4 text-secondary'>{description}</p>
                <h3 >Price: $<span className='text-danger fs-1'>{price}</span></h3>
                <button className='mt-4 btn btn-danger d-flex px-3 py-2 align-items-center'><ShoppingCartIcon className='cart-icon'></ShoppingCartIcon> Add To Cart</button>
            </div>
        </div>
    );
};

export default Service;