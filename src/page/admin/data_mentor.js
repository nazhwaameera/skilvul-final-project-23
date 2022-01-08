import React from "react";
import { Col, Row } from "react-bootstrap";
import Table from 'react-bootstrap/Table';
import Navbar1 from "../../components/navbar";

const Data_M = () => {
    return (
        <div>
            <Navbar1/>
            <br/>
                <Row>
                    <Col md={1}></Col>
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
                </Row>
            <br/>
        </div>
    )
}

export default Data_M;