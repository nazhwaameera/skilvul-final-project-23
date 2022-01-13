import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Navbar1 from "../../components/navbar";
import Carousel from 'react-bootstrap/Carousel';
import { Link } from "react-router-dom";

const M_Dashboard = () => {
    return (
        <div>
            <Navbar1/>

            {/* carousel */}
            <Carousel style={{height:"500px"}}>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://images.unsplash.com/photo-1641573250133-f7a22af84b0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1885&q=80"
                    alt="First slide" style={{height:"500px"}}
                    />
                    <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://images.unsplash.com/photo-1641573250133-f7a22af84b0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1885&q=80"
                    alt="Second slide" style={{height:"500px"}}
                    />

                    <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://images.unsplash.com/photo-1641573250133-f7a22af84b0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1885&q=80"
                    alt="Third slide" style={{height:"500px"}}
                    />

                    <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <br/>
            <br/>

            {/* detail */}
            <Container className="bg-dark py-5">
            <Row>
                <Col md={1}></Col>
                <Col md={10}>
                    <Row>
                        <h3 className="text-light">List Peserta Asuh</h3>
                        <br/>

                        {/* 1 */}
                        <Row className="bg-light my-2">
                            <Col md={3}>
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" width={150} height={150}>
                                <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clip-rule="evenodd" />
                                </svg>
                            </Col>
                            <Col md={6}>
                                <Row>
                                    <h5>Verydian T</h5>
                                    <p>deskripsiw</p>
                                </Row>
                            </Col>
                            <Col md={3}>
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" width={100} height={100}>
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                </svg>
                            </Col>
                        </Row>

                        {/* 2 */}
                        <Row className="bg-light my-2">
                            <Col md={3}>
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" width={150} height={150}>
                                <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clip-rule="evenodd" />
                                </svg>
                            </Col>
                            <Col md={6}>
                                <Row>
                                    <h5>Verydian T</h5>
                                    <p>deskripsiw</p>
                                </Row>
                            </Col>
                            <Col md={3}>
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" width={100} height={100}>
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                </svg>
                            </Col>
                        </Row>

                        {/* 3 */}
                        <Link to="/Detail" >                            
                        <Row className="bg-light my-2">
                            <Col md={3}>
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" width={150} height={150}>
                                <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clip-rule="evenodd" />
                                </svg>
                            </Col>
                            <Col md={6}>
                                <Row>
                                    <h5>Verydian T</h5>
                                    <p>deskripsiw</p>
                                </Row>
                            </Col>
                            <Col md={3}>
                            </Col>
                        </Row>
                        </Link>
                    </Row>
                </Col>
                <Col md={1}></Col>
            </Row>
            </Container>
            <br/><br/>
        </div>
    )
}

export default M_Dashboard;