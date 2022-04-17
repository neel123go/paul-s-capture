import React, { useEffect, useState } from 'react';
import SocialLogin from '../Login/SocialLogin/SocialLogin';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../Firebase.init';
import { Link, useNavigate } from 'react-router-dom';

const SignUp = () => {
    const [createUserWithEmailAndPassword, user, loading, hookError,] = useCreateUserWithEmailAndPassword(auth);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSignUp = (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        const confirmPassword = event.target.confirmPassword.value;

        if (name === '' || email === '' || password === '' || confirmPassword === '') {
            setError('Field must not be empty');
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            setError('');
            setError('Invalid email. Please provide a valid email');
        } else if (password.length < 8) {
            setError('');
            setError('Your password must be at least 8 characters or longer');
        } else if (password !== confirmPassword) {
            setError('');
            setError("Password does't matched");
        } else {
            setError('');
            createUserWithEmailAndPassword(email, password);
        }
    }

    useEffect(() => {
        if (user) {
            navigate('/home');
        }
    }, [user]);

    return (
        <div className='container w-50 mx-auto border border-danger rounded-3 p-5 my-5'>
            <form onSubmit={handleSignUp}>
                <h2 className='mb-2'>Create an account</h2>
                <p className='text-danger mb-4'>{error}</p>
                <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input type="text" name='name' className="form-control" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Email address</label>
                    <input type="text" name='email' className="form-control" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input type="password" name='password' className="form-control" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Confirm Password</label>
                    <input type="password" name='confirmPassword' className="form-control" />
                </div>
                <button type="submit" className="btn btn-primary">Sign Up</button>
                <p className='text-secondary mt-2'>Already have an account? <Link className='text-danger text-decoration-none' to='/login'>Sign Up</Link></p>
            </form>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default SignUp;