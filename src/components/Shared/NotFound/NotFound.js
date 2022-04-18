import React from 'react';
import NotFoundImage from '../../../images/notfound/404.jpg';
import './NotFound.css';

const NotFound = () => {
    return (
        <div className='w-100 text-center notfound pt-5'>
            <img className='w-50' src={NotFoundImage} alt="" />
            <p className='fs-3 mt-10 text-center'>Opp's, The page you are looking for is not found.</p>
        </div>
    );
};

export default NotFound;