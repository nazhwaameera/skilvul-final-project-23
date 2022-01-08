import React from "react";
import { Col, Row } from "react-bootstrap";
import Table from 'react-bootstrap/Table';
import Navbar1 from "../../components/navbar";

const Data_P = () => {
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
                                <th>Peserta</th>
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
            <br/>
        </div>
    )
}

export default Data_P;