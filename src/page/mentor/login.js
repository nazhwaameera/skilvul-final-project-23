import React from "react";
import { Container, Row } from "react-bootstrap";
import Login1 from "../../components/login";

const LoginMentor = () => {
  return (
    <Container className="d-flex align-items-center justify-content-center" style={{ height: "100vh" }}>
      <Row>
        <h1 style={{ padding: "0px 0px 20px 0px", display: "flex", justifyContent: "center" }}>Login</h1>
        <div>
          <Login1 endpoint="https://backend-23.herokuapp.com/mentor/login" loc="/mentor" />
        </div>
      </Row>
    </Container>
  );
};

export default LoginMentor;
