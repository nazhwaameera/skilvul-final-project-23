import { ThemeProvider } from "@emotion/react";
import Axios from "axios";
import React, { useState, useEffect } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import Modal from "react-modal";
import Btnplus from "../Button/buttondata";

const theme = {
  color: {
    primary: {
      black: "#484848",
      red: "#e06262",
    },
  },
  background: {
    color: {
      primary: "#c9fffa",
    },
  },
};

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
// Modal.setAppElement("#yourAppElement");

const AddP = (title) => {
  const [dataMentor, setDataMentor] = useState([]);
  useEffect(() => {
    Axios.get("https://backend-23.herokuapp.com/admin/get-mentor")
      .then((result) => {
        console.log("data", result.data);
        const responseAPI = result.data;

        setDataMentor(responseAPI);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    // subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }

  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [kelas, setKelas] = useState("");
  const [asal_sekolah, setAsal_sekolah] = useState("");
  const [mentor_id, setMentor_id] = useState("");

  const Submit = () => {
    console.log(nama);
    console.log(email);
    console.log(password);
    console.log(kelas);
    console.log(asal_sekolah);
    console.log(mentor_id);
    const data = {
      nama: nama,
      email: email,
      password: password,
      kelas: kelas,
      asal_sekolah: asal_sekolah,
      mentor_id: mentor_id,
    };
    Axios.post("https://mighty-reaches-42366.herokuapp.com/admin/create-peserta", data, {
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => {
        console.log("post success", res);
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  return (
    <div>
      <Btnplus onClick={openModal} title={"Tambah"} ciri={"outline-success"} />
      <Modal isOpen={modalIsOpen} onAfterOpen={afterOpenModal} onRequestClose={closeModal} style={customStyles} contentLabel="Example Modal">
        <ThemeProvider theme={theme}>
          <h1>Tambah Peserta</h1>
          <Row>
            <Col>
              <Form>Nama</Form>
              <input name="nama_mentor" value={nama} onChange={(e) => setNama(e.target.value)} />
              <Form>Email</Form>
              <input name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
              <Form>Password</Form>
              <input name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
              <Form>Kelas</Form>
              <input name="kelas" value={kelas} onChange={(e) => setKelas(e.target.value)} />
              <Form>Asal Sekolah</Form>
              <input name="sekolah" value={asal_sekolah} onChange={(e) => setAsal_sekolah(e.target.value)} />
              <Form>Mentor</Form>
              <input name="mentor" value={mentor_id} onChange={(e) => setMentor_id(e.target.value)} />
              {/* <Form.Control
                as="select"
              > */}
              {/* <select onChange={(e) => setMentor_id(e.target.value)}>
          
                {dataMentor.map((mentor) => {
                      return <option link={`/get-mentor/${mentor._id}`} key={mentor._id} value={mentor_id}>{mentor.nama}</option>;
                    })}
              </select>
              </Form.Control> */}
              <br />

              {/* <Dropdown>
                <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                    Mentor
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    {dataMentor.map((mentor) => {
                      return <Dropdown.Item link={`/get-mentor/${mentor._id}`} key={mentor._id}>{mentor.nama}</Dropdown.Item>;
                    })}
                </Dropdown.Menu>
               </Dropdown> */}
            </Col>
          </Row>
          <Button onClick={Submit}>Simpan</Button>
        </ThemeProvider>
      </Modal>
    </div>
  );
};

export default AddP;
