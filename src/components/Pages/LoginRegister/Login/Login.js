import React, { useEffect, useRef, useState } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../../Firebase.init';
import Loading from '../../../Shared/Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Login.css';

const Login = () => {
    const [signInWithEmailAndPassword, user, loading, hookError,] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, sending, resetError] = useSendPasswordResetEmail(auth);
    const [error, setError] = useState('');
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    let errorElement;

    const handleLogin = (event) => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

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

    if (hookError || resetError) {
        errorElement = <div className='text-center text-danger'>
            <p>{hookError?.message} {resetError?.message}</p>
        </div>
    }

    if (loading || sending) {
        return <Loading></Loading>
    }

    const handleResetPassword = async () => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Email sent');
        } else {
            toast('Please enter your email');
        }
    }

    return (
        <div className='container mx-auto border border-danger rounded-3 p-md-5 p-3 my-5 form-container'>
            <form onSubmit={handleLogin}>
                <h2 className='mb-2'>Login</h2>
                <p className='text-danger mb-4'>{error}</p>
                <p className='text-danger mb-4'>{errorElement}</p>
                <div className="mb-3">
                    <label className="form-label">Email address</label>
                    <input ref={emailRef} autoComplete='off' type="text" className="form-control" />
                </div>
                <div className="mb-2">
                    <label className="form-label">Password</label>
                    <input ref={passwordRef} type="password" className="form-control" />
                </div>
                <p onClick={handleResetPassword} className='text-danger mb-3 reset-pass'>Forgot Password?</p>
                <button type="submit" className="btn btn-primary">Login</button>
                <p className='text-secondary mt-2'>Don't have any account? <Link className='text-danger text-decoration-none' to='/signup'>Sign Up</Link></p>
            </form>
            <SocialLogin></SocialLogin>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Login;