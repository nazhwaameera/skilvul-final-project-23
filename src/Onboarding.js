import React from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Image from 'react-bootstrap/Image';
import ButtonItem from "./components/Button/button";
import Remedial from "./image/Remedial.png";
import Popup from "./page/login";

const Onboarding = () => {
    return (
        <div>
            <Row>
                <Col md={4}/>
                <Col md={4}>
                    <Row>
                        <Image src={Remedial} width={526} height={430} fluid />
                        <div className="d-flex justify-content-center mb-3">
                            <Link to="/home" >
                                <ButtonItem title="Get Started" style={{borderRadius: "100px"}}/>
                            </Link>
                            <Popup/>
                        </div>
                    </Row>
                </Col>
                <Col md={4}/>
            </Row>
        </div>
    )
}

export default Onboarding;