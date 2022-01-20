import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Image from "react-bootstrap/Image";
import ButtonItem from "./components/Button/button";
import Remedial from "./image/Remedial.png";
import Login1 from "./components/login";
import logo from "./image/logo.png";
import "./Onboarding.css";

const Onboarding = () => {
  return (
    <div className="page">
      <br />
      <br />
      <br />
      <Row>
        <Col md={4} />
        <Col md={4}>
          <Row>
            <Image src={Remedial} width={526} height={430} fluid />
            <div className="d-flex justify-content-center mb-3">
              {/* <Link to="#login"> */}
              <ButtonItem href="#login" title="Get Started" style={{ borderRadius: "100px" }} />
              {/* </Link> */}
            </div>
          </Row>
        </Col>
        <Col md={4} />
      </Row>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      <Container className="about" />
      <Container style={{ position: "absolute", top: "180%", left: "5%" }}>
        <Row>
          <br />
          <Col md={12}>
            <h1>About</h1>
          </Col>
          <Col md={8}>
            <p>
              Program ini berfokus pada wacana perkembangan seni rupa kontemporer dalam ruang lingkup pelajar, dikemas melalui praktik lintas disiplin ilmu pengetahuan dan metode pembelajaran yang bersifat eksperimentatif. Program Remedial
              merupakan sebuah platform dimana pelajar tingkat SMA atau sederajatnya bisa memiliki pengalaman berkarya melalui pendekatan artistik yang bervariasi.
            </p>
          </Col>
          <Col md={4}>
            <img src={logo} alt="logo" width={300} height={70} style={{ marginLeft: "15px" }} />
          </Col>
        </Row>
      </Container>

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      <Container>
        <Row>
          <Col md={4}></Col>
          <Col md={4}>
            <Row>
              <h1 id="login" style={{ padding: "0px 0px 20px 0px", display: "flex", justifyContent: "center" }}>
                Login
              </h1>
              <Login1 endpoint="https://backend-23.herokuapp.com/peserta/login" loc="/home" />
            </Row>
          </Col>
          <Col md={4}></Col>
        </Row>
      </Container>

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default Onboarding;
