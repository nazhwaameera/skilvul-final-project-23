import React from "react";
import { Col, Container, Row, Stack } from "react-bootstrap";
import { Link } from "react-router-dom";
import DashButton from "../../components/Button/DashboardButton";
import Navbar1 from "../../components/navbar";
import people from "../../image/people_01.jpg";
import background from "../../image/background.png";
import "./css/dasboard.css"

const Dashboard1 = () => {
  return (
    <><div style={{ backgroundImage: `url(${background})` }}>
      <Navbar1 name="verydian" />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Container>
        <Row>
          <Col md={4} sm={6} className="button1">
            <Stack gap={4} style={{marginTop:"50px"}}>
              <Link to="/Profile" >
                <DashButton title="Profile" style={{borderRadius: "100px", padding: "10px 150px 10px 160px"}}/>
              </Link>
              <DashButton title="Quest" style={{borderRadius: "100px", padding: "10px 150px 10px 160px"}} href="#quest"/>

              <DashButton title="Mentoring" style={{borderRadius: "100px", padding: "10px 150px 10px 160px"}} href="#mentoring"/>

            </Stack>
          </Col>
          <Col md={4} sm={6} style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
            <img 
                     src={people} alt="user"
                     width={128} height={369}
                     
                     />
          </Col>
          <Col md={4} sm={6}>
            <Stack gap={4} style={{marginTop:"50px"}}>
                <DashButton title="Feedbacks" style={{borderRadius: "100px", padding: "10px 150px 10px 160px"}} href="#feedbacks"/>

                <Link to="/Profile" >
                  <DashButton title="Achievements" style={{borderRadius: "100px", padding: "10px 130px 10px 130px"}} href="#achievements"/>
                </Link>

                <DashButton title="ToDo List" style={{borderRadius: "100px", padding: "10px 140px 10px 140px"}} href="#todo"/>

            </Stack>
          </Col>
        </Row>
      </Container>
      <br/><br/><br/><br/>
    </div>
    </>
  );
};

export default Dashboard1;
