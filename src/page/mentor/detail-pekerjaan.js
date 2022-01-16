import React, { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
// import { Link } from "react-router-dom";
import { Link, useParams } from "react-router-dom";
import Axios from "axios";
import Navbar1 from "../../components/navbar";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import uuser from "../../image/user.png";

const M_detail = () => {
  const [DataUser, setDataUser] = useState([]);
  useEffect(() => {
    Axios.get("https://agile-wave-39273.herokuapp.com/admin/get-peserta")
      .then((result) => {
        console.log("data", result.data);
        const responseAPI = result.data;

        setDataUser(responseAPI);
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

  //   useEffect(() => {
  //     setTimeout(() => M_detail, 100);
  //   });
  //   const [DataQuests, setDataQuest] = useState([]);
  //   setDataQuest(peserta);
  //   console.log(DataUser);

  //   const [DetailUser, setDetailUser] = useState([]);
  //   useEffect(() => {
  //     Axios.get(`https://agile-wave-39273.herokuapp.com/mentor/dashboard/detail-penyelesaian/${DataUser._id}`)
  //       .then((result) => {
  //         console.log("data", result.data);
  //         const responseAPI = result.data;

  //         setDetailUser(responseAPI);
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   }, []);

  // Variable berikut akan menampung data movie yang akan kita tampilkan

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
          <Col md={4} style={{ display: "flex", justifyContent: "end" }}>
            <img src={uuser} width={120} height={120} style={{ marginBottom: "10px" }} />
          </Col>
          <Col md={4}>
            <Row style={{ marginTop: "10px" }}>
              <h3>{peserta.nama}</h3>
              <h6></h6>
              <h6></h6>
            </Row>
          </Col>
          <Col md={3}>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" width={100} height={100}>
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
            </svg>
          </Col>
        </Row>
        <br />
        <br />
        <Row>
          {/* detail quest*/}
          <Col md={12}>
            <h4>DETAIL QUEST</h4>
          </Col>
          <br />
          <Col md={6}>
            <h5>Quest yang diberikan</h5>
            <p>Jelaskan hal yang menarik perhatianmu belakangan ini</p>
          </Col>
          <Col md={6}>
            <h5>Tanggal diberikan : </h5>
            <p>20/12/2021</p>
            <h5>Tanggal diselesaikan : </h5>
            <p>14/01/2022</p>
          </Col>
          <br />
          <br />

          {/* detail penyelesaian */}
          <Col md={12}>
            <h4>DETAIL PENYELESAIAN</h4>
          </Col>
          <Col md={1}></Col>
          <Col md={10}>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Telah dimodifikasi</th>
                  <th>jumatt</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>File yang diunggah</td>
                  <td>recent file.png</td>
                  <td>recent file.png</td>
                  <td>recent file.png</td>
                  <td>recent file.png</td>
                  <td>recent file.png</td>
                </tr>
              </tbody>
            </Table>
          </Col>
          <Col md={1}></Col>
          <br />
          <br />

          {/* button */}
          <Col style={{ display: "flex", justifyContent: "space-around" }}>
            <Button variant="secondary">Berikan Feedbacks</Button> <Button variant="secondary">Berikan Quest Baru</Button> <Button variant="secondary">Naikkan Level</Button>{" "}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default M_detail;
