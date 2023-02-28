// Navbar for mobile devices
import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

const SNavbar = () => (
    <Navbar inverse collapseOnSelect>
        <Navbar.Header>
            <Navbar.Brand>
                <Link to="/">Bespoke</Link>
            </Navbar.Brand>
            <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
            <Nav>
                <NavItem eventKey={1} href="#">
                    <Link to="/about">About</Link>
                </NavItem>
                <NavItem eventKey={2} href="#">
                    <Link to="/contact">Contact</Link>
                </NavItem>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
);

export default SNavbar;
