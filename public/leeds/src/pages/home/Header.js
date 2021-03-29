/* 
    Header page
*/
import React from 'react';

import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

import '../../css/n_header.css';


export default function Header (props) {

    const appLinks = props.links.map((link, i) => <NavLink key={i} className="nav-link" activeStyle={props.linkStyle.aSt} to={link.link}>{link.name}</NavLink>)

    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Navbar.Brand id="master"><NavLink to='/'>LEEDS <br /><small>maternal services</small></NavLink></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto" id="skin">
                    {appLinks}
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-light">Search</Button>
                </Form>
            </Navbar.Collapse>
        </Navbar>
    );
};