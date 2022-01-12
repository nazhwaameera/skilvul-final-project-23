import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import ButtonItem from "../../components/Button/button";
import Navbar1 from "../../components/navbar";
import people from "../../image/people_01.jpg";

const Dashboard1 = () => {
  return (
    <>
      <Navbar1 name="verydian" />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Container>
        <Row>
          <Col md={4} sm={6} className="button1">
            <Row>           
              <Link to="/Profile" >
                <ButtonItem title="Profile" style={{borderRadius: "100px", padding: "5px 150px 5px 150px"}}/>
              </Link>
              <p>&nbsp;</p>
              <ButtonItem title="Quest" radius="20px" href="#quest"/>
              <p>&nbsp;</p>
              <ButtonItem title="Mentoring" radius="20px" href="#mentoring"/>
              <p>&nbsp;</p>
            </Row>
          </Col>
          <Col md={4} sm={6} style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
            <img 
                     src={people} alt="user"
                     width={128} height={369}
                     
                     />
          </Col>
          <Col md={4} sm={6}>
            <Row>
              <ButtonItem title="Feedbacks" radius="20px" href="#feedbacks"/>
              <p>&nbsp;</p>
              <ButtonItem title="Achievements" radius="20px" href="#achievements"/>
              <p>&nbsp;</p>
              <ButtonItem title="ToDo List" radius="20px" href="#todo"/>
              <p>&nbsp;</p>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Dashboard1;
