import React, { useEffect, useState } from "react";
// import { Redirect, useParams } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import { Link, Redirect, useParams } from "react-router-dom";
import Axios from "axios";
import Navbar1 from "../../components/navbar";
import Table from "react-bootstrap/Table";
import uuser from "../../image/user.png";
import FeedB from "../../components/mentor/feedbacks";
import { List } from "../../components/List";

const M_detail = () => {
  const [DataUser, setDataUser] = useState([]);
  useEffect(() => {
    Axios.get("https://backend-23.herokuapp.com/admin/get-peserta")
      .then((result) => {
        // console.log("data", result.data);
        const responseAPI = result.data;
        setDataUser(responseAPI);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const id_user = localStorage.getItem("id_user");
  const [dataQuest, setDataQuest] = useState([]);
  useEffect(() => {
    Axios.get(`https://backend-23.herokuapp.com/peserta/profil/${id_user}`)
      .then((result) => {
        console.log("data", result.data.quests);
        const responseAPI = result.data.quests;
        setDataQuest(responseAPI);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const { id } = useParams();
  const peserta = DataUser.find((u) => u.quests == id);
  console.log(peserta);
  if (!peserta) {
    // return <Redirect to="/*" />;
    console.log("error");
  }

  return (
    <div>
      <Navbar1 name="agus" />
      <br />
      <br />
      <br />
      <Container className="py-4">
        {/* nama peserta */}
        <Row>
          <Col md={1} className="d-flex justify-content-start">
            <Link to="/Mentor">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="black" width={45} height={55}>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
              </svg>
            </Link>
          </Col>
          <Col md={10} style={{ display: "flex", justifyContent: "center" }}>
            <img src={uuser} width={120} height={120} style={{ marginBottom: "10px" }} />
          </Col>
          <Col md={1}></Col>
        </Row>
        <br />
        <br />
        <Row>
          {/* detail quest*/}
          <Col md={12} style={{ display: "flex", justifyContent: "center" }}>
            <h4>DETAIL QUEST</h4>
          </Col>
          <br />
          <Col md={1}></Col>
          <Col md={5}>
            <h5>Quest yang diberikan</h5>
            <p>Jelaskan hal yang menarik perhatianmu belakangan ini</p>
          </Col>
          <Col md={5}>
            <h5>Tanggal diberikan : </h5>
            <p>20/12/2021</p>
            <h5>Tanggal diselesaikan : </h5>
            <p>14/01/2022</p>
          </Col>
          <Col md={1}></Col>
          <br />
          <br />

          {/* detail penyelesaian */}
          <Col md={12} style={{ display: "flex", justifyContent: "center" }}>
            <h4>DETAIL PENYELESAIAN</h4>
          </Col>
          <Col md={1}></Col>
          <Col md={10}>
            <Table bordered hover>
              <thead>
                <tr>
                  <th>Id Quest</th>
                  <th>Quest</th>
                </tr>
              </thead>
              <tbody>
                {dataQuest.map((quest) => {
                  return <List key={quest._id} name={quest._id} email={quest.konten} />;
                })}
              </tbody>
            </Table>
          </Col>
          <Col md={1}></Col>
          <br />
          <br />

          {/* button */}
          <Col style={{ display: "flex", justifyContent: "center" }}>
            <FeedB />{" "}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default M_detail;
