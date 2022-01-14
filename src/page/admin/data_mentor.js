import React from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Table from 'react-bootstrap/Table';
import Btnplus from "../../components/Button/buttondata";
import Navbar1 from "../../components/navbar";
import Add from "../../components/admin/Add_mentor";

const Data_M = () => {
    return (
        <div>
            <Navbar1/>
            <br/><br/><br/><br/>
                <Row>
                    <Col md={1} className="d-flex justify-content-center">
                        <Link to="/Admin" >    
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="black" width={45} height={55}>
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                            </svg>
                        </Link>
                    </Col>
                    <Col md={10}>
                        <Table striped bordered hover>
                        <thead>
                            <tr>
                            <th>Mentor</th>
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
                    <br/>
                    <Col md={9}></Col>
                    <Col md={3} style={{marginLeft:"80%"}}>
                        <Add/>{' '}
                    </Col>
                </Row>
            <br/>
        </div>
    )
}

export default Data_M;