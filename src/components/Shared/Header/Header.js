import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../Firebase.init';
import './Header.css';

const Header = () => {
    const [user] = useAuthState(auth);

    return (
        <Navbar collapseOnSelect expand="lg" className='menu py-2'>
            <Container>
                <Navbar.Brand as={Link} to="/home" className='fs-4'><span className='text-danger'>Paul's</span> Capture</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                        <Link className='link-item text-decoration-none me-5 fs-5' to="/blogs">Blogs</Link>
                        {
                            user ? <button onClick={() => signOut(auth)} className='btn btn-danger'>Sign Out</button>
                                :
                                <div>
                                    <Link className='link-item text-decoration-none fs-5' to="/login">Login</Link>
                                </div>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;