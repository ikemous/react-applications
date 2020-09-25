import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link, withRouter } from "react-router-dom";

interface Location {
    pathname: string,
    search: string
};

interface Props {
    location: Location,
};

function CewlNavBar({location}: Props) {
    const currentPath = location.pathname;
    return (
        <header>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand as={Link} to="/">Multication</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link as={Link} to="/weather" className={currentPath==="/weather"?"active":""}>Weather</Nav.Link>
                        <Nav.Link as={Link} to="/counter" className={currentPath==="/counter"?"active":""}>Counter</Nav.Link>
                        <Nav.Link as={Link} to="/timer" className={currentPath==="/timer"?"active":""}>Timer</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </header>
    );
};

export default withRouter(CewlNavBar);