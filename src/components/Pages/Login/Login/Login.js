import React from 'react';
import { Link } from 'react-router-dom';
import SocialLogin from '../SocialLogin/SocialLogin';

const Login = () => {
    return (
        <div className='container'>
            <h2 className='text-center mt-5'>Please Login</h2>
            <form className='w-50 mx-auto border border-danger rounded-3 p-5 my-5'>
                <div className="mb-3">
                    <label className="form-label">Email address</label>
                    <input type="email" className="form-control" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input type="password" className="form-control" />
                </div>
                <button type="submit" className="btn btn-primary">Login</button>
                <p className='text-secondary mt-2'>Don't have any account? <Link className='text-danger text-decoration-none' to='/signup'>Sign Up</Link></p>
                <SocialLogin></SocialLogin>
            </form>
        </div>
    );
};

export default Login;