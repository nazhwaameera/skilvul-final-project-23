import React, { useEffect, useState } from "react";
import Navbar1 from "../../components/navbar";
import { Col, Row, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Axios from "axios";
import ProgressBar from "react-bootstrap/ProgressBar";
import background from "../../image/background.png";
import uuser from "../../image/user.png";
import Table from "react-bootstrap/Table";
import { List } from "../../components/List";

const Profile = () => {
  const [dataMentor, setDataMentor] = useState([]);
  useEffect(() => {
    Axios.get("https://randomuser.me/api/?results=3")
      .then((result) => {
        console.log("data", result.data.results);
        const responseAPI = result.data;

        setDataMentor(responseAPI.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
    <div style={{ backgroundImage: `url(${background})` }}>
      {/* navbar */}
      <Navbar1 name="verydian" />
      <Container>
        <br /><br /><br /><br />

        {/* profile */}
        <Row>
          <Col md={1} className="d-flex justify-content-start">
              <Link to="/home" >    
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="black" width={45} height={55}>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                </svg>
 
              </Link>
          </Col>
          <Col md={2}  style={{display: "flex", justifyContent:"end"}}>
            <img src={uuser} width={150} height={150}  style={{marginBottom:"10px"}}/>
          </Col>
          <Col md={6}>
            <Row style={{marginTop:"10px"}}>
              <h3>Verydian T</h3>
              <h6>Kelas 11</h6>
              <h6>SMA 86 JAKARTA</h6>
            </Row>
          </Col>
          <Col md={3} style={{marginTop:"20px"}}>
            <h1>Level 1</h1>
          </Col>
        </Row>
          <br />
        <Row>
          <Col md={2}></Col>
          <Col md={8}>
            <ProgressBar now={45} />
          </Col>
          <Col md={2}></Col>
        </Row>
        <br />
        <br />

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
              {dataMentor.map((user) => {
                    return <List key={user.id.value} name={user.name.first} email={user.email} />;
                  })}
              </tbody>
            </Table>
          </Col>
          <Col md={1}></Col>
        </Row>
      </Container>
      <br/><br/><br/><br/><br/>
    </div>
    </>
  );
};

export default Profile;
