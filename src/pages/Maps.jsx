import React, { useState } from "react";
import { getDownloadURL, ref, uploadBytesResumable } from "@firebase/storage";
import { Container, Row, Col } from "react-bootstrap";
import { storage } from "../firebase";

export default function Maps() {
  // const [fileSelected, setFileSelected] = useState("");

  // const upload = () => {
  //   const formData = new FormData();
  //   formData.append("file", fileSelected);
  //   formData.append("upload_preset", "remedial");

  //   Axios.post("https://api.cloudinary.com/v1_1/dcuyi8m12/image/upload", formData).then((response) => {
  //     console.log(response);
  //   });
  // };

  const [progress, setProgress] = useState(0);

  const formHandler = (e) => {
    e.preventDefault();
    const file = e.target[0].files[0];
    uploadFiles(file);
  };

  const uploadFiles = (file) => {
    //
    if (!file) return;
    const storageRef = ref(storage, `/files/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const prog = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);

        setProgress(prog);
      },
      (err) => console.log(err),
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((url) => console.log(url));
      }
    );
  };

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
            <form onSubmit={formHandler}>
              <input type="file" className="input" />
              <button type="submit">Upload</button>
              <p>{progress}%</p>
            </form>
            <hr />
            {/* <h3>Uploaded: {progress}%</h3> */}
            {/* <input
              type="file"
              onChange={(event) => {
                setFileSelected(event.target.files[0]);
              }}
            />
            <button
              onClick={() => {
                upload();
              }}
            >
              Upload File
            </button> */}
            <p className="my-2">
              <b>QUEST SAAT INI:</b> Jelaskan tentang hal yang menarik perhatianmu belakangan ini
            </p>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
