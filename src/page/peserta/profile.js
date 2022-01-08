import React from "react";
import Navbar1 from "../../components/navbar";
import { Col, Row } from "react-bootstrap";
import ProgressBar from 'react-bootstrap/ProgressBar';
import Table from 'react-bootstrap/Table';

const Profile = () => {
    return (
        <div>
            {/* navbar */}
            <Navbar1 name="verydian"/>
            <br/>

            {/* back */}
            <Row>
                <Col md={3}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width={25} height={35}>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                    </svg>
                    <h5>Back</h5>
                </Col>
                <Col md={9}><p>&nbsp;</p></Col>
            </Row>
            <br/>
            <br/>

            {/* profile */}
            <Row>
                <Col md={3}>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" width={150} height={150}>
                    <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clip-rule="evenodd" />
                    </svg>
                </Col>
                <Col md={6}>
                    <Row>
                        <h3>Verydian T</h3>
                        <h5>Kelas 11</h5>
                        <h5>SMA 86 JAKARTA</h5>
                    </Row>
                </Col>
                <Col md={3}><h1>Level 1</h1></Col>
                <br/>
                <br/>
                <Col md={2}></Col>
                <Col md={8}>
                    <ProgressBar  now={45} />
                </Col>
                <Col md={2}></Col>
            </Row>
            <br/>
            <br/>

            {/* table */}
            <Row>
                <Col md={1}></Col>
                <Col md={10}>
                    <Table striped bordered hover>
                    <thead>
                        <tr>
                        <th>Quest Belom Terselesaikan</th>
                        <th>Achievements</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>Level 1 - mencari ide abstrak</td>
                        <td>Desain Dasar</td>
                        </tr>

                        <tr>
                        <td>Level 1 - mencari ide 2D</td>
                        <td> </td>
                        </tr>

                        <tr>
                        <td>Level 1 - mencari pengertian 3D</td>
                        <td> </td>
                        </tr>
                    </tbody>
                    </Table>
                </Col>
                <Col md={1}></Col>
            </Row>
        </div>
    )
}

export default Profile;