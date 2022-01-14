import { ThemeProvider } from "@emotion/react";
import React from "react";
import { Form, Row, Col } from "react-bootstrap";
import Modal from "react-modal";
import Btnplus from "../Button/buttondata";

const theme = {
  color: {
    primary: {
      black: "#484848",
      red: "#e06262"
    }
  },
  background: {
    color: {
      primary: "#c9fffa"
    }
  }
};

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)"
  }
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
// Modal.setAppElement("#yourAppElement");

const Add = (title) => {
  let subtitle;
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
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        {/* <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2> */}
        <ThemeProvider theme={theme}>
          <h1>Tambah Mentor</h1>
          <Row>
              <Col>
              <Form>Nama</Form>
              <input name="nama_mentor"/>
              <Form>Email</Form>
              <input name="nama_mentor"/>
              <Form>Password</Form>
              <input name="nama_mentor"/>
              <Form>No Telepon</Form>
              <input name="nama_mentor"/>
              </Col>
          </Row>
        </ThemeProvider>
      </Modal>
    </div>
  );
};

export default Add;
