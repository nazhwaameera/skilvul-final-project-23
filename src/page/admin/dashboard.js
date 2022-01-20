import React, { useEffect, useState } from "react";
import Axios from "axios";
import Navbar1 from "../../components/navbar";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Table from "react-bootstrap/Table";
import { List } from "../../components/List";

const A_Dashboard = () => {
  const [dataMentor, setDataMentor] = useState([]);
  useEffect(() => {
    Axios.get("https://nameless-escarpment-09725.herokuapp.com/admin/get-mentor")
      .then((result) => {
        console.log("data", result.data);
        const responseAPI = result.data;

        setDataMentor(responseAPI);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const [dataPeserta, setDataPeserta] = useState([]);
  useEffect(() => {
    Axios.get("https://nameless-escarpment-09725.herokuapp.com/admin/get-peserta")
      .then((result) => {
        console.log("data", result.data);
        const responseAPI = result.data;

        setDataPeserta(responseAPI);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      {/* navbar */}
      <Navbar1 name="verydian" />
      <br />
      <br />

      <Row>
        <Col md={1}></Col>
        <Col md={10}>
          {/* profile */}
          <Row>
            <Col md={3}></Col>
            <Col md={6}>
              <Row>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" width={90} height={90}>
                  <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clip-rule="evenodd" />
                </svg>
                <h3 style={{ display: "flex", justifyContent: "center" }}>Verydian T</h3>
              </Row>
            </Col>
            <Col md={3}></Col>
          </Row>
          <br />
          <br />

          {/* Mentor */}
          <Link to="/Data_Mentor">
            <Row>
              <Col md={1}></Col>
              <Col md={10}>
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>Mentor</th>
                      <th>Email</th>
                    </tr>
                  </thead>
                  <tbody>
                    {dataMentor.map((user) => {
                      return <List link={`/movies/${user._id}`} key={user._id} name={user.nama} email={user.email} />;
                    })}
                  </tbody>
                </Table>
              </Col>
              <Col md={1}></Col>
            </Row>
          </Link>
          <br />
          <Link to="/Data_Peserta">
            <Row>
              <Col md={1}></Col>
              <Col md={10}>
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>Peserta</th>
                      <th>Email</th>
                    </tr>
                  </thead>
                  <tbody>
                    {dataPeserta.map((user) => {
                      return <List link={`/movies/${user._id}`} key={user._id} name={user.nama} email={user.email} />;
                    })}
                  </tbody>
                </Table>
              </Col>
              <Col md={1}></Col>
            </Row>
          </Link>
        </Col>
        <Col md={1}></Col>
      </Row>
    </div>
  );
};

export default A_Dashboard;
