import React from 'react';
import './Services.css';
import Pic1 from '../../../images/service/service-3.png'

const Services = () => {
    return (
        <div>
            <h2 className='text-center fs-1 my-5'>Our <span className='text-danger'>Services</span></h2>
            <div className='d-flex justify-content-between align-items-center event-service container p-4'>
                <div>
                    <img src={Pic1} className="img-fluid" alt="" />
                </div>
                <div>
                    <h2>Event Photography Services</h2>
                </div>
            </div>
        </div>
    );
};

export default Services;