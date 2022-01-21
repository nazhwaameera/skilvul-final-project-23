import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Axios from "axios";
import Navbar1 from "../../components/navbar";
import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";
import { CardComponent } from "../../components/Card";

const M_Dashboard = () => {
  const id = localStorage.getItem("id");

  const [dataUser, setDataUser] = useState([]);
  useEffect(() => {
    Axios.get(`https://backend-23.herokuapp.com/mentor/dashboard/${id}`)
      .then((result) => {
        console.log("data", result.data);
        const responseAPI = result.data.peserta_asuh;

        setDataUser(responseAPI);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <Navbar1 />
      <br />
      <br />
      <br />

      {/* carousel */}
      <Carousel classname="positionStatic" style={{ height: "500px" }}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1641573250133-f7a22af84b0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1885&q=80"
            alt="First slide"
            style={{ height: "500px" }}
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1641573250133-f7a22af84b0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1885&q=80"
            alt="Second slide"
            style={{ height: "500px" }}
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1641573250133-f7a22af84b0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1885&q=80"
            alt="Third slide"
            style={{ height: "500px" }}
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <br />
      <br />

      {/* detail */}
      <Container className="bg-dark py-5">
        <Row>
          <Col md={1}></Col>
          <Col md={10}>
            <Row>
              <h3 className="text-light">List Peserta Asuh</h3>
              {dataUser.map((user) => {
                const submit = () => {
                  localStorage.setItem("id_user", user._id);
                };
                return <CardComponent click={submit} key={user._id} name={user.nama} email={user.email} link={user._id} dlink={"Lihat Detail"} dbut={"Buat Maps"} />;
              })}
            </Row>
          </Col>
          <Col md={1}></Col>
        </Row>
      </Container>
      <br />
      <br />
    </div>
  );
};

export default M_Dashboard;
