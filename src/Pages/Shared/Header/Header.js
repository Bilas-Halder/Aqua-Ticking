import React from 'react';
import './Header.css';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import logo from '../../../images/logo.png'

const Header = () => {
    return (
        <Navbar className="custom-nav" fixed='top' bg="light" expand="lg">
            <Container>
                <Navbar.Brand as={HashLink} to="/">
                    <div className="d-flex align-items-center justify-content-center">
                        <div className="logo-div">
                            <img src={logo} alt="" />
                        </div>
                        <h4 className="brand-name"> Aqua Ticking</h4>
                    </div>
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end bg-light">
                    <Nav.Link className="text-center nav-btn" as={HashLink} to="/">Home</Nav.Link>

                    <Nav.Link className="text-center nav-btn" as={HashLink} to="/watch-collection">Watch Collection</Nav.Link>

                    <Nav.Link className="text-center nav-btn" as={HashLink} to="/watch-collection">DashBoard</Nav.Link>

                    <Nav.Link className="text-center nav-btn" as={HashLink} to="/login">LogIn</Nav.Link>

                    <Nav.Link className="text-center nav-btn" as={HashLink} to="/login">Log Out</Nav.Link>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;