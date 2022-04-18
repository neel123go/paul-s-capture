import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../Firebase.init';
import './Header.css';

const Header = () => {
    // get current user
    const [user] = useAuthState(auth);

    return (
        <Navbar collapseOnSelect expand="lg" className='menu py-2'>
            <Container>
                <Navbar.Brand as={Link} to="/" className='fs-4'><span className='text-danger'>Paul's</span> Capture</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link as={Link} className='link-item text-decoration-none me-4 fs-5' to="/home">Home</Nav.Link>
                        <Nav.Link as={Link} className='link-item text-decoration-none me-4 fs-5' to="/blogs">Blogs</Nav.Link>
                        <Nav.Link as={Link} className='link-item text-decoration-none me-4 fs-5' to='/about'>About</Nav.Link>
                        {
                            user ? <button onClick={() => signOut(auth)} className='btn btn-danger' style={{ width: '100px' }}>Sign Out</button>
                                :
                                <div>
                                    <Nav.Link as={Link} className='link-item text-decoration-none fs-5' to="/login">Login</Nav.Link>
                                </div>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;