import React from "react";
import { Col, Row } from "react-bootstrap";
import Navbar1 from "../../components/navbar";
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';

const M_detail = () => {
    return (
        <div>
            <Navbar1/>

            {/* nama peserta */}
            <Row>
                <Col md={3}>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" width={150} height={150}>
                    <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clip-rule="evenodd" />
                    </svg>
                </Col>
                <Col md={6}>
                    <Row>
                        <h2>Verydian T</h2>
                    </Row>
                </Col>
                <Col md={3}>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" width={100} height={100}>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                    </svg>
                </Col>
                <br/>
                <br/>

                {/* detail quest*/}
                <Col md={12}>
                    <h4>DETAIL QUEST</h4>
                </Col>
                <br/>
                <Col md={6}>
                    <h5>Quest yang diberikan</h5>
                    <p>Jelaskan hal yang menarik perhatianmu belakangan ini</p>
                </Col>
                <Col md={6}>
                    <h5>Tanggal diberikan : </h5><p>20/12/2021</p>
                    <h5>Tanggal diselesaikan : </h5><p>14/01/2022</p>
                </Col>
                <br/>
                <br/>

                {/* detail penyelesaian */}
                <Col md={12}>
                    <h4>DETAIL PENYELESAIAN</h4>
                </Col>
                <Col md={1}></Col>
                <Col md={10}>
                    <Table striped bordered hover>
                            <thead>
                                <tr>
                                <th>Telah dimodifikasi</th>
                                <th>jumatt</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                <td>File yang diunggah</td>
                                <td>recent file.png</td>
                                <td>recent file.png</td>
                                <td>recent file.png</td>
                                <td>recent file.png</td>
                                <td>recent file.png</td>
                                </tr>
                            </tbody>
                    </Table>
                </Col>
                <Col md={1}></Col>
                <br/>
                <br/>

                {/* button */}
                <Col>
                    <Button variant="primary">Primary</Button>{' '}
                    <Button variant="secondary">Secondary</Button>{' '}
                    <Button variant="success">Success</Button>{' '}
                </Col>
                
            </Row>
        </div>
    )
}

export default M_detail;