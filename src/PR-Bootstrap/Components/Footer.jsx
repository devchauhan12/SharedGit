import React from 'react'
import { Container, NavLink, Row } from 'react-bootstrap'

export default function Footer() {
    return (
        <>
            <footer id="footer">
                <div class="footer-top">
                    <Container>
                        <Row>

                            <div class="col-lg-3 col-md-6">
                                <div class="footer-info">
                                    <h3>Restaurantly</h3>
                                    <p>
                                        A108 Adam Street <br />
                                        NY 535022, USA<br /><br />
                                        <strong>Phone:</strong> +1 5589 55488 55<br />
                                        <strong>Email:</strong>info@example.com<br />
                                    </p>
                                    <div class="social-links mt-3">
                                        <NavLink href="#" class="twitter"><i class="bi bi-twitter"></i></NavLink>
                                        <NavLink href="#" class="facebook"><i class="bi bi-facebook"></i></NavLink>
                                        <NavLink href="#" class="instagram"><i class="bi bi-instagram"></i></NavLink>
                                        <NavLink href="#" class="google-plus"><i class="bi bi-skype"></i></NavLink>
                                        <NavLink href="#" class="linkedin"><i class="bi bi-linkedin"></i></NavLink>
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-2 col-md-6 footer-links">
                                <h4>Useful Links</h4>
                                <ul>
                                    <li><i class="bi bi-chevron-right"></i> <NavLink href="#">Home</NavLink></li>
                                    <li><i class="bi bi-chevron-right"></i> <NavLink href="#">About us</NavLink></li>
                                    <li><i class="bi bi-chevron-right"></i> <NavLink href="#">Services</NavLink></li>
                                    <li><i class="bi bi-chevron-right"></i> <NavLink href="#">Terms of service</NavLink></li>
                                    <li><i class="bi bi-chevron-right"></i> <NavLink href="#">Privacy policy</NavLink></li>
                                </ul>
                            </div>

                            <div class="col-lg-3 col-md-6 footer-links">
                                <h4>Our Services</h4>
                                <ul>
                                    <li><i class="bi bi-chevron-right"></i> <NavLink href="#">Web Design</NavLink></li>
                                    <li><i class="bi bi-chevron-right"></i> <NavLink href="#">Web Development</NavLink></li>
                                    <li><i class="bi bi-chevron-right"></i> <NavLink href="#">Product Management</NavLink></li>
                                    <li><i class="bi bi-chevron-right"></i> <NavLink href="#">Marketing</NavLink></li>
                                    <li><i class="bi bi-chevron-right"></i> <NavLink href="#">Graphic Design</NavLink></li>
                                </ul>
                            </div>

                            <div class="col-lg-4 col-md-6 footer-newsletter">
                                <h4>Our Newsletter</h4>
                                <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
                                <form action="#" method="post">
                                    <input type="email" name="email" /><input type="submit" value="Subscribe" />
                                </form>

                            </div>

                        </Row>
                    </Container>
                </div>

                <Container>
                    <div class="copyright">
                        &copy; Copyright <strong><span>Restaurantly</span></strong>. All Rights Reserved
                    </div>
                    <div class="credits">
                        Designed by <a href="#">Dev Chauhan</a>
                    </div>
                </Container>
            </footer>

            <div id="preloader"></div>
            <NavLink href="#" class="back-to-top d-flex align-items-center justify-content-center"><i
                class="bi bi-arrow-up-short"></i></NavLink>
        </>

    )
}
