import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Axios from "axios";
import Table from "react-bootstrap/Table";
import Navbar1 from "../../components/navbar";
import Btnplus from "../../components/Button/buttondata";
import { List } from "../../components/List";

const Data_P = () => {
  const [dataPeserta, setDataPeserta] = useState([]);
  useEffect(() => {
    Axios.get("https://randomuser.me/api/?results=5")
      .then((result) => {
        console.log("data", result.data.results);
        const responseAPI = result.data;

        setDataPeserta(responseAPI.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <Navbar1 />
      <br />
      <Row>
        <Col md={1} className="d-flex justify-content-center">
          <Link to="/Admin">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width={45} height={55}>
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
            </svg>
          </Link>
        </Col>
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
                return <List link={`/movies/${user.id.value}`} key={user.id.value} name={user.name.first} email={user.email} />;
              })}
            </tbody>
          </Table>
        </Col>
        <Col md={1}></Col>

        <br />
        <Col md={9}></Col>
        <Col md={3} style={{ marginLeft: "80%" }}>
          <Btnplus title={"ADD"} ciri={"outline-success"} /> <Btnplus title={"DELETE"} ciri={"outline-danger"} style={{ marginLeft: "5px" }} />
        </Col>
      </Row>
      <br />
    </div>
  );
};

export default Data_P;
