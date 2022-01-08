import React from "react";
import { Col, Row } from "react-bootstrap";
import ButtonItem from "../../components/button";
import Navbar1 from "../../components/navbar";
// import people from "../image/people_01.jpg";

const Dashboard1 = () => {
    return (
        <div>
            <Navbar1 name="verydian"/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <Row>
                <Col md={4} sm={6} className="button1">
                    <Row>
                        <ButtonItem title="Profile"/><p>&nbsp;</p>
                        <ButtonItem title="Quest"/><p>&nbsp;</p>
                        <ButtonItem title="Mentoring"/><p>&nbsp;</p>
                    </Row>
                </Col>
                <Col md={4} sm={6} className="button1">
                {/* <img 
                     src={people} alt="user"
                     width={128} height={369}
                     /> */}
                </Col>
                <Col md={4} sm={6} className="button1">
                    <Row>
                        <ButtonItem title="Feedbacks"/><p>&nbsp;</p>
                        <ButtonItem title="Achievements"/><p>&nbsp;</p>
                        <ButtonItem title="ToDo List"/><p>&nbsp;</p>
                    </Row>
                </Col>
            </Row>
        </div>
    )
}

export default Dashboard1;