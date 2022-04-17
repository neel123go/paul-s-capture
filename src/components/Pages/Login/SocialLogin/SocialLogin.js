import React from 'react';
import './SocialLogin.css';
import GoogleImg from '../../../../images/social/google.png';
import GithubImg from '../../../../images/social/github.png';

const SocialLogin = () => {
    return (
        <div>
            <div className='d-flex align-items-center mt-3'>
                <div style={{ height: '1px' }} className='bg-secondary w-50'></div>
                <p className='mt-2 px-2'>or</p>
                <div style={{ height: '1px' }} className='bg-secondary w-50'></div>
            </div>
            <div className='text-center mt-3'>
                <button className='btn btn-light border border-secondary me-3'><img className='image-icon' src={GoogleImg} alt="" /> Continue With Google</button>
                <button className='btn btn-light border border-secondary me-3'><img className='image-icon' src={GithubImg} alt="" /> Continue With Github</button>
            </div>
        </div>
    );
};

export default SocialLogin;