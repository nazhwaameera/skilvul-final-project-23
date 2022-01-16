import React from "react";
import uuser from "../../image/user.png";
import background from "../../image/background.png";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Navbar1 from "../../components/navbar";
import Table from "react-bootstrap/Table";
import ProgressBar from "react-bootstrap/ProgressBar";

const Feedbacks = () => {
    return (
        <div style={{ backgroundImage: `url(${background})` }}>
            {/* navbar */}
            <Navbar1 name="verydian"/>
            <br /><br /><br /><br />

            {/* profile */}
            <Row>
            <Col md={2} className="d-flex justify-content-end">
                <Link to="/home" >    
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="black" width={45} height={55}>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                    </svg>
    
                </Link>
            </Col>
            <Col md={2}  style={{display: "flex", justifyContent:"center"}}>
                <img src={uuser} width={150} height={150}  style={{marginBottom:"10px"}}/>
            </Col>
            <Col md={6} style={{marginTop:"20px"}}>
                <h3 style={{display: "flex", justifyContent:"center"}} >Verydian T</h3>
                <ProgressBar now={45} />
                <h6>Level 1</h6>
            </Col>
            <Col md={2}></Col>
            </Row>
            <br/><br/><br/>
            <Row>    
                <Col md={2}></Col>
                <Col md={8}>
                    <Table striped bordered hover>
                    <thead>
                        <tr>
                        <th>Feedback Mentor</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td> </td>
                        </tr>

                        <tr>
                        <td> </td>
                        </tr>

                        <tr>
                        <td> </td>
                        </tr>

                        <tr>
                        <td> </td>
                        </tr>

                        <tr>
                        <td> </td>
                        </tr>
                    </tbody>
                    </Table>
                </Col>
                <Col md={2}></Col>
            </Row>
            <br/><br/><br/><br/><br/><br/>
        </div>
    )
}

export default Feedbacks;