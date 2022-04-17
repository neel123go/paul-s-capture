import React from 'react';
import SocialLogin from '../Login/SocialLogin/SocialLogin';

const SignUp = () => {
    return (
        <div className='container'>
            <h2 className='text-center mt-5'>Create an account</h2>
            <form className='w-50 mx-auto border border-danger rounded-3 p-5 my-5'>
                <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input type="text" className="form-control" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Email address</label>
                    <input type="email" className="form-control" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input type="password" className="form-control" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Confirm Password</label>
                    <input type="password" className="form-control" />
                </div>
                <button type="submit" className="btn btn-primary">Sign Up</button>
                <SocialLogin></SocialLogin>
            </form>
        </div>
    );
};

export default SignUp;