import React from 'react'
import { Container, Dropdown, NavLink, Navbar } from 'react-bootstrap'

export default function Header() {
    return (
        <>
            <div id="topbar" className="d-flex align-items-center fixed-top">
                <Container className="container d-flex justify-content-center justify-content-md-between">

                    <div className="contact-info d-flex align-items-center">
                        <i className="bi bi-phone d-flex align-items-center"><span>+1 5589 55488 55</span></i>
                        <i className="bi bi-clock d-flex align-items-center ms-4"><span> Mon-Sat: 11AM - 23PM</span></i>
                    </div>

                    <div className="languages d-none d-md-flex align-items-center">
                        <ul>
                            <li>En</li>
                            <li><a href="#">De</a></li>
                        </ul>
                    </div>
                </Container>
            </div>

            <header id="header" className="fixed-top d-flex align-items-cente">
                <Container fluid className="container-xl d-flex align-items-center justify-content-lg-between">
                    <h1 className="logo me-auto me-lg-0">
                        <NavLink href="#">Restaurantly</NavLink>
                    </h1>
                    <Navbar id="navbar" className="order-last order-lg-0">
                        <ul>
                            <li><NavLink className="scrollto active" href="#hero">Home</NavLink></li>
                            <li><NavLink className="scrollto" href="#about">About</NavLink></li>
                            <li><NavLink className="scrollto" href="#menu">Menu</NavLink></li>
                            <li><NavLink className="scrollto" href="#specials">Specials</NavLink></li>
                            <li><NavLink className="scrollto" href="#events">Events</NavLink></li>
                            <li><NavLink className="scrollto" href="#gallery">Gallery</NavLink></li>
                            <li><NavLink className="scrollto" href="#chefs">Chefs</NavLink></li>
                            <Dropdown ><NavLink href="#"><span>Drop Down</span> <i className="bi bi-chevron-down"></i></NavLink>
                                <ul>
                                    <li><NavLink href="#">Drop Down 1</NavLink></li>
                                    <Dropdown ><NavLink href="#"><span>Inner Drop Down</span> <i className="bi bi-chevron-right"></i></NavLink>
                                        <ul>
                                            <li><NavLink href="#">Inner Drop Down 1</NavLink></li>
                                            <li><NavLink href="#">Inner Drop Down 2</NavLink></li>
                                            <li><NavLink href="#">Inner Drop Down 3</NavLink></li>
                                            <li><NavLink href="#">Inner Drop Down 4</NavLink></li>
                                            <li><NavLink href="#">Inner Drop Down 5</NavLink></li>
                                        </ul>
                                    </Dropdown>
                                    <li><NavLink href="#">Drop Down 2</NavLink></li>
                                    <li><NavLink href="#">Drop Down 3</NavLink></li>
                                    <li><NavLink href="#">Drop Down 4</NavLink></li>
                                </ul>
                            </Dropdown>
                            <li><NavLink className="scrollto" href="#contact">Contact</NavLink></li>
                        </ul>
                        <i className="bi bi-list mobile-nav-toggle"></i>
                    </Navbar>
                    <NavLink href="#book-a-table" className="book-a-table-btn scrollto d-none d-lg-flex">Book a table</NavLink>
                </Container>
            </header>
        </>
    )
}
