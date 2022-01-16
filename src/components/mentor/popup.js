import { ThemeProvider } from "@emotion/react";
import Axios from "axios";
import React, {useState, useEffect} from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
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

const PopQuest = (dqust) => {
 
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

  // quest
  const [konten, setKonten] = useState("");
  const [_id, setID] = useState("");
  const [mentor, setMentor] = useState("");
  const [maps, setMaps] = useState("");
  const Quest = () =>{
    console.log(_id)
    console.log(maps)
    const data = {
      konten: konten,
      _id: _id,
      id_mentor: mentor,
      id_maps: maps,
    };
    Axios.post("https://immense-cliffs-82383.herokuapp.com/mentor/create-quest", data, {
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
        <Btnplus onClick={openModal} title={"Tambah Quest"} ciri={"secondary"} />
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <ThemeProvider theme={theme}>
          <h1>Tambah Soal Quest</h1>
            <div value={_id} onChange={(e) => setID(e.target.value)}/>
            <div value={mentor} onChange={(e) => setMentor(e.target.value)}/>
            <div value={maps} onChange={(e) => setMaps(e.target.value)}/>
            <input name="konten" value={konten} onChange={(e) => setKonten(e.target.value)}/>
      <Button onClick={Quest}>Buat Quest</Button>
        </ThemeProvider>
      </Modal>
    </div>
  );
};

export default PopQuest;