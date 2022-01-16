import { ThemeProvider } from "@emotion/react";
import Axios from "axios";
import React, { useState } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import Modal from "react-modal";
import Btnplus from "../Button/buttondata";
import DashButton from "../Button/DashboardButton";

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

const Add = (title) => {
  let subtitle;
  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [no_telp, setno_telp] = useState();

  const onSubmit = () => {
    console.log(nama);
    console.log(email);
    console.log(password);
    console.log(no_telp);

    const data = {
      nama: nama,
      email: email,
      password: password,
      no_telp: no_telp,
    };

    // const data = new FormData();
    // data.append("nama", nama);
    // data.append("email", email);
    // data.append("password", password);
    // data.append("no_telp", no_telp);

    Axios.post("https://mighty-reaches-42366.herokuapp.com/admin/create-mentor", data, {
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

  return (
    <div>
      <Btnplus onClick={openModal} title={"Tambah"} ciri={"outline-success"} />
      <Modal isOpen={modalIsOpen} onAfterOpen={afterOpenModal} onRequestClose={closeModal} style={customStyles} contentLabel="Example Modal">
        {/* <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2> */}
        <ThemeProvider theme={theme}>
          <h1>Tambah Mentor</h1>
          <Row>
            <Col>
              <Form>Nama</Form>
              <input value={nama} name="nama_mentor" onChange={(e) => setNama(e.target.value)} />
              <Form>Email</Form>
              <input value={email} name="email" onChange={(e) => setEmail(e.target.value)} />
              <Form>Password</Form>
              <input value={password} name="pass" onChange={(e) => setPassword(e.target.value)} />
              <Form>No Telepon</Form>
              <input value={no_telp} name="no_telp" onChange={(e) => setno_telp(e.target.value)} />
              <div className="my-3">
                <DashButton title="Tambah" onClick={onSubmit} />
              </div>
            </Col>
          </Row>
        </ThemeProvider>
      </Modal>
    </div>
  );
};

export default Add;
