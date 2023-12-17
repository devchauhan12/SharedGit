import React from 'react'
import '../Assets/Product.css'
import { Navbar, Container, Nav, NavDropdown, Offcanvas, Form, FormControl, Button } from 'react-bootstrap';

export default function Header() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="light" id="custom-nav">
            <Container>
                <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#features">Link 1</Nav.Link>
                        <Nav.Link href="#pricing">Link 2</Nav.Link>
                        <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Item 1</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Item 2</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Item 3</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated Item</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <Nav.Link href="#deets">Another Link</Nav.Link>
                        <Nav.Link eventKey={2} href="#memes">
                            Another Link
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
