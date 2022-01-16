import { ThemeProvider } from "@emotion/react";
import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import Axios from "axios";
import DashButton from "../../components/Button/DashboardButton";
import Modal from "react-modal";
import { List } from "../../components/List";

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

const Mentoring = (title) => {
  const [dataMentor, setDataMentor] = useState([]);
  useEffect(() => {
    Axios.get("https://randomuser.me/api/?results=3")
      .then((result) => {
        console.log("data", result.data.results);
        const responseAPI = result.data;

        setDataMentor(responseAPI.results);
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

  return (
    <div>
      <DashButton onClick={openModal} title="Mentoring" style={{borderRadius: "100px", padding: "10px 150px 10px 125px"}}/>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        {/* <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2> */}
        <ThemeProvider theme={theme}>
          <h1>Data Mentor</h1>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Nama Mentor</th>
                <th>Whatsapp</th>
              </tr>
            </thead>
            <tbody>
            {dataMentor.map((user) => {
                return <List link={`/movies/${user.id.value}`} key={user.id.value} name={user.name.first} email={user.email} />;
              })}
            </tbody>
          </Table>
        </ThemeProvider>
      </Modal>
    </div>
  );
};

export default Mentoring;
