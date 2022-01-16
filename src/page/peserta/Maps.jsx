import React, { useState } from "react";
import { getDownloadURL, ref, uploadBytesResumable } from "@firebase/storage";
import { Container, Row, Col, ProgressBar } from "react-bootstrap";
import Axios from "axios";
import { storage } from "./firebase";
import Navbar1 from "../../components/navbar";
import background from "../../image/background.png";
import "./css/maps.css";

export default function Maps() {
  const [file, setFile] = useState("");

  const onSubmit = () => {
    console.log("file", file);

    const data = new FormData();
    data.append("file", file);

    Axios.post("https://hidden-harbor-17802.herokuapp.com/upload/post", data, {
      headers: {
        "content-type": "multipart/form-data",
      },
    })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onFileUpload = (e) => {
    const file = e.target.files[0];
    setFile(file);
  };

  const [quest, setQuest] = useState(1);
  function goNext() {
    if (quest === 5) return;
    setQuest((quest) => quest + 1);
  }
  // function done() {
  //   // fetch("/api/form", { method: "POST", body: JSON.stringify(data) });
  //   setQuest((quest) => quest + 1);
  // }

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
    <div style={{ backgroundImage: `url(${background})` }}>
      <Navbar1 name="verydian" />
      <br />
      <br />
      <Container className="mt-5 bg-secondary">
        <p>&nbsp;</p>
        <Container className="mt-3">
          <Row className="bg-light">
            <Col className="p-5">
              <h3>QUEST HARI INI</h3>
              <p>Jelaskan tentang hal yang menarik perhatianmu belakangan ini</p>
            </Col>
          </Row>

          <Row className="mt-3 bg-light">
            <Col className="p-5">
              <h3>QUEST YANG SUDAH DISELESAIKAN</h3>
              {quest === 1 && <QuestOne />}
              {quest === 2 && <QuestTwo />}
              {quest === 3 && <QuestThree />}
              {quest === 4 && <QuestFour />}
              {quest === 5 && <Done />}
            </Col>
          </Row>

          <div className="mt-3">
            <ProgressBar variant="warning" max={5} now={quest} />
          </div>

          <Row className="mt-3 bg-light">
            <Col className="p-5">
              <h3 className="text-center">ACHIEVEMENTS</h3>
              {/* <Uploader /> */}
              <p className="my-5 text-center">Selesaikan semua quest terlebih dahulu</p>
            </Col>
          </Row>

          {quest !== 5 && (
            <Row className="mt-3 bg-light">
              <Col className="p-5">
                <h3>QUEST COMPLETION</h3>
                <p className="my-1">Maksimal ukuran file 100MB, hanya menerima satu (1) tipe file untuk satu quest</p>
                <form onSubmit={formHandler}>
                  <input onChange={(e) => onFileUpload(e)} type="file" className="input" />
                  {quest !== 5 && (
                    <button type="submit" onClick={(goNext, onSubmit)}>
                      Upload
                    </button>
                  )}
                  {/* {quest === 5 && <button type="submit" onClick={done}>Upload</button> } */}
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
          )}
        </Container>
        <br />
        <br />
      </Container>
      <br />
      <br />
    </div>
  );
}

function QuestOne({ data, update }) {
  return <p className="my-1">Hobi apa yang kamu tekuni di waktu selang yang kamu miliki?</p>;
}

function QuestTwo({ data, update }) {
  return (
    <div>
      <p className="my-1" style={{ textDecorationLine: "line-through" }}>
        Hobi apa yang kamu tekuni di waktu selang yang kamu miliki?
      </p>
      <p className="my-1">Menurutmu, bagaimana orang melihatmu?</p>
    </div>
  );
}

function QuestThree({ data, update }) {
  return (
    <div>
      <p className="my-1" style={{ textDecorationLine: "line-through" }}>
        Hobi apa yang kamu tekuni di waktu selang yang kamu miliki?
      </p>
      <p className="my-1" style={{ textDecorationLine: "line-through" }}>
        Menurutmu, bagaimana orang melihatmu?
      </p>
      <p className="my-1">Hobi apa yang kamu tekuni di waktu selang yang kamu miliki?</p>
    </div>
  );
}

function QuestFour({ data, update }) {
  return (
    <div>
      <p className="my-1" style={{ textDecorationLine: "line-through" }}>
        Hobi apa yang kamu tekuni di waktu selang yang kamu miliki?
      </p>
      <p className="my-1" style={{ textDecorationLine: "line-through" }}>
        Menurutmu, bagaimana orang melihatmu?
      </p>
      <p className="my-1" style={{ textDecorationLine: "line-through" }}>
        Hobi apa yang kamu tekuni di waktu selang yang kamu miliki?
      </p>
      <p className="my-1">Ceritakan pengalaman paling berkesan selama sekolah online!</p>
    </div>
  );
}

function Done({ data, update }) {
  return (
    <div>
      <p className="my-1" style={{ textDecorationLine: "line-through" }}>
        Hobi apa yang kamu tekuni di waktu selang yang kamu miliki?
      </p>
      <p className="my-1" style={{ textDecorationLine: "line-through" }}>
        Menurutmu, bagaimana orang melihatmu?
      </p>
      <p className="my-1" style={{ textDecorationLine: "line-through" }}>
        Hobi apa yang kamu tekuni di waktu selang yang kamu miliki?
      </p>
      <p className="my-1" style={{ textDecorationLine: "line-through" }}>
        Ceritakan pengalaman paling berkesan selama sekolah online!
      </p>
    </div>
  );
}
