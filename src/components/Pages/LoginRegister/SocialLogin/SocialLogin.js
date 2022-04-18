import React, { useEffect } from 'react';
import './SocialLogin.css';
import GoogleImg from '../../../../images/social/google.png';
import GithubImg from '../../../../images/social/github.png';
import auth from '../../../../Firebase.init';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';

const SocialLogin = () => {
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const [signInWithGithub, githubUser, githubLoading, githubError] = useSignInWithGithub(auth);
    const location = useLocation();
    const navigate = useNavigate();
    let from = location.state?.from?.pathname || "/";
    let errorElement;
    let loadingSpinner;

    useEffect(() => {
        if (googleUser || githubUser) {
            navigate(from, { replace: true });
        }
    }, [googleUser, githubUser]);

    // Error handle
    if (googleError || githubError) {
        errorElement = <div className='text-center text-danger'>
            <p>{googleError?.message} {githubError?.message}</p>
        </div>
    }

    // Loading handle
    if (googleLoading || githubLoading) {
        loadingSpinner = <div className='text-center'><Spinner animation="border" variant="primary" /></div>
    }

    return (
        <div>
            <div className='d-flex align-items-center mt-3'>
                <div style={{ height: '1px' }} className='bg-secondary w-50'></div>
                <p className='mt-2 px-2'>or</p>
                <div style={{ height: '1px' }} className='bg-secondary w-50'></div>
            </div>
            {errorElement}
            {loadingSpinner}
            <div className='text-center mt-3'>
                <button onClick={() => signInWithGoogle()} className='btn btn-light border border-secondary me-3 mb-3'><img className='image-icon' src={GoogleImg} alt="" /> Continue With Google</button>
                <button onClick={() => signInWithGithub()} className='btn btn-light border border-secondary me-3 mb-3'><img className='image-icon' src={GithubImg} alt="" /> Continue With Github</button>
            </div>
        </div>
    );
};

export default SocialLogin;