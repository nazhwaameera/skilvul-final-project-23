import React from "react";
import Navbar1 from "../../components/navbar";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Table from 'react-bootstrap/Table';

const A_Dashboard = () => {
    return (
        <div>
            {/* navbar */}
            <Navbar1 name="verydian"/>
            <br/>
            <br/>

            <Row>
                <Col md={1}></Col>
                <Col md={10}>

                    {/* profile */}
                    <Row>
                        <Col md={3}>
                        </Col>
                        <Col md={6}>
                            <Row>
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" width={90} height={90}>
                            <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clip-rule="evenodd" />
                            </svg>
                            <h3 style={{display: "flex", justifyContent: "center"}}>Verydian T</h3>
                            </Row>
                        </Col>
                        <Col md={3}></Col>
                    </Row>
                    <br/>
                    <br/>

                    {/* Mentor */}
                    <Link to="/Data_Mentor" >
                        <Row>
                            <Col md={1}></Col>
                            <Col md={10}>
                                <Table striped bordered hover>
                                <thead>
                                    <tr>
                                    <th>Mentor</th>
                                    <th>Email</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                    <td>Agus Iskandar</td>
                                    <td>Agus@mail.com</td>
                                    </tr>

                                    <tr>
                                    <td>Asep Sulaiman</td>
                                    <td>Asep@mail.com</td>
                                    </tr>

                                    <tr>
                                    <td>Alex Turner</td>
                                    <td>Alex@yuhuu.com</td>
                                    </tr>
                                </tbody>
                                </Table>
                            </Col>
                            <Col md={1}></Col>
                        </Row>
                    </Link>
                    <br/>

                    {/* Peserta */}
                    <Link to="/Data_Peserta" >
                        <Row>
                            <Col md={1}></Col>
                            <Col md={10}>
                                <Table striped bordered hover>
                                <thead>
                                    <tr>
                                    <th>Peserta</th>
                                    <th>Email</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                    <td>Uus Andara</td>
                                    <td>us@mail.com</td>
                                    </tr>

                                    <tr>
                                    <td>September Iman</td>
                                    <td>Sep@mail.com</td>
                                    </tr>

                                    <tr>
                                    <td>Alexa indah</td>
                                    <td>lex.sds@sddd.com</td>
                                    </tr>
                                </tbody>
                                </Table>
                            </Col>
                            <Col md={1}></Col>
                        </Row>
                    </Link>
                    <br/>
                </Col>
                <Col md={1}></Col>
            </Row>
        </div>
    )
}

export default A_Dashboard;