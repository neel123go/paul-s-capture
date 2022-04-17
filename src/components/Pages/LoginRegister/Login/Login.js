import React, { useEffect, useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../../Firebase.init';
import Loading from '../../../Shared/Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';

const Login = () => {
    const [signInWithEmailAndPassword, user, loading, hookError,] = useSignInWithEmailAndPassword(auth);
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    let errorElement;

    const handleLogin = (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;

        if (email === '' || password === '') {
            setError('Field must not be empty');
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            setError('');
            setError('Invalid email. Please provide a valid email');
        } else if (password.length < 8) {
            setError('');
            setError('Your password must be at least 8 characters or longer');
        } else {
            setError('');
            signInWithEmailAndPassword(email, password);
        }
    }

    useEffect(() => {
        if (user) {
            navigate(from, { replace: true });
        }
    }, [user]);

    if (hookError) {
        errorElement = <div className='text-center text-danger'>
            <p>{hookError?.message}</p>
        </div>
    }

    if (loading) {
        return <Loading></Loading>
    }

    return (
        <div className='container w-50 mx-auto border border-danger rounded-3 p-5 my-5'>
            <form onSubmit={handleLogin}>
                <h2 className='mb-2'>Login</h2>
                <p className='text-danger mb-4'>{error}</p>
                <p className='text-danger mb-4'>{errorElement}</p>
                <div className="mb-3">
                    <label className="form-label">Email address</label>
                    <input autoComplete='off' type="text" name='email' className="form-control" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input type="password" name='password' className="form-control" />
                </div>
                <button type="submit" className="btn btn-primary">Login</button>
                <p className='text-secondary mt-2'>Don't have any account? <Link className='text-danger text-decoration-none' to='/signup'>Sign Up</Link></p>
            </form>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Login;