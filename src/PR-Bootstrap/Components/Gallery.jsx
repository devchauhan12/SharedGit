import React from 'react'
import { Container, Row } from 'react-bootstrap'

export default function Gallery() {
    return (
        <section id="gallery" className="gallery">

            <Container data-aos="fade-up">
                <div className="section-title">
                    <h2>Gallery</h2>
                    <p>Some photos from Our Restaurant</p>
                </div>
            </Container>

            <Container fluid data-aos="fade-up" data-aos-delay="100">

                <Row className="    g-0">

                    <div className="col-lg-3 col-md-4">
                        <div className="gallery-item">
                            <a href="https://bootstrapmade.com/demo/templates/Restaurantly/assets/img/gallery/gallery-1.jpg"
                                className="gallery-lightbox" data-gall="gallery-item">
                                <img src="https://bootstrapmade.com/demo/templates/Restaurantly/assets/img/gallery/gallery-1.jpg" alt=""
                                    className="img-fluid" />
                            </a>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-4">
                        <div className="gallery-item">
                            <a href="https://bootstrapmade.com/demo/templates/Restaurantly/assets/img/gallery/gallery-2.jpg"
                                className="gallery-lightbox" data-gall="gallery-item">
                                <img src="https://bootstrapmade.com/demo/templates/Restaurantly/assets/img/gallery/gallery-2.jpg" alt=""
                                    className="img-fluid" />
                            </a>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-4">
                        <div className="gallery-item">
                            <a href="https://bootstrapmade.com/demo/templates/Restaurantly/assets/img/gallery/gallery-3.jpg"
                                className="gallery-lightbox" data-gall="gallery-item">
                                <img src="https://bootstrapmade.com/demo/templates/Restaurantly/assets/img/gallery/gallery-3.jpg" alt=""
                                    className="img-fluid" />
                            </a>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-4">
                        <div className="gallery-item">
                            <a href="https://bootstrapmade.com/demo/templates/Restaurantly/assets/img/gallery/gallery-4.jpg"
                                className="gallery-lightbox" data-gall="gallery-item">
                                <img src="https://bootstrapmade.com/demo/templates/Restaurantly/assets/img/gallery/gallery-4.jpg" alt=""
                                    className="img-fluid" />
                            </a>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-4">
                        <div className="gallery-item">
                            <a href="https://bootstrapmade.com/demo/templates/Restaurantly/assets/img/gallery/gallery-5.jpg"
                                className="gallery-lightbox" data-gall="gallery-item">
                                <img src="https://bootstrapmade.com/demo/templates/Restaurantly/assets/img/gallery/gallery-5.jpg" alt=""
                                    className="img-fluid" />
                            </a>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-4">
                        <div className="gallery-item">
                            <a href="https://bootstrapmade.com/demo/templates/Restaurantly/assets/img/gallery/gallery-6.jpg"
                                className="gallery-lightbox" data-gall="gallery-item">
                                <img src="https://bootstrapmade.com/demo/templates/Restaurantly/assets/img/gallery/gallery-6.jpg" alt=""
                                    className="img-fluid" />
                            </a>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-4">
                        <div className="gallery-item">
                            <a href="https://bootstrapmade.com/demo/templates/Restaurantly/assets/img/gallery/gallery-7.jpg"
                                className="gallery-lightbox" data-gall="gallery-item">
                                <img src="https://bootstrapmade.com/demo/templates/Restaurantly/assets/img/gallery/gallery-7.jpg" alt=""
                                    className="img-fluid" />
                            </a>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-4">
                        <div className="gallery-item">
                            <a href="https://bootstrapmade.com/demo/templates/Restaurantly/assets/img/gallery/gallery-8.jpg"
                                className="gallery-lightbox" data-gall="gallery-item">
                                <img src="https://bootstrapmade.com/demo/templates/Restaurantly/assets/img/gallery/gallery-8.jpg" alt=""
                                    className="img-fluid" />
                            </a>
                        </div>
                    </div>

                </Row>

            </Container>
        </section>
    )
}
