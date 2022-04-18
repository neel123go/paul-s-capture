import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTwitter, faPinterest } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    // get current date
    const date = new Date();

    return (
        <div className='footer py-md-5 py-4 text-center'>
            <div className='container'>
                <div className='d-flex justify-content-center align-items-center'>
                    <div className='social-icon'>
                        <a href="https://www.facebook.com/ayounpaul.neel" target={`_blank`}><FontAwesomeIcon icon={faFacebookF} /></a>
                    </div>
                    <div className='social-icon'>
                        <a href="https://www.instagram.com/?hl=en" target={`_blank`}><FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon></a>
                    </div>
                    <div className='social-icon'>
                        <a href="https://twitter.com/Neel66262882" target={`_blank`}><FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon></a>
                    </div>
                    <div className='social-icon'>
                        <a href="https://www.pinterest.com/" target={`_blank`}><FontAwesomeIcon icon={faPinterest}></FontAwesomeIcon></a>
                    </div>
                </div>
                <p className='mt-4'>Copyright &copy; {date.getFullYear()} paul-s-capture.web.app</p>
            </div>
        </div>
    );
};

export default Footer;