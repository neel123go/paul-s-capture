import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" className='menu'>
            <Container>
                <Navbar.Brand as={Link} to="/home" className='fs-4'><span className='text-danger'>Neel's</span> Photography</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                        <Link className='link-item text-decoration-none me-5 fs-5' to="/blogs">Blogs</Link>
                        <Link className='link-item text-decoration-none me-5 fs-5' to="/login">Login</Link>
                        <Link className='link-item text-decoration-none fs-5' to="/signup">Sign Up</Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;