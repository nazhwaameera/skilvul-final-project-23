import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Uploader from "../components/Upload";

export default function Maps() {
  return (
    <Container className="mt-5 bg-secondary">
      <p>&nbsp;</p>
      <Container className="mt-3">
        <Row className="bg-light">
          <Col>
            <h3>QUEST HARI INI</h3>
            <p>Jelaskan tentang hal yang menarik perhatianmu belakangan ini</p>
          </Col>
        </Row>
        <Row className="mt-3 bg-light">
          <Col>
            <h3>QUEST YANG SUDAH DISELESAIKAN</h3>
            <p className="my-1">Hobi apa yang kamu tekuni di waktu selang yang kamu miliki?</p>
            <p className="my-1">Menurutmu, bagaimana orang melihatmu?</p>
            <p className="my-1">Jelaskan tentang dirimu</p>
          </Col>
        </Row>
        <Row className="mt-3 bg-light">
          <Col>
            <h3 className="text-center">QUEST MINGGU INI: 3/4</h3>
          </Col>
        </Row>
        <Row className="mt-3 bg-light">
          <Col>
            <h3 className="text-center">ACHIEVEMENTS</h3>
            {/* <Uploader /> */}
            <p className="my-5 text-center">Selesaikan semua quest terlebih dahulu</p>
          </Col>
        </Row>
        <Row className="mt-3 bg-light">
          <Col>
            <h3>QUEST COMPLETION</h3>
            <p className="my-1">Maksimal ukuran file 100MB, hanya menerima satu (1) tipe file untuk satu quest</p>
            <p className="my-2">
              <b>QUEST SAAT INI:</b> Jelaskan tentang hal yang menarik perhatianmu belakangan ini
            </p>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
