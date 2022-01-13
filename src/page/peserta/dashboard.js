import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import ButtonItem from "../../components/Button/button";
import DashButton from "../../components/Button/DashboardButton";
import Navbar1 from "../../components/navbar";
import people from "../../image/people_01.jpg";
import "./css/dasboard.css"

const Dashboard1 = () => {
  return (
    <><div className="bg">
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
                <DashButton title="Profile" style={{borderRadius: "100px", padding: "5px 150px 5px 150px"}}/>
              </Link>
              <p>&nbsp;</p>
              <DashButton title="Quest" radius="20px" href="#quest"/>
              <p>&nbsp;</p>
              <DashButton title="Mentoring" radius="20px" href="#mentoring"/>
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
              <DashButton title="Feedbacks" radius="20px" href="#feedbacks"/>
              <p>&nbsp;</p>
              <DashButton title="Achievements" radius="20px" href="#achievements"/>
              <p>&nbsp;</p>
              <DashButton title="ToDo List" radius="20px" href="#todo"/>
              <p>&nbsp;</p>
            </Row>
          </Col>
        </Row>
      </Container>
      <br/><br/><br/><br/>
    </div>
    </>
  );
};

export default Dashboard1;
