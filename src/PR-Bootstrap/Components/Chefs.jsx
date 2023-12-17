//import React from 'react'

import { Container, Image, NavLink, Row } from "react-bootstrap";

export default function Chefs() {
    return (
        <section id="chefs" className="chefs">
            <Container data-aos="fade-up">

                <div className="section-title">
                    <h2>Chefs</h2>
                    <p>Our Proffesional Chefs</p>
                </div>

                <Row>

                    <div className="col-lg-4 col-md-6">
                        <div className="member" data-aos="zoom-in" data-aos-delay="100">
                            <img src="https://bootstrapmade.com/demo/templates/Restaurantly/assets/img/chefs/chefs-1.jpg"
                                className="img-fluid" alt="" />
                            <div className="member-info">
                                <div className="member-info-content">
                                    <h4>Walter White</h4>
                                    <span>Master Chef</span>
                                </div>
                                <div className="social">
                                    <NavLink href="#"><i className="bi bi-twitter"></i></NavLink>
                                    <NavLink href="#"><i className="bi bi-facebook"></i></NavLink>
                                    <NavLink href="#"><i className="bi bi-instagram"></i></NavLink>
                                    <NavLink href="#"><i className="bi bi-linkedin"></i></NavLink>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="member" data-aos="zoom-in" data-aos-delay="200">
                            <Image fluid src="https://bootstrapmade.com/demo/templates/Restaurantly/assets/img/chefs/chefs-2.jpg" alt="" />
                            <div className="member-info">
                                <div className="member-info-content">
                                    <h4>Sarah Jhonson</h4>
                                    <span>Patissier</span>
                                </div>
                                <div className="social">
                                    <NavLink href="#"><i className="bi bi-twitter"></i></NavLink>
                                    <NavLink href="#"><i className="bi bi-facebook"></i></NavLink>
                                    <NavLink href="#"><i className="bi bi-instagram"></i></NavLink>
                                    <NavLink href="#"><i className="bi bi-linkedin"></i></NavLink>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="member" data-aos="zoom-in" data-aos-delay="300">
                            <Image fluid src="https://bootstrapmade.com/demo/templates/Restaurantly/assets/img/chefs/chefs-3.jpg" alt="" />
                            <div className="member-info">
                                <div className="member-info-content">
                                    <h4>William Anderson</h4>
                                    <span>Cook</span>
                                </div>
                                <div className="social">
                                    <NavLink href="#"><i className="bi bi-twitter"></i></NavLink>
                                    <NavLink href="#"><i className="bi bi-facebook"></i></NavLink>
                                    <NavLink href="#"><i className="bi bi-instagram"></i></NavLink>
                                    <NavLink href="#"><i className="bi bi-linkedin"></i></NavLink>
                                </div>
                            </div>
                        </div>
                    </div>

                </Row>

            </Container>
        </section>
    )
}
